<template>
<div>
    <SettingLayout>
        <div class="px-md-4 px-0 py-4">
            <div class="setting_slot_box">
                <!-- setting main haeding -->
                <div class="head">
                    <SettingHeading main_heading="Funds"> </SettingHeading>
                </div>
                <div class="setting_inner_content row  justify-content-between p-md-5 p-2">
                    <!-- SUB HEADING -->
                    <div class="col-md-12 col-lg-12 col-xl-12 setting_sub_heading">
                        <!-- sub heading -->
                        <SubHeading sub_heading="Portfolio"></SubHeading>
                    </div>
                    <div class="col-md-12 col-lg-12 col-xl-12">
                        <div class="bank-detail-table table-responsive">
                            <table class="table table-borderless align-middle">
                                <thead>
                                    <tr>
                                        <th scope="col" class="ps-5">Coins</th>
                                        <th scope="col">Current Price</th>
                                        <th>Qty</th>
                                        <th>Total</th>
                                        <th scope="col" class="text-end pe-5">Action</th>
                                    </tr>
                                </thead>
                                <tbody v-if="loading">
                                    <tr v-for="(data,index) in get_port" :key="index">
                                        <td class="py-3">
                                            <div class="d-flex gap-3 align-items-center">
                                                <div> <img :src="data.image" alt="image" style="height:40px"></div>
                                                <div>
                                                    <p class="mb-0 text-uppercase">{{data.name}} </p>
                                                    <!-- <span class="text-capitalize">{{data.sub_name}}</span> -->
                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-3">{{data.c_price}}</td>
                                        <td class="py-3">{{data.quantity}}</td>
                                        <td class="py-3">{{data.c_bal}}</td>
                                        <td class="text-end py-3">
                                            <div class="d-flex gap-3 justify-content-end">
                                                <button type="button" class="btn_avx w_btn px-3 py-1 text-uppercase" data-bs-toggle="modal" data-bs-target="#WithdrawModal" @click="withdraw_event(data.currency_networks)">Withdraw</button>
                                                <button type="button" class="btn_avx d_btn px-3 py-1 text-uppercase" data-bs-toggle="modal" data-bs-target="#DepositModal">Deposit</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                                <!-- Skeletor Loader -->
                                <tbody v-else>
                                    <tr v-for="i in 5" :key="i">
                                        <td style="flex-basis:33.3%;">
                                            <Skeletor />
                                        </td>
                                        <td style="flex-basis:33.3%">
                                            <Skeletor />
                                        </td>
                                        <td style="flex-basis:33.3%">
                                            <Skeletor />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="pagination_box d-flex justify-content-end mt-4" style="color:white">
                        <pagination v-model="page" :records="recordData" :per-page="perPageData" :options="options" @paginate="referrals" />
                    </div>
                </div>
            </div>
        </div>
    </SettingLayout>

    <!-- <WithdrawModal :data="currdata"/>
    <DepositModal /> -->
    <!-- Withdraw Modal -->
    <div class="modal fade" id="WithdrawModal" tabindex="-1" aria-labelledby="WithdrawModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header p-4 text-center border-0">
                    <h5 class="modal-title" id="exampleModalLabel">Withdraw BTC</h5>
                    <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body px-5 py-3">
                    <form class=" modal_box" @submit.prevent="portfolio">
                        <div class="row py-1 justify-content-center">

                            <div class="col-xl-6 mb-3">
                                <label for="">Network</label>
                                <div class="input-group mb-1">
                                    <!-- <input placeholder="Network"> :value="network"  -->

                                    <select class="form-control" v-model="network" aria-label="Default select example">
                                        <option :value="s.token_type" class="form-control text-success" v-for="(s, i) in currdata" :key="i">
                                            {{ s.token_type }}</option>
                                    </select>

                                </div>
                                <span class="text-danger" v-if="v$.network.$error">
                                    {{v$.network.$errors[0].$message}}
                                </span>
                            </div>
                            <div class="col-xl-6 mb-3">
                                <div class="form-box">
                                    <label for="">Wallet Address</label>
                                    <div class="input-group mb-1">

                                        <input class="form-control shadow-none" v-model="wallet_add" type="text" placeholder="Wallet Address">
                                    </div>
                                    <span class="text-danger" v-if="v$.wallet_add.$error">
                                        {{v$.wallet_add.$errors[0].$message}}
                                    </span>
                                </div>
                            </div>
                            <div class="col-xl-6 mb-4">
                                <div class="form-box">
                                    <label for="">Amount</label>
                                    <div class="input-group mb-1">
                                        <input class="form-control shadow-none" v-model="amount" @keypress="onlyNumber($event)" type="text" placeholder="Amount">
                                    </div>
                                    <span class="text-danger" v-if="v$.amount.$error">
                                        {{v$.amount.$errors[0].$message}}
                                    </span>
                                </div>
                            </div>
                            <div class="col-xl-12 text-center">
                                <button type="submit" class="btn_avx text-uppercase px-3"> Withdraw</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer p-0 border-0">
                    <div class="warning_box">
                        <h6 class="border_bottom p-2 px-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5" viewBox="0 0 22.5 22.5">
                                <path id="Icon_metro-warning" data-name="Icon metro-warning" d="M13.821,3.966l9.428,18.791H4.392L13.821,3.966Zm0-2.038a1.626,1.626,0,0,0-1.338.981l-9.6,19.14c-.736,1.308-.11,2.378,1.391,2.378h19.1c1.5,0,2.127-1.07,1.391-2.378h0l-9.6-19.14a1.626,1.626,0,0,0-1.338-.981Zm1.406,18.281A1.406,1.406,0,1,1,13.821,18.8,1.406,1.406,0,0,1,15.227,20.209ZM13.821,17.4a1.406,1.406,0,0,1-1.406-1.406V11.772a1.406,1.406,0,0,1,2.812,0V15.99A1.406,1.406,0,0,1,13.821,17.4Z" transform="translate(-2.571 -1.928)" fill="#ff2e2e" />
                            </svg>

                            WARNIG</h6>
                        <ul class="px-5 mt-3">
                            <li>Send Only Using The Ethereum (BEP20) Network. Using Any Other Network Will Result In Loss Of Funds.</li>
                            <li>Deposit Only ETH To This Deposit Address. Depositing Any Other Asset Will Result In A Loss Of Funds.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Deposit Modal -->

</div>
</template>

<script>
import SettingLayout from '@/Layouts/SettingLayout.vue';
import SettingHeading from '@/components/setting/SettingHeading.vue';
import SubHeading from '@/components/setting/SubHeading.vue';
import PortfolioData from '@/assets/json/PortfolioData.json';
import {
    useVuelidate
} from '@vuelidate/core'
import {
    required,
    helpers
    
} from '@vuelidate/validators'
// import WithdrawModal from '@/components/setting/WithdrawModal.vue';
// import DepositModal from '@/components/setting/DepositModal.vue';
import ApiClass from '../../../api/api.js';
export default {
    name: 'PortfolioView',
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    components: {
        SettingHeading,
        SettingLayout,
        // WithdrawModal,
        // DepositModal,
        SubHeading
    },
    data() {
        return {
            page: 1,
            recordData: 3,
            perPageData: 1,
            loading: true,
            PortfolioData: PortfolioData.PortfolioData,
            get_port: [],
            currdata: [],
            network: '',
            wallet_add: '',
            amount: '',

        }
    },
    async mounted() {
        await this.coinavx_get();   
        // this.v$.$validate();

    },
    validations() {
        return {
            network: {required:helpers.withMessage('This field cannot be empty', required)},
            wallet_add: {required:helpers.withMessage('This field cannot be empty', required)},
            amount: {required:helpers.withMessage('This field cannot be empty', required)},
        }

    },
    
    methods: {
        onlyNumber ($event) {
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;

      // only allow number and one dot
      if (
        (keyCode < 48 || keyCode > 57) &&
        (keyCode !== 46 || this.amount.indexOf(".") != -1)
      ) {
        $event.preventDefault();
      }
      // restrict to 2 decimal places
      if (
        this.amount != null &&
        this.amount.indexOf(".") > -1 &&
        this.amount.split(".")[2].length > 1
      ) {
        $event.preventDefault();
      }
    },
        async coinavx_get() {
            let res = await ApiClass.getNodeRequest("user-crypto/get?per_page=5&page=1", true);
            this.get_port = res.data.data;
            this.pagin = res;

        },

        withdraw_event(currdata) {

            this.currdata = currdata;
            this.network = currdata[0].token_type;
            console.log("huihkjhuihkiuj", currdata[0].token_type);
            console.log(currdata[0].token_type);
        },
       async  portfolio() {
            console.log(JSON.parse(JSON.stringify(this.v$)));
            const val=  await this.v$.$validate();
            if(val){
                console.log('sdlfh')
               return
            }
            
            // const valid =   this.v$.$validate();
            // if (valid) 
            //   return;
            //   alert('Form is valid')

        }
    },
    // mounted(){
    //    this.v$.$validate();
    // }
}
</script>

<style scoped>
/* table */
table {
    white-space: nowrap;
    color: var(--avx-white);
}

.bank-detail-table thead tr th:first-child {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.bank-detail-table thead tr th:last-child {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}

.bank-detail-table thead tr th {
    font-weight: 500;
    font-size: 14px;
}

.bank-detail-table tbody tr td {
    font-weight: 500;
    font-size: 14px;
}

/* _______________________________modal */
.modal-content {
    background-color: var(--setting-choco);
}

/* EDIT MPODAL */
.modal-content {
    background-color: var(--setting-choco);
    border: 1px solid var(--avx-yellow);
}

.border_bottom {
    border-bottom: 1px solid var(--light-yellow);
    color: var(--red);
}

.btn-close {
    background: transparent var(--cut-img);
    border-radius: 0.25rem;
    opacity: 1;
    padding: 10px;
    border: 0;
    background-repeat: no-repeat;
    position: absolute;
    right: 2px;
}

.modal-header {
    justify-content: center;
    color: var(--avx-white);
}

.modal_box {
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
}

.modal_box label {
    color: var(--avx-white);
}

.modal_btn {
    color: var(--white);
    cursor: pointer;
    background-color: var(--avx-yellow);
    border: 1px solid transparent;
    font-size: 14px;
    border-radius: 0.25rem;
    font-weight: 600;
}

.form-control {
    font-size: 14px;
    color: var(--avx-white);
    background-color: transparent;
    background-clip: padding-box;
    border: 1px solid var(--light-yellow);
    border-radius: 18px;
}

.form-box span {
    color: var(--avx-yellow);
    font-size: 15px;
}

/* warning box */
.warning_box ul li {
    color: var(--avx-white);
    font-size: 14px;
}

table thead tr {
    background-color: var(--setting-choco);
}

.bank-detail-table .form-check-input:checked {
    background-color: var(--avx-yellow);
    border-color: var(--avx-yellow);
}

.bank-detail-table .form-check-input {
    background-color: transparent;
    border: 1px solid var(--avx-yellow);
}

.w_btn {
    background: var(--red);
    color: var(--avx-white);
    border: 1px solid var(--red);
}

.d_btn {
    background: var(--green);
    color: var(--avx-white);
    border: 1px solid var(--green);
}

tbody tr td span {
    color: var(--text-grey);
    font-size: 13px;
}

tbody tr {
    border-bottom: 15px solid transparent;
}
</style>

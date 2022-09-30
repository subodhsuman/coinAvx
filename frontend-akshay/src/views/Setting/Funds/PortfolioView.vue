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
                        <SubHeading sub_heading="Portfolio" ></SubHeading>
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
                                    <tr v-for="(data,index) in PortfolioData" :key="index">
                                        <td class="py-3">
                                            <div class="d-flex gap-3 align-items-center">
                                                <div> <img :src="require(`../../../assets/images/${data.image}`)" alt="image" style="height:40px"></div>
                                                <div>
                                                    <p class="mb-0 text-uppercase">{{data.coin_name}} </p>
                                                    <span class="text-capitalize">{{data.sub_name}}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-3">{{data.current_price}}</td>
                                        <td class="py-3">{{data.qty}}</td>
                                        <td class="py-3">{{data.total}}</td>
                                        <td class="text-end py-3">
                                            <div class="d-flex gap-3 justify-content-end">
                                                <button type="button" class="btn_avx w_btn px-3 py-1 text-uppercase" data-bs-toggle="modal" data-bs-target="#WithdrawModal">Withdraw</button>
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

    <WithdrawModal />
    <DepositModal />
    
</div>
</template>

<script>
import SettingLayout from '@/Layouts/SettingLayout.vue';
import SettingHeading from '@/components/setting/SettingHeading.vue';
import SubHeading from '@/components/setting/SubHeading.vue';
import PortfolioData from '@/assets/json/PortfolioData.json';
import WithdrawModal from '@/components/setting/WithdrawModal.vue'
import DepositModal from '@/components/setting/DepositModal.vue'
export default {
    name: 'PortfolioView',
    components: {
        SettingHeading,
        SettingLayout,
        WithdrawModal,
        DepositModal,
        SubHeading
    },
    data() {
        return {
            page: 1,
            recordData: 3,
            perPageData: 1,
            loading: true,
            PortfolioData: PortfolioData.PortfolioData

        }
    },
}
</script>

<style scoped>
/* table */
table {
    white-space: nowrap;
    color: var(--avx-white);
}

table thead tr {
    background-color: var(--setting-choco);
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
    color: var(--white);
    border: 1px solid var(--red);
    border-radius:3px;
    font-size: 13px;
}

.d_btn {
    background: var(--green);
    color: var(--white);
    border: 1px solid var(--green);
    border-radius:3px;
    font-size: 13px;
}

tbody tr td span {
    color: var(--text-grey);
    font-size: 13px;
}

tbody tr {
    border-bottom: 15px solid transparent;
}
</style>

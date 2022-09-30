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
                        <div class="d-md-flex d-block justify-content-between mb-4">
                           <!-- Sub haeding -->
                            <SubHeading sub_heading="Spot trading history"> </SubHeading>
                            <div class="wallet_box">
                                <p class="mb-0">Wallet Balance <span> <svg xmlns="http://www.w3.org/2000/svg" width="15.541" height="15.757" viewBox="0 0 15.541 21.757">
                                            <path id="Icon_awesome-rupee-sign" data-name="Icon awesome-rupee-sign" d="M14.958,5.358a.583.583,0,0,0,.583-.583V2.833a.583.583,0,0,0-.583-.583H.583A.583.583,0,0,0,0,2.833V5.006a.583.583,0,0,0,.583.583H4.724A3.5,3.5,0,0,1,7.686,6.912H.583A.583.583,0,0,0,0,7.5V9.438a.583.583,0,0,0,.583.583h7.71a3.356,3.356,0,0,1-3.631,2.848H.583A.583.583,0,0,0,0,13.451v2.575a.583.583,0,0,0,.188.428l8.016,7.4a.583.583,0,0,0,.4.155h4.01A.583.583,0,0,0,13,23L5.676,16.232a6.653,6.653,0,0,0,6.718-6.212h2.565a.583.583,0,0,0,.583-.583V7.5a.583.583,0,0,0-.583-.583h-2.85a6.652,6.652,0,0,0-.692-1.554Z" transform="translate(0 -2.25)" fill="var(--avx-white)" />
                                        </svg>
                                        0.01 </span></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-12 col-xl-12">
                        <div class="spot-table table-responsive">
                            <table class="table table-borderless align-middle">
                                <thead>
                                    <tr class="text-center">
                                        <th scope="col" class="ps-5 text-start">Pairs</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col"> Date & Time</th>
                                        <th scope="col" class="text-end pe-5">Status</th>                     
                                    </tr>
                                </thead>
                                <tbody v-if="loading">
                                    <template v-if="data_found">
                                    <tr class="text-center" v-for="(data,index) in Spot_HistoryData" :key="index">
                                        <td class="py-3 ps-5 text-uppercase text-start">
                                           <div class="d-flex gap-3 align-items-center">
                                            <img :src="require(`../../../assets/images/${data.image}`)" alt="icon" style="height:35px">
                                            {{data.currency}}
                                           </div>
                                        </td>
                                        <td class="py-3 text-capitalize">{{data.quantity}}
                                        <p class="mb-0">Failed (100%) :{{data.failed}}</p>
                                        </td>
                                        <td class="py-3">{{data.price}}
                                        <p class="mb-0">Cur. Price: {{cur_price}}</p>
                                        </td>
                                        <td class="py-3">{{data.date}} <br>
                                        {{data.time}}</td>
                                        <td class="text-end py-3 pe-5"> <span class="p-1 px-5 rounded-5" style="background:var(--green); color:var(--white)">{{data.status}}</span> </td>
                                    </tr>
                                </template>
                                <template v-else>
                                    <tr>
                                        <th colspan="8">
                                            <div class="data_not_found text-center p-5">
                                           <div>
                                            <img src="../../../assets/images/not-found.png" alt="image" class="mb-4">
                                            <p>No Records Found</p>
                                           </div>
                                        </div>
                                        </th>
                                    </tr>
                                    </template>
                                </tbody>
                                <!-- Skeletor Loader -->
                                <tbody v-else>
                                    <tr v-for="i in 5" :key="i">
                                        <td>
                                            <Skeletor />
                                        </td>
                                        <td>
                                            <Skeletor />
                                        </td>
                                        <td>
                                            <Skeletor />
                                        </td>
                                        <td>
                                            <Skeletor />
                                        </td>
                                        <td>
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
</div>
</template>

    
<script>
import SettingLayout from '@/Layouts/SettingLayout.vue';
import SettingHeading from '@/components/setting/SettingHeading.vue';
import SubHeading from '@/components/setting/SubHeading.vue';
import PortfolioData from '@/assets/json/PortfolioData.json'
import ApiClass from '@/Api/Api';
export default {
    name: 'SpotHistory',
    components: {
        SettingHeading,
        SettingLayout,
        SubHeading
        
    },
    data() {
        return {
            data_found:true,
            page: 1,
            recordData: 3,
            perPageData: 1,
            loading: true,
            Widthraw_HistoryData: PortfolioData.Widthraw_HistoryData,
            Spot_HistoryData:PortfolioData.Spot_HistoryData

        }
    },
    mounted(){
        this.getTrades();
    },
    methods:{
       async getTrades(){
           let res= await ApiClass.getNodeRequest("https://node.paisaxc.com/orders/get?all=true&page=1&per_page=25")
           console.log(res);
        }
    }
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

.spot-table thead tr th:first-child {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.spot-table thead tr th:last-child {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}

.spot-table thead tr th {
    font-weight: 500;
    font-size: 14px;
}

.spot-table tbody tr td {
    font-weight: 500;
    font-size: 14px;
}

.spot-table .form-check-input:checked {
    background-color: var(--avx-yellow);
    border-color: var(--avx-yellow);
}

.spot-table .form-check-input {
    background-color: transparent;
    border: 1px solid var(--avx-yellow);
}



tbody tr td span {
    color: var(--text-grey);
    font-size: 13px;
}

.wallet_box p span{
    font-size: 19px;
    font-weight: 600;
    color: var(--avx-white);
}
.data_not_found p {
    color: var(--avx-yellow);
}
.data_not_found{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 600px;
}
</style>

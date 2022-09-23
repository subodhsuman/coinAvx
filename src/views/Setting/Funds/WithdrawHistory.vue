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
                        <SubHeading sub_heading="Withdrawal history" ></SubHeading>
                    </div>
                    <div class="col-md-12 col-lg-12 col-xl-12">
                        <div class="w-history-table table-responsive">
                            <table class="table table-borderless align-middle">
                                <thead>
                                    <tr class="text-center">
                                        <th scope="col" class="ps-5 text-start">Currency</th>
                                        <th scope="col">Type</th>
                                        <th>Amount</th>
                                        <th>Token Address</th>
                                        <th scope="col">Status</th>
                                        <th scope="col" class="text-end pe-5">Date / Time</th>

                                    </tr>
                                </thead>
                                <tbody v-if="loading">
                                    <tr class="text-center" v-for="(data,index) in Widthraw_HistoryData" :key="index">
                                        <td class="py-3 ps-5 text-uppercase text-start">
                                            {{data.currency}}
                                        </td>
                                        <td class="py-3 text-capitalize">{{data.type}}</td>
                                        <td class="py-3">{{data.amount}}</td>
                                        <td class="py-3">{{data.token_address}}</td>
                                        <td > {{data.status}} </td>
                                        <td class="text-end py-3 "> {{data.time}}</td>
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
</div>
</template>

<script>
import SettingLayout from '@/Layouts/SettingLayout.vue';
import SettingHeading from '@/components/setting/SettingHeading.vue';
import SubHeading from '@/components/setting/SubHeading.vue';
import PortfolioData from '@/assets/json/PortfolioData.json'
export default {
    name: 'WithdraHistory',
    components: {
        SettingHeading,
        SettingLayout,
        SubHeading
    },
    data() {
        return {
            page: 1,
            recordData: 3,
            perPageData: 1,
            loading: true,
            Widthraw_HistoryData: PortfolioData.Widthraw_HistoryData

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

.w-history-table thead tr th:first-child {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.w-history-table thead tr th:last-child {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}

.w-history-table thead tr th {
    font-weight: 500;
    font-size: 14px;
}

.w-history-table tbody tr td {
    font-weight: 500;
    font-size: 14px;
}

.w-history-table .form-check-input:checked {
    background-color: var(--avx-yellow);
    border-color: var(--avx-yellow);
}

.w-history-table .form-check-input {
    background-color: transparent;
    border: 1px solid var(--avx-yellow);
}



tbody tr td span {
    color: var(--text-grey);
    font-size: 13px;
}

tbody tr {
    border-bottom: 15px solid transparent;
}
</style>

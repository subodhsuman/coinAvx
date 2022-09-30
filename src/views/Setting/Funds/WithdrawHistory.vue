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
                                <tbody v-if="!loading">
                                    <tr class="text-center" v-for="(data,index) in TransactionList" :key="index">
                                        <td class="py-3 ps-5 text-uppercase text-start">
                                            {{data.currency}}
                                        </td>
                                        <td class="py-3 text-capitalize">{{data.type}}</td>
                                        <td class="py-3">{{data.amount}}</td>
                                        <!-- <td class="py-3">{{data.token_address}}</td> -->
                                        <td > {{data.status}} </td>
                                        <!-- <td class="text-end py-3 "> {{data.time}}</td> -->
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
                        <!-- <pagination v-model="page" :records="recordData" :per-page="per_page" :options="options" @paginate="myCallback" /> -->
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
// import PortfolioData from '@/assets/json/PortfolioData.json'
import ApiClass from '@/Api/api';
export default {
    name: 'WithdraHistory',
    components: {
        SettingHeading,
        SettingLayout,
        SubHeading
    },
    data() {
        return {
             loading: false,
            trans_length: 0,
            TransactionList: [],
            options: {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
            },

        }
    },
    async mounted() {
        // let response = await ApiClass.getRequest("wallet-trans/get", true);
        // console.log("wallet transaction response",response);
        this.loading = true;
        this.myCallback(1);

    },

    methods: {
        async myCallback(page) {

            let response = await ApiClass.getRequest("wallet-trans/get?page=" + page);


            if (response ?.data) {

                this.TransactionList = response.data.data.data;
                this.list = response.data.data.data;
                this.page = response.data.data.current_page;
                this.from = response.data.data.from;
                this.to = response.data.data.to;
                this.last_page = response.data.data.last_page;
                this.totals = response.data.data.total;
                this.per_page = response.data.data.per_page;
                this.links = response.data.data.links;
            }
            this.loading = false
        },
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

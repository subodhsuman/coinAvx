<template>
<div>
    <SettingLayout>
        <div class="px-md-4 px-0 py-4">
            <div class="setting_slot_box">
                <!-- setting main haeding -->
                <div class="head">
                    <SettingHeading main_heading="PROFILE SETTING"> </SettingHeading>
                </div>
                <div class="setting_inner_content row p-md-5 p-2">
                    <div class="col-md-12 col-lg-12 col-xl-12 setting_sub_heading">
                        <SubHeading sub_heading="Activity lOgs"> </SubHeading>
                    </div>

                    <div class="col-md-12 col-lg-12 col-xl-12">
                        <div class="bank-detail-table table-responsive">
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col" class="ps-5">Date / Time</th>
                                        <th scope="col">IP</th>
                                        <th scope="col" class="text-end pe-5">Activity</th>
                                    </tr>
                                </thead>
                                <tbody v-if="loading">
                                    <tr v-for="(data,index) in ActivityData" :key="index">
                                        <td class="ps-5 py-2"> {{data.time}} </td>
                                        <td class=" py-2">{{data.ip}}</td>
                                        <td class="text-end pe-5 py-2" style="color:var(--green)"> {{data.activity}} </td>
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
export default {
    name: 'ActivityLog',
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
            ActivityData: [{
                    time: '2022-04-01 , 4:53:24 am',
                    ip: '192.168.10.48',
                    activity: 'Login Success'
                },
                {
                    time: '2022-04-01 , 4:53:24 am',
                    ip: '192.168.10.48',
                    activity: 'Login Success'
                },
                {
                    time: '2022-04-01 , 4:53:24 am',
                    ip: '192.168.10.48',
                    activity: 'Login Success'
                },
                {
                    time: '2022-04-01 , 4:53:24 am',
                    ip: '192.168.10.48',
                    activity: 'Login Success'
                },
            ],
        }
    },
}
</script>

<style scoped>
    .bank-detail-table{
        min-height: 50vh;
    }
.factor_box {
    background-color: var(--factor-bg);
    color: var(--avx-white);
    border: 1px solid var(--light-yellow);
}

.factor_box label span {
    color: var(--text-grey);
    font-size: 14px;
    font-weight: 400;
}

.form-check-input:checked {
    background-color: var(--avx-yellow);
    border-color: var(--avx-yellow);
}

.form-check-input {
    background-color: transparent;
    border: 1px solid var(--avx-yellow);
}

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
</style>

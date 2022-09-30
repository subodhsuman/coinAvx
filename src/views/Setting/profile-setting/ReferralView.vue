<template>
<div>
    <SettingLayout>
        <div class="px-md-4 px-0 py-4">
            <div class="setting_slot_box">
                <!-- setting main haeding -->
                <div class="head">
                    <SettingHeading main_heading="PROFILE SETTING"> </SettingHeading>
                </div>
                <div class="setting_inner_content row  justify-content-between p-md-5 p-2">
                    <!-- SUB HEADING -->
                    <div class="col-md-12 col-lg-12 col-xl-12 setting_sub_heading">      
                        <SubHeading sub_heading="My referrals"></SubHeading>
                    </div>
                    <!-- REFERRALS BOX -->
                    <div class="col-md-6 col-lg-5 col-xl-5 mb-5">
                        <label for="basic-url" class="form-label">Referral Link</label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control border-end-0 shadow-none" placeholder="http://demo.coinavx/register?referral=FNX_7ogopju1jc" id="basic-url" aria-describedby="basic-addon3">
                            <span  class="input-group-text border-start-0" id="basic-addon2" style="cursor: pointer;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12.158" height="14.078" viewBox="0 0 12.158 14.078">
                                    <path id="Icon_material-content-copy" data-name="Icon material-content-copy" d="M11.959,1.5H4.28A1.284,1.284,0,0,0,3,2.78v8.959H4.28V2.78h7.679Zm1.92,2.56H6.839a1.284,1.284,0,0,0-1.28,1.28V14.3a1.284,1.284,0,0,0,1.28,1.28h7.039a1.284,1.284,0,0,0,1.28-1.28V5.339A1.284,1.284,0,0,0,13.878,4.06Zm0,10.238H6.839V5.339h7.039Z" transform="translate(-3 -1.5)" fill="var(--avx-white)" />
                                </svg>
                                &nbsp; copy
                            </span>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-5 col-xl-5 mb-5">
                        <label for="basic-url" class="form-label">Referral Code</label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control border-end-0 shadow-none" placeholder="gvfsvghhgfhdghfg" id="basic-url" aria-describedby="basic-addon3">
                            <span  class="input-group-text border-start-0" id="basic-addon2" style="cursor: pointer;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12.158" height="14.078" viewBox="0 0 12.158 14.078">
                                    <path id="Icon_material-content-copy" data-name="Icon material-content-copy" d="M11.959,1.5H4.28A1.284,1.284,0,0,0,3,2.78v8.959H4.28V2.78h7.679Zm1.92,2.56H6.839a1.284,1.284,0,0,0-1.28,1.28V14.3a1.284,1.284,0,0,0,1.28,1.28h7.039a1.284,1.284,0,0,0,1.28-1.28V5.339A1.284,1.284,0,0,0,13.878,4.06Zm0,10.238H6.839V5.339h7.039Z" transform="translate(-3 -1.5)" fill="var(--avx-white)" />
                                </svg>
                                &nbsp; copy
                            </span>
                        </div>
                    </div>
                    <!-- CONTENT TABLE -->
                    <div class="col-md-12 col-lg-12 col-xl-12">
                        <div class="bank-detail-table table-responsive">
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col" class="ps-5">Username</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Direct Sponsor ID</th>
                                        <th scope="col">Date / Time</th>
                                        <th scope="col" class="text-end pe-5">Status</th>
                                    </tr>
                                </thead>
                                <tbody v-if="loading">
                                    <tr v-for="(data,index) in ReferralData" :key="index">
                                        <td class="ps-5 py-2"> {{data.username}} </td>
                                        <td>{{data.email}}</td>
                                        <td class=" py-2">{{data.id}}</td>
                                        <td>{{data.time}}</td>
                                        <td class="text-end  py-2"><span class="p-2 px-3">Verified</span> </td>
                                    </tr>
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
export default {
    name: 'ReferralView',
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
            ReferralData: [{
                    username: 'Testerdemo',
                    email: 'testingdemo@gmail.com',
                    id: 'Admin Panel',
                    time: '2022-04-01 , 4:53:24 am',
                },
                {
                    username: 'Testerdemo',
                    email: 'testingdemo@gmail.com',
                    id: 'Admin Panel',
                    time: '2022-04-01 , 4:53:24 am',
                },
                {
                    username: 'Testerdemo',
                    email: 'testingdemo@gmail.com',
                    id: 'Admin Panel',
                    time: '2022-04-01 , 4:53:24 am',
                },

            ],
        }
    },
}
</script>

<style scoped>
.bank-detail-table {
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

td span {
    background-color: var(--green);
    border-radius: 18px;
    color: var(--white);
}

tbody tr {
    border-bottom: 10px solid transparent;
    border-top: 10px solid transparent;
}

 .form-control,
.input-group-text {
    font-size: 14px;
    color: var(--avx-white);
    background-color: transparent;
    border: 1px solid var(--avx-yellow);
    border-radius: 21px;

}

 ::placeholder {
    color: var(--text-grey);
    font-weight: 400;
}

 label {
    color: var(--avx-white);
    font-size: 14px;
}
</style>

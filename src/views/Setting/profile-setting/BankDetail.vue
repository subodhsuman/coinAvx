<template>
<div>
    <SettingLayout>
        <div class="px-md-4 px-0 py-4">
            <div class="setting_slot_box">
                <!-- setting main haeding -->
                <div class="head">
                    <SettingHeading main_heading="PROFILE SETTING"> </SettingHeading>
                </div>
                <div class="row p-md-5 p-2">
                    <!-- add and remove buttons -->
                    <div class="col-md-12 col-lg-12 col-xl-12 ">
                        <div class="setting_sub_heading d-md-flex d-block justify-content-between align-items-center">
                            <SubHeading sub_heading="Bank Details"> </SubHeading>
                            <div class="d-flex gap-md-4 gap-2 mb-3 mb-md-0">
                                <!-- Add bank button -->
                                <router-link to="/add-bank">
                                    <button type="button" class="btn_add btn_avx rounded px-md-4 px-2">
                                        <img src="../../../assets/images/icons/plus.svg" alt="icon"> Add</button>
                                </router-link>
                                <!-- Remove bank button -->
                                <button type="button" class="btn_remove btn_avx rounded px-md-4 px-2" data-bs-toggle="modal" data-bs-target="#addbankModal">
                                    <img src="../../../assets/images/icons/minus.svg" alt="icon"> Remove</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 col-lg-12 col-xl-12 ">
                        <!-- NAV PILLS HEADING -->
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-bank-tab" data-bs-toggle="pill" data-bs-target="#pills-bank" type="button" role="tab" aria-controls="pills-bank" aria-selected="true">Bank</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-upi-tab" data-bs-toggle="pill" data-bs-target="#pills-upi" type="button" role="tab" aria-controls="pills-upi" aria-selected="false">UPI </button>
                            </li>

                        </ul>
                        <!-- TAB CONTENT -->
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-bank" role="tabpanel" aria-labelledby="pills-bank-tab">
                                <div class="bank-detail-table table-responsive">
                                    <table class="table table-borderless">
                                        <thead>
                                            <tr>
                                                <th scope="col" class="ps-5">Account Number</th>
                                                <th scope="col">IFSC Code</th>
                                                <th scope="col" class="text-end pe-5">Account Type</th>
                                            </tr>
                                        </thead>
                                        <tbody v-if="loading">
                                            <tr v-for="(data,index) in BankDetailData" :key="index">
                                                <td class="ps-5 py-2">
                                                    <div class="form-check">
                                                        <input class="form-check-input shadow-none" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                                        <label class="form-check-label" for="flexRadioDefault1">
                                                            {{data.account_num}}
                                                        </label>
                                                    </div>
                                                </td>
                                                <td class=" py-2">{{data.ifsc_code}}</td>
                                                <td class="text-end pe-5 py-2">{{data.account_type}}</td>
                                            </tr>
                                           <tr class="text-end">
                                            <td colspan="8">
                                              <div class="d-flex gap-4 justify-content-end my-5">
                                                <button type="button" class="btn_back"> Cancel</button>
                                              <button type="button" class="btn_next"> Submit</button>
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
                            <div class="tab-pane fade" id="pills-upi" role="tabpanel" aria-labelledby="pills-upi-tab">

                                <div class="bank-detail-table table-responsive">
                                    <table class="table table-borderless">
                                        <thead>
                                            <tr>
                                                <th scope="col" class="ps-5">S.No</th>
                                                <th scope="col">UPI ID </th>
                                                <th scope="col" class="text-end pe-5">Name</th>
                                            </tr>
                                        </thead>
                                        <tbody v-if="loading">
                                            <tr v-for="(data,index) in UpiDetailData" :key="index">
                                                <td class="ps-5 py-2">
                                                    <div class="form-check">
                                                        <input class="form-check-input shadow-none" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                                        <label class="form-check-label" for="flexRadioDefault1">
                                                            {{data.sr_num}}
                                                        </label>
                                                    </div>
                                                </td>
                                                <td class=" py-2">{{data.upi_id}}</td>
                                                <td class="text-end pe-5 py-2">{{data.name}}</td>
                                            </tr>
                                            <tr class="text-end">
                                            <td colspan="8">
                                              <div class="d-flex gap-4 justify-content-end my-5">
                                                <button type="button" class="btn_back"> Cancel</button>
                                              <button type="button" class="btn_next"> Submit</button>
                                              </div>
                                            </td>
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
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </SettingLayout>


    



    <!-- Modal -->
    <div class="add_bank_modal modal fade" id="addbankModal"  tabindex="-1" aria-labelledby="addbankModalLabel" aria-hidden="true">
        <div class="modal-dialog  modal-dialog-centered">
            <div class="modal-content ">
                <div class="modal-header text-center border-0">
                    <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center pt-5 p-0">
                    <img src="../../../assets/images/remove.png" alt="icon" class="mb-3">

                    <h3 class="mb-3">Please Confirm</h3>
                    <p class="mb-0">Are You Sure You Want To Remove The Bank Account?</p>
                </div>
                <div class="modal-footer border-0 justify-content-center pb-5">
                    <button type="button" class="btn_back px-4" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn_next px-4" data-bs-dismiss="modal">Remove</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import SettingLayout from '@/Layouts/SettingLayout.vue';
import SettingHeading from '@/components/setting/SettingHeading.vue';
import SubHeading from '@/components/setting/SubHeading.vue';
export default {
    name: 'BankDetail',
    components: {
        SettingHeading,
        SettingLayout,
        SubHeading
    },
    data() {
        return {
            loading: true,
            BankDetailData: [{
                    account_num: '0123426578211122',
                    ifsc_code: 'SBIN00023510',
                    account_type: 'Savings'
                },
                {
                    account_num: '0123426578211122',
                    ifsc_code: 'SBIN00023510',
                    account_type: 'Savings'
                }
            ],
            UpiDetailData: [{
                    sr_num: '1.',
                    upi_id: 'SBIN00023510',
                    name: 'Demoname'
                },
                {
                    sr_num: '2.',
                    upi_id: 'SBIN00023510',
                    name: 'Demoname'
                }
            ]
        }
    }
}
</script>

<style scoped>
.btn_remove {
    background: var(--dark-red);
    color: var(--white);
    min-width: 110px;
    border: 1px solid var(--dark-red);
}

.btn_add {
    background: var(--green);
    color: var(--white);
    min-width: 110px;
    border: 1px solid var(--green);
}

.nav-link {
    color: var(--avx-white);
    border-bottom: 1px solid transparent;
    border-radius: 0;
}

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    color: var(--avx-yellow);
    background-color: transparent;
    border-bottom: 1px solid var(--avx-yellow);
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
    font-weight: 400;
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

/* MODAL  */
.add_bank_modal .modal-content {
    background-color: var(--setting-choco);
    border: 1px solid var(--avx-yellow);
}

.add_bank_modal .modal-body h3,
.add_bank_modal .modal-body p {
    color: var(--avx-white);
}

.btn-close {
    background: var(--cut-img);
    border-radius: 0.25rem;
    opacity: 1;
    padding: 10px;
    border: 0;
    background-repeat: no-repeat;
    position: absolute;
    right: -3px;
    top: 20px;
}
</style>

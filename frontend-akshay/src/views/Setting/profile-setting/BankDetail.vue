<template>
<div>
    <SettingLayout>
        <div class="px-md-4 px-0 py-4">
            <div class="setting_slot_box">
                <!-- setting main haeding -->
                <div class="head">
                    <SettingHeading main_heading="PROFILE SETTING"> </SettingHeading>
                </div>
               <div class="setting_content p-md-4 p-2 px-md-5 px-3">
                 <SubHeading sub_heading="Bank Details"> </SubHeading>
                <!-- FORM -->
                <div class="row">
                    <div class="col-xl-10 col-xxl-8">
                        <form class="row justify-content-center bank_box">
                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li class="nav-item w-50" role="presentation">
                                    <button class="nav-link active w-100" id="pills-bank-tab" data-bs-toggle="pill" data-bs-target="#pills-bank" type="button" role="tab" aria-controls="pills-bank" aria-selected="true">Bank Account</button>
                                </li>
                                <li class="nav-item w-50" role="presentation">
                                    <button class="nav-link w-100" id="pills-upi-tab" data-bs-toggle="pill" data-bs-target="#pills-upi" type="button" role="tab" aria-controls="pills-upi" aria-selected="false">UPI</button>
                                </li>

                            </ul>
                            <div class="tab-content p-md-4 p-md-2" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-bank" role="tabpanel" aria-labelledby="pills-bank-tab">
                                    <div class="row align-items-center">
                                    <!-- ____________Back and Next Buttons _________ -->
                                    <div class="col-xl-12">
                                        <ul class="list-unstyled d-flex mb-4 justify-content-between">
                                        
                                            <li>
                                                   <div class="heading_accordion">
                                                 <h6 class="ac-detail">Your Bank Account Details For IMPS Payments</h6>
                                          
                                        </div>
                                            </li>
                                                <li>
                                                <router-link to="/add-bank">
                                                    <button type="button" class="me-3 btn_next">
                                                        Add New
                                                    </button>
                                                </router-link>
                                                </li>
                                        </ul>
                                    </div>
                                    <!-- =========== Bank  Account  =========== -->
                                    <div class="col-xl-12">
                                        <div class="bank_accordion accordion mb-5" id="accordionExample" v-for="(data,index) in BankDetailData" :key="index">
                                            <div class="accordion-item mb-3"  >
                                                <h2 class="accordion-header" :id="'headingTwo'+index">
                                                    <div class="d-flex">
                                                    <button class="accordion-button shadow-none collapsed p-2" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapseTwo11'+index" aria-expanded="false" :aria-controls="'#collapseTwo11'+index">
                                                        Bank account - {{ data.account_number.substring(data.account_number.length - 4)}}
                                                        <span> <button type="button" class="btn edit_btn p-0 ms-2" data-bs-toggle="modal" data-bs-target="#edit_bank">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="15px" width="15px" style="fill: var(--px-white)" viewBox="0 0 512 512">
                                                                    <path d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z" /></svg>
                                                            </button> </span>
                                                             <span class="badge ">{{data.verify_status}}</span>
                                                    </button>
                                            
                                                     </div>
                                                </h2>
                                                <div :id="'collapseTwo11'+index" class="accordion-collapse collapse" :aria-labelledby="'headingTwo'+index" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                         <div class="col-xl-12">
                                    

                                        <div class="row justify-content-between  mb-4 mb-md-0">
                                            <div class="col-xl-1 col-md-1 col-lg-1 col-sm-1">
                                                <div class="form-check mb-3">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                                </div>
                                            </div>
                                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-md-3 col-lg-3 imps">
                                                <div class="imps_payments">
                                                    <span>Account Number</span>
                                                    <p class="mt-1">{{data.account_number}}</p>
                                                </div>
                                            </div>
                                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-md-3 col-lg-3 imps">
                                                <div class="imps_payments">
                                                    <span>IFSC Code</span>
                                                    <p class="mt-1">{{data.ifsc_code}}</p>
                                                </div>
                                            </div>
                                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-md-3 col-lg-3">
                                                <div class="imps_payments">
                                                    <span>Account Type</span>
                                                    <p class="mt-1">{{data.account_type}}</p>
                                                </div>
                                            </div>
                                            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-md-2 col-lg-2">
                                               <button type="button" @click="removeAccount(data.id)" class=" btn_back" data-bs-toggle="modal" data-bs-target="#remove_bank">
                                            Remove
                                                </button>

                                            </div>
                                        </div>

                                                          </div>
                                                    </div>
                                                </div>
                                            </div>
                                         

                                        </div>
                                    </div>
                                      </div>
                                    <!-- ===========  Account Details For IMPS Payments  =========== -->
                                  

                                </div>

                                <!-- Add Your UPI/VPN ID for UPi Payments -->
                                <div class="tab-pane fade" id="pills-upi" role="tabpanel" aria-labelledby="pills-upi-tab">
                                    <div class="row align-items-center">
                                        <div class="col-xl-12">
                                        <ul class="list-unstyled d-flex mb-4 justify-content-between">
                                        
                                            <li>
                                                   <div class="heading_accordion">
                                                 <h6 class="ac-detail">Your Bank Account Details For IMPS Payments</h6>
                                          
                                        </div>
                                            </li>
                                                <li>
                                                <router-link to="/add-bank">
                                                    <button type="button" class="me-3 btn_next">
                                                        Add New
                                                    </button>
                                                </router-link>
                                                </li>
                                        </ul>
                                    </div>
                                    <!-- =========== Bank  Account  =========== -->
                                    <div class="col-xl-12">
                                        <div class="bank_accordion accordion mb-5" id="accordionExample" >
                                            <div class="accordion-item mb-3" v-for="(data,index) in ApiDetailData" :key="index">
                                                <h2 class="accordion-header" :id="'headingTwo'+index">
                                                    <div class="d-flex">
                                                    <button class="accordion-button shadow-none collapsed p-2" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapseTwo11'+index" aria-expanded="false" :aria-controls="'#collapseTwo11'+index">
                                                        UPI ID - {{data.upi_id}}
                                                        <span> <button type="button" class="btn edit_btn p-0 ms-2" data-bs-toggle="modal" data-bs-target="#edit_bank">
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="15px" width="15px" style="fill: var(--px-white)" viewBox="0 0 512 512">
                                                                    <path d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z" /></svg>
                                                            </button> </span>
                                                             <span class="badge ">{{data.verify_status}}</span>
                                                    </button>
                                            
                                                     </div>
                                                </h2>
                                                <div :id="'collapseTwo11'+index" class="accordion-collapse collapse" :aria-labelledby="'headingTwo'+index" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                         <div class="col-xl-12">
                                    

                                        <div class="row justify-content-between  mb-4 mb-md-0">
                                            <div class="col-xl-1 col-md-1 col-lg-1 col-sm-1">
                                                <div class="form-check mb-3">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                                </div>
                                            </div>
                                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-md-3 col-lg-3 imps">
                                                <div class="imps_payments">
                                                    <span>Alias</span>
                                                    <p class="mt-1">{{data.alias}}</p>
                                                </div>
                                            </div>
                                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-md-3 col-lg-3 imps">
                                                <div class="imps_payments">
                                                    <span>UPI Id</span>
                                                    <p class="mt-1">{{data.upi_id}}</p>
                                                </div>
                                            </div>
                                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-md-3 col-lg-3 text-center">
                                               <button @click="removeUpi" type="button"    class=" btn_back" data-bs-toggle="modal" data-bs-target="#remove_bank">
                                              Remove
                                                </button>

                                            </div>
                                        </div>
                                        

                                                          </div>
                                                    </div>
                                                </div>
                                            </div>
                                              

                                        </div>
                                    </div>
                                    </div>
                                </div>

                            </div>
                        </form>
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
import ApiClass from '@/Api/Api';
import swal from "sweetalert2";
export default {
    name: 'BankDetail',
    components: {
        SettingHeading,
        SettingLayout,
        SubHeading
    },
    data() {
        return {
             BankDetailData: '',
             ApiDetailData:'',
            loading: true,
          
        }
    },
     mounted() {
        this.skeletor=true
        this.bankDetail()
        this.apiDetail()
    },

    

    methods:{
                async bankDetail() {
            
            let response = await ApiClass.getRequest("userbanks/get", true)
            this.BankDetailData = response.data.data

            this.skeletor=false
        },
        removeUpi(id){
             swal
                .fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        this.apiRemove(id);
                    }
                });

        },
       async apiRemove(id){
              let response = await ApiClass.deleteRequest("userupi/delete/" + id, true)
            if (response?.data) {

                if (response.data.status_code == "0") {
                    //ERROR MESSAGE
                    return this.failed(response.data.message);
                }

                if (response.data.status_code == "1") {
                    //SUCCESS MESSAGE
                    // this.success(response.data.message);

                    //BANK DETAIL
                    this.apiDetail();

                    return;
                }
            }

        },
          removeAccount(id) {
            swal
                .fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        this.accountRemove(id);
                    }
                });
        },

             async accountRemove(id) {
            let response = await ApiClass.deleteRequest("userbanks/delete/" + id, true)
            if (response?.data) {

                if (response.data.status_code == "0") {
                    //ERROR MESSAGE
                    return this.failed(response.data.message);
                }

                if (response.data.status_code == "1") {
                    //SUCCESS MESSAGE
                    // this.success(response.data.message);

                    //BANK DETAIL
                    this.bankDetail();

                    return;
                }
            }
        },
           async apiDetail() {
            
            let response = await ApiClass.getRequest("userupi/get", true)
            this.ApiDetailData = response.data.data

            this.skeletor=false
        },



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
.badge{
    font-weight: 500;
    line-height: 1;
    color: var(--white);
    text-align: end;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 15px;
   margin-left: auto;
       padding: 5px 14px;
    background-color: var(--green);
}
.accordion-button::after{
margin-left: unset;
}
.heading_accordion h6{
     font-size: 15px;
     font-weight: 500;
    color: var(--avx-white);
   
}
.accordion-item:last-of-type .accordion-button.collapsed{
    background-color: var(--setting-bg)!important;
    color: var(--avx-white);
  border-radius: 5px;
}
.accordion-button::after{
    background-image: url('@/assets/images/icons/arrow_bank.svg');
}
.accordion-button:not(.collapsed),
.accordion-body{
     background-color: var(--setting-bg)!important;
    color: var(--avx-white);
   
}
.accordion-item{
    border: unset !important;
    background-color: unset;
 border: 1px solid var(--avx-yellow) !important;
}
.accordion-item:first-of-type .accordion-button
{
border-radius: 5px;
 background-color: var(--setting-bg)!important;
 color: var(--avx-white);
}
</style>

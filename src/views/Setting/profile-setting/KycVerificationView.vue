<template>
<div>
    <SettingLayout>
        <div class="px-md-4 px-0 py-4">
            <div class="setting_slot_box">
                <!-- setting main haeding -->
                <div class="head">
                    <SettingHeading main_heading="PROFILE SETTING"> </SettingHeading>
                </div>

                <div class="setting_content  p-md-4 p-2  px-xl-5 px-3 ">
                    <!-- FORM -->
                    <form class="row justify-content-center verification_box px-0 px-md-4 py-5">
                        <div class="col-md-12 col-lg-12 col-xl-12 setting_sub_heading">
                            <SubHeading sub_heading="KYC Verification"> </SubHeading>
                        </div>

                        <div class="col-xl-12 col-xl-12 text-center mb-5">
                            <div class="py-md-5 py-3">
                                <ul class="progressbar list-unstyled d-sm-flex d-block justify-content-between">
                                    <li :class="first">1. Personal Info.</li>
                                    <li :class="second">2. PAN</li>
                                    <li :class="third">3. Aadhaar Card</li>
                                    <li :class="fourth">4. Selfie</li>
                                    <!-- <li :class="fifth">Selfie</li> -->
                                </ul>
                            </div>
                        </div>
                        <!--***************** STEP 02 PERSONAL INFORMATION -->
                        <div class="select_1. Personal Info." v-if="first == 'active'">
                            <!-- ____________1. Personal Info. _________ -->
                            <div class="row justify-content-between">
                                <div class="col-md-4 col-lg-4 col-xl-4 col-xxl-3 mb-5">
                                    <label for="basic-url" class="form-label">Full Name</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Full Name" id="basic-url" aria-describedby="basic-addon3">
                                    </div>
                                </div>
                                <div class="col-md-4 col-lg-4 col-xl-4 col-xxl-3 mb-5">
                                    <label for="basic-url" class="form-label">Country</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="col-md-4 col-lg-4 col-xl-4 col-xxl-3 mb-5">
                                    <label for="basic-url" class="form-label">Date Of Birth</label>
                                    <div class="choose_date input-container mb-2 mb-lg-0">
                                        <input type="date" class="shadow-none form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-between">
                                <div class="col-md-4 col-lg-4 col-xl-4 col-xxl-3 mb-5">
                                    <label for="basic-url" class="form-label">Address</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Address" id="basic-url" aria-describedby="basic-addon3">
                                    </div>
                                </div>
                                <div class="col-md-4 col-lg-4 col-xl-4 col-xxl-3 mb-5">
                                    <label for="basic-url" class="form-label">State</label>
                                    <div class="input-group ">
                                        <input type="text" class="form-control" placeholder="state" id="basic-url" aria-describedby="basic-addon3">
                                    </div>
                                </div>
                                <div class="col-md-4 col-lg-4 col-xl-4 col-xxl-3 mb-5">
                                    <label for="basic-url" class="form-label">Pin/Zipcode</label>
                                    <div class="input-group ">
                                        <input type="text" class="form-control" placeholder="Pincode" id="basic-url" aria-describedby="basic-addon3">
                                    </div>
                                </div>
                            </div>

                        </div>

                        <!-- *****************   STEP 03 CHOOSE PAN CARD -->
                        <div class="row personal_info justify-content-between" v-if="second == 'active'">

                            <!-- ____________ PAN Number _________ -->
                            <div class="col-xl-3 mb-3 mb-md-5">
                                <label class="mb-2"> PAN Card Number </label>
                                <input type="text" class="form-control" placeholder=" PAN Card Number" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <!-- ____________Re-Enter PAN Number _________ -->
                            <div class="col-xl-3 mb-5">
                                <label class="mb-2"> Re-Enter PAN Number</label>
                                <input type="text" class="form-control" placeholder="Re-Enter PAN Number" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>

                            <!-- ____________Browse PAN Photo_________ -->
                            <div class="col-md-3 col-lg-3 col-xl-3 text-center mb-3">
                                <div class="select_box mb-4">
                                    <ChooseImageComponent />
                                </div>
                            </div>

                        </div>

                        <!-- *****************   STEP 04 CHOOSE PAN CARD -->
                        <div class=" select_pan" v-if="third == 'active'">
                            <!-- ____________ ADHAR Number _________ -->
                            <div class="row  justify-content-center">
                                <div class="col-xl-3 mb-5">
                                    <label class="mb-2">Aadhaar Card Number</label>
                                    <input type="text" class="form-control" placeholder=" Enter ADHAR Number" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <!-- ____________Browse ADHAR FRONT Photo_________ -->
                            <div class="choose-img row justify-content-between">
                                <div class="col-md-6 col-lg-6 col-xl-5 text-center mb-3">
                                    <div class="select_box mb-4">
                                        <ChooseImageComponent />
                                        <h6 class="my-2">Front Side</h6>
                                    </div>
                                </div>
                                <!-- ____________Browse ADHAR BACK Photo_________ -->
                                <div class="col-md-6 col-lg-6 col-xl-5 text-center mb-3">
                                    <div class="select_box mb-4">
                                        <ChooseImageComponent />
                                        <h6 class="my-2">Front Side</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- *****************   STEP 04 CHOOSE PIN / Zip code -->
                        <div class="row select_adhar justify-content-center" v-if="fourth == 'active'">
                            <!-- ____________ ADHAR Number _________ -->
                            <div class="col-md-6 col-lg-6 col-xl-5 text-center mb-3">
                                <div class="choose-img select_box mb-4">
                                    <ChooseImageComponent />
                                    <h6 class="my-2">Selfie</h6>
                                </div>
                            </div>
                        </div>

                        <!-- ____________Back and Next Buttons _________ -->
                        <div class="col-xl-12">
                            <ul class="list-unstyled d-flex justify-content-md-end justify-content-center  mb-0 mt-5">
                                <li>
                                    <button type="button" class="mx-md-3 mx-1 btn_back text-uppercase" @click="backStep">
                                        Cancel
                                    </button>
                                </li>
                                <li>
                                    <button type="button" class="mx-md-3 mx-1 btn_next" @click="nextStep" data-bs-toggle="modal" :data-bs-target="`${this.fourth=='active' ? '#kyc_update':''}`">
                                        {{ this.fourth=='active' ?  'Update kyc': 'Next'}}
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>

            </div>
        </div>

    </SettingLayout>

    <div class="kyc_update modal fade" id="kyc_update" tabindex="-1" aria-labelledby="kyc_updateLabel" aria-hidden="true">
        <div class="modal-dialog  modal-dialog-centered">
            <div class="modal-content ">
                <div class="modal-header text-center border-0">
                    <!-- <h5 class="modal-title" id="exampleModalLabel">Edit Your Mobile Number</h5> -->
                    <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center pt-5 p-0">
                    <img src="../../../assets/images/security-check.png" alt="icon" class="mb-3">

                    <h3 class="mb-3">Thank you</h3>
                    <p class="mb-0">Your KYC has been successfully updated</p>
                </div>
                <div class="modal-footer border-0 justify-content-center pb-5">
                    <button type="button" class="btn_avx px-4" data-bs-dismiss="modal">OKAY!</button>
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
import ChooseImageComponent from '@/Utilites/ChooseImageComponent.vue'
export default {
    name: 'KycVerification',
    components: {
        SettingLayout,
        SettingHeading,
        ChooseImageComponent,
        SubHeading

    },
    data() {
        return {
            loading: false,
            first: "active",
            second: "next",
            third: "next",
            fourth: "next",
            fifth: "next",
        };
    },
    methods: {
        nextStep() {
            if (this.first == "active") {
                this.second = "active";
                this.first = "prev";
            } else {
                if (this.second == "active") {
                    this.third = "active";
                    this.second = "prev";
                } else {
                    if (this.third == "active") {
                        this.fourth = "active";
                        this.third = "prev";
                    } else {
                        this.fourth = "prev";
                        this.fifth = "active";
                    }
                }
            }
        },
        backStep() {
            if (this.fourth == "active") {
                this.third = "active";
                this.fourth = "next";
            } else {
                if (this.third == "active") {
                    this.second = "active";
                    this.third = "next";
                } else {
                    if (this.second == "active") {
                        this.first = "active";
                        this.second = "next";
                    }
                }

            }
        }
    },

}
</script>

<style scoped>
/* progress bar css */


.progressbar li {
    list-style: none;
    /* float: left; */
    width: 15%;
    text-align: center;
    font-size: 14px;
    font-family: "Poppins", sans-serif;

    color: var(--avx-white);
    border: 1px solid var(--avx-yellow);
    padding: 6px;
    border-radius: 23px;
    gap: 10px;
}

ul.progressbar li.prev {
    background: transparent;
    border: 1px solid var(--avx-yellow);
}

.progressbar li.active,
li.prev {
    background: var(--avx-yellow);
    content: 1;
    color: var(--white);
    border: 1px solid var(--avx-yellow);
}
li.prev {
    color: var(--avx-white);
}

.verification_box .form-control,
.form-select {
    font-size: 14px;
    color: var(--avx-white);
    background-color: transparent;
    border: 1px solid var(--light-yellow);
    border-radius: 21px;

}

.verification_box ::placeholder {
    color: var(--text-grey);
    font-weight: 400;
}

option {
    color: var(--avx-black) !important;
}

.verification_box .form-control:focus,
.form-select:focus {
    box-shadow: none;
}

.verification_box label {
    color: var(--avx-white);
}

.input-container input {
    border: none;
    box-sizing: border-box;
    outline: 0;
    position: relative;
    width: 100%;
    background: transparent !important;
    color: var(--avx-white) !important;
    font-size: 14px;
}

input[type="date"]::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;

}

.form-select {
    background-image: var(--selcet-arrow);
}

.choose-img h6 {
    color: var(--avx-yellow);
}

/* MODAL  */
.kyc_update .modal-content {
    background-color: var(--setting-choco);
    border: 1px solid var(--avx-yellow);
}

.kyc_update .modal-body h3,
.kyc_update .modal-body p {
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

/* 
.kyc_update .modal_btn {
    color: var(--white);
    cursor: pointer;
    background-color: var(--modal-green);
    border: 1px solid transparent;
    padding: 9px 45px;
    font-size: 14px;
    border-radius: 0.25rem;
} */
@media (min-width:1200px) and (max-width:1399px) {
    .progressbar li {
        width: 23%;
    }
}
@media (min-width:992px) and (max-width:1199px) {
    .progressbar li {
        width: 23%;
    }
}
@media (min-width:768px) and (max-width:991px) {
    .progressbar li {
        width: 23%;
    }
}
@media (min-width:320px) and (max-width:767px) {
    .progressbar li {
        width: 100%;
        margin-bottom: 10px;
    }
}
</style>

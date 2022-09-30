<template>
<div>
    <SettingLayout>
        <div class="px-md-4 px-0 py-4">
            <div class="setting_slot_box">
                <!-- setting main haeding -->
                <div class="head">
                    <SettingHeading main_heading="PROFILE SETTING"> </SettingHeading>
                </div>
                <div class="setting_content  p-md-4 p-2  px-md-5 px-3 ">
                    <!-- _______________ADD BANK -->
                    <form v-if="bank" action="" class="add_box px-0 px-md-4 py-5"  @submit.prevent="addAccount">
                        <div class="row justify-content-between">
                            <div class="col-md-12 col-lg-12 col-xl-12 setting_sub_heading">
                                <!-- sub heading -->
                                <SubHeading sub_heading="bank details"></SubHeading>
                            </div>
                            <div class="col-xl-3 mb-5">
                                <label for="basic-url" class="form-label">Account Holder Name</label>
                                <div class="input-group mb-3">
                                    <input type="text" v-model="alias" class="form-control shadow-none" placeholder="Name" id="basic-url" aria-describedby="basic-addon3">
                                </div>
                                <div class="input-errors" v-if="v$.alias.$errors && submitted" >

                                                <div class="error-msg">{{ v$.alias.$errors[0]?.$message }}</div>
                                            
                                            </div>

                                

                            </div>
                            <div class="col-xl-3 mb-5">
                                <label for="basic-url" class="form-label">Account Number</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control shadow-none" v-model="accountnumber" placeholder="Account Number" id="basic-url" aria-describedby="basic-addon3">
                                </div>
                                <div class="input-errors" v-if="v$.accountnumber.$errors && submitted" >

                                                <div class="error-msg">{{ v$.accountnumber.$errors[0]?.$message }}</div>
                                            
                                            </div>
                            </div>
                            <div class="col-xl-3 mb-5">
                                <label for="basic-url" class="form-label">Re-Enter Account Number</label>
                                <div class="input-group mb-3">
                                    <input type="text" v-model="confirmaccountnumber" class="form-control shadow-none" placeholder="Re-Enter Account Number" id="basic-url" aria-describedby="basic-addon3">
                                </div>
                                 <div class="input-errors" v-if="v$.confirmaccountnumber.$errors && submitted" >

                                                <div class="error-msg">{{ v$.confirmaccountnumber.$errors[0]?.$message }}</div>


                                            </div>

                            </div>
                        </div>

                        <div class="row justify-content-between">
                            <div class="col-xl-3 mb-5">
                                <label for="basic-url" class="form-label">IFSC Code</label>
                                <div class="input-group mb-3">
                                    <input type="text"  v-model="ifsc_code" class="form-control shadow-none" placeholder="IFSC Code" id="basic-url" aria-describedby="basic-addon3">
                                </div>
                                <div class="input-errors" v-if="v$.ifsc_code.$errors && submitted" >
                                                <div class="error-msg">{{ v$.ifsc_code.$errors[0]?.$message }}</div>
                                            </div>

                            </div>
                            <div class="col-xl-3 mb-5">
                                <label for="basic-url" class="form-label">Account Type</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control shadow-none" placeholder="Saving" id="basic-url" aria-describedby="basic-addon3">
                                </div>
                            </div>
                            <div class="col-xl-3">
                            </div>
                            <div class="col-xl-12 mb-5">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        I confirm that this bank account belongs to me.
                                    </label>
                                </div>
                            </div>

                            <div class="col-xl-12 my-5 ">
                                <div class="d-flex gap-md-5 gap-2 justify-content-end">
                                    <!-- Button trigger modal -->
                                    <router-link to="/bank-detail">
                                    <button type="button" class="btn_back">Cancel</button>
                                    </router-link>
                                    <button type="submit" class="btn_next">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>

                    <!-- _______________ADD UPI -->
                    <form v-else action="" class="add_box px-0 px-md-4 py-3">
                        <div class="row">
                            <div class="col-md-12 col-lg-12 col-xl-12 setting_sub_heading">
                                <h6 class="text-uppercase mb-4">UPI details</h6>
                            </div>
                            <div class="col-md-12 col-lg-12 col-xl-12">
                                <p class="text-uppercase my-5">Add Your UPI/VPA ID For UPI Payments</p>
                            </div>
                            <div class="col-xl-3 mb-5">
                                <label for="basic-url" class="form-label"> Name</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control shadow-none" placeholder="Name" id="basic-url" aria-describedby="basic-addon3">
                                </div>
                            </div>
                            <div class="col-xl-3 mb-5">
                                <label for="basic-url" class="form-label">UPI/VPA ID</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control shadow-none" placeholder="id" id="basic-url" aria-describedby="basic-addon3">
                                </div>
                            </div>

                            <div class="col-xl-12 my-5 ">
                                <div class="d-flex gap-md-5 gap-2 justify-content-end">
                                    <!-- Button trigger modal -->
                                    <button type="button" class="btn_back">Cancel</button>
                                    <button type="button" class="btn_next">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
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
import ApiClass from '@/Api/api';
import useVuelidate from '@vuelidate/core'
import {
    required,
    sameAs,
    helpers,
    minLength,
    maxLength,
    alphaNum,
} from "@vuelidate/validators";

export default {
    name: 'AddBank',
    components: {
        SettingHeading,
        SettingLayout,
        SubHeading
    },

    setup() {
        return {
            v$: useVuelidate()
        }
    },

    data() {
        return {
              accountnumber: '',
            confirmaccountnumber: '',
            country: '',
            state: '',
            ifsc_code: '',
            alias: '',

            bank: true
        }
    },
    validations() {
        return {
             alias: {
                required: helpers.withMessage("Alias is Required", required),
                minLength: minLength(3),
                maxLength: maxLength(12),
            },

           
            accountnumber: {
                required: helpers.withMessage("Account number is Required", required),
                minLength: minLength(10),
                maxLength: maxLength(20),
            },
            confirmaccountnumber: {
                sameAsaccount_number: helpers.withMessage(
                    "Account Number and Confirm Account Number should match",
                    sameAs(this.accountnumber)
                ),
            },
            country: {
                required: helpers.withMessage("Nationality is Required", required),
            },
            state: {
                required: helpers.withMessage("State is Required", required),
            },
            ifsc_code: {
                required: helpers.withMessage("IFSC code is Required", required),
                alphaNum: helpers.withMessage("IFSC code type is AlphaNumeric", alphaNum),
                minLength: minLength(11),
                maxLength: maxLength(11),
                valid: helpers.withMessage("IFSC code should contain numbers and alphabets", function (value) {
                    const containsUppercase = /[A-Z a-z]/.test(value)
                    const containsNumbers = /[0-9]/.test(value)
                    return containsUppercase && containsNumbers
                }, ),
            },

        };
    },

    methods:{
          resetForm() {
                this.accountnumber = "";
                this.confirmaccountnumber = "";
                this.country = "";
                this.state = "";
                this.ifsc_code = "";
                this.v$.$reset(); // reset validation
        },

         async addAccount() {
            this.submitted=true
            //VALIDATION
            const result = await this.v$.$validate()
            if (!result) {
                // notify user form is invalid
                return
            }

            //FORM DATA
            let form_data = {
                alias: this.alias,
                account_number: this.accountnumber,
                confirm_account_number: this.confirmaccountnumber,
                
                ifsc_code: this.ifsc_code
            }
            

            //LOADING TRUE
            this.loading = true

            //ADD ACCOUNT API CALL
            let response = await ApiClass.postRequest("userbanks/create", true, form_data)

            //API RESPONSE
            if (response?.data) {
                if (response.data.status_code == '0') {
                    //LOADING FALSE
                    this.loading = false

                    //ERROR MESSAGE
                    return this.failed(response.data.message);
                }

                if (response.data.status_code == '1') {
                    //SUCCESS MESSAGE 
                    // this.success(response.data.message)
                }

                //BANK DEATIL
                this.bankDetail();

                //RESET FORM
                this.resetForm()

                //LOADING FALSE
                this.loading = false
                this.submitted=false
                // document.getElementById('hide').click();
            }

    }
}
}

</script>

<style scoped>
.add_box p {
    color: var(--avx-white);
}

.add_box .form-control,
.form-select {
    font-size: 14px;
    color: var(--avx-white);
    background-color: transparent;
    border: 1px solid var(--avx-yellow);
    border-radius: 21px;

}

.add_box ::placeholder {
    color: var(--text-grey);
    font-weight: 400;
}

.add_box label {
    color: var(--avx-white);
    font-size: 14px;
}

.form-check-input:checked {
    background-color: var(--avx-yellow);
    border-color: var(--avx-yellow);
}

.btn_back {
    color: var(--avx-white);
    cursor: pointer;
    background-color: transparent;
    border: 1px solid var(--avx-white);
    font-size: 14px;
    border-radius: 1.25rem;
    padding: 8px 15px;
    font-weight: 500;
    min-width: 110px;
}

.btn_next {
    color: var(--white);
    cursor: pointer;
    background-color: var(--avx-yellow);
    border: 1px solid var(--avx-yellow);
    font-size: 14px;
    border-radius: 1.25rem;
    padding: 8px 15px;
    font-weight: 500;
    min-width: 110px;
}
.input-errors{
     color: var(--red);
     font-size:12px;
     font-weight: 500;
}
</style>

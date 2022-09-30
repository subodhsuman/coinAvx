
<template>
  <div>
    <section class="auth_box">
      <div class="container-fluid">
        <div class="row register_box align-items-center">
          <div class="col-md-6 col-lg-6 col-xl-6 order-2 order-md-1">
            <AuthLeftComponents />
          </div>
          <div class="col-md-6 col-lg-6 col-xl-6 order-1 order-md-2">
            <form
              class="row m-lg-5 m-0 p-md-3 p-2 justify-content-center auth_box"
            >
              <div class="col-xl-8">
                <div class="auth_heading mb-5">
                  <h4>Reset your password</h4>
                </div>
              </div>

              <!-- PASSWORD -->
              <div class="col-xl-8">
                <div class="mb-4">
                  <label for="basic-url" class="form-label"
                    >New Password*</label
                  >
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="basic-url"
                      aria-describedby="basic-addon3"
                    />
                    <span class="input-group-text" id="basic-addon3">REST</span>
                  </div>
                </div>
              </div>

              <!-- Re-enter New Password* -->
              <div class="col-xl-8">
                <div class="mb-4">
                  <label for="basic-url" class="form-label"
                    >Re-enter New Password*</label
                  >
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      id="basic-url"
                      aria-describedby="basic-addon3"
                    />
                    <span class="input-group-text" id="basic-addon3">REST</span>
                  </div>
                </div>
              </div>

              <!-- RESET PASSWORD -->
              <div class="col-xl-8 text-center my-3">
                <button type="button" class="btn_avx w-100">
                  RESET PASSWORD
                </button>

                <!-- loader -->
                <button
                  class="btn_avx w-100"
                  type="button"
                  disabled
                  v-if="loading"
                >
                  <span
                    class="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
    
    <script>
    import useVuelidate from '@vuelidate/core';
import { helpers, maxLength, minLength, required } from '@vuelidate/validators';

    import AuthLeftComponents from '@/components/auth_components/AuthLeftComponents.vue';
import ApiClass from '@/Api/api';
// import { helpers } from '@vuelidate/validators';
    export default {
        name: 'ResetpasswordView',
        components: {
            AuthLeftComponents
        },
        data() {
            return {
                otp:'',
  msg: "",
            details: "",
            loading: false,
            submitted: false,
            otpV: "",
            countDown: "",
            resend: "",
            token: false,
            googleauth: false,



            }
        },
          setup() {
        return {
            v$: useVuelidate(),
        };
    },
    validations() {
        return {
         
                otp: {
                    required: helpers.withMessage("OTP is Required.", required),
                    minLength: helpers.withMessage("Should be 6 digits long.", minLength(6)),
                    maxLength: helpers.withMessage("Should be 6 digits long.", maxLength(6)),
                },
               
        };
    },

          mounted() {
            
        this.googleauth = this.$store.getters.getGoogleAuth;
        this.otpV = this.$store.getters.getotp;
        this.countDownTimer(this.otpV.expired_at);
        this.token = this.otpV.otp_type == "withdraw" ? true : false
    },
    methods:{
          async verifyOtp() {
            this.submitted = true;
            const result = await this.v$.form.$validate();
            if (!result)
                return;
            let form_data = {
                
                otp: this.otp,
                email: this.otpV.email,
            };
            this.loading = true;
            this.submitted = false;
            let response = await ApiClass.postRequest(this.otpV.otp_type == "withdraw" ? "block/validateotp" : "validateotp", this.token, form_data);
            if (response?.data) {
                this.loading = false;
                if (response.data.status_code == 1) {
                    this.success(response.data.message);
                    if (this.otpV.otp_type == "withdraw") {
                        this.$router.push("/portfolio");
                    } else {
                        localStorage.setItem("token", response.data.data.token);
                        localStorage.setItem("user", JSON.stringify(response.data.data.user));
                        this.$store.commit("SET_USER", response.data.data.user);
                        this.$store.commit("SET_GAUTH", response.data.data.user.gauth_setup)
                        this.$store.commit("setIsLogin", JSON.stringify(response.data.data.user));
                        // await new Promise((resolve) => setTimeout(resolve, 1000));
                        this.$store.commit("setIsLogin", true);
                        if (this.countDown) {
                            this.otp = "";
                            clearInterval(this.countDown);
                        }
                        this.$router.push("/exchange");
                    }
                } else {
                    this.failed(response.data.message);
                }
                this.resetForm();
            }
        },
        countDownTimer(ele) {
            var countDate = new Date(ele).getTime();
            if (this.countDown) {
                clearInterval(this.countDown);
            }
            this.countDown = setInterval(() => {
                var date = new Date().getTime();
                var diff = countDate - date;
                var min = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
                var sec = Math.floor((diff % (60 * 1000)) / 1000);
                this.msg = "Resend OTP in ( " + min + "m" + " : " + sec + "s )";
                if (diff < 0) {
                    clearInterval(this.countDown);
                    this.resend = true;
                    this.msg = "";
                }
            }, 1000);
        },

        async resendOtp(data) {
            let type = data.otp_type
            let form_Data = {
                email: data.email,
                type,
            };
            var response = await ApiClass.postRequest(type == "withdraw" ? "block/resendotp" : "resendotp", this.token, form_Data);
            if (response.data.status_code == 1) {
                this.otpV = response.data.data; ``
                this.$store.commit("SET_OTP", this.otpV);
                this.countDownTimer(this.otpV.expired_at);
                this.success(response.data.message);
                this.resend = false;
            }
            else {
                this.failed(response.data.message);
            }
        },

    }

    }
    </script>
    
    <style scoped>
/* .have_account p  {
        color: var(--avx-white);
        font-weight: 400;
    }
    
    .have_account a {
        color: var(--avx-yellow);
        text-decoration: none;
    }
    
    .have_account a:hover {
        text-decoration: underline;
    } */
</style>
    
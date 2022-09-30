<template>
<div>
    <section class="auth_box ">
        <div class="container-fluid">
            <div class="row register_box align-items-center">
                <div class="col-md-6 col-lg-6 col-xl-6 order-2 order-md-1">
                    <AuthLeftComponents />
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6 order-1 order-md-2">
                    <form class="row m-lg-5 m-0 p-md-3 p-2 justify-content-center auth_box">
                        <div class="col-xl-8">
                            <div class="auth_heading pb-5 mb-5">
                                <h4>Enter OTP</h4>
                            </div>
                        </div>
                        <!-- Enter OTP -->
                        <div class="col-xl-8">
                            <div class="otp_verification mb-4">
                                <label for="basic-url" class="form-label">Enter OTP</label>
                                <div class="otp_box otp d-flex justify-content-between mb-3">
                                    <form action="" class=" d-flex  justify-content-evenly ">
                                        <OtpInput ref="otpInput" input-classes="otp-input" separator="-" :num-inputs="6" :should-auto-focus="true" :is-input-num="true" @on-change="handleOnChange" @on-complete="handleOnComplete" />
                                    </form>
                                </div>

                            </div>
                        </div>
                        <div class="col-xl-8 have_account text-end">
                            <p>Resend OTP </p>
                        </div>

                        <!-- Submit button -->
                        <div class="col-xl-8 text-center my-3">
                            <button type="button" class="btn_avx w-100">SUBMIT </button>

                            <!-- loader -->
                            <button class="btn_avx w-100" type="button" disabled v-if="loading">
                                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
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
import AuthLeftComponents from '@/components/auth_components/AuthLeftComponents.vue'
import OtpInput from 'vue3-otp-input';
export default {
    name: 'VeificationView',
    components: {
        AuthLeftComponents,
        OtpInput
    }
}
</script>

<style scoped>
.have_account p {
    color: var(--avx-yellow);
    font-weight: 400;
}

/* .otp_box span{
    display: none !important;
} */
</style>

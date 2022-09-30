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
                            <div class="auth_heading mb-5">
                                <h4>Reset your password</h4>
                            </div>
                        </div>

                        <!-- EMAIL -->
                        <div class="col-xl-8">
                            <div class=" mb-4">
                                <label for="basic-url" class="form-label">Email*</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                                </div>
                            </div>
                        </div>

                        <!-- GET OTP veification veification-->
                        <div class="col-xl-8 text-center my-3">
                            <router-link to="/veification"> <button type="button" class="btn_avx w-100" > GET OTP </button>  </router-link>
                            
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
export default {
    name: 'ForgotpasswordView',
    components: {
        AuthLeftComponents
    },
    data() {
        return {
            loading: false,
        }
    },
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

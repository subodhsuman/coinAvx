<template>
<div>
    <section class="auth_box ">
        <div class="container-fluid">
            <div class="row register_box align-items-center">
                <div class="col-md-6 col-lg-6 col-xl-6 order-2 order-md-1">
                    <AuthLeftComponents />
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6 order-1 order-md-2">
                    <form class="row  m-lg-5 m-0 p-md-3 p-2 justify-content-center auth_box">
                        <div class="col-xl-8">
                            <div class="auth_heading mb-5">
                                <h4>LOGIN</h4>
                                <p>See your growth and get consulting support!</p>
                            </div>
                        </div>
                        <!-- EMAIL -->
                        <div class="col-xl-8">
                            <div class=" mb-4">
                                <label for="basic-url" class="form-label">Email*</label>
                                <div class="input-group">
                                    <input v-model="form.email" type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                                    <div class="input-errors" v-for="error of v$.form.email.$errors" :key="error.$uid">
    <div class="error-msg">{{ error.$message }}</div>
  </div>
                                </div>
                            </div>
                        </div>
                        <!-- PASSWORD -->
                        <div class="col-xl-8 mb-4">
                            <div class="password">
                                <label for="basic-url" class="form-label">Password</label>
                                <div class="input-group mb-3">
                                    <input v-model="form.password" :type="hidden1 ? 'password':'text'" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                                    <span @click="hidden1 = !hidden1" class="input-group-text" v-html="hidden1 ? this.hide:this.show" id="basic-addon3"></span>
                                    <div class="input-errors" v-for="error of v$.form.password.$errors" :key="error.$uid">
    <div class="error-msg">{{ error.$message }}</div>
  </div>
                                </div>
                            </div>
                            <div class="col-xl-12 col-lg-12 col-md-12 mb-3">
                                              <vue-recaptcha  @verify="recaptchaVerified" :sitekey="siteKey"></vue-recaptcha>
                                       
                                        </div>
                            <div class="d-flex justify-content-between">
                                <div class="check_box">
                                    <input type="checkbox" class="form-check-input shadow-none" id="exampleCheck1">
                                    <label class="form-check-label ms-2" for="exampleCheck1"> Check me out</label>
                                </div>
                                <div class="forgot_pwd">
                                    <router-link to="/forgot-password">Forgot Password?</router-link>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-8 text-center my-3">
                            <button @click="handleLogin" type="button" class="btn_avx w-100">LOGIN </button>

                            <!-- loader -->
                            <button class="btn_avx w-100" type="button" disabled v-if="loading">
                                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                Loading...
                            </button>
                        </div>

                        <div class="col-xl-8 have_account">
                            <p>Not register yet? <router-link to="/register">Register Now</router-link>
                            </p>
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
import { useVuelidate } from '@vuelidate/core'
import { required, email,minLength, maxLength } from '@vuelidate/validators'
import {
    VueRecaptcha
} from "vue-recaptcha";
import ApiClass from  '../../Api/Api';
import router from '@/router';

export default {
    name: 'LoginView',
    components: {
        AuthLeftComponents,
        VueRecaptcha
   
    },
    setup () {
    return { v$: useVuelidate() }
  },
    
    data() {
        return {
            siteKey:ApiClass.CAPTCHA_SITE_KEY,
            loding: false,
            
            form:{
                email:'',
                password:'',
                captcha_response:''
            },
            type1: "password",
            type2: "password",

            hidden1: true,
            hidden2: true,
            hidden3: true,
            hide:'<svg xmlns="http://www.w3.org/2000/svg" fill="#e5b945"  width="27.98" height="18.654" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"/></svg>' ,
            show: '<svg xmlns="http://www.w3.org/2000/svg" fill="#e5b945"  width="27.98" height="18.654"  viewBox="0 0 640 512"> <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c5.2-11.8 8-24.8 8-38.5c0-53-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zm223.1 298L373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5z"/></svg>'
        }
    },
    validations () {
    return {
     // Matches this.lastName
      form: {
        email: { required, email } ,// Matches this.contact.email
        password:{required, 
    valid: function(value) {
      const containsUppercase = /[A-Z]/.test(value)
      const containsLowercase = /[a-z]/.test(value)
      const containsNumber = /[0-9]/.test(value)
      const containsSpecial = /[#?!@$%^&*-]/.test(value)
      return containsUppercase && containsLowercase && containsNumber && containsSpecial
    },
    minLength: minLength(6),
    maxLength: maxLength(8),
  },
      }
    }
    },
    methods:{
         recaptchaVerified(response) {
     this.form.captcha_response = response;
    },
        async handleLogin(){
           let result =  await this.v$.form.$validate();
         console.log(result);
         if(result)
        {
           let response= await ApiClass.postRequest('login',false  ,this.form)
        //    console.log(response.data.data.token);

     
           router.push('/')

           if(response.data.status_code==1)

           {

             if (response.data.data.token && !response.data.data.google_auth) {

                console.log("In if condition")

                        
                        localStorage.setItem("token", response.data.data.token)
                        localStorage.setItem("user", JSON.stringify(response.data.data.user));
                        this.$store.commit("SET_USER", response.data.data.user);
                        
                        this.$store.commit("SET_GAUTH", response.data.data.user.gauth_setup)
                        this.$store.commit("SET_GOOGLE_STATUS",response.data.data.usergooglefa);
                        this.$store.commit("setIsLogin", JSON.stringify(response.data.data.user));
                        await new Promise((resolve) => setTimeout(resolve, 1000)); // for slow down
                        this.reset();
                        this.$refs.sitekey.reset();
                        this.$router.push("exchange?s=BTCUSDT");
                        this.success(response.data.message);
                    } else if(response.data.data.google_auth) {
                        // console.log(response.data.data.email);
                console.log("In else if condition")

                        this.$store.commit('SET_USER_EMAIL',response.data.data.email)
                       this.$router.push('/gauth');
                    }else{
                console.log("In else condition")

                        this.$store.commit("SET_GOOGLE_STATUS",response.data.data.usergooglefa);

                         this.$store.commit("SET_OTP", response.data.data);
                        this.$router.push("/verification");
                        this.success(response.data.message);
                        // this.$router.push({name: "VerificationView" ,params: {details: JSON.stringify(response.data.data)}});
                    }
                } 

           

            
        }
     
        }
}
    }
</script>

<style scoped>
.have_account p {
    color: var(--avx-white);
    font-weight: 400;
}

.have_account a {
    color: var(--avx-yellow);
    text-decoration: none;
}

.forgot_pwd a {
    color: var(--avx-white);
    text-decoration: none;
    font-size:14px;
}

.forgot_pwd a:hover,
.have_account a:hover {
    text-decoration: underline;
    color: var(--avx-yellow);
}

.form-check-input {
    background-color: transparent;
    border: 1px solid var(--avx-yellow);
    border-radius: 0;
}

.form-check-input:checked {
    background-color: var(--avx-yellow);
    border-color: var(--avx-yellow);
}

@media (min-width:320px) and (max-width:767px) {
    .have_account p br {
        display: block;
    }

    .have_account p {
        text-align: center;
    }
}
</style>

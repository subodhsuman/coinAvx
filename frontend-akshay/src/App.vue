<template>
<div id="my_app">
    <LandingheaderComponent v-if="this.$route.path == '/'"/>
    <MainHeader :key="update" v-model:metaR.sync="rval" v-else/>
    
    
    <router-view />
    <Mainfooter/>
</div>
</template>

<script>
import LandingheaderComponent from '@/components/LandingheaderComponent.vue'
import Mainfooter from '@/components/Mainfooter.vue'
import MainHeader from '@/components/MainHeader.vue'
export default {
    name: 'AppView',
    components: {
        MainHeader,
        LandingheaderComponent,
        Mainfooter
    },
    data() {
        return {
            update: '',
            rval: ''
        }
    },
    watch: {
        '$route': function (v) {
            this.update = v;
            this.rval = v.meta.routen;
            console.log(v.meta.routen);
        }
    }
}
</script>

<style>
/* POPPINS FONT FAMILY   font-family: 'Poppins', sans-serif; */
@font-face {
    font-family: 'Poppins';
    src: url(../src/assets/font-family/Poppins/Poppins-Regular.ttf);
    font-weight: 400;

}

@font-face {
    font-family: 'Poppins';
    src: url(../src/assets/font-family/Poppins/Poppins-Medium.ttf);
    font-weight: 500;
}

@font-face {
    font-family: 'Poppins';
    src: url(../src/assets/font-family/Poppins/Poppins-SemiBold.ttf);
    font-weight: 600;
}

@font-face {
    font-family: 'Poppins';
    src: url(../src/assets/font-family/Poppins/Poppins-ExtraBold.ttf);
    font-weight: 800;
}
@font-face {
    font-family: 'Oxanium';
    src: url(../src/assets/font-family/oxanium/Oxanium-ExtraBold.ttf);
    font-weight: 800;
}
@font-face {
    font-family: 'Oxanium';
    src: url(../src/assets/font-family/oxanium/Oxanium-Bold.ttf);
    font-weight: 700;
}

@font-face {
    font-family: 'Oxanium';
    src: url(../src/assets/font-family/oxanium/Oxanium-SemiBold.ttf);
    font-weight: 600;
}

@font-face {
    font-family: 'Oxanium';
    src: url(../src/assets/font-family/oxanium/Oxanium-Medium.ttf);
    font-weight: 500;
}

@font-face {
    font-family: 'Oxanium';
    src: url(../src/assets/font-family/oxanium/Oxanium-Regular.ttf);
    font-weight: 400;
}
/* oxanium end */
@font-face {
    font-family: 'Montserrat ' , sans-serif;
    src: url(../src/assets/font-family/Montserrat/Montserrat-ExtraBold.ttf);
    font-weight: 800;
}
@font-face {
    font-family: 'Montserrat ' , sans-serif;
    src: url(../src/assets/font-family/Montserrat/Montserrat-Bold.ttf);
    font-weight: 700;
}

@font-face {
    font-family: 'Montserrat ' , sans-serif;
    src: url(../src/assets/font-family/Montserrat/Montserrat-SemiBold.ttf);
    font-weight: 600;
}

@font-face {
    font-family: 'Montserrat ' , sans-serif;
    src: url(../src/assets/font-family/Montserrat/Montserrat-Medium.ttf);
    font-weight: 500;
}

@font-face {
    font-family: 'Oxanium';
    src: url(../src/assets/font-family/oxanium/Oxanium-Regular.ttf);
    font-weight: 400;
}
@font-face {
    font-family: 'DEICHO';
    src: url(../src/assets/font-family/deicho/DEICHO-Bold.otf);
    font-weight: 700;
}

#app {
    font-family: 'Poppins', sans-serif !important;
}

#my_app {
    background-color: var(--avx-black);
    min-height: 100vh;
}

:root {
    --avx-black: #000;
    --black:#000;
    --light-black: #1A1B1D;
    --avx-white: #fff;
    --white: #fff;
    --avx-yellow: #E5B945;
    --text-grey: #C4C4C4;
    --green: #44BD22;
    --red: #FA2D2D;
    --dark-red: #C21515;
    /* exchange */
    --progress-red: #300D0A;
    --progress-green: #1a241c;
    --light-yellow: #e5b94554;
    --light-black-bg: #1C1C1C;
    --on-hover: #2A2A2A;
    --white-grey: #fff;
    /* setting */
    --setting-bg: #090909;
    --setting-inner-bg: #090909;
    --white-yellow: #fff;
    --seeting-heading-bg: #e5b94521;
    --setting-choco: #1E1809;
    --factor-bg: #131313;

    --cut-img: url(../src/assets/images/icons/cut-img.svg);
    --selcet-arrow: url(../src/assets/images/icons/select-w-arrow.svg);


    /* P2P MODULE */
  --avx-black-aa:#1C1C1C;
  --avx-black-ab:#2A2A2A;
  --avx-gray:#959595;
  --avx-red:#FA2D2D;
  --avx-green:#44BD22;
  --avx-danger:#300D0A;
  --avx-lightgreen:#162A19;
  --avx-lightyellow:#645224;
  --avx-gray-aa:#707070;
  --avx-lightgreen:#12624E;
  --avx-gray-aa:#C9C9C9;
  --avx-demoname-bg:#1E1809;

   /*___________ landing pages variables______________*/

   --avx-badge: #8B8989;
    --avx-para:#D4D4D4;
    --avx-text:#878282;
    --avx-tab-bg:rgba(22,22,23,1);
    --avx-tab-bg1:rgba(22,22,23,1);
    --avx-table-bg:#18171e;
    --avx-border:#484444;
    --axv-lbutton:#078724;
    --avx-about:rgba(255, 255, 255, 0.1);
    --avx-footer: rgb(59 43 2);
    --avxcoin-black: #000;
    --avxcoin-white:#fff;
    --landing-black:#000;
    --landing-white:#fff;
     --avx-tabs-color:rgba(22,22,23,1);
     --avx-search:rgba(255, 255, 255, 0.58);
     --avx-liner:linear-gradient(to bottom right, #1A1A1A 31%, #6A5A33 94%, #DEAA1F 100%);


}

.light {
   
    --avx-black: #fff;
    --light-black: url(../src/assets/images/auth-images/auth-bg.png);
    --avx-white: #000;
    --text-grey: #959595;
    --light-black-bg: #fff;
    --on-hover: #FFF6EB;
    --progress-red: #FDDAD7;
    --progress-green: #DDF3E1;
    --white-grey: #959595;
    --light-yellow: #E5B945;
    --white-yellow: #E5B945;
    --selcet-arrow: url(../src/assets/images/icons/select-b-arrow.svg);
    --setting-choco: #F6F0E1;
    --seeting-heading-bg: #F6F0E1;
    --setting-bg: #fff;
    --red:#C21515;
    --setting-inner-bg: #F8F8F8;
    --factor-bg: #EEEEEE;

    /* P2P LIGHT */
    
 
  --avx-black-aa:#FFFFFF;
  --avx-black-ab:#FFFFFF;
  --avx-danger:#FDDAD7;
  --avx-lightgreen:#DDF3E1;


  /* landing page light */
  --avxcoin-black:#fff;
  --avxcoin-white:#000;
  --avx-tab-bg:#F5F5F5;
  --avx-tabs-color:#F5F5F5;
  --avx-search:#000;
  --avx-liner:#F5F5F5;

}

/*___________________AUTH PAGE COMMAN CSS */
.auth_heading h4 {
    color: var(--avx-white);
}

.auth_heading p {
    color: var(--text-grey);
}

.auth_box {
    color: var(--avx-white);
    font-weight: 500;
}

.auth_box .form-control,
.auth_box .input-group-text {
    font-size: 14px;
    color: var(--avx-white);
    background-color: transparent;
    border: 1px solid transparent;
    padding: 7px 0.75rem;
}

.auth_box .form-control:focus {
    color: var(--avx-white);
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
}

.auth_box .input-group {
    background-color: var(--avx-black);
    border: 0.13rem solid var(--avx-yellow);
    border-radius: 1.2rem;
}

/* ____________________Comman Button  */

.btn_avx {
    color: var(--white);
    cursor: pointer;
    background-color: var(--avx-yellow);
    border: 1px solid var(--avx-yellow);
    font-size: 14px;
    border-radius: 1.25rem;
    padding: 8px 8px;
    font-weight: 500;
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

/* __________________skeltor loader css */

.vue-skeletor {
    position: relative;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.12);
}

.vue-skeletor:not(.vue-skeletor--shimmerless):after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background-image: linear-gradient(90deg,
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0.3),
            rgba(37, 22, 22, 0));
    animation: shimmer 1.5s infinite;
    content: "";
}

.vue-skeletor--rect,
.vue-skeletor--circle {
    display: block;
}

.vue-skeletor--circle {
    border-radius: 50%;
}

.vue-skeletor--pill,
.vue-skeletor--text {
    border-radius: 9999px;
}

.vue-skeletor--text {
    line-height: 1;
    display: inline-block;
    width: 100%;
    height: inherit;
    vertical-align: middle;
    top: -1px;
}

@keyframes shimmer {
    100% {
        transform: translateX(100%);
    }
}

/*_____________________ ScrollBar Css */
.crypto-list ::-webkit-scrollbar,
.trade_history ::-webkit-scrollbar,
.Order_Depth ::-webkit-scrollbar {
    background: transparent;
    width: 3px;
    height: 0;
    border-radius: 10px;
}

.crypto-list ::-webkit-scrollbar-thumb,
.trade_history ::-webkit-scrollbar-thumb,
.Order_Depth ::-webkit-scrollbar-thumb {
    background-color: transparent;
    border: solid rgba(0, 0, 0, 0) 2px;
    transition: all 0.4s ease;
    transition: all 0.3s ease ease-in-out;
}

.crypto-list:hover ::-webkit-scrollbar-thumb,
.trade_history:hover ::-webkit-scrollbar-thumb,
.Order_Depth:hover ::-webkit-scrollbar-thumb {
    background-color: var(--text-grey);
    transition: all 0.3s ease ease-in-out;
}

/* _____________________AUTOFILL CSS */
.auth_box input:-webkit-autofill,
.auth_box input:-webkit-autofill:hover,
.auth_box input:-webkit-autofill:focus,
.auth_box input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px var(--avx-black) inset !important;
    -webkit-text-fill-color: var(--avx-white) !important;
    border-radius: 1.2rem;
}

/*________________________________Pagination*/

.pagination {
    justify-content: end !important;
    font-family: 'poppins', sans-serif;
    /* --bs-pagination-padding-x: 14px !important; */

}

button.page-link {
    height: 40px;
    width: 40px;
}

li.VuePagination__pagination-item.VuePagination__pagination-item.page-item.VuePagination__pagination-item.VuePagination__pagination-item-prev-page.page-item.disabled.VuePagination__pagination-item-prev-chunk.disabled,
li.VuePagination__pagination-item.VuePagination__pagination-item.page-item.VuePagination__pagination-item.VuePagination__pagination-item-next-page.page-item.VuePagination__pagination-item-next-chunk.disabled {
    display: none;
}

.page-link {
    z-index: 3 !important;
    color: var(--avx-white) !important;
    background-color: transparent !important;
    border-color: var(--avx-yellow) !important;
    box-shadow: none !important;
    border-radius: 50%;
    margin-right: 10px;
}

.page-item.active .page-link {
    z-index: 3 !important;
    color: var(--white) !important;
    background-color: var(--avx-yellow) !important;
    border-color: var(--avx-yellow) !important;
    box-shadow: none !important;
}

.pagination_box ul li {
    border: none !important;
    margin-bottom: 20px !important;
    margin-bottom: 0 !important;
    color: var(--avx-white);
}

.pagination_box p {
    font-size: 14px;
    color: var(--avx-white);
}

.page-item:first-child .page-link,
.page-item:last-child .page-link {
    box-shadow: none !important;
}

.swiper-pagination-bullet-active {
    background: var(--swiper-pagination-color, var(--black)) !important;
}

/* _____________________OTP VERIFICATION CSS */

.otp_verification .otp-input {
    width: 45px;
    height: 45px;
    padding: 5px;
    margin-right: 48px;
    font-size: 16px;
    border-radius: 0px;
    border: 1px solid var(--avx-yellow);
    text-align: center;
    background-color: transparent;
    color: var(--avx-white);
}

/* Background colour of an input field with value */
.otp-input.is-complete {
    background-color: transparent;
}

.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.otp_verification input::placeholder {
    font-size: 15px;
    text-align: center;
    font-weight: 600;
}

.otp_box span {
    display: none !important;
}

.otp_verification input:focus-visible {
    outline: 0px solid var(--avx-yellow) !important;
}

/* __________________EXCHANGE COMMAN CSS */
.border_bottom {
    border-bottom: 1px solid var(--light-yellow);
}

.slider-base,
.slider-connect {
    background-color: var(--avx-yellow) !important;
}

slider-target,
.slider-target * {
    background: var(--avx-yellow);
    /* width: 100px; */
}

.slider-tooltip {
    background: var(--avx-yellow) !important;
    border: 1px solid var(--avx-yellow) !important;
}

.slider-touch-area {
    height: 19px !important;
    width: 19px !important;
}

.slider-horizontal .slider-tooltip-top {
    display: none !important;
}

.setting_slot_box {
    border: 1px solid var(--light-yellow);
    min-height: 90vh;
    background-color: var(--setting-inner-bg);
}

.setting_sub_heading p {
    color: var(--avx-white);
}

.setting_sub_heading h6,
.setting_slot_haed h5 {
    color: var(--avx-yellow);
}
.slider-handle{
    box-shadow: none !important;
}

/*
=========================================
            MEDIA QUERY CSS
========================================= 
*/

@media (min-width:1200px) and (max-width:1499px) {
    .otp_verification .otp-input {
        margin-right: 12px;
    }
}

@media (min-width:992px) and (max-width:1199px) {
    .otp_verification .otp-input {
        margin-right: 10px;
    }
}

@media (min-width:768px) and (max-width:991px) {
    .otp_verification .otp-input {
        margin-right: 7px;
    }
}

@media (min-width:320px) and (max-width:767px) {
    .otp_verification .otp-input {
        margin-right: 7px;
        width: 35px;
        height: 35px;
    }
}
</style>

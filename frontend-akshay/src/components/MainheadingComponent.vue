<template>
<div>
    <div class="main_heading position-relative mt-5 text-center">
        <h2 class="text-capitalize">{{main_heading}} <span> {{main_heading1}}</span></h2>
    </div>
    <!-- _______________main_heading component______________ -->
</div>
</template>

<script>
export default {
    name: 'MainheadingComponent',
    props: {
        main_heading: String,
        main_heading1: String
    }
}
</script>

<style scoped>
.main_heading h2 {
    Font-size: 45px;
    Line-height: 60px;
    color: var(--avx-white);
    font-family: 'Oxanium';
    font-weight: 500;
}


.buy_coinavx .main_heading h2 ,
.nft_section .main_heading h2,
.faq_section .main_heading h2

{
    color: var(--landing-white);
}
.main_heading h2 span {
    color: var(--avx-yellow);
}

.main_heading:before {
    position: absolute;
    top: -2px;
    left: -13px;
    content: '';
    background-image: url('@/assets/images/landing-page/popular-currency/main_before.png');
    background-repeat: no-repeat;
    height: 60px;
    width: 20px;
}

.main_heading:after {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    margin: 0 auto;
    content: '';
    background-image: url('@/assets/images/landing-page/popular-currency/main_before.png');
    background-repeat: no-repeat;
    height: 60px;
    width: 20px;
}

.crypto_popular .main_heading,
.nft_section .main_heading,
.gold_trading .main_heading,
.faq_section .main_heading,
.buy_coinavx .main_heading {
    text-align: start !important;
}

.crypto_popular .main_heading:after,
.nft_section .main_heading:after,
.gold_trading .main_heading:after,
.buy_coinavx .main_heading:after,
.faq_section .main_heading:after {
    display: none;
}

.whats_coinavx .main_heading:before,
.feature_coinavx .main_heading:before {
    left: 437px;
}

.whats_coinavx .main_heading:after,
.feature_coinavx .main_heading:after {
    right: -409px;
}

.about_risk .main_heading:before {
    left: 292px;
}

.about_risk .main_heading:after {
    margin: 0;
    right: 283px;
    left: unset;
}

.faq_section .main_heading,
.about_risk .main_heading,
.feature_coinavx .main_heading,
.whats_coinavx .main_heading {
    margin-top: unset !important;
}
@media (min-width:1200px) and (max-width:1399px) {
    .whats_coinavx .main_heading:before, .feature_coinavx .main_heading:before {
    left: 354px;
}
.main_heading h2{
        font-size:43px;
    }
    .about_risk .main_heading:before {
    left: 233px;
}
.about_risk .main_heading[data-v-cfa271f8]:after {
    right: 223px;
}
}
@media (min-width:992px) and (max-width:1199px) {
    .main_heading h2{
        font-size:39px;
    }
    .whats_coinavx .main_heading:before, .feature_coinavx .main_heading:before {
    left: 265px;
}
.about_risk .main_heading:before {
    left: 115px;
}
.about_risk .main_heading:after {
    right: 105px;
}
.buy_coinavx .main_heading{
        text-align: start !important;
    }
}
@media (min-width:768px) and (max-width:991px) {
    .whats_coinavx .main_heading:before, .feature_coinavx .main_heading:before {
    left: 139px;
}
.about_risk .main_heading:before {
    left: 0;
}
.about_risk .main_heading:after{
    right:-10px;
}
.main_heading h2{
    font-size:38px;
}
.crypto_popular .main_heading,
    .nft_section .main_heading,
    .gold_trading .main_heading,
    .faq_section .main_heading ,
    .buy_coinavx .main_heading {
        margin-top: 10px !important;
    }
    .buy_coinavx .main_heading{
        text-align: start !important;
    }
}
@media (min-width:320px) and (max-width:767px) {

    .whats_coinavx .main_heading:before,
    .feature_coinavx .main_heading:before,
    .whats_coinavx .main_heading:after,
    .feature_coinavx .main_heading:after,
    .main_heading:before,
    .about_risk .main_heading:after {
        display: none;
    }

    .main_heading h2 {
        Font-size: 29px;
        Line-height: 43px;
    }

    .crypto_popular .main_heading,
    .nft_section .main_heading,
    .gold_trading .main_heading,
    .faq_section .main_heading ,
    .buy_coinavx .main_heading {
        margin-top: 10px !important;
    }

}
</style>

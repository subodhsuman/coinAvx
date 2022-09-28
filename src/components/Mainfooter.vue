<template>
<div>
    <footer class="footer_section">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-sm-7  col-md-5 col-lg-4 col-xl-4">
                    <div class="main_footer_box">
                        <div class="mb-lg-3 mb-4">
                            <router-link to="/"><img src="@/assets/images/landing-page/banner/logo.png" alt="logo_img" class="img-fluid"></router-link>
                        </div>
                        <div class="pe-2">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it .</p>
                        </div>
                        <div>
                            <div class="d-flex align-items-center">
                                <div>
                                    <h4>Follow us </h4>
                                </div>
                                <div><img src="@/assets/images/landing-page/faq/follow_img.png" alt="text" class="img-fluid ms-3"></div>
                            </div>
                            <div class="social_icons1 w-50">
                                <ul class="d-flex list-unstyled align-items-center  flex-wrap justify-content-between">
                                    <li class="link_social mb-2"><img src="@/assets/images/landing-page/footer/facebook.png" alt="icons" class="img-fluid mx-3"></li>
                                    <li class="link_social mb-2"><img src="@/assets/images/landing-page/footer/instagram.png" alt="icons" class="img-fluid mx-3"></li>
                                    <li class="link_social mb-2"><img src="@/assets/images/landing-page/footer/linkedin.png" alt="icons" class="img-fluid mx-3"></li>
                                    <li class="link_social mb-2"><img src="@/assets/images/landing-page/footer/youtube.png" alt="icons" class="img-fluid mx-3"></li>
                                    <li class="link_social mb-2"><img src="@/assets/images/landing-page/footer/twitter.png" alt="icons" class="img-fluid mx-3"></li>
                                    <li class="link_social mb-2"><img src="@/assets/images/landing-page/footer/telegram.png" alt="icons" class="img-fluid mx-3"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" col-sm-5 col-md-3 col-lg-2 col-xl-2">
                    <div class="about_headings">
                        <h3 class="text-uppercase">
                            About Us
                        </h3>
                        <ul class="list-unstyled">
                            <li>About</li>
                            <li>Careers</li>
                            <li>Business Contacts</li>
                            <li>Community</li>
                            <li>Binance Blog</li>
                            <li>Terms</li>
                            <li>Privacy</li>
                        </ul>

                    </div>
                </div>
                <div class="col-sm-5 col-md-3 col-lg-2 col-xl-2">
                    <div class="about_headings">
                        <h3 class="text-uppercase">
                            Products
                        </h3>
                        <ul class="list-unstyled">
                            <li> Exchange</li>
                            <li>NFT</li>
                            <li>Gold Trading</li>
                            <li>Card</li>
                            <li>Labs</li>
                            <li>Launchpad</li>
                            <li>Research</li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-5 col-md-4 col-lg-2 col-xl-2">
                    <div class="about_headings">
                        <h3 class="text-uppercase">
                            Service
                        </h3>
                        <ul class="list-unstyled">
                            <li> Downloads</li>
                            <li>Desktop Application</li>
                            <li>Buy Crypto</li>
                            <li>Institutional & VIP</li>
                            <li> Services</li>
                            <li>Referral</li>
                            <li>Execution Solutions</li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </footer>
    <div class="social-icons  p-4 position-relative">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 col-lg-12 col-xl-12">
                    <div class="text-center copy-right d-flex align-items-center justify-content-center position-relative">
                        <div class="pe-3 border_right">
                            <p class="mb-0 text-capitalize">Copyright@2021Crypto </p>
                        </div>
                        <div>
                            <p class="mb-0 ps-3 text-capitalize"> all rights reserved </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'MainfooterComponent'
}
</script>

<style scoped>
.footer_section {
    padding: 70px 0;
    background-image: url('@/assets/images/landing-page/faq/footer.png');
    background-repeat: no-repeat;
    min-height: 500px;
    background-size: cover;
    background-position: center;
}

.copy-right p {
    font-size: 18px;
    font-family: 'Oxanium';
    font-weight: 400;
    color: var(--landing-white);
}

.footer_section p {
    font-size: 19px;
    font-family: 'Oxanium';
    font-weight: 400;
    color: var(--avx-text);
}

.footer_section h4 {
    font-size: 37px;
    font-family: 'Oxanium';
    font-weight: 500;
    color: var(--landing-white);
}

.about_headings h3 {
    font-size: 29px;
    font-family: 'Oxanium';
    font-weight: 500;
    color: var(--landing-white);
}
.about_headings ul li{
    font-size: 16px;
    font-family: 'Oxanium';
    font-weight: 400;
    color: var(--avx-text);
    line-height: 34px;

}
.social-icons {
    background-color: var(--avx-footer);
}

.border_right {
    border-right: 1px solid var(--avx-border);
}

.link_social {
    background-image: url('@/assets/images/landing-page/footer/social-media-bg.png');
    background-repeat: no-repeat;
    min-height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
}
@media (min-width:1200px) and (max-width:1399px) {
    .about_headings h3{
        font-size:22px;
    }
    .footer_section h4{
        font-size:27px;
    }
}
@media (min-width:992px) and (max-width:1199px) {
    .about_headings h3{
        font-size:22px;
    }
    .footer_section h4{
        font-size:27px;
    }
}
@media (min-width:768px) and (max-width:991px) {
    .about_headings h3{
        font-size:20px;
    }
    .footer_section h4{
        font-size:25px;
    }
}
@media (min-width:320px) and (max-width:767px) {
    .footer_section{
        padding: 40px 0;
    }
    .social-icons{
        padding: 20px 0 !important;
    }
    .copy-right p{
    font-size:13px;
    }
    .footer_section h4{
        font-size:26px;
    }
    .about_headings h3{
        font-size:21px;
    }
    
}
</style>

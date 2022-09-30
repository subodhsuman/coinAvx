<template>
<div class="auth_left_box d-flex align-items-center justify-content-center">
    <div class="auth_inner">
        <div class="auth_img my-lg-5 pt-lg-5 my-0 pt-0">
            <img src="../../assets/images/auth-images/auth.png" alt="image" class="img-fluid px-xl-3 px-4">
        </div>
        <div class="auth_description text-center p-4">
            <h4>Turn Your Ideas into reality.</h4>
            <p class="mb-0">Consistent quality and experience across all platforms and <br> devices.</p>
        </div>
        <div class="social_icons">
            <ul class="d-flex gap-4 justify-content-center list-unstyled">
                <li><img src="../../assets/images/auth-images/fb.png" alt="icon"></li>
                <li><img src="../../assets/images/auth-images/twitter.png" alt="icon"></li>
                <li><img src="../../assets/images/auth-images/telegram.png" alt="icon"></li>
                <li><img src="../../assets/images/auth-images/whatsapp.png" alt="icon"></li>
                <li><img src="../../assets/images/auth-images/instagram.png" alt="icon"></li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'AuthLeftComponents'
}
</script>

<style scoped>
.auth_left_box {
    background: var(--light-black);
    /* background:  url(../../assets/images/auth-images/auth-bg.png) var(--avx-black); */
    min-height: 100vh;
}

.auth_description h4 {
    color: var(--avx-white);
}

.auth_description p {
    color: var(--text-grey);
}
@media (min-width:320px) and (max-width:767px) {
    .auth_left_box {
    min-height: 50vh;
}
.auth_img img{
    display: none;
}
}
</style>

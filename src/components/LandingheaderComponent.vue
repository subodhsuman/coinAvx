<template>
<div>
    <header class="header_section">
        <div class="container">
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="#"><img src="@/assets/images/landing-page/banner/logo.png" alt="logo_img" class="img-fluid"></a>
                <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img src="@/assets/images/icons/nav/toggle.svg" alt="icons" class="img-fluid">
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-4 text-nowrap">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <router-link to="" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Trade
                            </router-link>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link class="dropdown-item" to="/exchange">Spot Trading</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/margin-trading">Margin Trading</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/future-trading">Future Trading</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/p2p">P2P</router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <router-link to="" class="nav-link ">Bot Trading </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="" class="nav-link ">NFT </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="" class="nav-link ">Gold Trading </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="" class="nav-link ">Contact Us </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/login" class="nav-link ">Login </router-link>
                        </li>
                        <li class="nav-item">
                            <div class="d-flex day_night py-2 nav-link">

                                <!-- sun -->
                                <button type="button" class="btn p-0 px-0 px-xl-2" v-if="!moon">
                                    <svg @click="themeChange(0,1)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: var(--landing-white);transform: ;msFilter:;">
                                        <path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z">
                                        </path>
                                    </svg>
                                </button>

                                <!-- moon -->
                                <button type="button" class="btn p-0 px-0 px-xl-2" v-else>
                                    <svg @click="themeChange(1,1)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: var(--landing-white);transform: ;msFilter:;">
                                        <path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </li>

                    </ul>
                    <form class="login_btn d-flex ms-4  gap-4 position-relative" role="search">
                        <router-link to="/register"> <button class="btn_register mx-4 shadow-none border-0" type="button">Register</button> </router-link>
                        <button class="btn_download  ms-5 shadow-none border-0" type="button">Download</button>
                    </form>
                </div>

            </nav>
        </div>
    </header>
</div>
</template>

<script>
export default {
    name: 'MainheaderComponent',
    data() {
        return {
            moon: false,
        }
    },
    methods: {
        themeChange(val = null, isMount) {

            // this.$store.commit('setTheme', val);
            (isMount == 1) ? this.moon = !this.moon: '';
            var light = document.getElementById("app").classList;
            (val == 0) ? light.add("light"): light.remove("light");

        }
    }
}
</script>

<style scoped>
.header_section {
    /* position: sticky;
    top: 0;
    z-index: 99; */
    background-image: linear-gradient(91.99deg, rgb(2 2 8 / 81%) 9.44%, #111010 72.15%), url('@/assets/images/landing-page/banner/background.png');
    background-repeat: no-repeat;

}

.dropdown-item:focus,
.dropdown-item:hover {
    background-color: var(--avxcoin-black);
    color: var(--avx-white);
}

.navbar-nav .nav-link.active,
.navbar-nav .show>.nav-link,
.nav-link:focus,
.nav-link:hover {
    color: var(--avx-yellow);
}

.nav-link {
    font-family: 'Montserrat ', sans-serif;
    Font-size: 15px;
    font-weight: 600;
    color: var(--landing-white);
    cursor: pointer;
}

.navbar-nav .nav-item {
    margin: 0 15px;
}

.dropdown-menu.show {
    background-color: var(--landing-black);
}

.dropdown-item {
    color: var(--landing-white);
    font-size: 14px;
    font-family: 'Oxanium';
    font-weight: 500;
}

.btn_register {
    Font-size: 15px;
    font-weight: 600;
    color: var(--landing-white);
    cursor: pointer;
    font-family: 'Oxanium';
    background: unset;
    position: relative;
}

.btn_download {
    Font-size: 15px;
    font-weight: 600;
    color: var(--avxcoin-black);
    cursor: pointer;
    font-family: 'Oxanium';
    background: unset;
    z-index: 1;
}

.login_btn:before {
    position: absolute;
    content: '';
    top: -14px;
    left: -141px;
    right: 0;
    margin: auto;
    background-image: url('@/assets/images/landing-page/banner/register.png');
    background-repeat: no-repeat;
    height: 88px;
    width: 168px;

}

.login_btn:after {
    position: absolute;
    content: '';
    top: -14px;
    right: -46px;
    margin: auto;
    background-image: url('@/assets/images/landing-page/banner/download.png');
    background-repeat: no-repeat;
    height: 88px;
    width: 168px;
}

/* media query start */
@media all and (min-width: 1200px) and (max-width: 1399px) {
    .login_btn:before {
        height: 52px;
    }

    .navbar-nav .nav-item {
        margin: 0;
    }

    .navbar-nav {
        margin-left: 0 !important;
    }
}

@media all and (min-width: 992px) and (max-width: 1199px) {
    .login_btn:before {
        height: 52px;
    }

    .navbar-nav .nav-item {
        margin: 0;
    }

    .navbar-nav {
        margin-left: 0 !important;
    }

    .navbar-brand img {
        height: 33px !important;
    }

}

@media all and (min-width: 768px) and (max-width: 991px) {
    .login_btn {
        flex-direction: column;
    }

    .login_btn:after {
        top: 41px;
        right: 522px;
    }

    .login_btn:before {
        left: -535px;
    }

    .btn_register {
        text-align: start;
        margin: 0px 10px 10px !important;
    }

    .btn_download {
        text-align: start;
        margin: 0px 10px !important;
    }

    ul.navbar-nav {
        margin-left: 0 !important;
        margin-bottom: 20px !important;
    }

    .navbar-collapse {
        background-color: var(--landing-black);
        min-height: 433px;
    }
}

@media all and (min-width: 320px) and (max-width: 767px) {
    .login_btn {
        flex-direction: column;
    }

    .login_btn:after {
        top: 41px;
        left: -190px;
    }

    .btn_register {
        text-align: start;
        margin: 0px 10px 10px !important;
    }

    .btn_download {
        text-align: start;
        margin: 0px 10px !important;
    }

    ul.navbar-nav {
        margin-left: 0 !important;
        margin-bottom: 20px !important;
    }

    .navbar-collapse {
        background-color: var(--landing-black);
        min-height: 433px;
    }

    .login_btn:before {
        left: -140px;
        height: 51px;
    }

}
</style>

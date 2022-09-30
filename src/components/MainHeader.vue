<template>
<div>
    <header class="exchange-header py-1">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg">

                <!-- ____________EXCHANGE LOGO____________ -->
                <router-link class="navbar-brand exchange-logo" to="/"><img src="../assets/logo.png" class="img-fluid me-5" style="height:40px"></router-link>
                <button @click="hidden = !hidden" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"><img :src="hidden ? hide : show"></span>
                </button>

                <div class="left-nav collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <!-- Market -->
                        <li class="nav-item" @click="closeToggle">
                            <router-link class="nav-link" aria-current="page" to="/market">Market</router-link>
                        </li>

                        <!--Trade Dropdown -->
                        <li class="nav-item trade_dropdown position-relative">
                            <button class="link_btn dropdown-toggle" type="button" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" :style="metaR == 'trade' ? 'color: var(--avx-yellow)' : ''">
                                Trade
                            </button>

                            <ul class="trade_box dropdown-menu p-0" aria-labelledby="navbarDropdown">

                                <li class="border-end-0">
                                    <router-link class="dropdown-item" to="/exchange">Spot Trading</router-link>
                                </li>

                                <li class="border-end-0">
                                    <router-link class="dropdown-item" to="/future-trading">Future Trading
                                    </router-link>
                                </li>
                                <li class="border-end-0">
                                    <router-link class="dropdown-item" to="/margin-trading">Margin Trading </router-link>
                                </li>
                            </ul>
                        </li>

                        <!--P2P-->
                        <li class="nav-item" @click="closeToggle">
                            <router-link class="nav-link" aria-current="page" to="/p2p">P2P</router-link>
                        </li>

                        <li class="nav-item border-end-0">
                            <router-link class="nav-link" aria-current="page" to="/p2p">Orders</router-link>
                        </li>
                    </ul>

                    <!-- ___________ RIGHT SIDE NAVBAR ________________ -->

                    <div class="right-side d-flex">
                        <ul class="navbar-nav  mb-2 mb-lg-0 ">
                            <!-- DAY AND NIGHT MODE BUTTON -->
                            <li class="nav-item">
                                <div class="d-flex day_night py-2 nav-link">

                                    <!-- sun -->
                                    <button type="button" class="btn p-0 px-0 px-xl-2" v-if="!moon">
                                        <svg @click="themeChange(0,1)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: var(--avx-white);transform: ;msFilter:;">
                                            <path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z">
                                            </path>
                                        </svg>
                                    </button>

                                    <!-- moon -->
                                    <button type="button" class="btn p-0 px-0 px-xl-2" v-else>
                                        <svg @click="themeChange(1,1)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: var(--avx-white);transform: ;msFilter:;">
                                            <path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>

                            </li>

                            <!-- GET STARTED -->
                            <li class="nav-item" @click="closeToggle">
                                <div class="button mb-3 mb-lg-0" style="cursor: pointer;">
                                    <router-link to="/login" type="button" class="nav-link login_btn shadow-none">Login </router-link>
                                </div>
                            </li>
                            <!-- RGISTER  -->
                            <li class="nav-item border-end-0" @click="closeToggle">
                                <div class="button  mb-3 mb-lg-0" style="cursor: pointer;">
                                    <router-link to="/register" type="button" class="register_btn text-decoration-none shadow-none">Register
                                    </router-link>
                                </div>
                            </li>

                            <li class="nav-item border-end-0">
                                <router-link class="nav-link user_icon" aria-current="page" to="/profile">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512">
                                        <path d="M256 112c-48.6 0-88 39.4-88 88C168 248.6 207.4 288 256 288s88-39.4 88-88C344 151.4 304.6 112 256 112zM256 240c-22.06 0-40-17.95-40-40C216 177.9 233.9 160 256 160s40 17.94 40 40C296 222.1 278.1 240 256 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-46.73 0-89.76-15.68-124.5-41.79C148.8 389 182.4 368 220.2 368h71.69c37.75 0 71.31 21.01 88.68 54.21C345.8 448.3 302.7 464 256 464zM416.2 388.5C389.2 346.3 343.2 320 291.8 320H220.2c-51.36 0-97.35 26.25-124.4 68.48C65.96 352.5 48 306.3 48 256c0-114.7 93.31-208 208-208s208 93.31 208 208C464 306.3 446 352.5 416.2 388.5z" /></svg>

                                  Hey, <span>Alex</span>
                                </router-link>
                            </li>

                        </ul>
                    </div>

                </div>

            </nav>
        </div>
    </header>
</div>
</template>

<script>
export default {
    name: 'MainHeader',
    props: {
        metaR: String
    },

    data() {
        return {
            hidden: true,
            hide: require('@/assets/images/icons/toggle.svg'),
            show: require('@/assets/images/icons/cancel.svg'),
            toggle: false,
            moon: false,
        }

    },
    // mounted() {
    //     this.themeChange(this.$store.getters.getTheme);
    // },
    methods: {
        closeToggle() {
            this.hidden = true
            const menuToggle = document.getElementById("navbarNav");
            menuToggle.classList.remove("show");
        },
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
.exchange-header {
    width: 100%;
    /* position: fixed; */
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: var(--avx-black);
}

a.nav-link,
.nav-item {
    font-size: 15px;
    color: var(--avx-white);
    font-weight: 500;
    margin-right: 15px;
}

.exchange-header .router-link-active.nav-link,
.lbm-header .nav-link:hover {
    font-weight: 600;
    color: var(--avx-yellow);
}

nav ul li a:hover ,
nav ul li a:hover svg,
.router-link .nav-link.active {
    color: var(--avx-yellow);
}

.navbar-toggler:focus {
    box-shadow: none;
    outline: none;
}

.nav-item .btn-info:hover {
    background-color: transparent;
    border: 1px solid var(--avx-yellow);
}

.left-nav ul li {
    border-right: 1px solid var(--avx-yellow);
}

.login_btn {
    border: 2px solid var(--avx-yellow);
    border-radius: 20px;
    background-color: transparent;
    padding: 6px 6px;
    width: 83px;
    text-align: center;
}

.register_btn {
    border: 1px solid var(--avx-yellow);
    border-radius: 20px;
    background-color: var(--avx-yellow);
    padding: 6px 6px;
    width: 83px;
    text-align: center;
    color: var(--white);
}

.register_btn:hover {
    color: var(--white);
}

.link_btn {
    background-color: transparent;
    border: 1px solid transparent;
    color: var(--avx-white);
    padding: 6px 6px;
    margin-right: 15px;

}

.link_btn:hover {
    color: var(--avx-yellow);
    border: 1px solid transparent !important;
}

.dropdown-item:focus,
.dropdown-item:hover {
    color: var(--avx-yellow);
    background-color: var(--on-hover);
}

.dropdown-menu {
    background: var(--light-black-bg);
    color: var(--avx-white) !important;
    border: 1px solid var(--avx-yellow);
    border-radius: 5px;
    top: 45px !important;
}

.dropdown-item {
    color: var(--avx-white);
    border-radius: 5px;
}
.user_icon{
padding: 3px 6px;
}
.user_icon svg{
    fill: var(--avx-white);
}
.user_icon:hover svg{
    fill: var(--avx-yellow);
}
.exchange-header .router-link-active.nav-link svg{
    fill: var(--avx-yellow);
}

@media all and (min-width: 320px) and (max-width: 992px) {
   
    .left-nav ul li {
    border-right: 0;
}


    .exchange-header {
        position: sticky;

    }
}
</style>

<template>
<div>
    <section class="setting_layout px-md-3 px-0 pt-1">
        <div class="container-fluid">
            <div class="row layout_border">
                <div class="col-md-12 col-lg-3 col-xl-3 col-xxl-2 side_box d-none d-lg-block">
                    <div class="side_bar">
                        <SettingSideNavbar />
                    </div>
                </div>
                <router-link to="/portfolio/MobileSetting" class="btn btn_back  shadow-none text-start ps-3  d-lg-none d-xl-none d-xxl-none" role="button"> 
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: var(--avx-white);transform: ;msFilter:;"><path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path></svg>
                   </router-link> 
                <div class="col-md-12 col-lg-9 col-xl-9 col-xxl-10">
                    <slot></slot>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import SettingSideNavbar from '@/components/setting/SettingSideNavbar.vue'
export default {
    name: 'SettingLayout',
    components:{
        SettingSideNavbar
    }
}
</script>

<style scopede>
.setting_layout{
    background: var(--setting-bg);
    font-family: 'Poppins';
}
.side_bar{
    height: 90vh;
}
.layout_border {
    border: 1px solid var(--light-yellow);
}
.side_box{
    border-right: 1px solid var(--light-yellow);  
    background-color: var(--setting-inner-bg);
}
</style>

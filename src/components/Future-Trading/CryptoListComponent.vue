<template>
<div class="crypto-list">
    <div class="currruncy_name">
        <ul class="nav nav-pills justify-content-between mb-3 py-2" id="pills-tab" role="tablist">
            <li class="nav-item" id="" role="presentation">
                <button class="nav-link " id="pills-fav-tab" data-bs-toggle="pill" data-bs-target="#pills-fav" type="button" role="tab" aria-controls="pills-fav" aria-selected="true"> <img src="../../assets/images/icons/fav-star.svg" alt="icon"> </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-inr-tab" data-bs-toggle="pill" data-bs-target="#pills-inr" type="button" role="tab" aria-controls="pills-inr" aria-selected="true">inr</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-eth-tab" data-bs-toggle="pill" data-bs-target="#pills-eth" type="button" role="tab" aria-controls="pills-eth" aria-selected="false">eth</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-bnb-tab" data-bs-toggle="pill" data-bs-target="#pills-bnb" type="button" role="tab" aria-controls="pills-bnb" aria-selected="false">bnb</button>
            </li>

            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-usdt-tab" data-bs-toggle="pill" data-bs-target="#pills-usdt" type="button" role="tab" aria-controls="pills-usdt" aria-selected="false">usdt</button>
            </li>
        </ul>
    </div>

    <!-- search box -->
    <div class="search_box px-2">
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon2">
                <!-- <img src="../../assets/images/icons/search.svg" alt="search icon"> -->
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12.313 12.313">
                    <g id="Group_31243" data-name="Group 31243" transform="translate(-96.301 -186.625)">
                        <path id="Path_148" data-name="Path 148" d="M14.372,9.436A4.936,4.936,0,1,1,9.436,4.5,4.936,4.936,0,0,1,14.372,9.436Z" transform="translate(92.301 182.625)" fill="none" stroke="var(--avx-white)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                        <path id="Path_149" data-name="Path 149" d="M27.659,27.659l-2.684-2.684" transform="translate(80.248 170.572)" fill="none" stroke="var(--avx-white)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                    </g>
                </svg>
            </span>
            <input type="text" class="form-control shadow-none" placeholder="Search here...." aria-label="Search here...." aria-describedby="basic-addon2">

        </div>
    </div>

    <!-- Tab content -->
    <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-inr" role="tabpanel" aria-labelledby="pills-inr-tab">
            <!-- Heading -->
            <div class="currency_heading d-flex mb-2 px-2">
                <div style="flex-basis:10%"> </div>
                <div style="flex-basis:30%">Pair
                    <!-- up and down arrow icons -->
                    <img src="@/assets/images/icons/down.svg" alt="icon" />
                    <img src="@/assets/images/icons/up.svg" alt="icon" v-if="false" />

                </div>
                <div style="flex-basis:30%">Last Price
                    <!-- up and down arrow icons -->
                    <img src="@/assets/images/icons/down.svg" alt="icon" />
                    <img src="@/assets/images/icons/up.svg" alt="icon" v-if="false" />
                </div>
                <div style="flex-basis:30%" class="text-end">24H %
                    <!-- up and down arrow icons -->
                    <img src="@/assets/images/icons/down.svg" alt="icon" />
                    <img src="@/assets/images/icons/up.svg" alt="icon" v-if="false" />
                </div>
            </div>
            <!-- Content  -->
            <div class="cryptocurrency_scroll" v-if="loading">
                <div class="currency_content d-flex border_bottom py-1 pe-2" v-for="(data,index) in CurrencyData" :key="index">
                    <div style="flex-basis:10%" class="ps-2"><img src="../../assets/images/icons/small-grey-star.svg" alt="search icon"></div>
                    <div style="flex-basis:30%" class="text-uppercase">{{data.frist_pair}} /{{data.second_pair}} </div>
                    <div style="flex-basis:30%">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" style="fill: var(--avx-white)" viewBox="0 0 320 512">
                            <path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z" /></svg>{{data.price}} </div>
                    <div style="flex-basis:30%" class="text-end" :style="data.change > 0 ? 'color:var(--green);' : 'color:var(--red);'">{{data.change}}%</div>
                </div>
            </div>

            <!-- SKELETOR LOADER -->
           <div class="cryptocurrency_scroll" v-else> 
            <div class="currency_content d-flex border_bottom py-1" v-for="i in 10" :key="i">
                <div style="flex-basis:10%" class="ps-2">
                     <Skeletor />
                </div>
                <div style="flex-basis:30%">
                     <Skeletor />
                </div>
                <div style="flex-basis:30%">
                     <Skeletor />
                </div>
                <div style="flex-basis:30%">
                     <Skeletor />
                </div>
            </div>
           </div>
          


        </div>
        <div class="tab-pane fade" id="pills-eth" role="tabpanel" aria-labelledby="pills-eth-tab">...</div>
        <div class="tab-pane fade" id="pills-bnb" role="tabpanel" aria-labelledby="pills-bnb-tab">...</div>
    </div>

</div>
</template>

<script>
import ExchangeData from '@/assets/json/ExchangeData'
export default {
    name: 'CryptoListComponent',

    data() {
        return {
            loading: true,
            CurrencyData: ExchangeData.CurrencyData,
        }
    }
}
</script>

<style scoped>
.nav-link {
    color: var(--avx-white);
    border-bottom: 1px solid transparent;
    border-radius: 0;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    /* margin-right: 10px; */
    padding: 0.2rem 0.60rem;
}

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    background-color: transparent;
    border-bottom: 1px solid var(--avx-yellow);
    color: var(--avx-yellow);
}

.search_box .input-group-text,
.search_box .form-control {
    background-color: transparent;
    color: var(--avx-white);
    border: 1px solid transparent;
    padding: 4px 12px;
    font-size: 13px;
}

.search_box .input-group {
    border: 1px solid var(--avx-yellow);
    background-color: var(--avx-black);
    border-radius: 1.35rem;
}

/* currency_heading */
.currency_heading {
    color: var(--text-grey);
    font-size: 13px;
}

.currency_content {
    color: var(--avx-white);
    font-size: 12px;
}
/* cryptocurrency scroll */
.cryptocurrency_scroll {
    overflow-y: scroll;
    height: 430px;
}
</style>

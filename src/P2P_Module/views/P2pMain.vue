<template>
    <div>
        <div class="p2p border pt-5">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-md-12">
                        <div class="p2p-inner-wrapper w-50 text-center m-auto">
                            <h2 class="mb-3">Buy and Sell TetherUS (USDT) with Your Preferred Payment Methods</h2>
                            <p>Buy and sell TetherUS safely and easily on CoinAVX P2P. Find the best offer below and buy and sell USDT with Your Preferred Payment Methods today.</p>
                        </div>
                        <!-- p2p-inner-wrapper -->
                    </div>
                </div>
                <!-- row -->
                <div class="row">
                    <div class="col-12 col-md-12">
                        <div class="p2p-main-wrapper border border-bottom-0 py-3">
                            <div class="row align-items-center">
                                <div class="col-6 col-sm-6 border-end bd-yellow py-sm-3">
                                    <div class="p2p-buy-sell">
                                        <!-- buy sell buttons -->
                                        <ul class="nav nav-tabs border-0 p2p-buy-sell-tabs d-flex justify-content-center justify-content-sm-end" id="p2pbuysellTab" role="tablist">
                                            <li class="nav-item px-sm-2" role="presentation">
                                                <button 
                                                    class="nav-link text-capitalize px-3 px-sm-4 py-2 rounded-pill border-0 active" 
                                                    id="p2p-buy-tab" 
                                                    data-bs-toggle="tab" 
                                                    data-bs-target="#p2p-buy-tab-pane" 
                                                    type="button" 
                                                    role="tab" 
                                                    aria-controls="p2p-buy-tab-pane" 
                                                    aria-selected="true"
                                                    @click="show(0)"
                                                    :style="selected == 0?'background-color:var(--avx-green)':''"
                                                >
                                                    buy
                                                </button>
                                            </li>
                                            <li class="nav-item px-sm-2" role="presentation">
                                                <button 
                                                    class="nav-link text-capitalize px-3 px-sm-4 py-2 rounded-pill border-0" 
                                                    id="p2p-sell-tab" 
                                                    data-bs-toggle="tab" 
                                                    data-bs-target="#p2p-sell-tab-pane" 
                                                    type="button" 
                                                    role="tab" 
                                                    aria-controls="p2p-sell-tab-pane" 
                                                    aria-selected="false"
                                                    @click="show(1)"
                                                    :style="selected == 1?'background-color:var(--avx-red)':''"
                                                >
                                                    sell
                                                </button>
                                            </li>
                                        </ul>
                                        <!-- buy sell buttons -->
                                    </div>
                                </div>
                                <!-- p2p-buy-sell -->
                                <div class="col-6 col-sm-6 py-sm-3 bd-yellow">
                                    <div class="p2p-usdt-btc d-flex justify-content-center justify-content-sm-start">
                                        <button 
                                            class="btn border-0 text-uppercase" 
                                            @click="showToken(0)"
                                        >
                                            <span  :class="(token == 0)?'token-active':''">usdt</span>
                                        </button>
                                        <button 
                                            class="btn border-0 text-uppercase" 
                                            @click="showToken(1)"
                                        >
                                            <span  :class="(token == 1)?'token-active':''">btc</span>
                                        </button>
                                    </div>
                                    <!-- p2p-usdt-btc -->
                                </div>
                            </div>
                        </div>
                        <div class="p2p-amount-wrapper border">
                            <div class="row">
                                <div class="col-12 col-md-12">
                                    <div class="p2p-amount p-2">
                                        <div class="row justify-content-center">
                                            <div class="col-12 col-sm-10 col-md-10 col-lg-3 col-xl-3">
                                                <div class="p2p-amount-form">
                                                    <form>
                                                        <label for="amount">Amount</label>
                                                        <div class="input-group mb-3">
                                                            <input type="text" class="form-control rounded-pill" placeholder="Amount" aria-label="Amount" aria-describedby="basic-addon2">
                                                            <span class="input-group-text p-0 ms-2 border-0" id="basic-addon2"><button class="btn text-capitalize border-0 rounded-pill px-4">search</button></span>
                                                        </div>

                                                    </form>
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-10 col-md-5 col-lg-3 col-xl-2">
                                                <div class="d-flex gap-2 align-items-center justify-content-lg-center">
                                                    <div class="fiat">
                                                        <h6>Fiat</h6>
                                                        <div class="dropdown">
                                                            <button class="btn btn-secondary dropdown-toggle btn-sameAs rounded-pill border-0 px-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                INR
                                                            </button>
                                                            <ul class="dropdown-menu py-0 fiat-dropdown">
                                                                <li><a class="dropdown-item rounded" href="#">Action</a></li>
                                                                <li><a class="dropdown-item rounded" href="#">Another action</a></li>
                                                                <li><a class="dropdown-item rounded" href="#">Something else here</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <!-- fiat -->
                                                    <div class="fiat p2p-payment">
                                                        <h6>Payment</h6>
                                                        <div class="dropdown">
                                                            <button class="btn btn-secondary dropdown-toggle btn-sameAs rounded-pill border-0 px-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                Payment Method
                                                            </button>
                                                            <ul class="dropdown-menu py-0 fiat-dropdown">
                                                                <li><a class="dropdown-item rounded" href="#">INR</a></li>
                                                                <li><a class="dropdown-item rounded" href="#">USDT</a></li>
                                                                <li><a class="dropdown-item rounded" href="#">EUR</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <!-- p2p-payment -->
                                                </div>
                                            </div>
                                            <div class="col-12 col-sm-10 col-md-5 col-lg-4 col-xl-4">
                                                <div class="d-flex gap-2 mt-3 mt-md-0">
                                                    <div class="fiat p2p-payment">
                                                        <h6>Available Region(s)</h6>
                                                        <div class="dropdown">
                                                            <button class="btn btn-secondary dropdown-toggle btn-sameAs rounded-pill border-0 px-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <img loading="lazy" src="../assets/images/globe.png" alt="select-regions" class="img-fluid" />
                                                                All Regions
                                                            </button>
                                                            <ul class="dropdown-menu py-0 fiat-dropdown">
                                                                <li><a class="dropdown-item rounded" href="#">INR</a></li>
                                                                <li><a class="dropdown-item rounded" href="#">USDT</a></li>
                                                                <li><a class="dropdown-item rounded" href="#">EUR</a></li>
                                                            </ul>
                                                        </div>
                                                   </div>
                                                   <div class="region-filter">
                                                        <h6 class="cursor-pointer" data-bs-toggle="dropdown" aria-expanded="false">Filter <img loading="lazy" src="../assets/icons/home/arrow_down_yellow.svg" alt="filter" class="img-fluid" /></h6>
                                                        <ul class="dropdown-menu py-0 fiat-dropdown">
                                                                <li><a class="dropdown-item rounded" href="#">Asia</a></li>
                                                                <li><a class="dropdown-item rounded" href="#">Europe</a></li>
                                                                <li><a class="dropdown-item rounded" href="#">America</a></li>
                                                            </ul>
                                                    </div>
                                                    <!-- region-filter -->
                                                    <div class="refresh">
                                                        <button class="btn text-capitalize rounded-pill border-0 p-1 px-sm-2 py-sm-1">
                                                            <img loading="lazy" src="../assets/icons/home/refresh_black.svg" alt="refresh" class="img-fluid" />&nbsp;refresh
                                                        </button>
                                                    </div>
                                                    <!-- refresh -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- p2p-amount -->
                                </div>
                                <div class="col-12 col-md-12">
                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade show active" id="p2p-buy-tab-pane" role="tabpanel" aria-labelledby="p2p-buy-tab" tabindex="0">
                                            <p2pBuySell :tradeType="'buy'" :pair="pairname" />
                                            <!-- <P2PTable /> -->
                                        </div>
                                        <div class="tab-pane fade" id="p2p-sell-tab-pane" role="tabpanel" aria-labelledby="p2p-sell-tab" tabindex="0">
                                            <p2pBuySell :tradeType="'sell'" :pair="pairname" />
                                            <!-- <P2PTable /> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- row -->
            </div>
            <!-- container -->
        </div>
        <!-- p2p -->
    </div>
</template>
<script>
import p2pBuySell from '../components/p2pbuysell.vue';
// import P2PTable from '@/components/p2p/p2pbuyselltest.vue'
export default{
    name:'P2PView',
    components:{
        p2pBuySell
        // P2PTable
    },
    data(){
        return{
            selected:0,
            token:0,
            pairname:'usdt'
        }
    },
    methods:{
        show(param){
            this.selected = param;
        },
        showToken(val){
            this.token = val
            if(val == 0){
                this.pairname = 'usdt'
            }else{
                this.pairname = 'btc'
            }
        }
    }
}
</script>
<style>
.bd-yellow{
    border-color: var(--avx-yellow) !important;
}
.p2p{
    background-color: var(--avx-black);
    color: var(--avx-white);
}
.p2p, .p2p-main-wrapper, .p2p-amount-wrapper{
    border-color: var(--avx-lightyellow) !important;
}
.p2p-inner-wrapper h2{
    font-size: 24px;
    font-weight: 600;
}
ul.p2p-buy-sell-tabs li.nav-item button.nav-link{
    font-size: 12px;
    font-weight: 500;
    color: var(--avx-white);
}
.p2p-usdt-btc button{
    color:var(--avx-white);
    font-size: 14px;
}
.token-active{
    color: var(--avx-yellow) !important;
    text-decoration: underline;
}
.p2p-amount-form form label, .fiat h6, .region-filter h6{
    font-size: 15px;
    font-weight: 500;
    white-space: nowrap;
}
.p2p-amount-form form .input-group input{
    background-color: transparent;
    color: var(--avx-white);
    border-color: var(--avx-lightyellow);
    font-size: 13px;
}
.p2p-amount-form form .input-group input:focus{
    box-shadow: none;
}
.p2p-amount-form form .input-group input::placeholder{
    color: var(--avx-white);
}
.p2p-amount-form form .input-group-text{
    background-color: transparent;
}
.p2p-amount-form form .input-group-text button, .btn-sameAs{
    color: var(--avx-white);
    background-color: var(--avx-yellow);
    font-size: 12px;
}
.p2p-amount-form form .input-group-text button:hover , .btn-sameAs:hover{
    color: var(--avx-white);
    background-color: var(--avx-yellow) !important;
}
.fiat-dropdown{
    background-color: var(--avx-black-ab);
}
.fiat-dropdown li a{
    color: var(--avx-white);
}
.fiat-dropdown li a:hover{
    color: var(--avx-yellow);
    background-color: var(--avx-black);
}
.region-filter h6{
    color: var(--avx-yellow);
}
.refresh button{
    font-size: 12px;
    color: var(--avx-black);
    background-color: var(--avx-gray-aa);
    white-space: nowrap;
}
.refresh button:hover{
    color: var(--avx-black) !important;
    background-color: var(--avx-gray-aa) !important;
}
@media all and (min-width:320px) and (max-width:992px){
    .p2p-inner-wrapper{
        width: 80% !important;
    }
}
</style>
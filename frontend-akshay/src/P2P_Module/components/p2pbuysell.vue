<template>
    <div>
        <div class="p2p-buy-sell-comp py-2 rounded-pill m-2">
            <!-- <div class="ovarflow-p2p"> -->
                <div class="p2p-list p-2 d-none d-xl-block">
                    <div class="d-flex">
                        <div class="col p-0">
                            <div class="item-first item p-2 text-center">
                                <h6 class="mb-0">Advertisers (Completion rate)</h6>
                            </div>
                        </div>
                        <div class="col p-0">
                            <div class="item p-2">
                                <h6 class="mb-0 ms-4">Price</h6>
                            </div>
                        </div>
                        <div class="col p-0">
                            <div class="item p-2">
                                <h6 class="mb-0 ms-2">Limit/Available</h6>
                            </div>
                        </div>
                        <div class="col p-0">
                            <div class="item p-2">
                                <h6 class="mb-0">Payment</h6>
                            </div>
                        </div>
                        <div class="col p-0">
                            <div class="item-last item p-2">
                                <h6 class="mb-0">Trade</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <template v-for="(data,index) in p2p" :key="index">
                    <div class="p2p-list p-2" v-if="showOnclick" >
                        <div class="row align-items-center px-sm-5">
                            <div class="col-sm-6 col-lg p-0">
                                <div class="items ms-lg-5">
                                    <div class="demoname">
                                        <h6 class="text-uppercase">Demoname</h6>
                                    </div>
                                    <!-- demoname -->
                                    <div class="demo-buttons">
                                        <button class="btn text-capitalize border-0 rounded-pill m-1">{{data.orders}}</button>
                                        <button class="btn text-capitalize border-0 rounded-pill m-1">{{data.completion}}</button>
                                    </div>
                                    <!-- demo-buttons -->
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg p-0">
                                <div class="items p-2">
                                    <h6 class="mb-0">84 INR</h6>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg p-0">
                                <div class="items p-2">
                                    <div class="d-flex">
                                        <div class="available-limit">
                                            <p class="mb-0">Available&nbsp;</p>
                                            <p class="mb-0">Limit&nbsp;</p>
                                        </div>
                                        <!-- available-limit -->
                                        <div class="available-limit-amount">
                                            <p class="mb-0">84.42 USDT</p>
                                            <p class="mb-0">₹ 1,000.00 - ₹ 2,080.95</p>
                                        </div>
                                        <!-- available-limit -->
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg p-0">
                                <div class="items p-2">
                                    <h6 class="mb-0 text-uppercase text-yellow">Bank Transfer</h6>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg p-0">
                                <div class="items p-2">
                                    <button 
                                        class="btn text-uppercase border-0 rounded-pill table-button"
                                        @click="showOnclick = !showOnclick"
                                        :style="(tradeType == 'buy')?'background-color:var(--avx-green)':'background-color:var(--avx-red)'"
                                    >
                                        {{tradeType}} {{pair}}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="clicked-any rounded px-2 px-sm-5 py-4 mb-3" v-if="!showOnclick">
                        <div class="row">
                            <div class="col-12 col-md-6 col-xl-3">
                                <div class="demoname">
                                    <h6 class="text-uppercase">demoname</h6>
                                </div>
                                <!-- demoname -->
                                <div class="demo-buttons mb-3">
                                    <button class="btn text-capitalize border-0 rounded-pill">91 orders</button>
                                    <button class="btn text-capitalize border-0 rounded-pill ms-1">54.90% completion</button>
                                </div>
                                <!-- demo-buttons -->
                                <div class="price_dname">
                                    <p class="mb-0">Price:&nbsp;<span>80INR</span></p>
                                </div>
                                <!-- price_dname -->
                            </div>
                            <div class="col-12 col-md-6 col-xl-3 mt-3 mt-md-0 pricing">
                                <div class="d-flex">
                                    <div class="available-limit">
                                        <p class="mb-0">Available&nbsp;</p>
                                        <p class="mb-0">Limit&nbsp;</p>
                                        <p class="mt-3">Payment&nbsp;</p>
                                    </div>
                                    <!-- available-limit -->
                                    <div class="available-limit-amount">
                                        <p class="mb-0">84.42 USDT</p>
                                        <p class="mb-0">₹ 1,000.00 - ₹ 2,080.95</p>
                                        <p class="mb-0 mt-3 text-yellow">Bank Transfer</p>
                                    </div>
                                    <!-- available-limit -->
                                </div>
                            </div>
                            <div class="col-12 col-md-12 col-xl-6 payout mt-3 mt-xl-0">
                                <div class="row">
                                    <div class="col-12 col-md-6">
                                        <form class="payout-form">
                                            <label for="">I want to pay</label>
                                            <div class="input-group mb-3 border rounded-pill px-2">
                                                <input type="text" class="form-control border-0 ps-0" placeholder="0.00" aria-label="Recipient's username" aria-describedby="basic-addon3">
                                                <span class="input-group-text p-0" id="basic-addon3"><button class="btn">All</button>CZK</span>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <form class="payout-form">
                                            <label for="">I will receive</label>
                                            <div class="input-group mb-3 border rounded-pill px-2">
                                                <input type="text" class="form-control border-0 ps-0" placeholder="0.00" aria-label="Recipient's username" aria-describedby="basic-addon3">
                                                <span class="input-group-text p-0" id="basic-addon3">USDT</span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="buyorsell text-center mt-3" v-if="tradeType == 'buy'">
                                    <router-link class="text-decoration-none" to="/p2pbuy"><button class="btn rounded-pill border-0 w-50 text-uppercase">buy usdt</button></router-link>
                                </div>
                                <div class="row align-items-center mt-3" v-if="tradeType == 'sell'">
                                    <div class="col-12 col-md-6">
                                        <form class="payout-form">
                                            <div class="input-group border rounded-pill px-2">
                                                <select class="form-select select-payment border-0" :style="'background-image:url('+require(`../assets/icons/components/chev-down-big.svg`)+')'" aria-label="Default select example">
                                                    <option selected>Select payment method</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <router-link class="text-decoration-none bt_p2p_sell" to="/p2psell"><button class="btn rounded-pill border-0 w-100 text-uppercase btn-sell-p2p mt-3 mt-md-0 text-uppercase">sell usdt</button></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            <div class="pagination d-flex justify-content-end gap-2 p-2">
                <img laoding="lazy" src="../assets/icons/components/arrow_yellow_left.svg" alt="paginate-left" class="img-fluid cursor-pointer" @click="decrement"/>
                    <button class="btn border rounded-pill" v-for="i in 3" :key="i" @click="pageNo(i)" :style="(i==srNo)?'background-color:var(--avx-yellow)':''">{{i}}</button>
                <img laoding="lazy" src="../assets/icons/components/arrow_yellow_right.svg" alt="paginate-left" class="img-fluid cursor-pointer" @click="increment" />
            </div>
        </div>
        <!-- p2p-buy-sell-comp -->
    </div>
</template>
<script>
import data from '../assets/json/data.json'
export default{
    name:'p2pBuySell',
    props:{
        tradeType:String,
        pair:String
    },
    data(){
        return{
            p2p: data.p2p,
            srNo: 1,
            show: false,
            showOnclick: true
        }
    },
    methods:{
        pageNo(param){
            this.srNo = param
        }
    }
}
</script>
<style>
.text-yellow{
    color: var(--avx-yellow);
}

.ovarflow-p2p{
    overflow-x: scroll;
}
.item{
    background-color: var(--avx-lightyellow);
}
.item-first{
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}
.item-last{
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}
 .item h6, .items h6{
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
}
.demoname h6{
    color: var(--avx-white);
    font-size: 15px;
}
.demo-buttons button{
    color:var(--avx-white);
    background-color: var(--avx-lightgreen);
    font-size: 11px;
    font-weight: 500;
}
.demo-buttons button:first-child, .demo-buttons button:first-child:hover{
    color:var(--avx-black);
    background-color: var(--avx-yellow);
}
.demo-buttons button:last-child:hover{
    color:var(--avx-white) !important;
    background-color: var(--avx-lightgreen) !important;
}
.available-limit p{
    font-size: 14px;
    font-weight: 500;
    color: var(--avx-gray);
}
.pay-method{
    color: var(--avx-yellow);
}
.table-button{
    font-size: 12px;
    font-weight: 500;
    color: var(--avx-white);
}
.pagination button{
    height: 40px;
    width: 40px;
    border-color: var(--avx-yellow) !important;
    color: var(--avx-white);
}
.pagination button:hover{
    background-color: var(--avx-yellow) !important;
}
.clicked-any{
    border: 2px solid var(--avx-yellow);
}
.price_dname p{
    font-size: 14px;
    font-weight: 500;
    color: var(--avx-gray);
}
.price_dname p span{
    color: var(--avx-white);
}
.available-limit-amount p,.payout-form label, .payout-form .input-group input{
    font-size: 14px;
    font-weight: 500;
    color: var(--avx-white);
}
.payout-form .input-group input{
    background-color: transparent;
}
.payout-form .input-group input::placeholder{
    color: var(--avx-white);
}
.payout-form .input-group input:focus{
    box-shadow: none;
}
.payout-form .input-group span{
    background-color: transparent;
    border: none;
    font-size: 12px;
    color: var(--avx-white);
    font-weight: 500;
}
.payout-form .input-group span button{
    border: none;
    font-size: 12px;
    color: var(--avx-yellow);
    font-weight: 500;
}
.payout-form .input-group span button:hover{
    color: var(--avx-yellow);
}
.payout-form .input-group{
    border-color: var(--avx-yellow) !important;
}
.buyorsell a button{
    font-size: 15px;
    font-weight: 600;
    background-color: var(--avx-green);
    color: var(--avx-white);
}
.buyorsell a button:hover{
    background-color: var(--avx-green) !important;
    color: var(--avx-white);
}
.buyorsell a:hover{
    color: var(--avx-white);
}
.btn-sell-p2p{
    font-size: 15px;
    font-weight: 600;
    color: var(--white) !important;
    background-color: var(--avx-red);
}
.btn-sell-p2p a{
    color: var(--avx-white);
    text-decoration: none;
}
.btn-sell-p2p:hover{
    color: var(--white) !important;
    background-color: var(--avx-red) !important;
}
.select-payment{
    font-size: 14px;
    font-weight: 500;
    color: var(--avx-white);
    background-color: var(--avx-black);
    border-color: var(--avx-lightyellow) !important;
}
.select-payment:focus{
    box-shadow: none;
}
.select-payment option{
    background-color: var(--avx-demoname-bg);
}
.bt_p2p_sell{
    color: var(--avx-white);
}
.bt_p2p_sell:hover{
    color: var(--avx-white);
}
.p2p-list h6{
    color: var(--white);
}
.items h6{
    color: var(--avx-white);
}

</style>
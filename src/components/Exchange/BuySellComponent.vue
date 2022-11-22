<template>
    <div class="cus-border">
    
        <div class="p-2">
            <!-- HEADING -->
            <div class="buysell_box d-md-flex d-block justify-content-between align-items-center ">
                <div class="buysell_heading">
                    <ul class="nav nav-pills mb-2" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active py-1" id="pills-spot-tab" data-bs-toggle="pill" data-bs-target="#pills-spot" type="button" role="tab" aria-controls="pills-spot" aria-selected="true">SPOT</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link py-1" id="pills-cross-tab" data-bs-toggle="pill" data-bs-target="#pills-cross" type="button" role="tab" aria-controls="pills-cross" aria-selected="false">CROSS</button>
                        </li>
    
                    </ul>
    
                </div>
                <div class="trading-fee">
                    <p class="mb-md-0">0% trading fee on this BTC pair</p>
                 
                    <!-- {{modelValue    }} -->
                    <!-- {{currency}} -->
                    <!-- {{pair_with}} -->
                </div>
            </div>
            <!-- LIMIT BUTTON -->
            <div class="limit_box mb-2">
                <button type="button" @click="order_type ='limit'" class="btn_limit  rounded">Limit</button>
            <!-- <button type="button" @click="order_type ='stop_limit'" class="btn_limit rounded">Stop Limit</button>
            <button type="button" @click="order_type='market'" class="btn_limit rounded">Market</button> -->
            </div>
    
            <!-- TAB CONTENT -->
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-spot" role="tabpanel" aria-labelledby="pills-spot-tab">
                    <!--spot BUY box  -->
                    <div class="row buy_sell">
                        <div class="col-md-6 col-xl-6 mb-4 mb-md-0">
                            <BuySellForm order_side="buy"    :allvalue="allvalue" />
                            <!-- <BuySellForm order_side="buy" currency="usdt" /> -->
    
                        </div>
                        <!--spot SELL box  -->
                        <div class="col-md-6 col-xl-6">
                            <!-- <BuySellForm order_side="sell" :currency="currency" :abc="abc" :allvalue="allvalue" /> -->
                            <BuySellForm order_side="sell"  :allvalue="allvalue" />

                            <!-- <BuySellForm order_side="sell" currency="usdt" /> -->
    
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-cross" role="tabpanel" aria-labelledby="pills-cross-tab">
    
                </div>
            </div>
        </div>
    
    </div>
    </template>
    
<script>
import BuySellForm from '@/Utilites/BuySellForm.vue'
    export default {
        name: 'BuySellComponent',
        props:{
            modelValue:Object
        },
        components: {
            BuySellForm
        },
        data() {
            return {
                clickedAmt: 1,
                currency:"",
                pair_with:"",
                abc:"",
                allvalue:{},
                order_type: 'limit'
    
            }
        },
        methods: {
            amount(val) {
                this.clickedAmt = val
            }
        },
       
        watch:{
            modelValue:function(value){
                console.log("hgfyudfhgfudhsfuhdufhdhf==========",value);
               this.allvalue=value;
                // this.abc=value.price;
                // this.currency=value.pair_with
                // this.pair_with=value.currency
                // console.log("pari with",this.pair_with);
                // console.log("currency",this.currency);
                // console.log("buy sell component",this.getValDta);
            }
    
    
        },
       
    }
    </script>
    
<style scoped>
    .nav-link {
        color: var(--avx-white);
        font-size: 15px;
        border-bottom: 1px solid transparent;
        border-radius: 0;
    }
    
    .nav-pills .nav-link.active,
    .nav-pills .show>.nav-link {
        color: var(--avx-yellow);
        background-color: transparent;
        border-bottom: 1px solid var(--avx-yellow);
    }
    
    .trading-fee p {
        color: var(--avx-yellow);
    }
    
    .btn_limit {
        color: var(--white);
        cursor: pointer;
        background-color: var(--avx-yellow);
        border: 1px solid var(--avx-yellow);
        font-size: 14px;
        padding: 3px 16px;
        font-weight: 500;
    }
    
    /* .cus-border {
        border: 1px solid var(--light-yellow);
    } */
    </style>
    
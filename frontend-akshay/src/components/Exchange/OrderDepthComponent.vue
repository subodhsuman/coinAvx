<template>
<div class="Order_Depth">
    <!-- haed -->
    <div class="od_head d-flex justify-content-between p-2">
        <p class="mb-0 text_yellow">BTC / USDT </p>
        <p class="mb-0">Order Volume</p>
    </div>
    <!-- heading -->
    <div class="od_heading d-flex justify-content-between py-1 px-2">
        <div style="flex-basis:33.3%">Price (USDT)</div>
        <div class="text-center" style="flex-basis:33.3%">Amount (BTC)</div>
        <div class="text-end" style="flex-basis:33.3%">Total BTC</div>
    </div>

    <!-- order depth content -->
   <div class="order_depth_scroll">
    <div class="od_sell_content d-flex justify-content-between py-1 od_border px-2" v-for="(data , index) in OrderDepthData" :key="index">
        <div style="flex-basis:33.3%; color: var(--red) ">{{data.price}} </div>
        <div class="text-center" style="flex-basis:33.3%">{{data.amount}}</div>
        <div class="text-end" style="flex-basis:33.3%">{{data.total}}</div>
    </div>
   </div>
    
    <div class="order_depth_price d-flex gap-2 justify-content-center align-items-center py-2 border-end-0 border-start-0" >
        <p class="mb-0"><span :style="istrue? 'color:var(--green)' : 'color:var(--red)'">38.887.99</span></p> 
        <img src="../../assets/images/icons/grren-up-arrow.svg" alt="icon" v-if="istrue">
        <img src="../../assets/images/icons/red-down-arrow.svg" alt="icon" v-else>
        <p class="mb-0">$ 38.887.96 </p>
    </div>

    <!-- order depth content -->
    <div class="order_depth_scroll">
    <div class="od_buy_content d-flex justify-content-between py-1 od_border px-2" v-for="(data , index) in OrderDepthData" :key="index">
        <div style="flex-basis:33.3%; color: var(--green);">{{data.price}} </div>
        <div class="text-center" style="flex-basis:33.3%">{{data.amount}}</div>
        <div class="text-end" style="flex-basis:33.3%">{{data.total}}</div>
    </div>
</div>
</div>
</template>

<script>
import ExchangeData from '@/assets/json/ExchangeData'
export default {
    name: 'OrderDepthComponent',
    data() {
        return {
            istrue:true,
            OrderDepthData: ExchangeData.OrderDepthData,
        }
    }
}
</script>

<style scoped>
.od_head p {
    color: var(--avx-white);
    font-size: 14px;
}
.order_depth_price p{
font-weight: 600;
color: var(--avx-white);

}
.order_depth_price{
    border: 1px solid var(--light-yellow);
}
/*   */
.text_yellow {
    color: var(--avx-yellow) !important;
    font-weight: 500;
}

.od_heading {
    color: var(--text-grey);
    font-size: 14px;
}

.od_sell_content {
    color: var(--avx-white);
    font-size: 12px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 28%, var( --progress-red) 28%);
}
.od_buy_content {
    color: var(--avx-white);
    font-size: 12px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 28%, var( --progress-green)  28%);
}


.od_border {
    border-bottom: 2px solid var(--avx-black);
}

.order_depth_scroll{
    height: 228px;
    overflow-y: scroll;
}
</style>

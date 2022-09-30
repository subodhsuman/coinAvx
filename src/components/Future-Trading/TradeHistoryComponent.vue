<template>
<div class="trade_history p-2">
    <!-- head -->
    <div class="trade_head d-flex justify-content-between py-1">
        <h6>Market Traders</h6>
        <p class="mb-0">My Trades</p>

    </div>
    <!-- trade heading -->
    <div class="trade_heading d-flex justify-content-between py-1 px-2">
        <div style="flex-basis:33.3%">Price (USDT)</div>
        <div class="text-center" style="flex-basis:33.3%">Amount (BTC)</div>
        <div class="text-end" style="flex-basis:33.3%">Time</div>
    </div>

    <!-- trade history content -->
    <div class="trade_history_scroll">
        <div class="trade_history_content d-flex justify-content-between py-1 od_border px-2" v-for="(data , index) in TradeData" :key="index">
            <div style="flex-basis:33.3%" :style="data.price > 0? 'color:var(--green);' : 'color:var(--red);'">{{data.price}} </div>
            <div class="text-center" style="flex-basis:33.3%">{{data.amount}}</div>
            <div class="text-end" style="flex-basis:33.3%">{{data.time}}</div>
        </div>
    </div>
</div>
</template>

<script>
import ExchangeData from '@/assets/json/ExchangeData'
export default {
    name: 'TradeHistoryComponent',
    data() {
        return {
            TradeData: ExchangeData.TradeData
        }
    }
}
</script>

<style scoped>
.trade_head h6 {
    color: var(--avx-yellow);
    border-bottom: 1px solid var(--avx-yellow);
}

.trade_head p {
    color: var(--avx-white);
}

/* trade heading */
.trade_heading {
    color: var(--text-grey);
    font-size: 14px;
}

.trade_history_content {
    color: var(--avx-white);
    font-size: 12px;
}
.trade_history_scroll{
    height: 205px;
    overflow-y: scroll;
}
</style>

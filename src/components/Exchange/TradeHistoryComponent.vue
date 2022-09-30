<template>
<div class="trade_history p-2">
    <!-- head -->
    <div class="trade_head d-flex justify-content-between py-1">
        <h6>Market Traders</h6>
        <p class="mb-0">My Trades</p>

    </div>
    <!-- trade heading -->
    <div class="trade_heading d-flex justify-content-between py-1 px-2">
        <div style="flex-basis:33.3%">Price {{getAllValue.pair_with}}</div>
        <div class="text-center" style="flex-basis:33.3%">Amount {{getAllValue.currency}}</div>
        <div class="text-end" style="flex-basis:33.3%">Time</div>
    </div>

    <!-- trade history content -->
    <div class="trade_history_scroll" v-if="!loading">
        <div class="trade_history_content d-flex justify-content-between py-1 od_border px-2" v-for="(data ,index) in TrdHisData" :key="index">
            <!-- {{TrdHisData}} -->
            <div style="flex-basis:33.3%" :style="data?.p > 0? 'color:var(--green);' : 'color:var(--red);'">{{parseFloat(data?.p)}} </div>
            <div class="text-center" style="flex-basis:33.3%">{{parseFloat(data.q)}}</div>
            <div class="text-end" style="flex-basis:33.3%">{{new Date( data.T).toLocaleTimeString('en-US',{hour12:false})}}</div>
        </div>
    </div>
    <!-- <Skeletor :shimmer="true"/> -->
    <div class="trade_history_scroll" v-else>

        <div class="trade_history_content d-flex justify-content-between py-1 od_border px-2" v-for="i in 20" :key="i">
            <div style="flex-basis:33.3%">
                <Skeletor />
            </div>
            <div class="text-center" style="flex-basis:33.3%">
                <Skeletor />
            </div>
            <div class="text-end" style="flex-basis:33.3%">
                <Skeletor />
            </div>
        </div>

    </div>
</div>
</template>

<script>
// import ExchangeData from '@/assets/json/ExchangeData'
import ApiClass from '@/api/api.js';
// import { Skeletor } from 'vue-skeletor';

export default {
    name: 'TradeHistoryComponent',
    // components: { Skeletor },

    props: {
        modelValue: Object
    },
    watch: {
        modelValue: function (val) {
            this.getAllValue = val;
            this.getTrdeSym = val.symbol;
            // console.log("trade history data", this.getTrdeSym);
            this.getTradeData();

        }
    },
    data() {
        return {
            loading: true,
            getTrdeSym: "",
            TrdHisData: [],
            getAllValue: {},
            connnection: ""
        }
    },
    methods: {
        async getTradeData() {
            let $this = this;
            this.loading=true;
            let res = await ApiClass.getNodeRequest("list-crypto/trade-history/" +this.getTrdeSym)
            // console.log("a",res)
            if (res?.data?.status_code == 1) {
                this.TrdHisData = res.data.data;
                this.loading=false;
                // console.log("Api class", this.trdeHisData);
            }

            const sub = this.getTrdeSym.toLowerCase() + "@trade";
            const data = {
                method: "SUBSCRIBE",
                params: [sub],
                id: 3
            }

            const connection = new WebSocket('wss://stream.binance.com:9443/ws');
            connection.onopen = function () {

            };

            connection.onopen = function onSreamOpen() {

                connection.send(JSON.stringify(data))
                connection.onmessage = function (event) {
                    const sket = JSON.parse(event.data);
                    // console.log("trade histroy socket",sket)
                    $this.TrdHisData.filter((e) => {
                        // console.log("etsss",e);
                        if (e.s == sket.s) {
                            e.p = sket.p;
                            e.q = sket.q;
                            e.T = sket.T;

                        }

                    })

                }
            }

            

        }
    },
    
    // mounted(){
    //     this.getTradeData();
    // }
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

.trade_history_scroll {
    height: 205px;
    overflow-y: scroll;
}
</style>

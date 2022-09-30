<template>
<div>
    <section class="exchnage cus_border">
        <div class="container-fluid">
            <div class="row  cus_border_bottom">
                <div class="col-xl-5 order-2 order-xl-1">
                    <div class="row cus_border_bottom">
                        <div class="col-md-6 col-xl-6 px-0 border_end">
                            <CryptoListComponent  v-model="currencyData" />
                        </div>
                        <div class="col-md-6 col-xl-6  px-0 border_end">
                            <OrderDepthComponent  v-model="currencyData"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-xl-6 px-0 border_end">
                            <TradeHistoryComponent v-model="currencyData" />
                        </div>
                        <div class="col-md-6 col-xl-6  pe-0 border_end">
                            <MarketActivityComponent />
                        </div>
                    </div>
                </div>
                <div class="col-xl-7 order-1 order-xl-2">
                    <div class="row">
                        <div class="col-xl-12">
                            <DetailBarComponent v-model="currencyData"/>
                        </div>
                        <div class="col-xl-12">
                            <ChartComponent />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12">
                            <BuySellComponent  v-model="currencyData" />
                        </div>
                    </div>

                </div>
            </div>
            <div class="row text-white cus_border_bottom">
                <div class="col-xl-12">
                    <OrderComponent />
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
// import ApiClass from "@/api/api";
import CryptoListComponent from '@/components/Exchange/CryptoListComponent.vue'
import OrderDepthComponent from '@/components/Exchange/OrderDepthComponent.vue'
import TradeHistoryComponent from '@/components/Exchange/TradeHistoryComponent.vue'
import MarketActivityComponent from '@/components/Exchange/MarketActivityComponent.vue'
import DetailBarComponent from '@/components/Exchange/DetailBarComponent.vue'
import ChartComponent from '@/components/Exchange/ChartComponent.vue'
import BuySellComponent from '@/components/Exchange/BuySellComponent.vue'
import OrderComponent from '@/components/Exchange/OrderComponent.vue'

export default {
    name: 'ExchangeView',
    components: {
        CryptoListComponent,
        OrderDepthComponent,
        TradeHistoryComponent,
        MarketActivityComponent,
        ChartComponent,
        DetailBarComponent,
        BuySellComponent,
        OrderComponent

    },
    data: () => ({
        currencyData: {
            symbol: 'BTCUSDT',
        },
        // cryptData:{}
    }),
    watch:{
        currencyData: function (v) {
            this.currencyData = v;
            // console.log("value of exchange",this.currencyData);
        },
    },
    //     async created() {
    //     let res = await ApiClass.getNodeRequest("dashboard/all-symbols", false);

    //     var isPresent = res?.data.data.find((s) => s == this.$route.query.s)
    //         ? true
    //         : false; //symbol is there
    //     if (isPresent) {
    //         this.currencyData.symbol = this.$route.query.s;
    //     } else {
    //         this.currencyData.symbol = "BTCUSDT";
    //         this.$router.push("/exchange");
    //     }
    // },


 
}
</script>

<style scoped>
.cus_border {
    border: 1px solid var(--light-yellow);
}

.border_end {
    border-right: 1px solid var(--light-yellow);
}

.cus_border_bottom {
    border-bottom: 1px solid var(--light-yellow);
}
</style>

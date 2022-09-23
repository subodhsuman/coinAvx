<template>
<div>
    <section class="exchnage cus_border">
        <div class="container-fluid">
            <div class="row  cus_border_bottom">
                <div class="col-xl-5 order-2 order-xl-1">
                    <div class="row cus_border_bottom">
                        <div class="col-md-6 col-xl-6 px-0 border_end">
                            <CryptoListComponent />
                        </div>
                        <div class="col-md-6 col-xl-6  px-0 border_end">
                            <OrderDepthComponent />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-xl-6 px-0 border_end">
                            <TradeHistoryComponent />
                        </div>
                        <div class="col-md-6 col-xl-6  pe-0 border_end">
                            <MarketActivityComponent />
                        </div>
                    </div>
                </div>
                <div class="col-xl-7 order-1 order-xl-2">
                    <div class="row">
                        <div class="col-xl-12">
                            <DetailBarComponent />
                        </div>
                        <div class="col-xl-12">
                            <ChartComponent />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12">
                            <BuySellComponent />
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
import CryptoListComponent from '@/components/Future-Trading/CryptoListComponent.vue'
import OrderDepthComponent from '@/components/Future-Trading/OrderDepthComponent.vue'
import TradeHistoryComponent from '@/components/Future-Trading/TradeHistoryComponent.vue'
import MarketActivityComponent from '@/components/Future-Trading/MarketActivityComponent.vue'
import DetailBarComponent from '@/components/Future-Trading/DetailBarComponent.vue'
import ChartComponent from '@/components/Future-Trading/ChartComponent.vue'
import BuySellComponent from '@/components/Future-Trading/BuySellComponent.vue'
import OrderComponent from '@/components/Future-Trading/OrderComponent.vue'

export default {
    name: 'MarginExchange',
    components: {
        CryptoListComponent,
        OrderDepthComponent,
        TradeHistoryComponent,
        MarketActivityComponent,
        ChartComponent,
        DetailBarComponent,
        BuySellComponent,
        OrderComponent

    }
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

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
                <div class="col-xl-7 order-1 order-xl-2" >
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
import CryptoListComponent from '@/components/Margin-Trading/CryptoListComponent.vue'
import OrderDepthComponent from '@/components/Margin-Trading/OrderDepthComponent.vue'
import TradeHistoryComponent from '@/components/Margin-Trading/TradeHistoryComponent.vue'
import MarketActivityComponent from '@/components/Margin-Trading/MarketActivityComponent.vue'
import DetailBarComponent from '@/components/Margin-Trading/DetailBarComponent.vue'
import ChartComponent from '@/components/Margin-Trading/ChartComponent.vue'
import BuySellComponent from '@/components/Margin-Trading/BuySellComponent.vue'
import OrderComponent from '@/components/Margin-Trading/OrderComponent.vue'

export default {
    name: 'MarginTrading',
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

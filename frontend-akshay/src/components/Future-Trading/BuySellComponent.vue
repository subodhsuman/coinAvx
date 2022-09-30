<template>
<div class="cus-border">

    <div class="py-2">
        <!-- HEADING -->

        <div class="buysell_heading">
            <ul class="nav nav-pills mb-2" id="pills-tab" role="tablist">
                <li class="buy_long nav-item" role="presentation">
                    <button class="nav-link active pb-1" id="pills-buy-long-tab" data-bs-toggle="pill" data-bs-target="#pills-buy-long" type="button" role="tab" aria-controls="pills-buy-long" aria-selected="true">BUY/LONG</button>
                </li>
                <li class="sell_short nav-item" role="presentation">
                    <button class="nav-link pb-1" id="pills-sell-short-tab" data-bs-toggle="pill" data-bs-target="#pills-sell-short" type="button" role="tab" aria-controls="pills-sell-short" aria-selected="false">SELL/SHORT</button>
                </li>

            </ul>

        </div>

        <!-- LIMIT BUTTON -->
        <div class="limit_box">
            <button type="button" class="btn_limit rounded">Limit</button>
        </div>

        <!-- TAB CONTENT -->
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-buy-long" role="tabpanel" aria-labelledby="pills-buy-long-tab">
                <!--buy-long  box  -->
                <div class="row  margin_buy_sell">
                    <div class="col-md-12 col-lg-12 col-xl-12 mb-4 mb-md-0">
                        <!-- BUY LONG FORM  -->
                        <FutureBuySell :show="isbuy" :text="'BUY'"/>

                    </div>
                </div>
                </div>
                <div class="tab-pane fade" id="pills-sell-short" role="tabpanel" aria-labelledby="pills-sell-short-tab">
                    <!--buy-long  box  -->
                    <div class="row  margin_buy_sell">
                        <div class="col-md-12 col-lg-12 col-xl-12 mb-4 mb-md-0">
                            <FutureBuySell :show="!isbuy" :text="'SELL'"/>
                        </div>
                    </div>
                </div>
            
        </div>

    </div>
</div>
</template>

<script>
import FutureBuySell from '@/Utilites/FutureBuySell.vue'
export default {
    name: 'BuySellComponent',
    components: {
        FutureBuySell
    },
    data(){
        return{
            isbuy:true
        }
    }
}
</script>

<style scoped>
.nav-link {
    color: var(--avx-white);
    font-size: 15px;
    border-bottom: 1px solid transparent;
    border-radius: 0;
    font-weight: 600;
}

.nav-pills .buy_long .nav-link.active,
.nav-pills .show>.nav-link {
    color: var(--green);
    background-color: transparent;
    border-bottom: 1px solid var(--green);
}

.nav-pills .sell_short .nav-link.active,
.nav-pills .show>.nav-link {
    color: var(--red);
    background-color: transparent;
    border-bottom: 1px solid var(--red);
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


</style>

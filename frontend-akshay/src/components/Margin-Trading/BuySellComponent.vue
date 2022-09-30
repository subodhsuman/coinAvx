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
            </div>
        </div>
        <!-- LIMIT BUTTON -->
        <div class="limit_box mb-2">
            <button type="button" class="btn_limit rounded">Limit</button>
        </div>

        <!-- TAB CONTENT -->
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-spot" role="tabpanel" aria-labelledby="pills-spot-tab">
                <!--Margin BUY box  -->
                <div class="row buy_sell">
                    <div class="col-md-6 col-xl-6 mb-4 mb-md-0">
                        <MarginBuySell order_side="buy" currency="usdt" />
                    </div>
                    <!--Margin SELL box  -->
                    <div class="col-md-6 col-xl-6">
                        <MarginBuySell order_side="sell" currency="usdt" />
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
import MarginBuySell from '@/Utilites/MarginBuySell.vue'
export default {
    name: 'BuySellComponent',
    components: {
        MarginBuySell
    },
    data() {
        return {
            clickedAmt: 1,
        }
    },
    methods: {
        amount(val) {
            this.clickedAmt = val
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

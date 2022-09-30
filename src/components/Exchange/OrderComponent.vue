<template>
<div class="orders_box p-2">
    <div class="d-md-flex d-block  justify-content-between">
        <ul class="nav nav-pills mb-2" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link py-1 active" id="pills-order-tab" data-bs-toggle="pill" data-bs-target="#pills-order" type="button" role="tab" aria-controls="pills-order" aria-selected="true">Order</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link py-1" id="pills-open-history-tab" data-bs-toggle="pill" data-bs-target="#pills-open-history" type="button" role="tab" aria-controls="pills-open-history" aria-selected="false">Open History</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link py-1" id="pills-trde-hiostory-tab" data-bs-toggle="pill" data-bs-target="#pills-trde-hiostory" type="button" role="tab" aria-controls="pills-trde-hiostory" aria-selected="false">Trde Hiostory</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link py-1" id="pills-fund-tab" data-bs-toggle="pill" data-bs-target="#pills-fund" type="button" role="tab" aria-controls="pills-fund" aria-selected="false">Funds</button>
            </li>
        </ul>
        <div class="hide_check">
            <div class="form-check">
                <input class="form-check-input shadow-none" type="checkbox" value="" id="flexCheckChecked">
                <label class="form-check-label" for="flexCheckChecked">
                    Hide Other Pairs
                </label>
            </div>
        </div>
    </div>

    <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-order" role="tabpanel" aria-labelledby="pills-order-tab">
            <!-- ___________OPEN ORDERS -->
            <OpenOrderComponent />
        </div>
        <div class="tab-pane fade" id="pills-open-history" role="tabpanel" aria-labelledby="pills-open-history-tab">
            <!-- _________OPEN history -->
            <TimelineComponent />
            <OpenHistory />
        </div>
        <div class="tab-pane fade" id="pills-trde-hiostory" role="tabpanel" aria-labelledby="pills-trde-hiostory-tab">
            <TimelineComponent />
            <TradeHistory />
           
        </div>
        <div class="tab-pane fade" id="pills-fund" role="tabpanel" aria-labelledby="pills-fund-tab">
           
            <FundComponent />
        </div>

        <div class="pagination_box d-flex justify-content-end mt-4" style="color:white">
            <pagination v-model="page" :records="recordData" :per-page="perPageData" :options="options" @paginate="referrals" />
        </div>
    </div>

</div>
</template>

<script>
import TimelineComponent from '@/components/Exchange/TimelineComponent.vue'
import OpenOrderComponent from '@/components/Exchange/OrderViewComponent/OpenOrderComponent.vue'
import OpenHistory from '@/components/Exchange/OrderViewComponent/OpenHistory.vue'
import TradeHistory from '@/components/Exchange/OrderViewComponent/TradeHistory.vue'
import FundComponent from '@/components/Exchange/OrderViewComponent/FundComponent.vue'
export default {
    name: 'OrderComponent',
    components: {
        TimelineComponent,
        OpenOrderComponent,
        OpenHistory,
        TradeHistory ,
        FundComponent
    },
    data() {
        return {
            page: 1,
            recordData: 3,
            perPageData: 1,
        }
    }

}
</script>

<style scoped>
.orders_box .nav-link {
    color: var(--avx-white);
    font-size: 15px;
    border-bottom: 1px solid transparent;
    border-radius: 0;
    margin-bottom: 0px;

}

.orders_box .nav-pills .nav-link.active,
.orders_box .nav-pills .show>.nav-link {
    color: var(--avx-yellow);
    background-color: transparent;
    border-bottom: 1px solid var(--avx-yellow);
}

.form-check-input {
    background-color: transparent;
    border: 1px solid var(--avx-yellow);
    border-radius: 0;
}

.form-check-input:checked {
    background-color: var(--avx-yellow);
    border-color: var(--avx-yellow);
}
.hide_check label{
    color: var(--avx-white);
}
@media all and (min-width: 320px) and (max-width: 767px) {
    .orders_box .nav-link {
    margin-bottom: 10px;
}
}
</style>

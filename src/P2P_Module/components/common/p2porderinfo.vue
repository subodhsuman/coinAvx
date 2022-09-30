<template>
    <div>
        <div class="order-info">
            <h6 class="mb-3 text-capitalize">{{orderInfo}}</h6>
            <div class="row mb-4">
                <div class="col-12 col-sm-4 col-lg-3 col-xl-2">
                    <div class="order-amount border-end">
                        <p class="mb-0 text-capitalize">amount</p>
                        <h6 class="mb-0" :style="'color:var(--avx-green)'">₹ 600.00</h6>
                    </div>
                </div>
                <div class="col-12 col-sm-4 col-lg-3 col-xl-2">
                    <div class="order-amount mt-2 mt-sm-0 border-end">
                        <p class="mb-0 text-capitalize">price</p>
                        <h6 class="mb-0">₹ 83.28</h6>
                    </div>
                </div>
                <div class="col-12 col-sm-4 col-lg-3 col-xl-2">
                    <div class="order-amount mt-2 mt-sm-0">
                        <p class="mb-0 text-capitalize">quantity</p>
                        <h6 class="mb-0">7.20 USDT</h6>
                    </div>
                </div>
            </div>
            <h6 class="mb-4 text-capitalize" v-if="FromBuy">{{FromBuy}}</h6>
        </div>
    </div>
</template>
<script>
export default{
    name:'P2pOrderInfo',
    props:{
        FromBuy:String,
        orderInfo:String
    }
}
</script>
<style scoped>
.order-amount p{
    font-size: 14px;
    font-weight: 400;
}
.order-info h6{
    font-size: 14px;
    font-weight: 500;
}
.order-amount{
    border-color: var(--avx-lightyellow) !important;
}
</style>
<template>
<div class="p-2">
    <!-- Market Activity Head -->
    <div class="activity-haed py-1">
        <h6>Market Activities</h6>
    </div>
    <!-- Market Activity Content -->
    <div class="market_activity_content d-flex justify-content-between align-items-center py-1" v-for="(data,index) in ActivityData" :key="index">
        <div class="pair_box">
            <p class="mb-0">{{data.pair_one}}/{{data.pair_two}}</p>
            <span>{{data.time}}</span>
        </div>
        <div class="change_box">
            <p class="mb-0" :style="data.price > 0? 'color:var(--green);' : 'color:var(--red);'"> {{data.price}}%</p>
            <span> {{data.change}}</span>
        </div>
        <div class="py-2" :style="data.price > 0? 'background-color:var(--progress-green);' : 'background-color:var(--progress-red);'">
            <span class="px-3 " :style="data.price > 0? 'color:var(--green);' : 'color:var(--red);'"> - > - </span>
            <!-- <img src="../../assets/images/icons/activity-arrow.svg" alt=""> -->
        </div>

    </div>
</div>
</template>

<script>
export default {
    name: 'MarketActivityComponent',
    data() {
        return {
            ActivityData: [{
                    pair_one: "SHIB",
                    pair_two: 'INR',
                    time: '12:30:05',
                    price: '-8.05',
                    change: 'New 24h Low'
                },
                {
                    pair_one: "SHIB",
                    pair_two: 'INR',
                    time: '12:30:05',
                    price: '-8.05',
                    change: 'New 24h Low'
                },
                {
                    pair_one: "SHIB",
                    pair_two: 'INR',
                    time: '12:30:05',
                    price: '8.05',
                    change: 'New 24h Low'
                },
                {
                    pair_one: "SHIB",
                    pair_two: 'INR',
                    time: '12:30:05',
                    price: '8.05',
                    change: 'New 24h Low'
                },
                {
                    pair_one: "SHIB",
                    pair_two: 'INR',
                    time: '12:30:05',
                    price: '-8.05',
                    change: 'New 24h Low'
                }
            ]
        }
    }
}
</script>

<style scoped>
.activity-haed h6 {
    color: var(--avx-yellow);
}

.market_activity_content {
    font-size: 13px;
    color: var(--avx-white);
}

.pair_box span {
    color: var(--text-grey);
}
</style>

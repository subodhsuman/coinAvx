<template>
    <div>
        <div class="created">
            <p class="mb-0">Order Number:<span>{{orderNo}}</span></p>
            <p class="mb-0">Time Created:<span>{{orderTime}}</span></p>
        </div>
    </div>
</template>
<script>
export default{
    name:'P2pCreated',
    props:{
        orderNo:String,
        orderTime:String
    }
}
</script>
<style scoped>
.created p{
    font-size: 15px;
}
.created p span{
    font-weight: 500;
}
</style>
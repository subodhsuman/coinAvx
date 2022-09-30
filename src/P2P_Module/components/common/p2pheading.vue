<template>
    <div>
        <div class="transfer-heading text-center mt-5">
            <h5>{{heading}}</h5>
            <p>{{description}}</p>
            <div class="transfer-timer" v-if="userBought">
                <h5><span>1</span><span>4</span>:<span>0</span><span>0</span></h5>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'P2pHeading',
    props:{
        heading:String,
        description: String,
        userBought:Boolean
    }
}
</script>
<style scoped>
.transfer-heading h5{
    font-size: 24px;
    font-weight: 600;
}
.transfer-heading p{
    font-size: 16px;
    color: var(--avx-gray);
}
.transfer-timer h5{
    font-size: 26px;
    font-weight: 600;
}
.transfer-timer h5 span{
    height: 33px;
    width: 33px;
    background-color: var(--avx-yellow);
    margin: 4px;
    padding: 2px;
    display: inline-block;
    border-radius: 50%;
}

</style>
<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-4">
                    <div class="transfer-info-tab text-center mb-2 mb-md-0">
                        <button class="btn rounded-pill px-4" @click=select(1) :style="(selected==1)?'background-color:var(--avx-yellow)':''">{{headlineA}}</button>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="transfer-info-tab text-center mb-2 mb-md-0">
                        <button class="btn rounded-pill px-4" @click=select(2) :style="(selected==2)?'background-color:var(--avx-yellow)':''">{{headlineB}}</button>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="transfer-info-tab text-center">
                        <button class="btn rounded-pill px-4" @click=select(3) :style="(selected==3)?'background-color:var(--avx-yellow)':''">{{headlineC}}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
export default{
    name:'P2pTabs',
    props:{
        headlineA:String,
        headlineB:String,
        headlineC:String
    },
    data(){
        return{
            selected:1
        }
    },
    methods:{
        select(param){
            this.selected = param
        }
    }
}
</script>
<style scoped>

.transfer-info-tab button{
    border-color: var(--avx-yellow);
    color: var(--avx-white);
    font-size: 15px;
    font-weight: 500;
}
.transfer-info-tab button:hover{
    border-color: var(--avx-yellow);
    color: var(--avx-white);
    background-color: var(--avx-yellow) !important;
}
</style>
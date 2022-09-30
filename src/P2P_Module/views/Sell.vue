<template>
    <div>
        <div class="p2p-sell border p-2">
            <P2pHeading :heading="'Sell USDT To Demoname '" :description="'Order Received. Please Confirm Once Payment Is Received'" />
            <div class="ordersell-info my-4 border py-4 px-2">
                <div class="row justify-content-between">
                    <div class="col-12 col-sm-6 col-lg-7 col-xxl-7">
                        <div class="p2psell-outer d-flex justify-content-lg-center">
                            <div class="sellinfo mt-lg-5 px-2">
                                <P2pOrderInfo :orderInfo = "'order info'"/>
                                <div class="border-bottom w-50 d-none d-lg-block" :style="'border-color:var(--avx-lightyellow)!important'"></div>
                                <div class="payment-text d-flex justify-content-between align-items-center my-4">
                                    <h6 class="mb-0">Payment Method</h6>
                                    <a href="" class="text-capitalize text-decoration-none" role="button" id="alldropdown" data-bs-toggle="dropdown" aria-expanded="false">view all&nbsp;<img loading="lazy" src="../assets/icons/components/arrow_yellow_right.svg" alt="viewall" class="img-fluid" /></a>
                                    <ul class="dropdown-menu p-0 view_dropdown_ul" aria-labelledby="alldropdown">
                                        <li><a class="dropdown-item rounded" href="#">Details</a></li>
                                        <li><a class="dropdown-item rounded" href="#">Another action</a></li>
                                        <li><a class="dropdown-item rounded" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div class="payment_type mb-4">
                                    <img src="../assets/icons/sell/imps.svg" alt="imps" class="img-fluid" />
                                </div>
                                <div class="demoname_area rounded p-4">
                                    <h6>Name: <span>Demoname&nbsp;<img src="../assets/icons/sell/copy.svg" alt="copy" class="img-fluid" /></span></h6>
                                    <h6>Bank Account Number: <span>3274728934723974&nbsp;<img src="../assets/icons/sell/copy.svg" alt="copy" class="img-fluid" /></span></h6>
                                    <h6>IFSC Code: <span>SBIIN254645&nbsp;<img src="../assets/icons/sell/copy.svg" alt="copy" class="img-fluid" /></span></h6>
                                    <h6>Bank Name: <span>SBI&nbsp;<img src="../assets/icons/sell/copy.svg" alt="copy" class="img-fluid" /></span></h6>
                                    <div class="dropdown more_dropdown">
                                        <p class="text-capitalize" role="button" id="moredropdown" data-bs-toggle="dropdown" aria-expanded="false">more&nbsp;<img src="../assets/icons/sell/arrow_yellow_down.svg" alt="more" class="img-fluid" ></p>

                                        <ul class="dropdown-menu p-0" aria-labelledby="moredropdown">
                                            <li><a class="dropdown-item rounded" href="#">Details</a></li>
                                            <li><a class="dropdown-item rounded" href="#">Another action</a></li>
                                            <li><a class="dropdown-item rounded" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4 col-xxl-3">
                        <div class="chatbox-outer pe-lg-4 mt-lg-5">
                            <Chatbox />
                            <!--chatbox-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import P2pHeading from '../components/common/p2pheading.vue';
import P2pOrderInfo from '../components/common/p2porderinfo.vue';
import Chatbox from '../components/common/p2pchatbox.vue';
export default{
    name:'P2pSell',
    components:{
        P2pHeading,
        P2pOrderInfo,
        Chatbox
    }
}
</script>
<style scoped>
.p2p-sell{
    border-color: var(--avx-lightyellow) !important;
    background-color: var(--avx-black);
    color:var(--avx-white);
}
.ordersell-info {
    border-color: var(--avx-lightyellow) !important;
}
.payment-text a{
    font-size: 15px;
    font-weight: 600;
    white-space: nowrap;
    color: var(--avx-yellow);
}
.demoname_area {
    background-color: var(--avx-demoname-bg);
}
.demoname_area h6{
    font-size: 15px;
    margin-bottom: 15px;
}
.demoname_area h6 span{
    font-weight: 400;
}
.demoname_area p{
    font-size: 14px;
    font-weight: 500;
    color: var(--avx-yellow);
}
.more_dropdown ul{
    background-color: var(--avx-black-ab);
}
.more_dropdown ul li a{
    background-color: var(--avx-black-ab);
    color: var(--avx-white);
    font-size: 14px;
}
.more_dropdown ul li a:hover{
    background-color: var(--avx-black);
    color: var(--avx-yellow);
}
.view_dropdown_ul{
    background-color: var(--avx-black-ab);
}
.view_dropdown_ul li a{
    color: var(--avx-white);
    background-color: var(--avx-black-ab);
}
.view_dropdown_ul li a:hover{
    color: var(--avx-yellow);
    background-color: var(--avx-black);
}
@media all and (min-width:1199px){
    .demoname_area, .payment-text{
        width:50%
    }
    .sellinfo {
        width: 75%;
    }
}
</style>
<template>
    <div>
        <div class="transfer border">
            <P2pHeading :heading="'Buy  USDT From Demoname '" :description="'The Order Is Created , Please Wait For System Confirmation.'" :userBought="true" />
            <div class="order-time d-flex justify-content-end px-2 mb-3">
                <P2pCreated :orderNo="'203557488877554455'" :orderTime="'2022-04-01  17:34:12'"/>
            </div>
            <div class="transfer-tabs border py-5">
                <P2pTabs :headlineA="'1. Transfer payment to seller'" :headlineB="'2. Pending Seller To Release Cryptos'" :headlineC="'3. Completed'" />
            </div>
            <div class="confirm-order-info py-4 border border-top-0">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 col-md-7">
                            <div class="confirm-order py-2">
                                <div class="order-content ps-3">
                                    <P2pOrderInfo :orderInfo="'confirm order info'" :FromBuy="'Transfer The Funds To The Sellers Account Provided Below.'" />
                                    <div class="row mb-3 align-items-center">
                                        <div class="col-12 col-sm-4 col-lg-3 col-xl-2">
                                            <div class="order-payment-type border-end">
                                                <div class="form-check checkbox-payment">
                                                    <input class="form-check-input rounded-pill" type="checkbox" value="" checked>
                                                    <img src="../assets/icons/buy/upi.svg" alt="upi" class="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-4 col-lg-3 col-xl-2">
                                            <div class="order-payment-type mt-2 mt-sm-0 border-end">
                                                <div class="form-check checkbox-payment">
                                                    <input class="form-check-input rounded-pill" type="checkbox" value="">
                                                    <img loading="lazy" src="../assets/icons/buy/phonepay.svg" alt="upi" class="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-4 col-lg-3 col-xl-2">
                                            <div class="order-payment-type mt-2 mt-sm-0">
                                                <div class="form-check checkbox-payment">
                                                    <input class="form-check-input rounded-pill" type="checkbox" value="">
                                                    <img loading="lazy" src="../assets/icons/buy/googlepay.svg" alt="upi" class="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                    <div class="row">
                                        <div class="col-12 col-lg-6 col-xxl-4">  
                                            <div class="order-user-area p-4 mb-4"> 
                                                <P2pUserDetails />
                                            </div> 
                                        </div>
                                    </div>
                                    <div class="transfer-msg mb-3">
                                        <h6 class="mb-0 text-uppercase">After Transferring The Funds. Click On The "Transferred, Notify Seller" Button.</h6>
                                    </div>
                                    <!-- transfer-msg -->
                                    <div class="transfer-msg-btn">
                                        <button class="btn text-uppercase rounded-pill" @click="transfer(1)" :style="(transferred==1)?'background-color:var(--avx-yellow);border-color:var(--avx-yellow)':''">transferred,notify seller</button>
                                        <button 
                                            class="btn text-uppercase rounded-pill ms-2 mt-1 mt-sm-0"  
                                            @click="transfer(2)" 
                                            :style="(transferred==2)?'background-color:var(--avx-yellow);border-color:var(--avx-yellow)':''"
                                            data-bs-toggle="modal" 
                                            data-bs-target="#cancelOrderModal"
                                        >
                                            cancel order
                                        </button>
                                    </div>
                                </div>    
                            </div>  
                        </div>
                        <div class="col-12 col-md-5 col-lg-4 col-xxl-3">
                            <Chatbox />
                            <!-- p2p-chatbox -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- cancel order Modal -->
        <div class="modal fade" id="cancelOrderModal" tabindex="-1" aria-labelledby="cancelOrderModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content ordercancelmodal">
                    <div class="modal-header px-2 pb-0 border-0">
                        <div class="cancel-order-heading text-center w-100">
                            <h6 class="mb-0 text-capitalize">cancel order</h6>
                        </div>
                        <button type="button" class="p-0 bg-transparent border-0" data-bs-dismiss="modal"><img loading="lazy" src="../assets/icons/buy/cross_red.svg" alt="close" class="img-fluid" /></button>
                    </div>
                    <div class="modal-body">
                        <div class="tips-main pb-3 border-bottom mb-4">
                            <div class="d-flex gap-2 align-items-center mb-3">
                                <img loading="lazy" src="../assets/icons/buy/info1.svg" alt="tips" class="img-fluid" />
                                <div class="tips">
                                    <p class="mb-0">Tips</p>
                                </div>
                            </div>
                            <div class="tips-description ms-4 mb-4">
                                <p class="mb-1">1. If you have already paid the seller,please do not cancel the order.</p>
                                <p class="mb-1">2. If the seller does not reply to chat within 15 mins, you will be unaccountable for this order's cancellation. It will not affect your completion rate.You can make upto <span class="text-yellow">5 unaccountable cancellations</span> in a day.</p>
                                <p class="mb-1">3. Your account will be suspended for the day if you exceed 3 accountable cancellations in a day.</p>
                            </div>
                        </div>
                        <div class="why-cancel">
                            <p class="mb-2">Why Do You Want To Cancel The Order?</p>
                            <div class="form-check ms-4 mb-2 cancel-reason-checkbox">
                                <input class="form-check-input rounded-pill" type="checkbox" value="" />
                                <label class="form-check-label">
                                    I do not want to trade anymore.
                                </label>
                            </div>
                            <div class="form-check ms-4 mb-2 cancel-reason-checkbox">
                                <input class="form-check-input rounded-pill" type="checkbox" value="" />
                                <label class="form-check-label">
                                    I do not meet the requirements of the advertiser's trading terms and condition.
                                </label>
                            </div>
                            <div class="form-check ms-4 mb-2 cancel-reason-checkbox">
                                <input class="form-check-input rounded-pill" type="checkbox" value="" />
                                <label class="form-check-label">
                                    Seller is asking for extra fee.
                                </label>
                            </div>
                            <div class="form-check ms-4 cancel-reason-checkbox">
                                <input class="form-check-input rounded-pill" type="checkbox" value="" />
                                <label class="form-check-label">
                                    Other reasons.
                                </label>
                            </div>
                        </div>
                        
                    </div>
                    <div class="modal-footer border-0 justify-content-start justify-content-sm-center" style="{}">
                        <div class="order-footer-button w-50 d-flex justify-content-between">
                            <button type="button" class="btn rounded-pill text-capitalize px-4" data-bs-dismiss="modal">cancel</button>
                            <button 
                                type="button" 
                                class="btn rounded-pill text-capitalize ms-2 px-4" 
                                :style="'background-color:var(--avx-yellow);border-color:var(--avx-yellow)'"
                                data-bs-toggle="modal" 
                                data-bs-target="#cancelOrdermsgModal"
                            >
                                confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--cancelorderModal-->

        <!--cancelordermsgModal-->
        <div class="modal fade" id="cancelOrdermsgModal" tabindex="-1" aria-labelledby="cancelOrdermsgModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content ordercancelmodal">
                    <div class="modal-header pb-0 border-0 justify-content-end">
                        <button type="button" class="p-0 bg-transparent border-0" data-bs-dismiss="modal"><img loading="lazy" src="../assets/icons/buy/cross_red.svg" alt="close" class="img-fluid" /></button>
                    </div>
                    <div class="modal-body">
                        <div class="msg-outer d-flex align-items-center justify-content-center">
                            <div class="text-center order-cancelled">
                                <img loading="lazy" src="../assets/icons/buy/cross_red_circle.svg" alt="order-cancelled" class="img-fluid mb-2" />
                                <h3 class="mb-3 text-capitalize">your order has been cancelled.</h3>
                                <button class="btn text-uppercase rounded-pill" data-bs-dismiss="modal"><router-link to="/p2pordercancelled" class="text-decoration-none">continue</router-link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- cancelordermsgModal -->
    </div>
</template>
<script>
import Chatbox from '../components/common/p2pchatbox.vue';
import P2pHeading from '../components/common/p2pheading.vue';
import P2pTabs from '../components/common/p2ptabs.vue';
import P2pCreated from '../components/common/p2pordercreated.vue';
import P2pOrderInfo from '../components/common/p2porderinfo.vue';
import P2pUserDetails from '../components/common/p2puserdetails.vue';
export default{
    name:'P2PBuy',
    components:{
        P2pHeading,
        P2pCreated,
        P2pTabs,
        Chatbox,
        P2pOrderInfo,
        P2pUserDetails
        
    },
    data(){
        return{
            transferred:1
        }
    },
    methods:{
        transfer(val){
            this.transferred = val
        }
    }
}
</script>
<style scoped>
.transfer{
    border-color: var(--avx-lightyellow) !important;
    background-color: var(--avx-black);
    color:var(--avx-white);
}
.transfer-tabs{
    background-color: var(--avx-black-aa);
    border-color: var(--avx-lightyellow) !important;
}
.confirm-order-info{
    background-color: var(--avx-black-aa);
    border-color: var(--avx-lightyellow) !important;
    padding-left: 70px;
    padding-right: 70px;
}
/* .confirm-order{
    height: 500px;
    overflow-y: scroll;
    direction: rtl;
}
.confirm-order .order-content{
    direction:ltr;
} */
.order-payment-type{
    border-color: var(--avx-lightyellow) !important;
}
.checkbox-payment .form-check-input{
    border-color: var(--avx-yellow);
    background-color: transparent;
}
.checkbox-payment .form-check-input:checked{
    border-color: var(--avx-yellow);
}
.checkbox-payment .form-check-input:focus{
    box-shadow: unset;
}
.checkbox-payment .form-check-input:checked[type="checkbox"]{
    background-image: unset;
    background-color: var(--avx-yellow);
}
.order-user-area{
    background-color: var(--avx-demoname-bg);
}
.transfer-msg-btn button{
    color: var(--avx-white);
    border-color: var(--avx-white);
    font-weight: 500;
    font-size: 15px;
}
.transfer-msg-btn button:hover{
    border-color: var(--avx-yellow);
    background-color: var(--avx-yellow);
}

/*cancel order modal */
.ordercancelmodal{
    background-color: var(--avx-demoname-bg);
    color: var(--avx-white);
}
.cancel-order-heading h6{
    font-size: 16px;
    font-weight: 700;
}
.order-footer-button button{
    color: var(--avx-white);
    border-color: var(--avx-lightyellow);
}
.order-footer-button button:hover{
    border-color: var(--avx-lightyellow);
}
.tips p,.why-cancel p{
    font-weight: 500;
}
.tips-main{
    border-color: var(--avx-lightyellow) !important;
}
.cancel-reason-checkbox .form-check-label{
    font-size: 15px;
}
.cancel-reason-checkbox .form-check-input{
    background-color: transparent;
    border-color: var(--avx-lightyellow);
}
.cancel-reason-checkbox .form-check-input:focus{
    box-shadow: none;
}
.cancel-reason-checkbox .form-check-input:checked[type="checkbox"]{
    background-image: unset;
    background-color: var(--avx-yellow);
}
/* ordermsgModal */
.msg-outer{
    height: 200px;
}
.order-cancelled h3{
    font-size: 16px;
    font-weight: 700;
}
.order-cancelled button{
    border-color: var(--avx-yellow);
    background-color: var(--avx-yellow);
}
.order-cancelled button:hover{
    border-color: var(--avx-yellow);
    background-color: var(--avx-yellow);
}
.order-cancelled button a{
    color: var(--avx-white);
    font-weight: 500;
}

@media all and (min-width:320px) and (max-width:576px){
    .confirm-order-info{
        padding: 0;
    }
}
</style>
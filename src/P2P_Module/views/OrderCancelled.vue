<template>
    <div>
        <div class="order-cancel border p-2">
            <div class="transfer-heading text-center mt-5">
                <h5 class="mb-3 text-capitalize">ordered cancelled&nbsp;<img loading="lazy" src="../assets/icons/buy/info1.svg" alt="i" class="img-fluid" /></h5>
                <p class="mb-0 text-capitalize">you have cancelled the order</p>
            </div>
            <div class="order-time d-flex justify-content-end px-2 mb-3">
                <P2pCreated :orderNo="'203557488877554455'" :orderTime="'2022-04-01  17:34:12'"/>
            </div>
            <div class="order-cancelled-info my-4 border py-4">
                <div class="container-fluid">
                    <div class="row justify-content-between">
                        <div class="col-12 col-sm-6 col-lg-7 col-xxl-7">
                            <div class="order-outer d-flex justify-content-lg-center w-100">
                                <div class="ordercancelInfo mt-lg-5 w-75">
                                    <P2pOrderInfo :orderInfo="'confirm order info'" />
                                    <div class="border-bottom w-50 d-none d-lg-block" :style="'border-color:var(--avx-lightyellow)!important'"></div>
                                    <div class="payment-text my-4">
                                        <h6 class="mb-0">Payment Method</h6>
                                    </div>
                                    <div class="cannotDisplay border rounded py-3 ps-3 mb-4">
                                        <p class="mb-0 text-capitalize">payment method can't be displayed for this order.</p>
                                    </div>
                                    <div class="have-question mb-3">
                                        <button 
                                            class="btn p-0 border-0"
                                        >
                                            <span class="text-capitalize cursor-pointer" data-bs-toggle="modal" data-bs-target="#haveqmodal">have a question</span>
                                        </button>
                                    </div>
                                    <div class="faq">
                                        <h5 class="text-uppercase">faq</h5>
                                        <p class="mb-0">
                                            <img 
                                                loading="lazy" 
                                                src="../assets/icons/cancelledorder/plus_yellow.svg" 
                                                alt="faq" 
                                                class="img-fluid cursor-pointer"
                                                data-bs-toggle="modal" 
                                                data-bs-target="#faqmodal"
                                            />&nbsp;I have already paid, but the order expires and the system automatically cancels  it .What should I do?</p>
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
        <!--have q-->
        <div class="modal fade" id="haveqmodal" tabindex="-1" aria-labelledby="haveqmodalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border faq-content">
                    <div class="modal-header border-bottom-0">
                        <div class="cancel-order-heading text-center w-100">
                            <h6 class="mb-0 text-capitalize">have a question</h6>
                        </div>
                        <button type="button" class="p-0 bg-transparent border-0" data-bs-dismiss="modal"><img loading="lazy" src="../assets/icons/buy/cross_red.svg" alt="close" class="img-fluid" /></button>
                    </div>
                    <div class="modal-body p-4">
                        <div class="negotiate d-flex gap-2 mb-1">
                            <img loading="lazy" src="../assets/icons/cancelledorder/msg_square.svg" alt="message-square" class="img-fluid" />
                            <h6 class="mb-0 text-capitalize">negotiate with the counterparty</h6>
                        </div>
                        <div class="neg_text">
                            <p>If there is an issue with the transaction, the most effective solution is to contact the counterparty directly. You can upload the payment receiptand account information in the chat window for both parties to verify and negotiate</p>
                            <h6 class="mb-0 text-capitalize">chat</h6>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-between haveq_footer">
                       <div class="appeal">
                            <h5 class="text-capitalize">appeal</h5>
                            <p>The order has been completed and asset is no longer escrowed by CoinAVX. Please note that we are unable to directly trace back your assets.</p>
                            <div class="form-check haveq_checkbox">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    I paid but the order is cancelled.
                                </label>
                            </div>
                            <div class="form-check haveq_checkbox">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label mb-2" for="flexCheckDefault">
                                    Other reasons
                                </label>
                                <textarea name="" id="" cols="25" rows="5"></textarea>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
        <!--have q-->
        <!--faq modal-->
        <div class="modal fade" id="faqmodal" tabindex="-1" aria-labelledby="faqmodalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border faq-content">
                    <div class="modal-header border-bottom-0">
                        <div class="cancel-order-heading text-center w-100">
                            <h6 class="mb-0 text-capitalize">tips</h6>
                        </div>
                        <button type="button" class="p-0 bg-transparent border-0" data-bs-dismiss="modal"><img loading="lazy" src="../assets/icons/buy/cross_red.svg" alt="close" class="img-fluid" /></button>
                    </div>
                    <div class="modal-body">
                        <div class="faq_solution px-2">
                            <h5 class="text-capitalize">solution 1:</h5>
                            <p>If you paid but the order is canceled, your assets cannot be traced backautomatically. Please chat with the seller and ask the seller to refund.</p>
                            <h5 class="text-capitalize">solution 2:</h5>
                            <p>If you paid but the order is canceled, your assets cannot be traced back automatically. Please open a support ticket with order number.</p>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-between border-top-0 faq-footer">
                        <button type="button" class="btn rounded-pill text-uppercase px-5">support</button>
                        <router-link to="/p2p"><button type="button" data-bs-dismiss="modal" class="btn rounded-pill text-uppercase px-4" :style="'background-color:var(--avx-yellow);border-color:var(--avx-yellow)'">place another order</button></router-link>
                    </div>
                </div>
            </div>
        </div>
        <!--faq modal-->
    </div>
</template>
<script>
import P2pCreated from '../components/common/p2pordercreated.vue';
import Chatbox from '../components/common/p2pchatbox.vue';
import P2pOrderInfo from '../components/common/p2porderinfo.vue';
export default{
    name:'OrderCancelled',
    components:{
        P2pCreated,
        Chatbox,
        P2pOrderInfo
    }
}
</script>
<style scoped>
.order-cancel{
    border-color: var(--avx-lightyellow) !important;
    background-color: var(--avx-black);
    color: var(--avx-white);
}
.transfer-heading h5{
    font-size: 20px;
    font-weight: 600;
}
.transfer-heading p{
    font-size: 16px;
}
.order-cancelled-info{
    border-color: var(--avx-lightyellow) !important;
}
.payment-text h6{
    font-size: 15px;
    font-weight: 500;
}
.cannotDisplay{
    background-color: var(--avx-demoname-bg);
    border-color: var(--avx-lightyellow)!important;
}
.cannotDisplay p{
    font-size: 14px;
}
.have-question button span{
    color: var(--avx-yellow);
    text-decoration: underline;
    font-weight: 500;
}
.faq h5, .faq p{
    font-size: 15px;
}
/*faq modal*/
.faq-content{
    background-color: var(--avx-demoname-bg);
    color: var(--avx-white);
    border-color: var(--avx-lightyellow) !important;
}
.faq-footer button{
    border-color: var(--avx-white);
    color: var(--avx-white);
    font-size: 15px;
    font-weight: 500;
}
.faq-footer a {
    color: var(--avx-white);
}
.faq-footer button:hover{
    border-color: var(--avx-white);
}
.faq_solution h5, .appeal h5{
    font-size: 15px;
}
.faq_solution p, .neg_text p, .appeal p{
    font-size: 14px;
}
.neg_text{
    padding-left: 38px;
}
.neg_text h6{
    font-size: 16px;
    font-weight: 600;
    color: var(--avx-yellow);
}
.haveq_footer{
    border-color: var(--avx-lightyellow) !important;
}
.haveq_checkbox textarea{
    background-color: transparent;
    border-color: var(--avx-lightyellow);
    color: var(--avx-white);
    font-size: 14px;
}
.haveq_checkbox textarea:focus{
    outline: unset;
}
.haveq_checkbox label{
    font-size: 14px;
}
.haveq_checkbox input{
    background-color: transparent;
    border-radius: 50%;
    border-color: var(--avx-lightyellow);
}
.haveq_checkbox input:focus{
    box-shadow: none;
}
.haveq_checkbox .form-check-input:checked[type="checkbox"]{
    background-image: unset;
    background-color: var(--avx-yellow);
}
</style>
<template>
    <div>
        <div class="p2p-chatbox">
            <div class="chatbox-header py-4 px-3">
                <div class="chatbox-username d-flex gap-2 align-items-center">
                    <div class="seller-image rounded-pill d-flex align-items-center justify-content-center">
                        <p class="mb-0 text-uppercase">d</p>
                    </div>
                    <h5 class="mb-0 text-capitalize">demoname</h5>
                    <sub class="text-capitalize">verified user</sub>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6">
                        <div class="seller-trades ms-4">
                            <p class="mb-0">30d Trades</p>
                            <span>451</span>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="seller-trades ms-4">
                            <p class="mb-0">30d Completion Rate</p>
                            <span>90.93%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chat-area">
                <div class="chat-time text-center pt-2 mb-3">
                    <span>2022-04-01 17:34</span>
                </div>
                <div class="frl_chat">
                    <div class="sender d-flex justify-content-end">
                        <div class="message m-2 rounded w-75 p-2">
                            <span>Successfully Placed An Order , Please Pay Within The Time Limit.</span>
                        </div>
                    </div>
                    <div class="receiver d-flex justify-content-start">
                        <div class="message m-2 rounded w-75 p-2">
                            <span>Faster Payment Please...</span>
                        </div>
                    </div>
                    
                </div>
                <div class="chat-input py-2">
                    <div class="input-group">
                        <input type="text" class="form-control border-0" placeholder="Write a message" aria-label="Recipient's username" />
                        <span class="input-group-text"><ChooseImg />&nbsp;<img loading="lazy" src="@/P2P_Module/assets/icons/components/send.svg" alt="send" class="img-fluid" /></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ChooseImg from './ChooseImageComponent.vue'
export default{
    name:'P2pChatbox',
    components:{
        ChooseImg
    }
}
</script>
<style scoped>
.seller-image{
    height: 30px;
    width: 30px;
    background-color: var(--avx-white);
}
.chatbox-header{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: var(--avx-yellow);
}
.chat-input{
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.chatbox-username h5{
    font-size: 16px;
    font-weight: 600;
}
.chatbox-username sub, .seller-image p{
    color: var(--avx-black);
}
.seller-trades p{
    font-size: 14px;
    font-weight: 400;
}
.seller-trades span{
    font-size: 14px;
    font-weight: 600;
}
.chat-time span{
    font-weight: 400;
}
.chat-area{
    background-color: var(--avx-black);
}
.frl_chat{
    height: 229px;
    overflow-y: scroll;
}
.chat-input{
    background-color:var(--avx-yellow);
}
.chat-input .input-group .input-group-text{
    background-color:transparent;
    border: none;
}
.chat-input .input-group .form-control{
    background-color:transparent;
    color: var(--avx-white);
    font-size: 14px;
}
.chat-input .input-group .form-control::placeholder{
    color: var(--avx-white);
}
.chat-input .input-group .form-control:focus{
    box-shadow: none;
}
.sender .message{
    background-color: var(--avx-black-aa);
    border-bottom-left-radius: 20px !important;
    font-size:13px;
}
.receiver .message{
    background-color: var(--avx-demoname-bg);
    border-bottom-right-radius: 20px !important;
    font-size:13px;
}


</style>
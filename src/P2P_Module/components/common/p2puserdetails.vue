<template>
    <div>  
        <div class="order-user-info">
            <h6 class="mb-3">
                <span>Name:</span> 
                Demoname&nbsp;<img loading="lazy" src="@/P2P_Module/assets/icons/sell/copy.svg" alt="copy" class="img-fluid cursor-pointer" />
            </h6> 
            <h6 class="mb-3">
                <span class="text-uppercase">upi id:</span> 
                Demoname&nbsp;<img loading="lazy" src="@/P2P_Module/assets/icons/sell/copy.svg" alt="copy" class="img-fluid cursor-pointer" />
            </h6> 
            <h6 class="mb-0">
                <span class="text-capitalize">payment QR code: </span> 
                <img loading="lazy" src="@/P2P_Module/assets/icons/components/qr.svg" alt="copy" class="img-fluid cursor-pointer" />
            </h6> 
        </div>
    </div>
</template>
<script>
export default{
    name:'P2pUserDetails'
}
</script>
<style scoped>
.order-user-info h6 {
    font-size: 14px;
}
.order-user-info h6 span{
    font-weight: 400;
}
</style>
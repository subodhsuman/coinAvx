<template>
<div class="detail_bar">
    <ul class="list-unstyled d-md-flex d-block row justify-content-between text-center align-items-center p-1 mb-0">
        <li class=" col d-flex  align-items-center justify-content-center justify-content-md-start gap-2 mb-3 mb-md-0">
            <div class="currency_img"> <img src="../../assets/images/btc.png" alt="icon" style="height:65px"></div>
            <div class="currency_detail">
                <h6 class="mb-0">BTC/USDT</h6>
                <p class="mb-0">$21,462.60</p>
            </div>
        </li>
        <li class="col mb-3 mb-md-0">
            <span> 24 Hour Change</span>
            <h6> 2.14%</h6>
        </li>
        <li class="col mb-3 mb-md-0">
            <span style="color:var(--green)"> 24H High
                <svg xmlns="http://www.w3.org/2000/svg" width="10.843" height="10.843" viewBox="0 0 10.843 10.843">
                    <g id="Group_31243" data-name="Group 31243" transform="translate(-1319.996 -161.703)">
                        <path id="Path_143" data-name="Path 143" d="M10.5,18.514,18.514,10.5" transform="translate(1310.91 152.617)" fill="none" stroke="#44bd22" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        <path id="Path_144" data-name="Path 144" d="M10.5,10.5h8.014v8.014" transform="translate(1310.91 152.617)" fill="none" stroke="#44bd22" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </g>
                </svg>

            </span>
            <h6>₹39,110.82</h6>
        </li>
        <li class="col mb-3 mb-md-0">
            <span style="color:var(--red)">24H Low
                <svg xmlns="http://www.w3.org/2000/svg" width="10.838" height="10.838" viewBox="0 0 10.838 10.838">
                    <path id="Path_143" data-name="Path 143" d="M18.51,10.5,10.5,18.51" transform="translate(-9.086 -9.086)" fill="none" stroke="#fa2d2d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    <path id="Path_144" data-name="Path 144" d="M18.51,18.51H10.5V10.5" transform="translate(-9.086 -9.086)" fill="none" stroke="#fa2d2d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                </svg>

            </span>
            <h6> ₹37,708.58</h6>
        </li>
        <li class="col mb-3 mb-md-0">
            <span> 24H Vol (USDT)</span>
            <h6> 37,708483,771,101.8 USDT</h6>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'DetailBarComponent.vue'
}
</script>

<style scoped>
.detail_bar .currency_detail h6 {
    color: var(--avx-yellow);
}

.detail_bar .currency_detail p {
    color: var(--avx-white);
    font-size: 13px;
}

.detail_bar li span img {
    transform: rotate(45deg);
}

.detail_bar li span {
    color: var(--text-grey);
}

.detail_bar li,
.detail_bar li h6 {
    font-size: 13px;
    color: var(--avx-white);
}

.detail_bar li{
    border-right: 1px solid var(--avx-yellow);
}
.detail_bar li:nth-child(1) ,
.detail_bar li:nth-child(5) {
    border-right:0;
}

@media all and (min-width: 320px) and (max-width: 767px) {
    .detail_bar li{
    border-right: 0;
}
}
</style>

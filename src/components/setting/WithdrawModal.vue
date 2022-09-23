<template>
<div>


    <!-- Modal -->
    <div class="modal fade" id="WithdrawModal" tabindex="-1" aria-labelledby="WithdrawModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header p-4 text-center border-0">
                    <h5 class="modal-title" id="exampleModalLabel">Withdraw BTC</h5>
                    <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body px-5 py-3">
                        <form class=" modal_box">
                            <div class="row py-1 justify-content-center">

                                <div class="col-xl-6 mb-3">
                                    <label for="">Network</label>
                                    <div class="input-group mb-1">
                                        <input class="form-control shadow-none" type="text" placeholder="Network">
                                    </div>

                                </div>
                                <div class="col-xl-6 mb-3">
                                    <div class="form-box">
                                        <label for="">Wallet Address</label>
                                        <div class="input-group mb-1">
                                            <input class="form-control shadow-none" type="text" placeholder="Wallet Address">
                                        </div>
                                        <span>Valid BTC Address</span>
                                    </div>
                                </div>
                                <div class="col-xl-6 mb-4">
                                    <div class="form-box">
                                        <label for="">Amount</label>
                                        <div class="input-group mb-1">
                                            <input class="form-control shadow-none" type="text" placeholder="Amount">
                                        </div>
                                        <span>$9,640,721.38 BTC</span>
                                    </div>
                                </div>
                                <div class="col-xl-12 text-center">
                                    <button type="button" class="btn_avx text-uppercase px-3"> Withdraw</button>
                                </div>
                            </div>
                        </form>
                </div>
                <div class="modal-footer p-0 border-0">
                    <div class="warning_box">
                        <h6 class="border_bottom p-2 px-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5" viewBox="0 0 22.5 22.5">
                                <path id="Icon_metro-warning" data-name="Icon metro-warning" d="M13.821,3.966l9.428,18.791H4.392L13.821,3.966Zm0-2.038a1.626,1.626,0,0,0-1.338.981l-9.6,19.14c-.736,1.308-.11,2.378,1.391,2.378h19.1c1.5,0,2.127-1.07,1.391-2.378h0l-9.6-19.14a1.626,1.626,0,0,0-1.338-.981Zm1.406,18.281A1.406,1.406,0,1,1,13.821,18.8,1.406,1.406,0,0,1,15.227,20.209ZM13.821,17.4a1.406,1.406,0,0,1-1.406-1.406V11.772a1.406,1.406,0,0,1,2.812,0V15.99A1.406,1.406,0,0,1,13.821,17.4Z" transform="translate(-2.571 -1.928)" fill="#ff2e2e" />
                            </svg>

                            WARNIG</h6>
                        <ul class="px-5 mt-3">
                            <li>Send Only Using The Ethereum (BEP20) Network. Using Any Other Network Will Result In Loss Of Funds.</li>
                            <li>Deposit Only ETH To This Deposit Address. Depositing Any Other Asset Will Result In A Loss Of Funds.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.modal-content {
    background-color: var(--setting-choco);
}

/* EDIT MPODAL */
.modal-content {
    background-color: var(--setting-choco);
    border: 1px solid var(--avx-yellow);
}

.border_bottom {
    border-bottom: 1px solid var(--light-yellow);
    color: var(--red);
}

.btn-close {
    background: transparent var(--cut-img);
    border-radius: 0.25rem;
    opacity: 1;
    padding: 10px;
    border: 0;
    background-repeat: no-repeat;
    position: absolute;
    right: 2px;
}

.modal-header {
    justify-content: center;
    color: var(--avx-white);
}


.modal_box {
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
}
.modal_box label{
    color: var(--avx-white);
}

.modal_btn {
    color: var(--white);
    cursor: pointer;
    background-color: var(--avx-yellow);
    border: 1px solid transparent;
    font-size: 14px;
    border-radius: 0.25rem;
    font-weight: 600;
}

.form-control {
    font-size: 14px;
    color: var(--avx-white);
    background-color: transparent;
    background-clip: padding-box;
    border: 1px solid var(--light-yellow);
    border-radius: 18px;
}

.form-box span {
    color: var(--avx-yellow);
    font-size: 15px;
}
/* warning box */
.warning_box ul li {
    color: var(--avx-white);
    font-size: 14px;
}
</style>

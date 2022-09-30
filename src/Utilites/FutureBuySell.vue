<template>
  <div>
    <form action="" class="row">
                            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-4 mt-4">
                                <label for="basic-url" class="form-label mb-1">
                                    Price <span>(USDT)</span>*</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control shadow-none" placeholder="Price (USDT)*" id="basic-url" aria-describedby="basic-addon3" />
                                </div>
                                <div class="balance_box d-flex justify-content-between">
                                    <label for="basic-url" class="form-label"> Remaining Balance:</label>
                                    <p class="mb-0">-0.00442822 BTC</p>
                                </div>
                            </div>

                            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-4 mt-4">
                                <label for="basic-url" class="form-label mb-1">
                                    Stop Price <span>(USDT)</span>*</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control shadow-none" placeholder="40803.1" id="basic-url" aria-describedby="basic-addon3" />
                                </div>
                                <div class="balance_box d-flex justify-content-between">
                                    <label for="basic-url" class="form-label"> Current Balance:</label>
                                    <p class="mb-0">-0 BTC</p>
                                </div>
                            </div>

                            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xl-3">
                                <div class="contract_box">
                                    <p class="mb-0"> 1 Contract = <span> 100 USDT</span></p>

                                    <label for="basic-url" class="form-label mb-1">
                                        Price <span>(USDT)</span>*</label>
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control shadow-none" placeholder="Contracts*" id="basic-url" aria-describedby="basic-addon3" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xl-3">
                                <div class="contract_box">
                                    <p class="mb-5"> Max Leverage: <span> 10x</span></p>

                                    <div>
                                        <Slider v-model="value" />
                                        <!-- <div class="slidecontainer mt-1">
                                            <input type="range" min="1" max="100" value="50" class="slider">
                                        </div> -->
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-4 currency_box">
                                <div class="select-box">
                                    <div class="dropdown">
                                        <button class="btn_drop  dropdown-toggle d-flex align-items-center w-100" type="button" id="dropdownMenuButtonbuy-sell" data-bs-toggle="dropdown" aria-expanded="false">
                                            {{ contractlist.contract }}
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonbuy-sell">
                                            <li class="list_items  d-flex align-items-center p-2" v-for="(contractlist, index) in CurrencyListData" :key="index" @click="currencySelect(contractlist)">
                                                {{ contractlist.contract }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-9 col-xl-9 mb-4">
                                <div class="check_box">
                                    <div class="form-check">
                                        <input class="form-check-input shadow-none" type="checkbox" value="" id="flexCheckChecked">
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Send Email Notification
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 mt-2 text-center">
                                <button type="button" class="cancel_btn w-100"> CANCEL</button>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 mt-2 text-center">
                                <button type="button" class="buy_btn w-100" :style="show?'background-color:var(--green)':'background-color:var(--red)'"> {{text}}/LONG</button>
                            </div>
                        </form>
  </div>
</template>

<script>
    import Slider from '@vueform/slider'
import '@vueform/slider/themes/default.css'
export default {
name:'FutureBuySell',
components: {
      Slider ,
      
    },
    props:{
        show:Boolean,
        text:String
    },
    data() {
        return {
            value: 0,
            contractlist: {
                contract: "Good till Cancel",
            },

            CurrencyListData: [{
                    contract: "Good till Cancel"
                },
                {
                    contract: "test text"
                },
                {
                    contract: "test text"
                },
                {
                    contract: "test text"
                }

            ],

        }
    },
    methods: {
        currencySelect(select_Currency) {
            console.log("currencySelect");
            this.contractlist = select_Currency;
        },
    },

}
</script>

<style scoped>
.margin_buy_sell label {
    color: var(--text-grey);
    font-size: 13px;
}

.balance_box p {
    color: var(--avx-white);
    font-size: 13px;
}

/* Form control css */
.margin_buy_sell .form-control {
    font-size: 14px;
    color: var(--avx-white);
    background-color: transparent;
    border: 1px solid var(--light-yellow);
    border-radius: 1.5rem;
    padding: 9px 13px;
}

.dropdown-toggle::after {
    height: 23px;
    width: 23px;
    content: "";
    border-top: 0 solid;
    border-right: 0 solid transparent;
    border-bottom: 0;
    border-left: 0. solid transparent;
    margin-left: auto;
    background-image: url('../assets/images/icons/chavron-white-down.svg');
    
}

.buy-sell-box .form-select:focus,
.buy-sell-box .form-control:focus {
    box-shadow: none;
}

/* dropdown */

.dropdown-menu {
    font-size: 13px;
    color: var(--avx-white);
    background-color: var(--light-black-bg);
    font-weight: 500;
    min-width: 15rem;
    border: 1px solid var(--light-yellow);

}

.dropdown-menu li:hover {
    background-color: var(--on-hover);
    color: var(--avx-yellow);
    cursor: pointer;
    transition: all 0.2s ease;
}

.dropdown-menu li {
    padding: 5px 5px;
    text-transform: capitalize;
}

.dropdown-menu li span {
    color: var(--text-grey);
    font-size: 10px;
    text-transform: uppercase;
}

.btn_drop {
    cursor: pointer;
    padding: 9px 13px;
    font-size: 14px;
    color: var(--avx-white);
    background-color: transparent;
    border: 1px solid var(--light-yellow);
    border-radius: 1.5rem;
}

.form-check-input {
    background-color: transparent;
    border: 1px solid var(--avx-yellow);
    border-radius: 0;
}

.form-check-input:checked {
    background-color: var(--avx-yellow);
    border-color: var(--avx-yellow);
}

.check_box label {
    color: var(--avx-white);
}

.cancel_btn {
    cursor: pointer;
    padding: .375rem .75rem;
    font-size: 15px;
    color: var(--avx-white);
    background-color: transparent;
    border: 1px solid var(--avx-white);
    border-radius: 1.5rem;
    font-weight: 600;
}

.contract_box p {
    color: var(--avx-white);
}

.buy_btn {
    cursor: pointer;
    padding: .375rem .75rem;
    font-size: 15px;
    color: var(--avx-white);
    /* background-color: var(--green); */
    border: 1px solid transparent;
    border-radius: 1.5rem;
    font-weight: 600;
}

</style>
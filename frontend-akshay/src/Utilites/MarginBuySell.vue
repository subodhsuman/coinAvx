<template>
<div>
    <form class="row">
        <!-- Price Box -->
        <div class="col-xl-12">
            <div class="price_box">
                <label for="basic-url" class="form-label">
                    Avail <span>-{{currency}}</span></label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control shadow-none" placeholder="Price" id="basic-url" aria-describedby="basic-addon3" />
                    <span class="input-group-text text-uppercase" id="basic-addon3">
                        2341.25 {{currency}}
                    </span>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <!-- amount box -->
            <div class="amount-box">
                <div class="input-group mb-3">
                    <input type="text" class="form-control shadow-none" placeholder="Amount" id="basic-url" aria-describedby="basic-addon3" />
                    <span class="input-group-text text-uppercase" id="basic-addon3">{{currency}}
                    </span>
                </div>
            </div>
        </div>
        <!-- Limit Buttons -->
        <div class="col limit_button mb-3" v-for="i in 5" :key="i">
            <div class="currency_per text-center">
                <button type="button" class="btns rounded-pill mb-1" @click="amount(i)" :style="i == clickedAmt ? 'background-color:var(--avx-yellow)' : ''"></button>
                <p class="mb-0">{{ i * 20 }}%</p>
            </div>
        </div>
        <!-- total box -->
        <div class="col-xl-12">
            <div class="input-group total_box mb-3">
                <input type="text" class="form-control shadow-none" placeholder="Total" id="basic-url" aria-describedby="basic-addon3" />
                <span class="input-group-text text-uppercase" id="basic-addon3">
                    {{currency}}
                </span>
            </div>
        </div>
        <!-- BUY SELL BUTTON -->
        <div class="col-xl-12">
            <button type="button" :class="order_side == 'buy' ? 'btn-green' : 'btn-red'" class="btn_avx w-100 text-uppercase">
                {{order_side == 'buy'  ? 'margin buy' + currency : 'margin sell ' +  currency}}
            </button>
        </div>
    </form>
</div>
</template>

<script>
    const orderSide = ['buy' , 'sell'];
export default {
    name: "MarginBuySell",
    data() {
        return {
            clickedAmt: 1,
        }
    },
    methods: {
        amount(val) {
            this.clickedAmt = val
        }
    },

    props: {
        order_side: {
            type: String,
            required: true,
            validator(value) {
                return orderSide.includes(value)
            }
        },

        currency:String,
    }
};
</script>

<style scoped>


/* INPUT GROP CSS */
.buy_sell .form-control,
.buy_sell .input-group-text {
    padding: 0.375rem 0.75rem;
    font-size: 13px;
    color: var(--avx-white);
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0.375rem;
}

.buy_sell ::placeholder {
    color: var(--text-grey);
}

.buy_sell .input-group-text {
    color: var(--text-grey);
}

.buy_sell .input-group {
    color: var(--avx-white);
    background-color: var(--avx-black);
    border: 1px solid var(--light-yellow);
    border-radius: 1.75rem;
}

/* label */
.buy_sell label {
    font-size: 14px;
    font-weight: 500;
}

.buy_sell label span {
    color: var(--avx-yellow);
}

.btns {
    padding: 6px 35px;
    border-radius: 17px;
    background-color: var(--white-grey);
    border: none;
}

.limit_button p {
    font-size: 14px;
    color: var(--avx-yellow);
}

.btn_avx {
    color: var(--white);
    cursor: pointer;
    font-size: 14px;
    border-radius: 1.25rem;
    padding: 8px 8px;
    font-weight: 500;
    border: none;
    text-transform: uppercase;
}

.btn-green {
    background-color: var(--green);
}


.btn-red {
    background-color: var(--red);
}
.price_box label{
    color: var(--avx-white);
}
@media all and (min-width: 1199px) and (max-width: 1399px) {
.btns {
    padding: 6px 20px;
}
}
@media all and (min-width: 768px) and (max-width: 991px) {
.btns {
    padding: 6px 25px;
}
}
@media all and (min-width: 320px) and (max-width: 767px) {
.btns {
    padding: 6px 15px;
}
}
</style>

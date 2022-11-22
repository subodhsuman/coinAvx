<template>
<div>
    <form class="row" @submit.prevent="plceOrdr()">
        <!-- Price Box -->
        <div class="col-xl-12">
            <div class="price_box">
                <label for="basic-url" class="form-label" v-if="currency_balance?.balance">
                    Avail <span > {{currency_balance?.balance}} {{wall_currency}} </span>
                   
                </label>
                     <!-- @keypress="initialCheck(e,decimal_pairs)" -->
                <div class="input-group mb-3">
                    <input type="text" class="form-control shadow-none" 
                    v-model="price" @keyup="changePrice()" 
                     @keypress="onlyNumberKey(price,decimal_pairs)" autocomplete="off" placeholder="Price"
                      id="basic-url" aria-describedby="basic-addon3" />
                     
                    <span class="input-group-text text-uppercase" id="basic-addon3 text-align-left">
                        {{pair_with}}
                    </span>
                </div>
                <div class="input-errors">
                    <span class="text-danger">{{ v$.price.$errors[0]?.$message }}</span>
                </div>

            </div>
        </div>
        <div class="col-xl-12">
            <!-- amount box -->
            <div class="amount-box">
                <div class="input-group mb-3">
                    <input type="text" class="form-control shadow-none" v-model="amount1" v-on:keyup="changeTotal()" autocomplete="off" placeholder="Amount" @keypress="onlyNumberKey(amount1, decimal_currency1)" id="basic-url" aria-describedby="basic-addon3" />
                    <span class="input-group-text text-uppercase" id="basic-addon3" >{{currency}}
                        <!-- {{order_side == 'buy'  ? currency : 'sell'}} -->
                    </span>
                </div>
                <div class="input-errors">
                    <span class="text-danger">{{ v$.amount1.$errors[0]?.$message }}</span>
                </div>

            </div>
        </div>
        <!-- Limit Buttons -->
        <div class="col limit_button mb-3" v-for="i in interval" :key="i">
            <div class="currency_per text-center">
                <button type="button" class="btns rounded-pill mb-1" @click="amount(i)" :style="i == clickedAmt ? 'background-color:var(--avx-yellow)' : ''"></button>
                <p class="mb-0">{{i}}%</p>
            </div>
        </div>
        <!-- total box -->
        <div class="col-xl-12">
            <div class="input-group total_box mb-3">
                <input type="text" class="form-control shadow-none" v-model="total" autocomplete="off" 
                v-on:keyup="changePrice()" placeholder="Total"  @keypress="onlyNumberKey(total, decimal_currency1)" id="basic-url" aria-describedby="basic-addon3" />
                <span class="input-group-text text-uppercase" id="basic-addon3">
                    {{pair_with}}
                </span>
            </div>
            <div class="input-errors">
                <span class="text-danger">{{ v$.total.$errors[0]?.$message }}</span>
            </div>
        </div>
        <!-- BUY SELL BUTTON -->
        <div class="col-xl-12">
            <button type="submit" @click="type= (order_side == 'buy' ) ? 'buy':'sell'" :class="order_side == 'buy' ? 'btn-green' : 'btn-red'" class="btn_avx w-100" v-if="loading">
                {{order_side == 'buy'  ? 'buy ' + currency : 'sell ' + currency}}
            </button>

             <button type="submit" disabled :class="order_side == 'buy' ? 'btn-green' : 'btn-red'" class="btn_avx w-100" v-else>
                <div class="d-flex justify-content-center" >
                    <div class="spinner-border" role="status" style="height:20px;width:20px">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </button>


        </div>
    </form>
</div>
</template>



<script>
const orderSide = ['buy', 'sell'];
import exactMath from "exact-math";
import ApiClass from '@/Api/api';
const mathConfig={
                returnString: true,
                eMinus: Infinity,
                ePlus: Infinity
            }
// import _ from "lodash";
import {
    useVuelidate
} from '@vuelidate/core'
import {
    helpers,
    required
} from '@vuelidate/validators'

export default {
    name: "BuySellForm",
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    validations() {
        return {
            price: {
                required: helpers.withMessage("Price is required!", required)
            },
            amount1: {
                required: helpers.withMessage("Amount is required", required)
            },
            total: {
                required: helpers.withMessage("Total is required", required)
            }

        }
    },
    
    data() {
        return {
            loading:true,
            clickedAmt: 1,
            price: "",
            amount1: "",
            total: "",
            currency: "",
            pair_with:'',
            allData: {},
            currency_balance: "",
            stop_price:'',
            order_type1:'limit',
            type:"",
            interval:[
                20,40,60,80,100
            ],
            wall_currency:'',
            decimal_currency1:"",
            decimal_pairs:''
         
        }
    },
    methods: {

       
        amount(val) {
            this.clickedAmt = val;
            if(this.order_side == 'buy'){
               
                     var per=this.currency_balance?.balance
                    //  console.log("per",per)
                      this.total = exactMath.div(exactMath.mul(per,this.clickedAmt, mathConfig),100,mathConfig);
                       var amt = exactMath.div(this.total, this.price);
                       this.amount1 = amt.toFixed(this.decimal_currency1)

                     
                    //   console.log("t",this.total)
         
            }
               if(this.order_side == 'sell'){
                // console.log("bs",this.order_side);
                     var per1=this.currency_balance?.balance
                    //  console.log("per",per1)
                      this.amount1 =exactMath.div(exactMath.mul(per1,this.clickedAmt, mathConfig),100,mathConfig)
                    //   let sss = exactMath.floor(this.amount1);
                      this.total = exactMath.mul(this.price, this.amount1,mathConfig)
                    //   console.log("t",this.total)
                
            }
             
             

        },
            onlyNumberKey(data, fixed) {
            data = data.toString();
            if (data.indexOf(".") != -1) {
                var fixedlength = data.split(".")[1];
                fixedlength.length == fixed ? event.preventDefault() : console.log(fixed);
            }
            if (!(event.keyCode >= 48 && event.keyCode <= 57)) {
                if (event.keyCode == 46) {
                    if (data.includes(".") || data.charAt(0) == '') {
                        event.preventDefault()
                    }
                     if (data.includes(".") || data.charAt(data.length - 1) == '.') {
                        event.preventDefault()
                    }

                } else {
                    event.preventDefault();
                }
            }

        },

        // amountChange() {
        //     if(this.total && this.price){
        //            this.amount1 = exactMath.div(this.total,this.price);
        //       }
        //     console.log("amount", this.amount1)

        // },

        changeTotal() {
            var amount = this.amount1.toString();
            var at_price = this.price.toString() 

            if (at_price == "") {
                at_price = 0;
            } else {
                if (at_price.endsWith(".")) { at_price = at_price.slice(0, at_price.length -1);
         
                }

            }
            if (amount == "") {
                amount = 0;
            } else {
                
                if (amount.endsWith(".")) { 
                    amount = amount.slice(0, amount.length - 1);
                   
                }

            }

            let total;
               total=0;
                if(this.price && this.amount1){

                      total = exactMath.mul(at_price, amount, mathConfig);
                }
             return this.total = parseFloat(total).toFixed(this.decimal_pairs);
        },

        changePrice(){
            
            let total = this.total.toString();
             let price = this.price.toString();

            if (total == "") {
                // this.total = 0
            } else {
                if (total.endsWith(".")) 
                { total = total.slice(0,total.length -1);
                }
            }

            if (price == "") {
                // this.price = 0
            } else {
                if (price.endsWith(".")) { 
                    
                    price = price.slice(0, price.length -1);
                  }
            }
            let amount = 0;
            this.amount1=0

            if (this.total && this.price) {
                amount = exactMath.div(total, price, mathConfig);
            }
            return this.amount1 = parseFloat(parseFloat(amount).toFixed(this.decimal_currency1));
            
        },
       
        
        async getFunds() {
            let res = await ApiClass.getNodeRequest("user-crypto/funds/get", true);
            if (res?.data?.status_code == 1) {
                this.allData = res.data.data || {}

            var compare_curr = this.order_side == 'buy' ? this.pair_with : this.currency;
                this.currency_balance = this.allData.find((o) => {
                    return o.currency === compare_curr;
                })

            }
        },
        async plceOrdr() {
             var vald= await this.v$.$validate();
             if(!vald){
                return
             }
                this.loading=false;
            const form_Data = {
                order_type: this.type,
                type: this.order_type1,
                stop_price: this.stop_price,
                at_price: this.price,
                quantity: this.amount1,
                total: this.total,
                currency: this.currency,
                with_currency: this.pair_with,
            }
        // console.log("ohfyufds nf=============",form_Data);
      
            let res = await ApiClass.postNodeRequest("orders/place-order", true,form_Data)
             
            console.log("place order",res)
              if(res?.data?.status_code==1){
                this.loading=true;
                 this.success(res.data.message)
                 this.resetForm();
              }
              if(res?.data?.status_code==0){
                 this.loading=true;
                 alert(res.data.message);
              }
        },
        resetForm(){
             this.price=this.amount1=this.total=''
             this.v$.$reset();
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

        // currency: String,
        // abc: String,
        allvalue: Object,
        order_type: String,
           

    },
    watch: {
        // "abc": function (v) {
        //     // console.log("v",v)
        //     this.price = parseFloat(v).toFixed(2);
        //     // console.log("r",this.price)
        // },
        allvalue: function (val) {
            this.decimal_currency1=val.decimal_currency;
            this.decimal_pairs=val.decimal_pair;
            this.currency = val.currency;
            this.pair_with = val.pair_with;
            this.price  =  parseFloat(val.price).toFixed(this.decimal_pairs);
            this.wall_currency = this.order_side == 'buy' ? val.pair_with:val.currency;
            
             if(localStorage.token){
                 this.getFunds();

                }

        },
        order_type:function (a) {
            this.order_type1 = a
        }

    },

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

.price_box label {
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

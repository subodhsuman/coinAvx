<template>
<div class="crypto-list">
    <div class="currruncy_name">
        <ul class="nav nav-pills justify-content-between mb-3 py-2" id="pills-tab" role="tablist">
            <!-- <li class="nav-item" id="" role="presentation">
                <button class="nav-link " id="pills-fav-tab" data-bs-toggle="pill" data-bs-target="#pills-fav" type="button" role="tab" aria-controls="pills-fav" aria-selected="true"> <img src="../../assets/images/icons/fav-star.svg" alt="icon"> </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="pills-inr-tab" data-bs-toggle="pill" data-bs-target="#pills-inr" type="button" role="tab" aria-controls="pills-inr" aria-selected="true">BNB</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-eth-tab" data-bs-toggle="pill" data-bs-target="#pills-eth" type="button" role="tab" aria-controls="pills-eth" aria-selected="false">BTC</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-bnb-tab" data-bs-toggle="pill" data-bs-target="#pills-bnb" type="button" role="tab" aria-controls="pills-bnb" aria-selected="false">ETH</button>
            </li>

            <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-usdt-tab" data-bs-toggle="pill" data-bs-target="#pills-usdt" type="button" role="tab" aria-controls="pills-usdt" aria-selected="false">USDT</button>
            </li> -->
            <li class="nav-item active" role="presentation" v-for="(item, index) in item_tabs" :key="index">
                <button class="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" :class="tab == index ? 'active' : ''" @click="TabList(index)">
                    <div class="text-end" v-if="index == 'FAV'">
                        <img src="@/assets/images/icons/star-bullet.svg" alt="star icon" class="" />
                    </div>
                    <div class="text-end" v-else>{{index}}</div>
                </button>
            </li>
        </ul>
    </div>

    <!-- search box -->
    <div class="search_box px-2">
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon2">
                <!-- <img src="../../assets/images/icons/search.svg" alt="search icon"> -->
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12.313 12.313">
                    <g id="Group_31243" data-name="Group 31243" transform="translate(-96.301 -186.625)">
                        <path id="Path_148" data-name="Path 148" d="M14.372,9.436A4.936,4.936,0,1,1,9.436,4.5,4.936,4.936,0,0,1,14.372,9.436Z" transform="translate(92.301 182.625)" fill="none" stroke="var(--avx-white)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                        <path id="Path_149" data-name="Path 149" d="M27.659,27.659l-2.684-2.684" transform="translate(80.248 170.572)" fill="none" stroke="var(--avx-white)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                    </g>
                </svg>
            </span>
            <input type="text" class="form-control shadow-none" v-model="search" placeholder="Search here...." aria-label="Search here...." aria-describedby="basic-addon2">

        </div>
    </div>

    <!-- Tab content -->
    <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-inr" role="tabpanel" aria-labelledby="pills-inr-tab">
            <!-- Heading -->
            <div class="currency_heading d-flex mb-2 px-2">
                <div class="ps-4" style="flex-basis: 34%" @click="showIcon(1,'symbol')"> Pair
                    <span v-if="showNum == 1"> <img :src="getImgUrl()" alt="icon"> </span>
                </div>
                <!-- <span> <img src="../../assets/images/icons/up-arrow.svg" alt="star icon"></span> -->
                <div class="text-center ps-4" style="flex-basis: 33%" @click="showIcon(2,'price')">Last Price
                    <span v-if="showNum == 2"> <img :src="getImgUrl()" alt="icon"> </span>
                </div>
                <div class="text-end" style="flex-basis: 33%" @click="showIcon(3,'change')">change
                    <span v-if="showNum == 3"> <img :src="getImgUrl()" alt="icon"> </span>
                </div>
            </div>
            <!-- Content  -->
            <div class="cryptocurrency_scroll" v-if="loading">
                <div v-show="fiterItems.length!=0" class="currency_content d-flex border_bottom py-1 pe-2" v-for="(data,index) in fiterItems" :key="index" @click="changeData(data)">
                    <div style="flex-basis:10%" class="ps-2"><img :src="data.image" alt="search icon" class="img-fluid"></div>
                    <div style="flex-basis:30%" class="text-uppercase">{{data.currency}} /{{data.pair_with}} </div>
                    <div style="flex-basis:30%">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" style="fill: var(--avx-white)" viewBox="0 0 320 512">
                            <path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z" /></svg>{{parseFloat(data.price)}} </div>
                    <div style="flex-basis:30%" class="text-end" :style="data.change > 0 ? 'color:var(--green);' : 'color:var(--red);'">{{parseFloat((data.change)).toFixed(2)}}%</div>
                </div>
                <div v-if="fiterItems.length==0" class="currency_content d-flex border_bottom py-1 pe-2">
                    <span> No Data Found </span>
                </div>
            </div>

            <!-- SKELETOR LOADER -->
            <div class="cryptocurrency_scroll" v-else>
                <div class="currency_content d-flex border_bottom py-1" v-for="i in 10" :key="i">
                    <div style="flex-basis:10%" class="ps-2">
                        <Skeletor />
                    </div>
                    <div style="flex-basis:30%">
                        <Skeletor />
                    </div>
                    <div style="flex-basis:30%">
                        <Skeletor />
                    </div>
                    <div style="flex-basis:30%">
                        <Skeletor />
                    </div>
                </div>
            </div>

        </div>
        <div class="tab-pane fade" id="pills-eth" role="tabpanel" aria-labelledby="pills-eth-tab">...</div>
        <div class="tab-pane fade" id="pills-bnb" role="tabpanel" aria-labelledby="pills-bnb-tab">...</div>
    </div>

</div>
</template>

<script>
// import ExchangeData from '@/assets/json/ExchangeData'
import ApiClass from '@/api/api.js';
export default {
    name: 'CryptoListComponent',
    props: {
        modelValue:Object,
    },

    data() {
        return {
            loading: true,
            allDetails: [],
            allData:[],
            ticker: [],
            item_tabs: {},
            search: "",
            isAsc: false,
            showNum: 1,
            key: ''

        }
    },
    methods: {

        TabList(item) {
            console.log("item", item)
            this.tab = item;
            this.allDetails = this.item_tabs[item];

        },
        async getCrypto() {
            var $this = this;
            let result = await ApiClass.getNodeRequest("list-crypto/get", false);
            this.allDetails = result.data.data || {};
            //   console.log("all data",this.allDetails);
            this.item_tabs = Object.assign(this.allDetails, this.item_tabs)
            this.ticker = result.data.tickers;
            console.log("tikcers", this.ticker)

            this.TabList('USDT');

            const sub = this.ticker.map((e) => e.toLowerCase() + "@ticker")
            console.log("ticker value", sub);


            for(let key in this.allDetails) {
                  this.allData = this.allData.concat(this.allDetails[key])
                    // console.log("slslsllsls",this.allData);
                }
        

              const findSyb = this.allData.find(tree => tree.symbol== this.modelValue.symbol);//By default show of value for BTCUSTD
               //   console.log("slsls",findSyb);
              this.$emit('update:modelValue',findSyb)



              

            const data = {
                method: "SUBSCRIBE",
                params: sub,
                id: 1
            }

            const connection = new WebSocket("wss://stream.binance.com:9443/ws");

            connection.onopen = function () {
                //  console.log("Successfully connected to the  websocket server...",data);
            }
            connection.onopen = function onSreamOpen() {
                connection.send(JSON.stringify(data))
                connection.onmessage = function (event) {
                    const soket = JSON.parse(event.data)

                    $this.allDetails.filter((e) => {
                        //  console.log("api sybbole",e)
                        if (e.symbol == soket.s) {
                            e.change = soket.P;
                            e.price = parseFloat(soket.c);
                        }

                    })

                }

            }

        },
        getImgUrl() {
            if (this.isAsc) {
                return require('@/assets/images/icons/up.svg')
            }
            return require("@/assets/images/icons/down.svg")

        },
        showIcon(num, keyValue) {
            console.log("show icon", num, keyValue);
            this.isAsc = !this.isAsc;
            //  console.log("isAccending order",this.isAsc);

            this.showNum = num;
            //  console.log("show num order",this.showNum);

            this.key = keyValue;
            // console.log("key order", this.key);

        },
        changeData(data) {
            this.$emit('update:modelValue',data)
            // console.log("change data",data);
        }

    },
    watch: {
        // modelValue: function (v) {
        //     // console.log("value of v",v)
        //     const findSyb = this.allData.find(tree => tree.symbol == v.symbol);
        //     this.$emit('update:modelValue', findSyb)
        //     console.log("watch symbol vaue",findSyb)

        // }

    },

    mounted() {
        this.getCrypto();
    },
    computed: {
        fiterItems() {
            var $this = this;
            var srchData = this.allDetails;
            if (this.search) {
                return srchData.filter(e => (e.symbol.toLowerCase().includes(this.search.toLowerCase())))

            }

            if (this.key) {
                return srchData = srchData.sort((a, b) => {
                    if ($this.key == 'symbol') {
                        return (this.isAsc) ? a[$this.key] > b[$this.key] ? 1 : -1 : (a[$this.key]) < (b[$this.key]) ? 1 : -1;
                    }
                    return (this.isAsc) ? parseFloat(a[$this.key]) < parseFloat(b[$this.key]) ? 1 : -1 : parseFloat(a[$this.key]) > parseFloat(b[$this.key]) ? 1 : -1;

                })
            }
            return srchData;

        }

    }
}
</script>

<style scoped>
.nav-link {
    color: var(--avx-white);
    border-bottom: 1px solid transparent;
    border-radius: 0;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    /* margin-right: 10px; */
    padding: 0.2rem 0.60rem;
}

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    background-color: transparent;
    border-bottom: 1px solid var(--avx-yellow);
    color: var(--avx-yellow);
}

.search_box .input-group-text,
.search_box .form-control {
    background-color: transparent;
    color: var(--avx-white);
    border: 1px solid transparent;
    padding: 4px 12px;
    font-size: 13px;
}

.search_box .input-group {
    border: 1px solid var(--avx-yellow);
    background-color: var(--avx-black);
    border-radius: 1.35rem;
}

/* currency_heading */
.currency_heading {
    color: var(--text-grey);
    font-size: 13px;
}

.currency_content {
    color: var(--avx-white);
    font-size: 12px;
}

/* cryptocurrency scroll */
.cryptocurrency_scroll {
    overflow-y: scroll;
    height: 430px;
}
</style>

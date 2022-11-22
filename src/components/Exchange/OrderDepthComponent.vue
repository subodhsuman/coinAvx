<template>
<div class="Order_Depth">
    <!-- haed -->
    <div class="od_head d-flex justify-content-between p-2">
        <p class="mb-0 text_yellow">{{getPrpsData.currency}}/{{getPrpsData.pair_with}} </p>
        <p class="mb-0">Order Volume</p>
    </div>
    <!-- heading -->
    <div class="od_heading d-flex justify-content-between py-1 px-2">
        <div style="flex-basis:33.3%">Price {{getPrpsData.currency}}</div>
        <div class="text-center" style="flex-basis:33.3%">Amount {{getPrpsData.pair_with}}</div>
        <div class="text-end" style="flex-basis:33.3%">Total {{getPrpsData.pair_with}}</div>
    </div>

    <!-- order depth content -->
    <div class="order_depth_scroll" v-if="!loding">
        <div class="od_sell_content d-flex justify-content-between py-1 od_border px-2" v-for="(data , index) in asks_data" :key="index"
            :style="`background: linear-gradient(90deg, rgba(255, 255, 255, 0) ${(100-((data[1] *100) / maxVolume ).toFixed(2))}%, var(--progress-red)${((data[1] *100) / maxVolume ).toFixed(2)}%);`"
        >
            <div style="flex-basis:33.3%; color: var(--red) "  >{{parseFloat(data[0])}} </div>
            <div class="text-center" style="flex-basis:33.3%">{{parseFloat(data[1])}}</div>
            <div class="text-end" style="flex-basis:33.3%">{{parseFloat( data[0] * data[1]).toFixed(2)}}</div>
        </div>
    </div>

        <!-- for skeletor -->

        <div class="order_depth_scroll" v-else>
        <div class="od_sell_content d-flex justify-content-between py-1 od_border px-2" v-for="i in 20" :key="i" >
            <div style="flex-basis:33.3%; color: var(--red) " > <Skeletor /> </div>
            <div class="text-center" style="flex-basis:33.3%"> <Skeletor /> </div>
            <div class="text-end" style="flex-basis:33.3%"> <Skeletor /> </div>
        </div>
       </div>
       
        <!-- for skeletor  end -->




    <div class="order_depth_price d-flex gap-2 justify-content-center align-items-center py-2 border-end-0 border-start-0">

        <p class="mb-0"><span :style="istrue? 'color:var(--green)' : 'color:var(--red)'">{{parseFloat(getPrpsData.price)}}</span></p>
        <img src="../../assets/images/icons/grren-up-arrow.svg" alt="icon" v-if="istrue">
        <img src="../../assets/images/icons/red-down-arrow.svg" alt="icon" v-else>
        <p class="mb-0">{{parseFloat(getPrpsData.change).toFixed(2)}} %</p>
    </div>

    <!-- order depth content -->
    <div class="order_depth_scroll"  v-if="!loding">
        <div class="od_buy_content d-flex justify-content-between py-1 od_border px-2" v-for="(data , index) in bids_data" :key="index"
            :style="`background: linear-gradient(90deg, rgba(255, 255, 255, 0) ${(100-((data[1] *100) / maxVolume ).toFixed(2))}%, var(--progress-green)${((data[1] *100) / maxVolume ).toFixed(2)}%);`"
        >
            <div style="flex-basis:33.3%; color: var(--green);">{{parseFloat(data[0])}} </div>
            <div class="text-center" style="flex-basis:33.3%">{{parseFloat(data[1])}}</div>
            <div class="text-end" style="flex-basis:33.3%">{{parseFloat( data[0] * data[1]).toFixed(2)}} </div>
        </div>
    </div>


    <!-- for skeletor -->

    <div class="order_depth_scroll" v-else >
        <div class="od_buy_content d-flex justify-content-between py-1 od_border px-2" v-for="i in 20" :key="i" >
            <div style="flex-basis:33.3%; color: var(--green);">  <Skeletor /></div>
            <div class="text-center" style="flex-basis:33.3%"><Skeletor /></div>
            <div class="text-end" style="flex-basis:33.3%"> <Skeletor /></div>
        </div>
    </div>

     <!--  end for skeletor -->

       
</div>
</template>

<script>
import ApiClass from '@/Api/api';
import exactMath from "exact-math";
// import ExchangeData from '@/assets/json/ExchangeData'
import _ from "lodash";
export default {
    name: 'OrderDepthComponent',
    props: {
        modelValue: Object
    },
    data() {
        return {
            istrue: true,
            getPrpsData: {},
            getSyb: "",
            asks_data: [],
            bids_data: [],
            connnection:"",
            loding:true,
          

        }
    },
    methods: {
        async odrDepth() {
            var $this = this;
             if($this.connnection){
                $this.connnection.close()
             }
            // console.log("this.getSyb",this.getSyb)

            this.loding=false;
            let res = await ApiClass.getNodeRequest("list-crypto/market-data/" + this.getSyb);
            
             if(res?.data?.status_code==1){
                 this.asks_data = res.data.data.asks;
                 this.bids_data = res.data.data.bids;   
                  this.loading=false;   
                //   this.maxVal()            
                 //  console.log("akks data",this.bids_data)
                //  console.log("order depth component", res);
             }
             if(res?.data?.status_code==0){
                this.loding=false;
             }
            


            //  var sum =_.sumBy(this.asks_data, function(o) { console.log('o',o); return parseFloat(o[1] )});
            //   this.getMaxVol(sum);


            const sub = this.getSyb.toLowerCase() + "@depth20@1000ms";
            // console.log("ord", sub);

            const data = {
                method: "SUBSCRIBE",
                params: [sub],
                id: 3,
            }

            $this.connnection = new WebSocket("wss://stream.binance.com:9443/ws")
            $this.connnection.onopen = function () {
                // console.log("websocket is conntected", data)
            }

            $this.connnection.onopen = function onSreamOpen() {
                $this.connnection.send(JSON.stringify(data))

                $this.connnection.onmessage = function (event) {
                    const sket=JSON.parse(event.data)

                    // console.log("order detph socket",sket)

                    if (sket.lastUpdateId) {
                        // console.log("last update value",$this.lastUpdateId);
                        $this.asks_data = sket.asks;
                        $this.bids_data = sket.bids.reverse();
                        
                    }

                }

            }

        },
        
        
    },
    watch:{
        modelValue: function (val) {
            this.getPrpsData = val
            //  console.log("order depth component value",this.getPrpsData); 
            this.getSyb = val.symbol; //get symbol
            //  console.log("get symbol",this.getSyb)
            this.odrDepth()
            this.loading=false;
        }
    },
     computed:{
        maxVal(){
              var cal=this.bids_data.concat(this.bids_data)
              let maxv = _.maxBy(cal, (el) => parseFloat(el[1]));
                  return maxv ?.[1] || 0;
                 
        },
          buy_Order(){
              let buy=0;
              return this.bids_data.map((el)=>{
                    let sum=exactMath.add(buy, el[1])
                    buy=sum;
                    // return console.log("sum buy order",buy);
                    return [parseFloat(el[0]),sum];
              })

        },

          sell_Order(){
              let sel=0;
              return this.asks_data.map((el)=>{
                    let sum =exactMath.add(sel, el[1]);
                    sel=sum;
                    return [parseFloat(el[0]),sum];
              })
          

        },
        maxVolume(){
         let maxVolue_buy =  _.last(this.buy_Order)?.[1] || 0;
           let maxVolue_sell=_.last(this.sell_Order)?.[1] || 0;
        
           return _.gt(parseFloat(maxVolue_buy), parseFloat(maxVolue_sell)) ? parseFloat(maxVolue_buy) :parseFloat(maxVolue_sell)

        }


     },
     
  

}
</script>

<style scoped>
.od_head p {
    color: var(--avx-white);
    font-size: 14px;
}

.order_depth_price p {
    font-weight: 600;
    color: var(--avx-white);

}

.order_depth_price {
    border: 1px solid var(--light-yellow);
}

/*   */
.text_yellow {
    color: var(--avx-yellow) !important;
    font-weight: 500;
}

.od_heading {
    color: var(--text-grey);
    font-size: 14px;
}

.od_sell_content {
    color: var(--avx-white);
    font-size: 12px;
    /*
    background: linear-gradient(90deg, rgba(255, 255, 255, 0)50%, var(--progress-red)50%);
    */
}

.od_buy_content {
    color: var(--avx-white);
    font-size: 12px;
    /* background: linear-gradient(90deg, rgba(255, 255, 255, 0)50%, var(--progress-green)50%); */
}

.od_border {
    border-bottom: 2px solid var(--avx-black);
}

.order_depth_scroll {
    height: 228px;
    overflow-y: scroll;
}
</style>

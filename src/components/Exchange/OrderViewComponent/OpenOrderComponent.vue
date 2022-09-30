<template>
    <div>
        <div class="table-responsive">
            <table class="table ">
                <thead>
                    <tr>
                        <th scope="col" id="element">Date</th>
                        <th scope="col" id="element">Pair</th>
                        <th scope="col" id="element">Type</th>
                        <th scope="col" id="element">Side</th>
                        <th scope="col" id="element">Price</th>
                        <th scope="col" id="element">Amount</th>
                        <th scope="col" id="element">Filled</th>
                        <th scope="col" id="element">Total</th>
                        <th scope="col" id="element" @click="remove('element')" class="text-end">clear all</th>
                    </tr>
                </thead>
                <tbody v-if="loading">
    
                    <tr v-for="(data,index) in resalldata" :key="index">
    
                        <td> {{ new Date(data.created_at).toLocaleDateString('en-GB')
                                        }} </td>
                        <td> {{ data.currency }}/ {{ data.with_currency }}</td>
                        <td> {{data.type}}</td>
                        <td style="color:var(--red)"> {{ data.order_type }}</td>
                        <td> {{ data.at_price }}</td>
                        <td> {{data.quantity}}</td>
                        <td> {{parseFloat(data.quantity-data.pending_qty )}}</td>
                        <td>{{data.total}} </td>
                        <td class="text-end"> <svg xmlns="http://www.w3.org/2000/svg" width="14.759" height="14.759" viewBox="0 0 14.759 14.759">
                                <path id="Path_1913" data-name="Path 1913" d="M3.476,6.428H15.283v9.593a.738.738,0,0,1-.738.738H4.214a.738.738,0,0,1-.738-.738ZM4.952,7.9v7.38h8.855V7.9ZM7.166,9.38H8.642v4.428H7.166Zm2.952,0h1.476v4.428H10.118ZM5.69,4.214V2.738A.738.738,0,0,1,6.428,2h5.9a.738.738,0,0,1,.738.738V4.214h3.69V5.69H2V4.214Zm1.476-.738v.738h4.428V3.476Z" transform="translate(-2 -2)" fill="#f31111" />
                            </svg>
                        </td>
    
                    </tr>
    
                </tbody>
    
                <tbody v-else>
                    <tr v-for="i in 2" :key="i">
    
                        <td>
                            <Skeletor />
                        </td>
                        <td>
                            <Skeletor />
                        </td>
                        <td>
                            <Skeletor />
                        </td>
                        <td>
                            <Skeletor />
                        </td>
                        <td>
                            <Skeletor />
                        </td>
                        <td>
                            <Skeletor />
                        </td>
                        <td>
                            <Skeletor />
                        </td>
                        <td>
                            <Skeletor />
                        </td>
                        <td>
                            <Skeletor />
                        </td>
    
                    </tr>
                </tbody>
            </table>
            <div class="pagination_box d-flex justify-content-end" style="color:white">
                <pagination v-model="page" :records="recordData"  :per-page="perPageData" :options="options" @paginate="OpenOrderComponentis" />
            </div>
        </div>
    
    </div>
    </template>
    
    <script>
    import ApiClass from "@/api/api";
    
    // import OpenHistoryVue from './OpenHistory.vue';
    // import OpenOrderComponentVue from '@/components/Future-Trading/OrderViewComponent/OpenOrderComponent.vue';
    
    export default {
        name: 'OpenOrderComponent',
     
        data() {
            return {
                perPageData: 10,
                recordData: 0,
                //  page1: 1,
                res: '',
                loading:false,
                resalldata: [],
                // page: 1,
                page: 1,
                options: {
                    edgeNavigation: false,
                    chunksNavigation: false,
                    chunk: 3,
                    texts: false,
    
                },
            }
        },
        mounted() {
            this.OpenOrderComponentis()
    
            console.log('GGGG', this.page);
    
        },
    
        methods: {
            async OpenOrderComponentis() {
                if (!localStorage.token) {
                    return;
                }
                let response = await ApiClass.getNodeRequest("orders/get?all=" + true + "&page=" + this.page + "&per_page=" + this.perPageData, true);
                console.log('vineet', response)
                this.resalldata = response.data.data.data
                this.page = response.data.data.page;
                this.perPageData = response.data.data.per_page;
                this.recordData = response.data.data.total;
    
            },
    
            async remove(element){
                
                  element.remove();
      
    }
    
        }
    
    }
    </script>
    
    <style scoped>
    thead tr th {
        font-weight: 500;
        color: var(--avx-white);
        font-size: 14px;
    }
    
    tbody tr td {
        color: var(--avx-white);
        font-size: 14px;
    }
    
    thead tr {
        border-bottom: 1px solid var(--light-yellow);
    }
    
    tbody tr {
        border-bottom: 1px solid transparent;
    }
    
    table {
        white-space: nowrap;
    }
    </style>
    
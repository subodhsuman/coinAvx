<template>
    <div>
        <div class="table-responsive ">
            <table class="table ">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Pair</th>
    
                        <th scope="col">Side</th>
                        <th scope="col">Price</th>
                        <th scope="col">Executed</th>
                        <th scope="col">Fee</th>
                        <th scope="col">Role</th>
                        <th scope="col" class="text-end">Total</th>
    
                    </tr>
                </thead>
                <tbody v-if="loading">
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
    
                    </tr>
                </tbody>
                <tbody v-if="!loading && completed_orders_data.length != 0">
                    <tr v-for="(data,index) in completed_orders_data" :key="index">
    
                        <td> {{ new Date(data.created_at).toLocaleDateString('en-GB')
                                            }} </td>
                        <td> {{ data.currency }}/ {{ data.with_currency }} </td>
    
                        <td style="color:var(--red)">{{ data.order_type }} </td>
                        <td>{{ data.at_price }}</td>
                        <td> {{data.executed}}</td>
                        <td> {{data.fee}}%</td>
                        <td>{{data.role}}</td>
    
                        <td class="text-end"> {{data.total}}</td>
    
                    </tr>
                </tbody>
    
            </table>
        </div>
        <div class="pagination_box d-flex justify-content-end" style="color:white">
            <pagination v-model="current_page" :records="recordData"  :per-page="perPageData" :options="options" @paginate="TradeHistory" />
        </div>
    </div>
    </template>
    
        
    <script>
    import ApiClass from "@/api/api";
    export default {
        name: 'TradeHistory',
        data() {
            return {
                open_orders_data: [],
                current_page: 1,
                recordData:0,
                loading: false,
                completed_orders_data: [],
                perPageData: 10,
                options: {
                    edgeNavigation: false,
                    chunksNavigation: false,
                    chunk: 3,
                    texts: false,
    
                },
    
            }
        },
        mounted() {
            this.TradeHistory()
        },
    
        methods: {
            async TradeHistory() {
                if (!localStorage.token) {
                    return;
                }
                console.log("skdsd");
                // let $this = this;
                // this.loading = true;
                let res = await ApiClass.getNodeRequest("orders/get?type=completed&page=" + this.current_page + "&per_page="+this.perPageData, true);
                // this.loading = false;
                console.log('sayam', res)           
                this.completed_orders_data = res.data.data.data;
                console.log(this.completed_orders_data, "ds");
                this.loading = false;
                // this.completed_orders_data = res.data.data.data
                this.current_page = res.data.data.current_page;
                this.perPageData = res.data.data.per_page;
                this.recordData = res.data.data.total;
    
            },
    
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
    
    tbody tr td {
        width: 20%;
    }
    
    table {
        white-space: nowrap;
    }
    </style>
    
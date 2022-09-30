<template>
<div>
  
       <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Pair</th>
                    <th scope="col">Type</th>
                    <th scope="col">Side</th>
                    <th scope="col">Price</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Filled</th>
                    <th scope="col">Total</th>
                    <th scope="col" class="text-end">

                        <div class="dropdown">
                            <button class="btn_drop w-100 dropdown-toggle" type="button" id="dropdownMenuButton_all" data-bs-toggle="dropdown" aria-expanded="false">
                                {{ historylist.name }}
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton_all">
                                <li class="list_items  d-flex align-items-center p-2" v-for="(historylist, index) in HistoryListData" :key="index" @click="currencySelect(historylist)">
                                    {{ historylist.name }}

                                </li>
                            </ul>
                        </div>

                    </th>
                </tr>
            </thead>
            <tbody v-if="loading">
                <tr v-for="(data,index) in OrderData" :key="index">

                    <td> {{data.date}}</td>
                    <td> {{data.first_pair}}/ {{data.second_pair}}</td>
                    <td> {{data.type}}</td>
                    <td style="color:var(--red)"> {{data.side}}</td>
                    <td> {{data.price}}</td>
                    <td> {{data.amount}}</td>
                    <td> {{data.filled}}%</td>
                    <td> {{data.total}}</td>
                    <td>

                    </td>

                </tr>
            </tbody>
            <tbody v-else>
                <tr v-for="i in 2" :key="i">

                    <td> <Skeletor /></td>
                    <td><Skeletor /></td>
                    <td><Skeletor /></td>
                    <td > <Skeletor /></td>
                    <td> <Skeletor /></td>
                    <td> <Skeletor /></td>
                    <td><Skeletor /></td>
                    <td> <Skeletor /></td>
                    <td>

                    </td>

                </tr>
            </tbody>
        </table>
       </div>
   
</div>
</template>

<script>
export default {
    name: 'OpenHistory',
    data() {
        return {
            loading:true,
            OrderData: [{
                date: '2022-04-01  21:01:48',
                first_pair: 'btc',
                second_pair: 'usdt',
                type: 'limit',
                side: 'sell',
                price: '30.00',
                amount: '2.13',
                filled: '0.00',
                total: '63.90 USD'

            }],

            historylist: {
                name: "All",
            },

            HistoryListData: [{

                    name: "All",

                },
                {

                    name: "Filled",

                },
                {

                    name: "Partial Filled",

                },
                {

                    name: "Cancelled",

                },
                {

                    name: "Expired",

                },

            ],

        }
    },
    methods: {
        currencySelect(select_Currency) {
            console.log("currencySelect");
            this.historylist = select_Currency;
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
    width: 10.9%;
}
table {
    white-space: nowrap;
}

.btn_drop {
    color: var(--avx-white);
    cursor: pointer;
    background-color: transparent;
    border: 1px solid transparent;
}

.dropdown-menu {
    background-color: var(--light-black-bg);
    border: 1px solid var(--light-yellow);
}

.dropdown-menu li {
    color: var(--avx-white);
    font-size: 14px;
}

.dropdown-menu li:hover {
    background-color: var(--on-hover);
    color: var(--avx-yellow);
    transition: all 0.2s ease;
    cursor: pointer;
}
</style>

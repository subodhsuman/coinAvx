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
                <tr v-for="(data,index) in OrderData" :key="index">

                    <td> {{data.date}}</td>
                    <td> {{data.first_pair}}/ {{data.second_pair}}</td>

                    <td style="color:var(--red)"> {{data.side}}</td>
                    <td> {{data.price}}</td>
                    <td> {{data.executed}}</td>
                    <td> {{data.fee}}%</td>
                    <td>{{data.role}}</td>

                    <td class="text-end"> {{data.total}}</td>

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

                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
export default {
    name: 'TradeHistory',
    data() {
        return {
            loading: true,
            OrderData: [{
                date: '2022-04-01  21:01:48',
                first_pair: 'btc',
                second_pair: 'usdt',
              
                side: 'sell',
                price: '30.00',
                executed: '2.13',
                fee: '0.0546611',
                role:'-',
                total: '63.90 USD'

            }]
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
tbody tr td {
    width: 20%;
}
table {
    white-space: nowrap;
}
</style>

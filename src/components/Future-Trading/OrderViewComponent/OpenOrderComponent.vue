<template>
<div>
    <div class="table-responsive">
        <table class="table ">
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
                    <th scope="col" class="text-end">clear all</th>
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
                    <td class="text-end"> <svg xmlns="http://www.w3.org/2000/svg" width="14.759" height="14.759" viewBox="0 0 14.759 14.759">
                            <path id="Path_1913" data-name="Path 1913" d="M3.476,6.428H15.283v9.593a.738.738,0,0,1-.738.738H4.214a.738.738,0,0,1-.738-.738ZM4.952,7.9v7.38h8.855V7.9ZM7.166,9.38H8.642v4.428H7.166Zm2.952,0h1.476v4.428H10.118ZM5.69,4.214V2.738A.738.738,0,0,1,6.428,2h5.9a.738.738,0,0,1,.738.738V4.214h3.69V5.69H2V4.214Zm1.476-.738v.738h4.428V3.476Z" transform="translate(-2 -2)" fill="#f31111" />
                        </svg>
                    </td>

                </tr>
            </tbody>
            <tbody v-else>
                <tr v-for="i in 2" :key="i">

                    <td> <Skeletor /></td>
                    <td> <Skeletor /></td>
                    <td> <Skeletor /></td>
                    <td> <Skeletor /></td>
                    <td> <Skeletor /></td>
                    <td> <Skeletor /></td>
                    <td> <Skeletor /></td>
                    <td> <Skeletor /></td>
                    <td> <Skeletor /></td>
                    

                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
export default {
name:'OpenOrderComponent',
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
table {
    white-space: nowrap;
}
</style>

<template>
<div>
    <div class="table-responsive ">
        <table class="table ">
            <thead>
                <tr>
                    <th scope="col">Coin
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8.5" viewBox="0 0 6 6.5">
                            <g id="Group_28796" data-name="Group 28796" transform="translate(-611 -1061)">
                                <path id="Polygon_11" data-name="Polygon 11" d="M3,0,6,3H0Z" transform="translate(617 1067.5) rotate(180)" fill="var(--avx-white)" />
                                <path id="Polygon_12" data-name="Polygon 12" d="M3,0,6,3H0Z" transform="translate(611 1061)" fill="var(--avx-white)" />
                            </g>
                        </svg>
                    </th>
                    <th scope="col">Total Balance
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8.5" viewBox="0 0 6 6.5">
                            <g id="Group_28796" data-name="Group 28796" transform="translate(-611 -1061)">
                                <path id="Polygon_11" data-name="Polygon 11" d="M3,0,6,3H0Z" transform="translate(617 1067.5) rotate(180)" fill="var(--avx-white)" />
                                <path id="Polygon_12" data-name="Polygon 12" d="M3,0,6,3H0Z" transform="translate(611 1061)" fill="var(--avx-white)" />
                            </g>
                        </svg>
                    </th>
                    <th scope="col">Available Balance
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8.5" viewBox="0 0 6 6.5">
                            <g id="Group_28796" data-name="Group 28796" transform="translate(-611 -1061)">
                                <path id="Polygon_11" data-name="Polygon 11" d="M3,0,6,3H0Z" transform="translate(617 1067.5) rotate(180)" fill="var(--avx-white)" />
                                <path id="Polygon_12" data-name="Polygon 12" d="M3,0,6,3H0Z" transform="translate(611 1061)" fill="var(--avx-white)" />
                            </g>
                        </svg>
                    </th>
                    <th scope="col">In Order
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8.5" viewBox="0 0 6 6.5">
                            <g id="Group_28796" data-name="Group 28796" transform="translate(-611 -1061)">
                                <path id="Polygon_11" data-name="Polygon 11" d="M3,0,6,3H0Z" transform="translate(617 1067.5) rotate(180)" fill="var(--avx-white)" />
                                <path id="Polygon_12" data-name="Polygon 12" d="M3,0,6,3H0Z" transform="translate(611 1061)" fill="var(--avx-white)" />
                            </g>
                        </svg>
                    </th>
                    <th scope="col" class="text-end">BTC Value
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8.5" viewBox="0 0 6 6.5">
                            <g id="Group_28796" data-name="Group 28796" transform="translate(-611 -1061)">
                                <path id="Polygon_11" data-name="Polygon 11" d="M3,0,6,3H0Z" transform="translate(617 1067.5) rotate(180)" fill="var(--avx-white)" />
                                <path id="Polygon_12" data-name="Polygon 12" d="M3,0,6,3H0Z" transform="translate(611 1061)" fill="var(--avx-white)" />
                            </g>
                        </svg>
                    </th>

                </tr>
            </thead>
            <tbody v-if="loading">
                <tr v-for="(data,index) in OrderData" :key="index">

                    <td> {{data.coin}}</td>
                    <td> {{data.balance}}</td>

                    <td> {{data.avail_balance}}</td>
                    <td> {{data.in_order}}</td>
                    <td class="text-end"> {{data.value}}</td>

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

                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
export default {
    name: 'FundComponent',
    data() {
        return {
            loading: true,
            OrderData: [{
                coin: '2022-04-01  21:01:48',
                balance: 'btc',
                avail_balance: 'usdt',
                in_order: 'sell',
                value: '30.00',
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
table {
    white-space: nowrap;
}

tbody tr {
    border-bottom: 1px solid transparent;
}

tbody tr td {
    width: 12.5%;
}
</style>

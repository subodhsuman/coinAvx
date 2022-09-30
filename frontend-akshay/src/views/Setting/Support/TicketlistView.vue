<template>
<div>
    <SettingLayout>
        <div class="px-md-4 px-0 py-4">
            <div class="setting_slot_box">
                <!-- setting main haeding -->
                <div class="head">
                    <SettingHeading main_heading="Support"> </SettingHeading>
                </div>
                <div class="setting_inner_content row  justify-content-between p-md-5 p-2">

                    <div class="col-md-12 col-lg-12 col-xl-12">
                        <div class="ticket-list-table table-responsive">
                            <table class="table table-borderless align-middle">
                                <thead>
                                    <tr class="text-center">
                                        <th scope="col" class="ps-5 text-start">S.No{{loading}}</th>
                                        <!-- <th scope="col">Pairs</th> -->
                                        <th scope="col">Ticket Type</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Ticket Generated</th>
                                        <th scope="col">Status</th>
                                        <th scope="col" class="text-end pe-5">Action</th>
                                    </tr>
                                </thead>
                                <tbody v-if="!loading">
                                    <template v-if="data_found">
                                        <tr class="text-center" v-for="(data,index) in TicketData" @click="showTicket(data)" :key="index">
                                            <!-- <td class="py-3 ps-5 text-uppercase text-start"> {{data.s_num}} </td> -->
                                            <!-- <td class="py-3 text-capitalize">{{data.pairs}} </td> -->
                                            <td>{{key}}</td>
                                    <td>{{data.category.name}}</td>
                                    <td>{{data.title}}</td>
                                    <td>{{data.author_name}}</td>
                                    <td>{{data.author_email}}</td>
                                    <td>{{data.generated}}</td>
                                    <td>{{data.status}}</td>
                                            
                                            <td class="text-end py-3 pe-5">
                                                <router-link to="/ticket-modal">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="19.362" height="12.153" viewBox="0 0 19.362 12.153">
                                                    <g id="Group_28950" data-name="Group 28950" transform="translate(-1887.159 -4990)">
                                                        <path id="Path_1562" data-name="Path 1562" d="M117.5,127.882a10.746,10.746,0,0,0-19.22,0l-.071.141.071.141a10.747,10.747,0,0,0,19.22,0l.071-.141Zm-9.61,4.536a4.394,4.394,0,1,1,4.394-4.394A4.4,4.4,0,0,1,107.887,132.418Z" transform="translate(1788.953 4868.053)" fill="#e5b945" />
                                                        <path id="Path_1563" data-name="Path 1563" d="M306.082,234.251a1.829,1.829,0,1,1-1.829-1.829,1.829,1.829,0,0,1,1.829,1.829" transform="translate(1592.587 4761.825)" fill="#e5b945" />
                                                    </g>
                                                </svg>
                                                </router-link>

                                            </td>
                                        </tr>
                                    </template>
                                    <template v-else>
                                        <tr>
                                            <th colspan="8">
                                                <div class="data_not_found text-center p-5">
                                                    <div>
                                                        <img src="../../../assets/images/not-found.png" alt="image" class="mb-4">
                                                        <p>No Records Found</p>
                                                    </div>
                                                </div>
                                            </th>
                                        </tr>
                                    </template>
                                </tbody>
                                <!-- Skeletor Loader -->
                                <tbody v-else>
                                    <tr v-for="i in 5" :key="i">
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

                    <!-- <div class="pagination_box d-flex justify-content-end mt-4" style="color:white">
                        <pagination v-model="page" :records="recordData" :per-page="perPageData" :options="options" @paginate="getTickets" />
                    </div> -->
                </div>
            </div>
        </div>
    </SettingLayout>
</div>
</template>

<script>
import SettingLayout from '@/Layouts/SettingLayout.vue';
import SettingHeading from '@/components/setting/SettingHeading.vue';
import SupportData from '@/assets/json/SupportData.json'
import ApiClass from '@/Api/Api';
export default {
    name: 'TicketlistView',
    components: {
        SettingHeading,
        SettingLayout
    },
    data() {
        return {
            TicketData:[],
            data_found: true,
            page: 1,
            recordData: 3,
            perPageData: 2,
            loading: true,
            Ticket_ListData: SupportData.Ticket_ListData

        }
    },
       mounted(){
        this.getTickets();
    },
     methods: {
        async getTickets() {
            this.loading = true;
            let response = await ApiClass.getRequest("ticket/get", true);
            if (response?.data) {
               
                if (response.data.status_code == 1) {
                    this.TicketData = response.data.data; 
                    this.paginated = response.data.data; 
                    console.log(this.TicketData);
                    this.loading=false
                    if (this.TicketData.length == 0) {
                       return  this.failed("NO DATA FOUND");

                    }
                }
                if (response.data.status_code == 0) {
                    this.failed(response.data.message);
                }
            }
        },
       

        showTicket(data) {
            this.$store.commit("SET_TicketData",data.id );
        },
    },
}
</script>

<style scoped>
/* table */
table {
    white-space: nowrap;
    color: var(--avx-white);
}

table thead tr {
    background-color: var(--setting-choco);
}

.ticket-list-table thead tr th:first-child {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.ticket-list-table thead tr th:last-child {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}

.ticket-list-table thead tr th {
    font-weight: 500;
    font-size: 14px;
}


.ticket-list-table tbody tr td {
    font-weight: 500;
    font-size: 14px;
}

.ticket-list-table .form-check-input:checked {
    background-color: var(--avx-yellow);
    border-color: var(--avx-yellow);
}

.ticket-list-table .form-check-input {
    background-color: transparent;
    border: 1px solid var(--avx-yellow);
}


tbody tr td span {
    color: var(--text-grey);
    font-size: 13px;
}

.data_not_found p {
    color: var(--avx-yellow);
}

.data_not_found {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 600px;
}
</style>

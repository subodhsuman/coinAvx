<template>
  <div>
    <SettingLayout>
      <div class="px-md-4 px-0 py-4">
        <div class="setting_slot_box">
          <!-- setting main haeding -->
          <div class="head">
            <SettingHeading main_heading="PROFILE SETTING"> </SettingHeading>
          </div>
          <div class="setting_inner_content row p-md-5 p-2">
            <div class="col-md-12 col-lg-12 col-xl-12 setting_sub_heading">
              <SubHeading sub_heading="Activity lOgs"> </SubHeading>
            </div>

            <div class="col-md-12 col-lg-12 col-xl-12">
              <div class="bank-detail-table table-responsive">
                <table class="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col" class="ps-5">Date / Time</th>
                      <th scope="col">IP</th>
                      <th scope="col" class="text-end pe-5">Activity</th>
                    </tr>
                  </thead>
                  <tbody v-if="!pageLoader">
                    <tr v-for="(data, index) in ActivityData" :key="index">
                      <td class="ps-5 py-2">{{ formatDate(data.created_at)}}</td>
                      <td class="py-2">{{data.ip }}</td>
                      <td
                        class="text-end pe-5 py-2"
                        style="color: var(--green)"
                      >
                        {{ data.message }}
                      </td>
                    </tr>
                  </tbody>
                  <!-- Skeletor Loader -->
                  <tbody v-else>
                    <tr v-for="i in 5" :key="i">
                      <td style="flex-basis: 33.3%">
                        <Skeletor />
                      </td>
                      <td style="flex-basis: 33.3%">
                        <Skeletor />
                      </td>
                      <td style="flex-basis: 33.3%">
                        <Skeletor />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div
              class="pagination_box d-flex justify-content-end mt-4"
              style="color: white"
            >
              <pagination
                v-model="page"
                :records="recordData"
                :per-page="perPageData"
                :options="options"
                @paginate="activeLog"
              />
            </div>
          </div>
        </div>
      </div>
    </SettingLayout>
  </div>
</template>

<script>
import SettingLayout from '@/Layouts/SettingLayout.vue';
import SettingHeading from '@/components/setting/SettingHeading.vue';
import SubHeading from '@/components/setting/SubHeading.vue';
import ApiClass from '@/Api/api';
  import moment from "moment";
export default {
    name: 'ActivityLog',
    components: {
        SettingHeading,
        SettingLayout,
        SubHeading
        
    },  
    data() {
      return {
        ActivityData: [],
        pageLoader: true,
        page: 1,
        perPageData: 0,
        recordData: 0,
        options: {
          edgeNavigation: false,
          chunksNavigation: false,
          chunk: 4,
          texts: false,
          format: false,
        },
      }
    },

    mounted() {
      this.activeLog(this.page)
    },

    methods: {
      async activeLog(page) {

        this.pageLoader = true;

        //ACTIVELOG API CALL
        let response = await ApiClass.getRequest("log/get?page=" + page + '&per_page=10', true)

        //API RESPONSE
        if (response?.data) {

          if (response.data.status_code == '0') {
            //ERROR MESSAGE
            return this.failed(response.data.message);
          }

          if (response.data.status_code == '1') {

            // FALSE PAGE LOADER
            this.pageLoader = false;
           

            //SUCCESS MESSAGE
            this.ActivityData = response.data.data.data;
            this.perPageData = parseInt(response.data.data.per_page)
            this.recordData = parseInt(response.data.data.total);
             console.log(this.recordData);
          }
        }
      },

      formatDate(value) {
        return moment(String(value)).format("D MMM Y, hh:mm:ss");
      },

}
}
</script>

<style scoped>
.bank-detail-table {
  min-height: 50vh;
}
.factor_box {
  background-color: var(--factor-bg);
  color: var(--avx-white);
  border: 1px solid var(--light-yellow);
}

.factor_box label span {
  color: var(--text-grey);
  font-size: 14px;
  font-weight: 400;
}

.form-check-input:checked {
  background-color: var(--avx-yellow);
  border-color: var(--avx-yellow);
}

.form-check-input {
  background-color: transparent;
  border: 1px solid var(--avx-yellow);
}

/* table */
table {
  white-space: nowrap;
  color: var(--avx-white);
}

table thead tr {
  background-color: var(--setting-choco);
}

.bank-detail-table thead tr th:first-child {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.bank-detail-table thead tr th:last-child {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.bank-detail-table thead tr th {
  font-weight: 500;
  font-size: 14px;
}

.bank-detail-table tbody tr td {
  font-weight: 500;
  font-size: 14px;
}

.bank-detail-table .form-check-input:checked {
  background-color: var(--avx-yellow);
  border-color: var(--avx-yellow);
}

.bank-detail-table .form-check-input {
  background-color: transparent;
  border: 1px solid var(--avx-yellow);
}
</style>

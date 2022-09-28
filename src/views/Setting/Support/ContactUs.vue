<template>
  <div>
    <SettingLayout>
      <div class="px-md-4 px-0 py-4">
        <div class="setting_slot_box">
          <!-- setting main haeding -->
          <div class="head">
            <SettingHeading main_heading="Support"> </SettingHeading>
          </div>

          <div
            class="setting_inner_content row justify-content-center p-md-5 p-2"
          >
            <div class="col-md-12 col-lg-12 col-xl-12 setting_sub_heading">
              <SubHeading sub_heading="Support"> </SubHeading>
            </div>
            <div class="col-md-8 col-lg-8 col-xl-6">
              <form action="" class="row justify-content-between comment_box" @submit.prevent="handleSubmit">
                <div class="col-md-4 col-lg-4 col-xl-5 mb-5">
                  <div>
                    <label for="basic-url" class="form-label">Title</label>
                    <div class="input-group mb-3">
                      <!-- <span class="input-group-text border-start-0" id="basic-addon1">@</span> -->
                      <input
                        v-model="form.title"
                        type="text"
                        class="form-control"
                        placeholder="title"
                        aria-label="title"
                        aria-describedby="basic-addon1"
                      />
                      <span class="text-danger" v-if="v$.form.title.$error">
                        {{ v$.form.title.$errors[0].$message }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-5 mb-5">
                  <label for="basic-url" class="form-label"
                    >Choose Category</label
                  >
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="form.category_id"
                  >
                    <option selected>Open this select menu</option>
                    <option
                      :value="data.id"
                      selected
                      v-for="(data, index) in ticket_data"
                      :key="index"
                    >
                      {{ data.name }}
                    </option>
                  </select>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-5 mb-5">
                  <div>
                    <label for="basic-url" class="form-label">Name</label>
                    <div class="input-group mb-3">
                      <!-- <span class="input-group-text border-start-0" id="basic-addon1">@</span> -->
                      <input
                        v-model="form.author_name"
                        type="text"
                        class="form-control"
                        placeholder="name"
                        aria-label="name"
                        aria-describedby="basic-addon1"
                      />
                      <span
                        class="text-danger"
                        v-if="v$.form.author_name.$error"
                      >
                        {{ v$.form.author_name.$errors[0].$message }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-5 mb-5">
                  <div>
                    <label for="basic-url" class="form-label"
                      >Email Address</label
                    >
                    <div class="input-group mb-3">
                      <!-- <span class="input-group-text border-start-0" id="basic-addon1">@</span> -->
                      <input
                        v-model="form.author_email"
                        type="text"
                        class="form-control"
                        placeholder="Email Address"
                        aria-label="Email Address"
                        aria-describedby="basic-addon1"
                      />
                      <span
                        class="text-danger"
                        v-if="v$.form.author_email.$error"
                      >
                        {{ v$.form.author_email.$errors[0].$message }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-xl-12 col-lg-12">
                  <div class="input_field mb-5">
                    <label for="exampleFormControlTextarea1" class="form-label"
                      >Query</label
                    >
                    <textarea
                      v-model="form.content"
                      class="form-control shadow-none"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="leave comment here....."
                    ></textarea>
                    <span class="text-danger" v-if="v$.form.content.$error">
                      {{ v$.form.content.$errors[0].$message }}
                    </span>
                  </div>
                </div>
                <div class="col-md-3 col-lg-3 col-xl-3">
                  <div class="text-start">
                    <ChooseImageComponent  v-model="files" @update:modelValue="uploadImage($event)" />
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-12">
                  <div class="text-end">
                    <button type="submit" class="btn_next shadow-none my-3">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </SettingLayout>
  </div>
</template>
    
    <script>
import SettingLayout from "@/Layouts/SettingLayout.vue";
import SettingHeading from "@/components/setting/SettingHeading.vue";
import SubHeading from "@/components/setting/SubHeading.vue";
import ChooseImageComponent from "@/Utilites/ChooseImageComponent.vue";
import ApiClass from "@/Api/Api";
import {
  email,
  helpers,
  maxLength,
  minLength,
  required,
} from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
export default {
  name: "ContectUs",
  components: {
    SettingLayout,
    SettingHeading,
    SubHeading,
    ChooseImageComponent,
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      ticket_data: [],
      form: {
        title: "",
        category_id: "",
        author_name: "",
        author_email: "",
        content: "",
         files:[],
         fileLength:''
      },
    };
  },

  validations() {
    return {
      form: {
        title: {
          minLength: minLength(6),
          maxLength: maxLength(12),
          required: helpers.withMessage("Title is Required", required),
        },
        author_name: {
          required: helpers.withMessage("Name is Required", required),
          minLength: minLength(3),
          maxLength: maxLength(12),
        },
        author_email: {
          required: helpers.withMessage("Email is Required", required),
          email: helpers.withMessage("Invalid Email Address", email),
        },
        content: {
          required: helpers.withMessage("Query is Required", required),
          minLength: minLength(3),
          maxLength: maxLength(128),
        },
      },
    };
  },
  mounted() {
    this.ticketData();
  },
  methods: {
    async ticketData() {
      this.load = true;
      let resp = await ApiClass.getRequest("ticket_type/get", true);
      if (resp?.data) {
        this.load = false;
        if (resp.data.status_code == "1") {
          this.ticket_data = resp.data.data;
        }
        if (resp.data.status_code == "0") {
          this.failed(resp.data.message);
        }
      }
    },

    async handleSubmit() {
      console.log("gjik", this.form);

      const result = await this.v$.form.$validate();

      if (!result) {
        // notify user form is invalid
        return;
      }

      this.loading = true;
          let form_Data = new FormData();
            form_Data.append("title", this.form.title);
            form_Data.append("author_name",this.form.author_name);
            form_Data.append("author_email",this.form.author_email);
            form_Data.append("category_id",this.form.category_id);
            form_Data.append("content",this.form.content);
            
            
            // for (var i = 0; i < this.form.files.length;  i++) {

                let file = this.form.files;
                // console.log(file);
                form_Data.append("images[0]", file);
            // }

    console.log("form data here ",form_Data);

      let response = await ApiClass.postRequest(
        "ticket/create",
        true,
        form_Data
      );

      if (response?.data) {
        this.loading = false;

        if (response.data.status_code == "0") {
          this.failed(response.data.message);

          return;
        }
        if (response.data.status_code == "1") {
          // this.success(response.data.message);
          this.$router.push({
            path: "/settings/ticket-list",
          });

        //   Empty Form Data
          this.resetForm();
          return;
        }
      }
    },
     resetForm() {
            this.title = this.name = this.catagory = this.email = this.comment = "";
            this.v$.$reset()
        },
        uploadImage(e) {
         
         this.form.files = e;
         console.log("hjuihihkjihhhihuihhuuohjuh",e)
    },

  },
};
</script>
    
    <style scoped>
.comment_box label {
  color: var(--avx-white);
}

.comment_box .form-control,
.form-select,
.input-group-text {
  font-size: 14px;
  color: var(--avx-white);
  background-color: transparent;
  border: 1px solid var(--light-yellow);
  border-radius: 21px;
}

.comment_box ::placeholder {
  color: var(--text-grey);
  font-weight: 400;
}

option {
  color: var(--black) !important;
}

.comment_box .form-control:focus,
.form-select:focus {
  box-shadow: none;
}

.form-select {
  background-image: var(--selcet-arrow);
}
.comment_box ::placeholder {
  color: var(--avx-white);
  font-weight: 400;
}
</style>
    
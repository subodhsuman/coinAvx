<<<<<<< HEAD
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

            <div class="col-md-12 col-lg-12 col-xl-12">
              <form class="row" @submit.prevent="submitComment">
                <div class="col-md-12 col-lg-12 col-xl-10">
                  <div class="modal_list_box px-4 py-3">
                    <div class="info_modal mb-3">
                      <p>Name : &nbsp;&nbsp; {{ upperData.author_name }}</p>
                      <p>
                        Status :&nbsp;&nbsp; <span>{{ statusChk }}</span>
                      </p>
                    </div>

       

                    <!-- <div>
                                        <label for="floatingTextarea2">Comments</label>
                                        <div class="comment_box p-2">
                                            <div class="no_comment p-1">
                                                <p class="mb-0">No comment Available</p>
                                            </div>
                                        </div>
                                    </div> -->
                 <label for="floatingTextarea2" class="mb-2">Comments</label>
                    <div class="comment_data p-1 py-3 mb-3">
                        <div class="comment_box1 px-3"   
>
                             <div class="comment_section mb-2 p-3" v-for="(comment, index) in commentData"
                              :key="index" >
                                <p class="mb-1">{{
                                      comment?.user?.name
                                    }}
</p>
                                <p class="mb-1">{{comment.comment}}</p>
                                <p class="mb-0"> {{
                                        new Date(
                                          comment.created_at
                                        ).toLocaleString()
                                      }}
</p>
                                <span class="img" v-if="comment.image" >
                                    <img :src="comment.image" alt="img" style="height: 150px; width:120px;">
                                </span>
                          </div>
                      </div>
                          
                    </div>
                    <!-- comment list -->
                    <label for="floatingTextarea2" class="mb-2">Comments</label>
                    <div class="comment_box">
                      <div class="form-floating">
                        <textarea
                          class="form-control shadow-none"
                          v-model="comment"
                          placeholder="No Comments Available"
                          id="floatingTextarea2"
                          style="height: 100px"
                        ></textarea>
                        <span class="text-danger" v-if="v$.comment.$error">
                            <div>
                                {{ v$.comment.$errors[0].$message }}
                            </div>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-lg-3 col-xl-3">
                    <!-- comment section -->
                    <div class="my-4">
                      <ChooseImageComponent v-model="image" />
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-12 col-xl-12">
                    <!-- comment section -->
                    <div class="my-4 text-end">
                      <button type="submit" class="btn_next shadow-none">
                        SUBMIT
                      </button>
                    </div>
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
import ApiClass from "@/Api/api";

import { useVuelidate } from "@vuelidate/core";
import { helpers, required } from '@vuelidate/validators';
export default {
  name: "TicketListModal",
  components: {
    SettingLayout,
    SettingHeading,
    SubHeading,
    ChooseImageComponent,
  },
   setup() {
    return { v$: useVuelidate() };
  },
  validations() {
        return {
        comment: {
                required: helpers.withMessage('comment is required', required),
            },  
        }
    },
  data() {
    return {
      back: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(255, 187, 0, 1);""><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>',
      status: "open",
      user: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"  viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"></path></svg>',
      commentData: [],
      upperData: [],
      ticket_id: "",
      image: "",
      comment: "",
      submitted: false,
      statusChk: "",
      loading: false,
      loading1: true,
      upperLoader: false,
    };
  },
  mounted() {
    this.upperLoader = true;
    this.ticket_id = this.$store.getters.getTicketData;
    console.log(this.ticket_id);
    this.apiget();
  },
  methods: {
    async apiget() {
      var url = "ticket/get/" + this.ticket_id;
      let response = await ApiClass.getRequest(url, true);
      if (response?.data.status_code == 1) {
        this.upperLoader = false;
        this.loading1 = false;
        this.upperData = response.data.data;
        this.commentData = response.data.data.comments;
        this.statusChk = response.data.data.status;
      } else {
        // this.failed(response.data.message);
      }
    },
    async submitComment() {
         let result = this.v$.$validate();
            if (!result) {
                return;
            }
      if (this.comment == "") {
        return;
      }
      this.loading1 = true;
      this.loading = true;
      let form_data = new FormData();
      form_data.append("ticket_id", this.ticket_id);

      form_data.append("comment", this.comment);
      form_data.append("image", this.image);

      let Comment = await ApiClass.postRequest(
        "ticket_comment/create",
        true,
        form_data
      );
      if (Comment.data.status_code == 1) {
        this.comment = "";
        this.loading1 = false;
        this.loading = false;
        // this.success(Comment.data.message);
        this.apiget();
      } else {
        this.failed(Comment.data.message);
      }
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
  color: var(--avx-black) !important;
}

.comment_box .form-control:focus,
.form-select:focus ,
.comment_box1 .form-control:focus,
.form-select:focus 
{
  box-shadow: none;
}

.form-select {
  background-image: var(--selcet-arrow);
}

.comment_box ::placeholder {
  color: var(--avx-white);
  font-weight: 400;
}
.info_modal p,
label {
  color: var(--avx-white);
}
.info_modal p span {
  color: var(--green);
}
.comment_box1{
    height: 280px;
  overflow-y: scroll;
}
.comment_data {
    font-size: 14px;
  color: var(--avx-white);
  background-color: transparent;
  border: 1px solid var(--light-yellow);
  border-radius: 21px;
}
.comment_section {
  font-size: 14px;
  color: var(--avx-white);
  background-color: transparent;
  border: 1px solid var(--light-yellow);
  border-radius: 21px;
}
.comment_section p{
    word-break: break-all;
}
/* width */
::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
=======
<template>
<div>
    <SettingLayout>
        <div class="px-md-4 px-0 py-4">
            <div class="setting_slot_box">
                <!-- setting main haeding -->
                <div class="head">
                    <SettingHeading main_heading="Support"> </SettingHeading>
                </div>

                <div class="setting_inner_content row justify-content-center p-md-5 p-2">
                    <div class="col-md-12 col-lg-12 col-xl-12 setting_sub_heading">
                        <SubHeading sub_heading="Support"> </SubHeading>
                    </div>

                    <div class="col-md-12 col-lg-12 col-xl-12">
                        <form class="row">
                            <div class="col-md-12 col-lg-12 col-xl-10">
                                <div class="modal_list_box px-4 py-3">
                                    <div class="info_modal mb-3">
                                        <p>Name : &nbsp;&nbsp; Alex</p>
                                        <p> Status :&nbsp;&nbsp;  <span>open</span></p>
                                    </div>
                                    <!-- <div>
                                        <label for="floatingTextarea2">Comments</label>
                                        <div class="comment_box p-2">
                                            <div class="no_comment p-1">
                                                <p class="mb-0">No comment Available</p>
                                            </div>
                                        </div>
                                    </div> -->
                                    <label for="floatingTextarea2" class="mb-2">Comments</label>
                                    <div class="comment_box">
                                        <div class="form-floating">
                                            <textarea class="form-control shadow-none" placeholder="No Comments Available" id="floatingTextarea2" style="height: 100px"></textarea>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="col-md-3 col-lg-3 col-xl-3">
                                    <!-- comment section -->
                                    <div class="my-4">
                                        <ChooseImageComponent />           
                                    </div>
                                </div>
                                    <div class="col-md-12 col-lg-12 col-xl-12">
                                    <!-- comment section -->
                                    <div class="my-4 text-end">
                                        <button type="button" class="btn_next shadow-none">SUBMIT</button>
                                    </div>
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
import SettingLayout from '@/Layouts/SettingLayout.vue';
import SettingHeading from '@/components/setting/SettingHeading.vue';
import SubHeading from '@/components/setting/SubHeading.vue';
import ChooseImageComponent from '@/Utilites/ChooseImageComponent.vue';
export default {
    name: "TicketListModal",
    components: {
        SettingLayout,
        SettingHeading,
        SubHeading,
        ChooseImageComponent
    }
}
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
    color: var(--avx-black) !important;
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
.info_modal p ,
label{
    color: var(--avx-white);
}
.info_modal p span{
    color: var(--green);
}
</style>
>>>>>>> origin/subodh

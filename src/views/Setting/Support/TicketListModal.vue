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

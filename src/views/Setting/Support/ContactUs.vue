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
                        <div class="col-md-8 col-lg-8 col-xl-6">
                            <form action="" class="row justify-content-between comment_box">
                                <div class="col-md-4 col-lg-4 col-xl-5 mb-5">
                                    <div>
                                        <label for="basic-url" class="form-label">Title</label>
                                        <div class="input-group mb-3">
                                            <!-- <span class="input-group-text border-start-0" id="basic-addon1">@</span> -->
                                            <input type="text" class="form-control" placeholder="title" aria-label="title" aria-describedby="basic-addon1">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-lg-4 col-xl-5 mb-5">
                                    <label for="basic-url" class="form-label">Choose Category</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="col-md-4 col-lg-4 col-xl-5 mb-5">
                                    <div>
                                        <label for="basic-url" class="form-label">Name</label>
                                        <div class="input-group mb-3">
                                            <!-- <span class="input-group-text border-start-0" id="basic-addon1">@</span> -->
                                            <input type="text" class="form-control" placeholder="name" aria-label="name" aria-describedby="basic-addon1">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-lg-4 col-xl-5 mb-5">
                                    <div>
                                        <label for="basic-url" class="form-label">Email Address</label>
                                        <div class="input-group mb-3">
                                            <!-- <span class="input-group-text border-start-0" id="basic-addon1">@</span> -->
                                            <input type="text" class="form-control" placeholder="Email Address" aria-label="Email Address" aria-describedby="basic-addon1">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 col-xl-12 col-lg-12">
                                    <div class=" input_field mb-5">
                                        <label for="exampleFormControlTextarea1" class="form-label">Query</label>
                                        <textarea class="form-control shadow-none" id="exampleFormControlTextarea1" rows="3" placeholder="leave comment here....."></textarea>
                                    </div>
                                </div>
                                <div class="col-md-3 col-lg-3 col-xl-3">
                                    <div class="text-start">
                                        <ChooseImageComponent />
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-6 col-xl-12 ">
                                    <div class="text-end">
                                        <button type="button" class="btn_next shadow-none my-3">Submit  </button>
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
        name: "ContectUs",
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
    
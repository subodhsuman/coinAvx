<template>
<div>
    <SettingLayout>
        <div class="px-md-4 px-0 py-4">
            <div class="setting_slot_box">
                <!-- setting main haeding -->
                <div class="head">
                    <SettingHeading main_heading="PROFILE SETTING"> </SettingHeading>
                </div>
                <form class="setting_inner_box row p-md-5 p-4">
                    <div class="col-md-12 col-lg-12 col-xl-12 setting_sub_heading">
                        <SubHeading sub_heading="MY PROFILE"> </SubHeading>
                        <p class="mb-5">Identity Information</p>
                    </div>
                    <!-- Profile Box -->
                    <div class="col-md-3 col-lg-12 col-xl-3">
                        <div class="d-md-flex d-block ">
                            <div class="profile-box text-center py-3 px-5 mb-3">
                                <p>Profile</p>
                                <div class="profile_image mb-3">
                                    <span class="text-uppercase p-1">JA</span>
                                </div>
                                <h6>John Alex</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9 col-lg-12 col-xl-9 align-self-center">
                        <!-- edit button -->
                        <!-- <div class="profile_detail ms-4">
                            <button type="button" class=" edit_btn mb-3 mb-md-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <svg xmlns="http://www.w3.org/2000/svg" height="15px" width="15px" style="fill: var(--avx-white)" viewBox="0 0 512 512">
                                    <path d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z" /></svg>
                            </button>
                        </div> -->
                        <div class="d-md-flex d-block gap-5">
                            <div class="info-box">
                                <label for="basic-url" class="form-label">Email Address:</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control shadow-none px-0" placeholder="demoname@gmail.com" id="basic-url" aria-describedby="basic-addon3">
                                </div>
                            </div>
                            <div class="info-box">
                                <label for="basic-url" class="form-label">Full Name:</label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control shadow-none px-0" placeholder="Alex Jhon" id="basic-url" aria-describedby="basic-addon3">
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- Save Button -->
                    <div class="col-md-12 col-lg-12 col-xl-12 ">
                      <div class="text-end pt-5 mt-5">
                        <button type="button" class="btn_avx px-4">SAVE</button>
                      </div>
                    </div>
                </form>

            </div>

        </div>
    </SettingLayout>
  

     <!-- MODAL -->
     <!-- <div class="edit-modal modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header text-center border-0">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Your Mobile Number</h5>
                    <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div>
                        <form class="text-white modal_box">
                            <div class="row border_bottom py-1 justify-content-center">
                                <div class="col-xl-4">
                                    <span>NAME:</span>
                                </div>
                                <div class="col-xl-6">
                                    <input class="form-control shadow-none" type="text" placeholder="Riya Sharma" readonly>
                                </div>
                            </div>
                            <div class="row border_bottom py-1 justify-content-center">
                                <div class="col-xl-4">
                                    <span>GMAIL:</span>
                                </div>
                                <div class="col-xl-6">
                                    <input class="form-control shadow-none" type="text" placeholder="Riy****sharma123@gmail.com" readonly>
                                </div>
                            </div>
                            <div class="row border_bottom py-1 justify-content-center">
                                <div class="col-xl-4">
                                    <span>NUMBER:</span>
                                </div>
                                <div class="col-xl-6">
                                    <input class="form-control shadow-none" type="text" placeholder="Enter Your Number" readonly>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer border-0 justify-content-center">
                    <button type="button" class="modal_btn px-3 py-2" data-bs-dismiss="modal">Save Profile</button>
                </div>
            </div>
        </div>
    </div> -->
</div>
</template>

<script>
import SettingLayout from '@/Layouts/SettingLayout.vue';
import SettingHeading from '@/components/setting/SettingHeading.vue';
import SubHeading from '@/components/setting/SubHeading.vue';

export default {
    name: "ProfileSettingView",
    components: {
        SettingLayout,
        SettingHeading ,
        SubHeading
        
    }
}
</script>

<style>




/* PROFILE BOX CSS */
.profile_image span {
    background: var(--white);
    border: 1px solid var(--light-yellow);
    border-radius: 11px;
    height: 55px;
    width: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 32px;
    margin: auto;
}

.profile-box {
    background: var(--setting-choco);
    border: 1px solid var(--avx-yellow);
    border-radius: 11px;
    color: var(--avx-yellow);
}

.profile-box p {
    font-size: 14px;
    font-weight: 500;
}

.profile-box h6 {
    font-size: 15px;
    font-weight: 600;
}

.edit_btn {
    background: var(--setting-choco);
    border: 1px solid var(--light-yellow);
    border-radius: 11px;
    height: 45px;
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 32px;
}

.profile_detail h6 {
    color: var(--avx-white);
    font-size: 14px;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
}

.info-box .form-control {
    font-size: 14px;
    color: var(--avx-white);
    background-color: transparent;
    border: 1px solid transparent;
}

.info-box ::placeholder {
    color: var(--text-grey);
}

.info-box label {
    color: var(--avx-white);
    font-weight: 400;
}

/* EDIT MPODAL */
/* .modal-content {
    background-color: var(--setting-choco);
    border: 1px solid var(--avx-yellow);
}

.btn-close {
    background: transparent var(--cut-img);
    border-radius: 0.25rem;
    opacity: 1;
    padding: 10px;
    border: 0;
    background-repeat: no-repeat;
    position: absolute;
    right: 2px;
}

.modal-header {
    justify-content: center;
    color: var(--avx-white);
}

.border_bottom {
    border-bottom: 1px solid var(--modal-border);
}

.modal_box span {
    font-size: 13px;
    color: var(--avx-white);
}
.modal_box{
      font-weight: 400;
    font-family: 'Poppins', sans-serif;
}

.modal_btn {
    color: var(--white);
    cursor: pointer;
    background-color: var(--avx-yellow);
    border: 1px solid transparent;
    font-size: 14px;
    border-radius: 0.25rem;
    font-weight: 600;
}
.edit-modal .form-control {
    font-size: 1rem;
    color: var(--avx-white);
    background-color: transparent;
    background-clip: padding-box;
    border: 1px solid var(--light-yellow);
} */
</style>

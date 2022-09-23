<template>
<div>
    <SettingLayout>
        <div class="px-md-4 px-0 py-4">
            <div class="setting_slot_box">
                <!-- setting main haeding -->
                <div class="head">
                    <SettingHeading main_heading="Support"> </SettingHeading>
                </div>
                <div class="setting_inner_box row p-md-5 p-4">
                    <div class="col-md-12 col-lg-12 col-xl-12 setting_sub_heading">
                        <SubHeading sub_heading="Support"> </SubHeading>
                        <p class="mb-5">You Control Your Data, And We Respect That.</p>
                    </div>
                    <div class="col-md-12 col-lg-12 col-xl-12 ">
                        <div class="support_list">
                            <h6 class="mb-4"> For Requests Regarding:</h6>
                        <ul class="list-unstyled ms-5 ">
                            <li class="mb-3"> <img src="../../../assets/images/icons/star-bullet.svg" alt="icon"> Copy Of Your Data</li>
                            <li class="mb-3"> <img src="../../../assets/images/icons/star-bullet.svg" alt="icon"> Data Export</li>
                            <li class="mb-3"> <img src="../../../assets/images/icons/star-bullet.svg" alt="icon"> Data Correction</li>
                        </ul>
                        <p class="my-4 ms-5">Please Reach Out To Us. Our Team Will Be Happy To Help You Out.</p>
                        </div>
                    </div>

                    <!-- Save Button -->
                    <div class="col-md-12 col-lg-12 col-xl-12 ">
                        <div class="text-end d-flex gap-3 justify-content-end pt-5 mt-5">
                            <router-link to="/ticket-list">
                                <button type="button" class="btn_back px-4">view previous tickets</button>
                            </router-link>
                            <router-link to="/contact-us">
                                <button type="button" class="btn_avx px-4">CONTECT US</button>
                            </router-link>
                        </div>
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

export default {
    name: "SupportView",
    components: {
        SettingLayout,
        SettingHeading,
        SubHeading

    }
}
</script>

<style scoped>
.support_list h6,
.support_list li {
    color: var(--avx-white);
    font-size: 14px;
}
.support_list h6{
    font-size: 16px;
}
.support_list p {
    color: var(--avx-yellow);
}
    </style>

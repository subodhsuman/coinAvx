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
                        <SubHeading sub_heading="2 factor authentication"> </SubHeading>
                    </div>
                    <div class="col-md-12 col-lg-12 col-xl-12">
                        <div class="factor_box p-3 mb-4 rounded">
                            <div class="form-check">
                                <input class="form-check-input shadow-none" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Verification code via app <br>
                                    <span>This allows you to generate a verification code using an app on your phone.</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 col-lg-12 col-xl-12">
                        <div class="factor_box p-3 mb-4 rounded">
                            <div class="form-check">
                                <input class="form-check-input shadow-none" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Email confirmation <br>
                                    <span>This will send a code via email to verify your login. Other two-step verification methods should be chosen over this if possible.</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 col-lg-12 col-xl-12">
                        <div class="factor_box p-3 mb-4 rounded">
                            <div class="form-check">
                                <input class="form-check-input shadow-none" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                                <label class="form-check-label" for="flexRadioDefault3">
                                    Google Authenticator <br>
                                    <span>This allows you to generate a verification code on your phone.</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 col-lg-12 col-xl-12">
                        <div class="d-flex gap-4 justify-content-end my-5">
                            <button type="button" class="btn_back"> Cancel</button>
                            <button type="button" class="btn_next"> Submit</button>
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
    name: 'TwoFactorView',
    components: {
        SettingHeading,
        SettingLayout,
        SubHeading
    },
}
</script>

<style scoped>
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
</style>

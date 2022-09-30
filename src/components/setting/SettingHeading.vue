<template>
<div>
    <div class="setting_slot_haed p-4 text-center">
        <h5> {{main_heading}} </h5>
    </div>

</div>
</template>

<script>
export default {
    name: 'SettingHeading',
    props: {
        main_heading: String
    }
}
</script>

<style scoped>
.setting_slot_haed {
    background-color: var(--seeting-heading-bg);
    color: var(--avx-white);
    text-transform: uppercase;
}
</style>

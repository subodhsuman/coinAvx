<template>
<div class="base-image-input" :style="{ 'background-image': `url(${imageData})` }" @click="chooseImage">
    <span v-if="!imageData" class="placeholder">
        <div>
            <p class="mb-0">
                <span>Drop file here</span>
            </p>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" style="fill: var(--avx-yellow);" viewBox="0 0 448 512">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
            </div>
        </div>
    </span>
    <input class="file-input" ref="fileInput" type="file" @input="onSelectFile">
</div>
</template>

<script>
export default {
    name: 'BaseInput',

    data() {
        return {
            imageData: null
        }
    },
    props: ['modelvalue'],

    methods: {
        chooseImage() {
            this.$refs.fileInput.click()
        },

        onSelectFile() {

            const inputt = this.$refs.fileInput
            const files = inputt.files
            if (files && files[0]) {
                const reader = new FileReader
                reader.onload = e => {
                    this.imageData = e.target.result
                }
                reader.readAsDataURL(files[0])
                this.$emit("update:modelValue", files[0])

            }
        }
    }
}
</script>

<style scoped>
.light_image {
    filter: invert(1);
}

.base-image-input {
    display: block;
    width: 225px;
    height: 100px;
    cursor: pointer;
    background-size: cover;
    background-position: center center;
    margin: auto;
    background-color: var(--seeting-heading-bg);
    border: 1px dashed var(--avx-yellow);

}

.base-image-input p {
    color: var(--avx-white);
}

.base-image-input p span {
    color: var(--avx-yellow);
    font-weight: 500;
    font-size: 14px;
}

.placeholder {
    background: transparent;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--avx-white);
    font-size: 12px;
    cursor: pointer;
    text-align: center;
    border-radius: 5px;
    opacity: 1;
}

.file-input {
    display: none;
}
</style>

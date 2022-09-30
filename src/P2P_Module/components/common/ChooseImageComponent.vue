<template>
    <img loading="lazy" src="@/P2P_Module/assets/icons/components/attachment.svg" alt="attach" class="img-fluid"  @click="chooseImage" />      
    <input class="file-input" ref="fileInput" type="file" @input="onSelectFile">
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

<template>
<div class="base-image-input" :style="{ 'background-image': `url(${imageData})` }" @click="chooseImage">
    <span v-if="!imageData" class="placeholder">
        <div>
            <!-- <img src="../../assets/images/selfi.png" alt="choose-img" id="choose_s_image"> -->

            <svg class="mb-3 mx-4" xmlns="http://www.w3.org/2000/svg" width="49.35" height="45.65" style=":fill var(--avx-yellow)" viewBox="0 0 49.35 45.65">
                <path id="Path_1411" data-name="Path 1411" d="M109.662,39.2a.543.543,0,0,0-.466.531V55.656a.51.51,0,0,0,.165.38.607.607,0,0,0,.817,0,.51.51,0,0,0,.165-.38V40.263h16.641a.6.6,0,0,0,.411-.153.5.5,0,0,0,0-.756.6.6,0,0,0-.411-.153H109.77a.581.581,0,0,0-.108,0Zm30.986,0a.546.546,0,0,0-.52.581.566.566,0,0,0,.628.481H157.4V55.656h0a.512.512,0,0,0,.165.38.607.607,0,0,0,.817,0,.512.512,0,0,0,.165-.38V39.732a.554.554,0,0,0-.574-.531H140.755a.581.581,0,0,0-.108,0Zm-6.778,9.023c-5.064,0-9.181,3.809-9.181,8.493,0,2.316,1.458,4.224,3.066,5.69-4.929,2.36-8.8,7.262-8.8,12.888h0a.554.554,0,0,0,.574.531h28.691a.554.554,0,0,0,.574-.531c0-5.627-3.875-10.528-8.8-12.888,1.609-1.465,3.066-3.374,3.066-5.69,0-4.684-4.117-8.493-9.181-8.493Zm0,1.062c4.443,0,8.033,3.321,8.033,7.431,0,2.126-1.545,4.033-3.246,5.441a.508.508,0,0,0-.185.475.537.537,0,0,0,.329.4c4.712,1.977,8.536,6.525,8.787,11.727H120.151c.251-5.2,4.074-9.751,8.787-11.727h0a.537.537,0,0,0,.329-.4.509.509,0,0,0-.185-.475c-1.7-1.407-3.246-3.314-3.246-5.441,0-4.11,3.59-7.431,8.033-7.431ZM109.7,67.847a.545.545,0,0,0-.5.548V84.318h0a.554.554,0,0,0,.574.531h17.215a.6.6,0,0,0,.411-.153.5.5,0,0,0,0-.756.6.6,0,0,0-.411-.153H110.344V68.395a.511.511,0,0,0-.185-.412.6.6,0,0,0-.46-.136Zm48.2,0a.546.546,0,0,0-.5.548V83.788H140.756a.6.6,0,0,0-.411.153.5.5,0,0,0,0,.756.6.6,0,0,0,.411.153h17.215a.554.554,0,0,0,.574-.531V68.395h0a.513.513,0,0,0-.186-.412.6.6,0,0,0-.46-.136Z" transform="translate(-109.195 -39.199)" fill="var(--avx-white)" />
            </svg>

            <p>
                Drop files to upload or <span>Browse</span>
            </p>
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
    width: 160px;
    height: 160px;
    cursor: pointer;
    background-size: cover;
    background-position: center center;
    margin: auto;
    border: 1px dashed;
}

.base-image-input p {
    color: var(--avx-white);
}

.base-image-input p span {
    color: var(--avx-yellow);
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

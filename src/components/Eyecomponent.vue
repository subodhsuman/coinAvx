<template>
<div>
    <form class="row pb-5" @submit.prevent="resetSub()">
        <div class="col-md-12 col-lg-12 col-xl-12">
            <div class="form_box">
                <label class="form-label">Login Password</label>
                <div class="mb-3">
                    <div class="input-group ">
                        <input :type="hidden1 ? 'password':'text'" class="form-control shadow-none" v-model="reset_pwd.log_pwd" placeholder="Enter password" aria-label="Username" aria-describedby="basic-addon1" />
                        <span @click="hidden1 = !hidden1" class="input-group-text" v-html="hidden1 ? this.hide:this.show"></span>
                    </div>

                </div>
            </div>

        </div>
        <!-- <div class="col-md-12 col-lg-12 col-xl-12">
            <div class="form_box">
                <label class="form-label">Enter New Password</label>
                <div class="mb-3">
                    <div class="input-group">
                        <input :type="hidden2 ? 'password':'text'" class="form-control shadow-none" v-model="reset_pwd.new_pwd" placeholder="Enter password" aria-label="Username" aria-describedby="basic-addon1" />
                        <span @click="hidden2 = !hidden2" class="input-group-text" v-html="hidden2 ? this.hide:this.show"></span>
                    </div>

                </div>
            </div>
        </div> -->
    </form>
</div>
</template>

<script>
export default {
    name:'EyeComponent',
    data() {
        return {
            type1: "password",
            // type2: "password",

            hidden1: true,
            // hidden2: true,
            // hidden3: true,
            hide: " <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: rgba(183, 183, 183, 1);transform: ;msfilter: ;'><path d='M8.073 12.194 4.212 8.333c-1.52 1.657-2.096 3.317-2.106 3.351L2 12l.105.316C2.127 12.383 4.421 19 12.054 19c.929 0 1.775-.102 2.552-.273l-2.746-2.746a3.987 3.987 0 0 1-3.787-3.787zM12.054 5c-1.855 0-3.375.404-4.642.998L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.298-3.298c2.638-1.953 3.579-4.637 3.593-4.679l.105-.316-.105-.316C21.98 11.617 19.687 5 12.054 5zm1.906 7.546c.187-.677.028-1.439-.492-1.96s-1.283-.679-1.96-.492L10 8.586A3.955 3.955 0 0 1 12.054 8c2.206 0 4 1.794 4 4a3.94 3.94 0 0 1-.587 2.053l-1.507-1.507z'></path></svg>",
            show: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' style='fill: rgba(183, 183, 183, 1);transform: ;msfilter: ;'><path d='M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 11c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z'></path><path d='M12 10c-1.084 0-2 .916-2 2s.916 2 2 2 2-.916 2-2-.916-2-2-2z'></path></svg>",
        }
    },
}
</script>

<style>

</style>

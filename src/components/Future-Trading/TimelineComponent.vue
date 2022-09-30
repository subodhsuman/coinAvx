<template>
<div>
    <div class="row mb-2">
        <div class="col-xl-12">
            <div class="order_header d-block  d-lg-flex gap-2 gap-lg-4 align-items-center">
                <!-- Timeline Button -->
                <div class="timeline_list mb-3 mb-lg-0">
                    <ul class="list-unstyled d-flex gap-lg-4 gap-1 mb-0">
                        <li> <button class="time_btn rounded-0" @click="timeselect(0)" :class="(time==0)?'time-active':''"> 1Day </button> </li>
                        <li><button class="time_btn rounded-0" @click="timeselect(1)" :class="(time==1)?'time-active':''"> 1Week </button></li>
                        <li><button class="time_btn rounded-0" @click="timeselect(2)" :class="(time==2)?'time-active':''"> 1Month </button></li>
                        <li><button class="time_btn rounded-0" @click="timeselect(3)" :class="(time==3)?'time-active':''"> 3Month </button></li>
                        <li><button class="time_btn rounded-0" @click="timeselect(4)" :class="(time==4)?'time-active':''"> Time </button></li>
                    </ul>
                </div>
                <!-- Date picker -->
               <div class="d-flex">
                <div class="choose_date input-container mb-2 mb-lg-0">
                    <input type="date" class="shadow-none form-control p-0">
                </div>
                <span class="mb-md-2 ps-0 ">To</span>
                <div class="choose_date input-container ps-md-3 mb-2 ps-0 mb-lg-0">
                    <input type="date" class="shadow-none form-control p-0">
                </div>
               </div>
                <!-- Reset button -->
                <button type="button" class="btn_order rounded me-2 me-lg-0 "> Search</button>
                <button type="button" class="btn_order rounded"> Reset</button>

            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'TimelineComponent',
    data() {
        return {
            time: 0,
            clickedAmt: 1,
        }
    },
    methods: {
        timeselect(val) {
            this.time = val
        }
    }
}
</script>

<style scoped>
/* timeline list */
.timeline_list ul li,
.order_header span {
    font-size: 14px;
    color: var(--text-grey);
}

.choose_date .form-control {
    font-size: 14px;
    color: var(--avx-white);
    background-color: transparent;
    border: 1px solid transparent;
}

.btn_order {
    color: var(--white);
    cursor: pointer;
    background-color: var(--avx-yellow);
    border: 1px solid var(--avx-yellow);
    font-size: 14px;
    padding: 5px 16px;
    font-weight: 500;
}

input.form-control::-webkit-calendar-picker-indicator {
    filter: invert(1);
    opacity: 1;
}

.time_btn {
    color: var(--text-grey);
    cursor: pointer;
    background-color: transparent;
    border: 1px solid transparent;
    font-size: 14px;
    padding: 5px 16px;
    font-weight: 500;
}

.time-active {
    color: var(--avx-yellow);
    border-bottom: 1px solid var(--avx-yellow) !important;
}

.input-container input {
    border: none;
    box-sizing: border-box;
    outline: 0;
    padding: .75rem;
    position: relative;
    width: 85%;
    background: transparent !important;
    color: var(--avx-white) !important;
    font-size: 14px;
}

input[type="date"]::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;

}

@media all and (min-width: 320px) and (max-width: 767px) {
    .time_btn {

        padding: 5px 5px;
    }
}
</style>

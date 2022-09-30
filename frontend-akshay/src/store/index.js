import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    plugins: [createPersistedState()],
    state: {
        isLogin: false,
        favourite: [],
        //new change
        otp: null,
        market_currency: null,
        price: {},
        editOrderInfo: null,
        ticketData: null,
        rate:null,
        gauth_setup:false,
        gauth_status:false,
        user:null,
        user_email:null,
        gauth_secret:null,
    },
    getters: {
        getGoogleAuth:state=>{
            return state.gauth_status;
        },
        getUserEmail: state =>{
            return state.user_email;
        },
        getUInfo: state =>{
            return state.user;
        },
        getGauth: state =>{
            return state.gauth_setup;
        },
        getIsLogin: state => {
            return state.isLogin;
        },
       //new change
       getotp: (state) => {
           return state.otp
       },
        favouriteCryptos: state => {
            return state.favourite;
        },
        getMarketCurrency: state => {
            return state.market_currency;
        },
        getPrice: state => {
            return state.price;
        },
        getEditInfo: state => {
            return state.editOrderInfo;
        },
        getTicketData: state => {
            return state.ticketData;
        },
        getConversionRate: state => {
            return state.rate;
        },
        get_secret: state=>{
            return state.gauth_secret;
        },
    },
    mutations: {
        SET_SECRET(state,payload){
            state.gauth_secret= payload;
        },
        SET_GOOGLE_STATUS(state,payload){
            state.gauth_status=payload;
        },
        SET_USER_EMAIL(state,payload){
            state.user_email= payload;
        },
        SET_USER(state, payload){
            state.user= payload;
        },
        SET_GAUTH(state,payload){
            state.gauth_setup= payload
        },
        setIsLogin(state, value) {
            state.isLogin = value;
        },
         //new change
         SET_OTP(state, payload) {
             state.otp = payload
         },
        SET_FAVOURITE(state, val) {
            state.favourite = val;
        },
        SET_Market_Currency(state, payload) {
            state.market_currency = payload;
        },
        SET_Price(state, prices) {
            state.price = prices;
        },
        setEditOrderInfo(state, payload) {
            state.editOrderInfo = payload;
        },
        SET_TicketData(state, payload) {
            state.ticketData = payload;
        },
        conversion_rate(state, payload) {
            state.rate = payload;
        },
    },
    actions: {},
    modules: {}
})
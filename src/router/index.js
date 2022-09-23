import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { p2p_routes } from '../P2P_Module/router/p2p_routes'
let routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },



    // ___________AUTH PAGES
    {
        path: '/login',
        name: 'LoginView',
        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/Auth/LoginView.vue')
    },
    {
        path: '/register',
        name: 'RegisterView',
        component: () =>
            import ( /* webpackChunkName: "register" */ '../views/Auth/RegisterView.vue')
    },
    {
        path: '/reset-password',
        name: 'ResetpasswordView',
        component: () =>
            import ( /* webpackChunkName: "reset-password" */ '../views/Auth/ResetpasswordView.vue')
    },
    {
        path: '/forgot-password',
        name: 'ForgotpasswordView',
        component: () =>
            import ( /* webpackChunkName: "forgot-password" */ '../views/Auth/ForgotpasswordView.vue')
    },
    {
        path: '/veification',
        name: 'VeificationView',
        component: () =>
            import ( /* webpackChunkName: "veification" */ '../views/Auth/VeificationView.vue')
    },
    // ___________EXCHANGE PAGE

    {
        path: '/exchange',
        name: 'exchangeview',
        component: () =>
            import ( /* webpackChunkName: "exchangeview" */ '../views/ExchangeView.vue'),
        meta: { routen: 'trade' }
    },

    // ___________FUTURE EXCHANGE PAGE

    {
        path: '/future-trading',
        name: 'FutureTrading',
        component: () =>
            import ( /* webpackChunkName: "FutureTrading" */ '../views/FutureTrading.vue'),
        meta: { routen: 'trade' }
    },
    // ___________MARGIN EXCHANGE PAGE

    {
        path: '/margin-trading',
        name: 'margintrading',
        component: () =>
            import ( /* webpackChunkName: "margintrading" */ '../views/MarginTrading.vue'),
        meta: { routen: 'trade' }
    },
    // ___________MARGIN EXCHANGE PAGE

    {
        path: '/profile',
        name: 'profilesetting',
        component: () =>
            import ( /* webpackChunkName: "profile" */ '../views/Setting/profile-setting/ProfileView.vue')
    },

    {
        path: '/kyc',
        name: 'KycVerification',
        component: () =>
            import ( /* webpackChunkName: "kyc" */ '../views/Setting/profile-setting/KycVerificationView.vue')

    },
    {
        path: '/bank-detail',
        name: 'BankDetail',
        component: () =>
            import ( /* webpackChunkName: "BankDetail" */ '../views/Setting/profile-setting/BankDetail.vue')

    },
    {
        path: '/add-bank',
        name: 'AddBank',
        component: () =>
            import ( /* webpackChunkName: "AddBank" */ '../views/Setting/profile-setting/AddBank.vue')

    },
    {
        path: '/2f-authentication',
        name: 'TwoFactorView',
        component: () =>
            import ( /* webpackChunkName: "AddBank" */ '../views/Setting/profile-setting/TwoFactorView.vue')

    },
    {
        path: '/activity-log',
        name: 'ActivityLog',
        component: () =>
            import ( /* webpackChunkName: "ActivityLog" */ '../views/Setting/profile-setting/ActivityLog.vue')

    },
    {
        path: '/referral',
        name: 'ReferralView',
        component: () =>
            import ( /* webpackChunkName: "ReferralView" */ '../views/Setting/profile-setting/ReferralView.vue')
    },
    {
        path: '/portfolio',
        name: 'PortfolioView',
        component: () =>
            import ( /* webpackChunkName: "PortfolioView" */ '../views/Setting/Funds/PortfolioView.vue')
    },
    {
        path: '/deposit-history',
        name: 'DepositHistory',
        component: () =>
            import ( /* webpackChunkName: "DepositHistory" */ '../views/Setting/Funds/DepositHistory.vue')
    },
    {
        path: '/withdraw-history',
        name: 'withdrawhistory',
        component: () =>
            import ( /* webpackChunkName: "withdrawhistory" */ '../views/Setting/Funds/WithdrawHistory.vue')
    },
    {
        path: '/spot-history',
        name: 'SpotTrading',
        component: () =>
            import ( /* webpackChunkName: "SpotTrading" */ '../views/Setting/OrderHistory/SpotTrading.vue')
    },
    {
        path: '/margin-history',
        name: 'MarginHistory',
        component: () =>
            import ( /* webpackChunkName: "MarginHistory" */ '../views/Setting/OrderHistory/MarginHistory.vue')
    },
    {
        path: '/future-history',
        name: 'FutureHistory',
        component: () =>
            import ( /* webpackChunkName: "FutureTrading" */ '../views/Setting/OrderHistory/FutureHistory.vue')
    },
    {
        path: '/p2p-history',
        name: 'P2pTrading',
        component: () =>
            import ( /* webpackChunkName: "P2pTrading" */ '../views/Setting/OrderHistory/P2pTrading.vue')
    },
    {
        path: '/support',
        name: 'SupportView',
        component: () =>
            import ( /* webpackChunkName: "SupportView" */ '../views/Setting/Support/SupportView.vue')
    },
    {
        path: '/ticket-list',
        name: 'TicketlistView',
        component: () =>
            import ( /* webpackChunkName: "TicketlistView" */ '../views/Setting/Support/TicketlistView.vue')
    },
    {
        path: '/contact-us',
        name: 'ContactUs',
        component: () =>
            import ( /* webpackChunkName: "ContactUs" */ '../views/Setting/Support/ContactUs.vue')
    },
    {
        path: '/ticket-modal',
        name: 'TicketListModal',
        component: () =>
            import ( /* webpackChunkName: "TicketListModal" */ '../views/Setting/Support/TicketListModal.vue')
    },
    {
        path: '/portfolio/mobilesetting',
        name: 'MobilePortfolioView',
        component: () =>
            import ('../views/Setting/MobilePortfolioView.vue')
    },



];
let All_routes = [...routes, ...p2p_routes];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: All_routes
})

export default router
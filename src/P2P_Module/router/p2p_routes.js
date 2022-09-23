export const p2p_routes = [
  {
    path: '/p2p',
    name:'p2p',
    component: () => import(/* webpackChunkName: "p2p" */ '../views/P2pMain.vue')
  },
  {
    path: '/p2pbuy',
    name:'p2pbuy',
    component: () => import(/* webpackChunkName: "p2ptransfer" */ '../views/Buy.vue')
  },
  {
    path: '/p2psell',
    name:'p2psell',
    component: () => import(/* webpackChunkName: "p2ptransfer" */ '../views/Sell.vue')
  },
  {
    path: '/p2pordercancelled',
    name:'p2pordercancelled',
    component: () => import(/* webpackChunkName: "p2ptransfer" */ '../views/OrderCancelled.vue')
  }
]


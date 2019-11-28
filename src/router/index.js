import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Principal from '@/components/Principal'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/usuario'

  },
  {
    path: '/',
    redirect: '/usuario'

  },
  {
    path: '/login',
    name: 'login',
    component: Login

  },
  {
    path: '/home',
    name: 'home',
    component: Principal,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: () => import(/* webpackChunkName: "about" */ '../views/Usuario.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserIn.vue')
  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue')
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isLogged = localStorage.getItem("token")
  
  if ( ! requiresAuth && isLogged && to.path === '/login') {
    return next('/user')
  } 
  if ( ! requiresAuth && isLogged && to.path === '/signup') {
    return next('/user')
  } 
  if (requiresAuth && ! isLogged) {
    next('/login')
  } else {
    next()
  }
})

export default router

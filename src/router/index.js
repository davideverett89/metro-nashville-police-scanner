import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home';
import Detail from '../views/Detail';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/detail',
        name: 'Detail',
        component: Detail,
        props: true
    }
]

const router = new VueRouter({
    routes
})
  
export default router
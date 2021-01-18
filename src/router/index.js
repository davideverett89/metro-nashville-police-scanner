import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home';

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    }
]

const Router = new VueRouter({
    routes
})
  
export default Router
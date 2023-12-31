import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DefinitionView from '../views/DefinitionView.vue'
import DefinitionsView from '../views/DefinitionsView.vue'
import SearchView from '../views/SearchView.vue'

const routes = [
  {
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
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/:slug',
    name:'Definition',
    component: DefinitionView
  },
  {
    path:'/definitions/:a',
    name:'Definitions',
    component: DefinitionsView
  },
  {
    path:'/search/:q',
    name:'Search',
    component: SearchView,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router

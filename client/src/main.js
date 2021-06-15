import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Notifications from 'vue-notification'

export const EventBus = new Vue();
import app from './App.vue';
var loggedIn;
EventBus.$on('logged', (data) => {
  if(app){
    loggedIn=data;
  }
})



Vue.config.productionTip = false

import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)

Vue.use(VueRouter);

import Auth from './components/Auth.vue'
import Charsheet from './components/Charsheet.vue'
import Online from './components/Online.vue'

Vue.config.productionTip = false
Vue.use(Notifications)

const routes = [
  {
    path: '/',
    component: Auth,
    props: true
  },
  { 
    path: '/enter',
    component: Auth,
    props:true
  },
  {
    path: '/char',
    component: Charsheet,
    props:true
  },
  {
    path: '/sala',
    component: Online,
    props:true
  }
]



const router = new VueRouter({
  routes // short for `routes: routes`
})

router.afterEach((to, from, next) => {
  if(loggedIn){
    next;
  }else{
    router.push("enter").catch(() => {})
  }
  
})


new Vue({
  render: h => h(App),
  router,
  Online
}).$mount('#app')


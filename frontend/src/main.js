import { createRouter, createWebHistory } from 'vue-router'
import PageCardTicket from './pages/PageCardTicket.vue'
import PageForm from './pages/PageForm.vue'
import PageMain from './pages/PageMain.vue'

import { createApp } from 'vue'
import App from './App.vue'

const routes = [
    { path: '/', component: PageMain },
    { path: '/detailes',  name:'intoTicket', component: PageCardTicket},
    { path: '/form', component: PageForm, name:'intoForm'},
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  createApp(App)
  .use(router)
  .mount('#app')

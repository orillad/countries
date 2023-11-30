import { createRouter, createWebHistory } from 'vue-router'
import TheNavigation from '@/components/TheNavigation.vue'
import HomeView from '@/views/HomeView.vue'
import AppVue from '@/App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/destination/:id/:slug',
      name: 'destinationShow',
      component: ()=> import('@/views/DestinationShow.vue'),
      props: route=>({ ...route.params, id:parseInt(route.params.id as string)}),
      children:[
        {
          path: ':experienceSlug',
          name: 'experience.show',
          component: ()=> import('@/views/ExperienceShow.vue'),
          props: route=> ({...route.params, id: parseInt(route.params.id as string)})
        }
      ]
    }
  ]
})

export default router

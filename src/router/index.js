import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue'
import { projectAuth } from '@/firebase/config'

const requireAuth = (to,from,next) => {
  let user = projectAuth.currentUser
  // console.log('Current user in auth guard: ',user)

  if(!user) {
    next({name:'welcome'})
  }
  else {
    next();
  }

}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomePage
  },
  {
    path:'/chatroom',
    name:'chatroom',
    component: () => import('@/views/ChatRoom.vue'),
    beforeEnter: requireAuth,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

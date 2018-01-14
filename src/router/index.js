import Vue from 'vue'
import Router from 'vue-router'
import Question from '@/pages/Question'
import Profile from '@/pages/Profile'
import Chat from '@/pages/Chat'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/questions',
      name: 'Question',
      component: Question
    }
  ]
})

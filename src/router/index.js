import Vue from 'vue'
import Router from 'vue-router'
import Question from '@/components/question/Question'
import Profile from '@/components/profile/Profile'
import Chat from '@/components/chat/Chat'


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

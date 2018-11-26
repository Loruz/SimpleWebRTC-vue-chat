import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import RoomIndex from '@/components/room/Index'
import store from '@/store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/room/:room',
      name: 'room',
      component: RoomIndex,
      props: true,
      beforeEnter: (to, from, next) => {
        if (!store.getters.getState.name) {
          next({
            name: 'home',
            query: {
              room: to.params.room
            }
          })
        }
        next()
      }
    }
  ]
})
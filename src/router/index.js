import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    redirect:'/home',
    children:[
      {
        path:'/home',
        name:'home',
        component: () => import('../views/Home.vue')
      },
      {
        path:'/positionList',
        name:'positionList',
        component: () => import('../views/PositionList.vue')
      }
    ]


  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }


    // children: [
    //   {
    //     // 当 /user/:id/profile 匹配成功，
    //     // UserProfile 会被渲染在 User 的 <router-view> 中
    //     path: 'profile',
    //     component: UserProfile
    //   },
    //   {
    //     // 当 /user/:id/posts 匹配成功
    //     // UserPosts 会被渲染在 User 的 <router-view> 中
    //     path: 'posts',
    //     component: UserPosts
    //   }
    // ]

  },
]

const router = new VueRouter({
  routes
})

export default router

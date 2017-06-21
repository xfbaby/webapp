import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import axios from 'axios'
//插件

//组件
import Index from './components/Index.vue'
import Login from './components/Login.vue'
import Tuijian from './components/Tuijian.vue'
import Detail from './components/Detail.vue'
import Mulu from './components/Mulu.vue'
import B from './components/B.vue'
import C from './components/C.vue'
Vue.prototype.$http = axios
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
Vue.use(Router)

const router = new Router({
	routes:[
		{
			path:'/index',
			component:Index,
			children:[{

				path: 'tuijian',
				component:Tuijian
			},
			{
				path: 'b',
				component:B
			},
			{
				path: 'c',
				component:C
			}


			]
		},
		{
			path:'/login',
			component:Login
		},
		{
			path:'/detail',
			component:Detail
		},
		{
			path:'/mulu',
			component:Mulu

		}



	]
})
 new Vue({
  router
}).$mount('#app')
router.push('/index/tuijian')



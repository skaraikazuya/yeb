import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Test1 from '../views/Test1.vue'
import Test2 from '../views/Test2.vue'


Vue.use(Router)


export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login,
            hidden:true
        },
        {
            path: '/home',
            name: '菜单',
            component: Home,
            children:[
                {
                    path: '/test1',
                    name: '新建',
                    component: Test1
                }
                // {
                //     path: '/test2',
                //     name: '历史Mock显示',
                //     component: Test2
                // }
            ]
        }

    ]
})


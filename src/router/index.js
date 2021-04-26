/*
 * @Descripttion: 
 * @version: 
 * @Author: liqi
 * @Date: 2021-04-22 20:48:33
 * @LastEditors: sueRimn
<<<<<<< HEAD
 * @LastEditTime: 2021-04-26 22:50:29
=======
 * @LastEditTime: 2021-04-26 23:01:16
>>>>>>> master
 */
//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
//第三方库需要use一下才能用
Vue.use(VueRouter)

//定义routes路由的集合，数组类型
const routes = [
    {path: '/',redirect:'/businessManagement'},
    { path: '/businessManagement', component: resolve => (require(["@/view/BusinessManagement/index.vue"], resolve)) },
    { path: '/addBussiness', component: resolve => (require(["@/view/BusinessManagement/addDetail.vue"], resolve)) },
    { path: '/indexDetail', component: resolve => (require(["@/view/BusinessManagement/indexDetail.vue"], resolve)) },
    { path: '/hbTable', component: resolve => (require(["@/view/hbTable.vue"], resolve)) },
]
console.log("1111");
<<<<<<< HEAD
console.log("主分支开发的");
=======
console.log("主分支开发的123");
>>>>>>> master
//实例化VueRouter并将routes添加进去
const router = new VueRouter({
    //ES6简写，等于routes：routes
    routes
});

//抛出这个这个实例对象方便外部读取以及访问
export default router
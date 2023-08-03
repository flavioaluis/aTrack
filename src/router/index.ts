import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Tarefas from '../views/Tarefas.vue';

 const rotes: RouteRecordRaw[] = [{
    path: '/',
    name: 'Tarefas',
    component: Tarefas
 }]

 const router = createRouter({
     history: createWebHashHistory(),
     routes:rotes
 })

 export default router;
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Tarefas from '../views/Tarefas.vue';
import Projetos from '../views/Projetos.vue';

 const rotes: RouteRecordRaw[] = [
    {
    path: '/',
    name: 'Tarefas',
    component: Tarefas
    }, 
    {
    path: '/projetos',
    name: 'Projetos',
    component: Projetos
    }]

 const router = createRouter({
     history: createWebHashHistory(),
     routes:rotes
 })

 export default router;
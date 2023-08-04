import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Tarefas from '../views/Tarefas.vue';
import Projetos from '../views/Projetos.vue';
import Lista from '../views/Projetos/Lista.vue'
import Formulario from '../views/Projetos/Formulario.vue'
 const rotes: RouteRecordRaw[] = [
    {
    path: '/',
    name: 'Tarefas',
    component: Tarefas
    }, 
    {
        path:'/projetos',
        component: Projetos,
        children:[
            {
                path: '',
                name: 'Projetos',
                component: Lista
            },
            {
                path: 'novo',
                name: 'Novo Projeto',
                component: Formulario
            },
            {
                path: ':id',
                name: 'Editar Projeto',
                component: Formulario,
                props:true
            }
        ]
    }
]

 const router = createRouter({
     history: createWebHashHistory(),
     routes:rotes
 })

 export default router;
import {Iinfo } from '@/interfaces/INotes';
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO, INFORM, } from './tipo-mutacoes';
import IProjeto from '@/interfaces/IProjeto';
import { InjectionKey } from 'vue';
import { createStore, Store, useStore as vuexUseStore } from 'vuex';

interface Estado {
  projetos: IProjeto[],
  information: Iinfo[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
  state: {
    projetos: [],
    information: []
  },
  mutations: {
     [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
          const projeto = {
              id: new Date().toISOString(),
              nome: nomeDoProjeto
          } as IProjeto
          state.projetos.push(projeto)
    },
     [ALTERA_PROJETO](state, projeto:IProjeto) {
        const index = state.projetos.findIndex(proj => proj.id == projeto.id)
        state.projetos[index] = projeto
     },
     [EXCLUIR_PROJETO](state, id:string) {
        state.projetos = state.projetos.filter(proj => proj.id != id)
     },
     [INFORM](state, newInfo: Iinfo) {
        newInfo.id = new Date().getTime() 
        state.information.push(newInfo)

        setTimeout(() => {
         state.information = state.information.filter(info => info.id != newInfo.id)
        },2800)
     }
  }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)

}
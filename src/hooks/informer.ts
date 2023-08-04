import { INFORM } from './../store/tipo-mutacoes';
import { TypeNotes } from '@/interfaces/INotes';
import { store } from '@/store'

type Informer = {
  inform: (type: TypeNotes, title:string, text:string) => void
}

export default () : Informer => {
    
   const inform = (type: TypeNotes, title:string, text:string) : void => {
        store.commit(INFORM, {
        title,
        text,
        type
      })
    }

    return{
        inform
    }
}   
<template>
    <section>
      <form @submit.prevent="salvar">
          <div class="field">
              <label for="nomeDoProjeto" class="label">
                  Nome do Projeto
              </label>
              <input 
                type="text"
                class="input"
                v-model="nomeDoProjeto"
                id="nomeDoProjeto"
              />
          </div>
          <div class="field">
              <button class="button" type="submit">
                  Salvar
              </button>
          </div>
      </form>
     
    </section> 
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from '@/store';
import { ADICIONA_PROJETO, ALTERA_PROJETO} from '@/store/tipo-mutacoes';
import { TypeNotes } from '@/interfaces/INotes';
import  useInformer  from '@/hooks/informer';
  export default defineComponent({
  name: 'Formulario',  
  props: {
    id: {
      type: String
    }
  },
  mounted () {
    if(this.id){
       const projeto = this.store.state.projetos.find( proj => proj.id == this.id)
       this.nomeDoProjeto = projeto?.nome || ''
    }
  },
  data () {
      return {
        nomeDoProjeto:""
      };
  },
  methods: {
    salvar () {
      if (this.id) {
        this.store.commit(ALTERA_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto
        })
      } else {
        this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto)
      }
      
      this.nomeDoProjeto = "";
      this.inform(TypeNotes.SUCCESS, 'Excelente!', 'O projeto foi cadastrado com sucesso!')
      this.$router.push('/projetos')
    }
  },
  setup() {
    const store = useStore()
    const { inform } = useInformer()
    return {
      store,
      inform
    }
  }
});

</script>
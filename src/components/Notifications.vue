<template>
  <div class="info">
    <article 
      class="message" 
      :class="context[info.type]"
      v-for="info in information" 
      :key="info.id"
    >
      <div class="message-header">
        {{info.title}}
      </div>
      <div class="message-body">
        {{info.text}}
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { useStore} from '@/store';
import { computed, defineComponent } from 'vue';
import { TypeNotes } from '@/interfaces/INotes';

export default defineComponent ({
  name: 'Notificacoes',
  data() {
    return {
      context: {
        [TypeNotes.SUCCESS]: 'is-success',
        [TypeNotes.CAUTION]: 'is-warning',
        [TypeNotes.FAIL]: 'is-danger',
      },
    }
  },
  setup() {
    const store = useStore()
    return {
      information: computed(() => store.state.information)
    };
  },
});
</script>

<style scoped>
.info {
  position: absolute;
  right: 0;
  width: 300px;
  padding: 8px;
  z-index: 105;

}
</style>
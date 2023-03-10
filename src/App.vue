<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <formTrack />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import formTrack from './components/Formulario.vue'

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    formTrack
  }
});
</script>

<style>

</style>

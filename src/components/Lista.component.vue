<template>
    <div class="bg-light">
        <h2>{{ toUppercase() }}</h2>  
        <h3 class="pull-left">Tareas por hacer2: {{ numTask }}</h3> <!-- Primera Comunicación de componente hijo-hijo -->
    </div>
</template>

<script>

import { bus } from '../main.js'

export default {
  props: ['titulo'],
  /* props: {
      titulo: {
          type: String,
          default: 'Tareas'
      }
  }, */
  data () {
      return {
          numTask : 0
      }
  },
  methods: {
      toUppercase () {
        return this.titulo.toUpperCase()
      }
  },
  created(){
      bus.$on('updateCounter', (numTask) => {
          this.numTask = numTask
      });
  }
};
</script>
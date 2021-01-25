<template>
    <div class="bg-light">
        <h2>{{ toUppercase() }}</h2> 
        <h3 class="pull-left">Tareas por hacer:</h3>    
    </div>
</template>

<script>

export default {
  props: {
      titulo: {
          type: String,
          default: 'Tareas'
      }
  },
  methods: {
      toUppercase () {
        return this.titulo.toUpperCase()
      }
  }
};
</script>
<template>
    <div class="bg-light">
        <h2>{{ toUppercase() }}</h2>  
        <h3 class="pull-right">Tareas por hacer2: {{ numTask }}</h3> <!-- Primera Comunicación de componente hijo-hijo -->
    </div>
</template>

<script>

export default {
  props: ['titulo','numTask'],
  /* props: {
      titulo: {
          type: String,
          default: 'Tareas'
      }
  }, */
  methods: {
      toUppercase () {
        return this.titulo.toUpperCase()
      }
  }
};
</script>
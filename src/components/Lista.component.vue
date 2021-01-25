<template>
    <div class="bg-light">
        <h2>{{ toUppercase() }}</h2>   
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
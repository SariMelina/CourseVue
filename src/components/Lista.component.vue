<template>
    <div class="bg-light">
        <h2>{{ titulo }}</h2> 
        <h3 class="pull-left">Tareas por hacer:</h3>    
    </div>
</template>

<script>

export default {
  name: "Lista",
  props: ['titulo'],
};
</script>
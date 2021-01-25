<template>
    <ul class="list-group">
        <li v-for="(item, index) in tareas" :key="item.texto" class="list-group-item"
        v-bind:class="{terminada:item.terminada}">
            {{item.texto}}
            <span class="pull-right">
                <button type="button" 
                class="btn btn-success btn-xs glyphicon glyphicon-ok"
                @click="item.terminada = !item.terminada"
                ></button>
                
                <button type="button" 
                class="btn btn-danger btn-xs glyphicon glyphicon-erase"
                @click="borrarTarea(index)"
                ></button>                    
            </span>             
                        
        </li>                
    </ul>
</template>

<script>

export default {
  props: ['tareas'],
  methods: {
      borrarTarea (index) {
          this.tareas.splice(index,1)
      }
  }
};
</script>

<style>
    .terminada {
        color: gray;
        text-decoration: line-through;
    }
</style>
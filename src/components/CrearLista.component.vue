<template>
    <ul class="list-group">
        <li v-for="(item, index) in tareas" :key="item.texto" class="list-group-item"
        v-bind:class="{terminada:item.terminada}">
            {{item.texto}}
            <span class="pull-right">
                <button type="button" 
                class="btn btn-success btn-xs glyphicon glyphicon-ok"
                @click="estado(index)"
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
      estado(indice){
          let terminada = this.tareas[indice].terminada = !this.tareas[indice].terminada
          let id = this.tareas[indice].id;

          this.$http.patch('tareas/' + id + '.json' ,{
              terminada: terminada
          }).then(resp => {
              console.log(resp);
          })
      },
      borrarTarea (index) {
          let id = this.tareas[index].id

          this.$http.delete('tareas/' + id + '.json'). then(resp => {
              console.log(resp);
          })
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
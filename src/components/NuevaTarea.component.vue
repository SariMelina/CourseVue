<template>
    <div class="input-group">
        <input type="text"
        placeholder="Escribe una nueva tarea"
        v-model="nuevaTarea"
        class="form-control"
        @keyup.enter="agregarTarea">
        <span class="input-group-btn">
            <button type="button"
            @click="agregarTarea"
            class="btn btn-dark">Agregar</button>
        </span>
    </div>
</template>

<script>

import { bus } from '../main.js'

export default {
  data () {
      return {
          nuevaTarea: ''
      }
  }, 
  props: ['tareas','updateCounter'],
  methods: {
      agregarTarea () {
          const tarea = this.nuevaTarea.trim()
          if(tarea){
              this.tareas.push({
                  texto: tarea,
                  terminada: false
              })
             /*  this.$emit('incrementarContador', 1)  *//*  1ra forma de comunicación con el padre */
            /*  this.updateCounter() */   /*  2ra forma de comunicación con el padre  */
            /* bus.$emit('updateCounter', this.tareas.length) */
            bus.updateCounter(this.tareas.length)
          }
          this.nuevaTarea = ''
          this.$http.post('tareas.json', {
              texto:tarea,
              terminada:false
          }).then(resp => console.log(resp))
      }
  },
  created () {
      bus.$emit('updateCounter', this.tareas.length)
  }
};
</script>
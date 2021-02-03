<template>
  <div class="container bg-light">
    <Lista titulo="Lista de Tareas"
    :numTask = "numTask"/>
    <!-- <h3 class="pull-left">Tareas por hacer: {{ numTask }}</h3> --> <!-- Primera forma de comunicación de componente hijo-hijo -->
    <!-- <Nueva-Tarea :tareas="tareas" v-on:incrementarContador="numTask += $event"/>  --><!-- 1ra forma de comunicación con el padre -->
    <Nueva-Tarea :tareas="tareas" :updateCounter="updateCounter"/>   <!-- 2ra forma de comunicación con el padre -->
    <Crear-Lista :tareas="tareas"/>
  </div>  
</template>

<script>
// @ is an alias to /src
import Lista from "../components/Lista.component";
import NuevaTarea from '../components/NuevaTarea.component';
import CrearLista from '../components/CrearLista.component';


export default {
  name: "ListaComponent",
  components: {
    Lista,
    NuevaTarea,
    CrearLista
  },
  data () {
    return {
      tareas : [
        {
          texto: 'Aprender Vue.js',
          terminada: false
        },
        {
          texto: 'Aprender Ionic',
          terminada: false
        },
        {
          texto: 'Aprender Angular 2',
          terminada: false
        }
      ]
    }    
  },
  methods: {
    updateCounter () {
      this.numTask++
    }
  },
  created () {
    this.$http.get('https://tareas-a9062-default-rtdb.firebaseio.com/tareas.json')
    .then(resp => {
      return resp.json()
    }).then(respJson => {
      for(let id in respJson){
        this.tareas.push(respJson[id])
      }
    })
  }
};
</script>
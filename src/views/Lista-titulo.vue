<template>
  <div class="container">
    <div class="bg-light">
      <Lista titulo="Lista de Tareas"/>
      <Nueva-Tarea :tareas="tareas"/>
      <Crear-Lista :tareas="tareas"/>
    </div>
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
  }
};
</script>
<template>
  <div class="ui app">
    <div><h1>ToDos</h1></div>
    <div class="ui segment fluid input todo-input" >
        <input 
            type="text"
             
            placeholder="Add ToDo"
            v-on:keyup.enter="addTodo"
        ></div>
    
    <div class="addtodo " v-show="showAllClick"><AddTodo/></div>
    <div class="completedtodo" v-show="showCompletedClick"><CompletedTodo/></div>
    <div class="activetodo" v-show="showActiveClick"> <ActiveTodo/></div>
    <div> <Navmenu/></div>
    
  </div>
</template>

<script>

import AddTodo from './components/AddTodo';
import Navmenu from './components/Navmenu';
import CompletedTodo from './components/CompletedTodo';
import ActiveTodo from './components/ActiveTodo';

import {  mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    AddTodo,
    Navmenu,
    CompletedTodo,
    ActiveTodo
  },
   computed:{

            
    ...mapGetters(['showAllClick', 'showActiveClick', 'showCompletedClick']),
          
        },

  methods:{
            
            ...mapActions(['addTodo']),
           
           
        },
}
</script>

<style>

  .app{
    
    padding: 2rem 25rem;
  
  }

  .app h1{
    text-align: center;
    padding-bottom: 2rem;
    color: tomato;
    font-size: 4rem;
  }

  .show{
    display: block !important;
  }
  .hide{
    display: none !important;
  }

.completedtodo, .addtodo, .activetodo{
    
	animation: fade-in 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

  }

 
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


</style>

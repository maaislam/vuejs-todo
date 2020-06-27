
<template>
    <div class="ui container addtodo" >
        
        <div class="todo__list">
            <li class="ui card fluid " v-for="(todo) in allTodo" :key="todo.id">
                <div class="todo__list-item ">
                    <div class="ui container checkbox adjust">
                        <input type="checkbox" :value="todo.id" @input="complete" v-model="todo.completed">
                            <label
                            :class="{completed:todo.completed}"
                            @dblclick="editTodo(todo)">
                                <h5 >{{todo.title}}</h5>
                            </label>
                    </div>
                    <button class="ui icon red button" @click="discard(todo)">
                        <i  class="trash icon" ></i>
                    </button>
                </div>
                <div class="ui fluid input editBox" >
                    <input
                        class="editBoxHide" 
                        :class="{editBoxShow:todo == editedTodo}" 
                        type="text"
						v-model="todo.title"
						@blur="editDone(todo)"
						@keyup.enter="editDone(todo)" />
                    
                </div>
            </li>
        </div>
    </div>
</template>

<script>

    import {  mapGetters, mapActions} from 'vuex';
    

    export default {
        
        name: 'AddTodo',

       
        computed:{

            
             ...mapGetters(['allTodo', 'editedTodo']),
          
        },
        methods:{
            
            ...mapActions(['addTodo', 'discard', 'complete', 'editTodo', 'editDone' ]),
           
           
        },

        
    }
</script>

<style scoped>

   .addtodo{
       margin-bottom: 5rem;
   }

    li{
        
        list-style: none;
       
    }

    

    .todo__list-item{
       position: relative;
       display: flex;
       padding: 1rem 2rem;
       padding-top: 1.3rem;
       
      
       
    }
    .completed h5{
        text-decoration: line-through;
        pointer-events: none;
        cursor: default;
        color: rgb(155, 155, 155);
        align-items: center;
        
    }

    .editBox input[type="text"] {

        background-color : #d1d1d1e5; 
        padding-left: 4rem;

    }
    .editBoxHide{
        display: none;
    }

   .editBoxShow{
       display: block ;
       margin-top: -5rem !important;
       margin-left: 4rem;
       margin-right: 4rem;
       margin-bottom: 3rem;

       z-index: 3;
       
   }
   .adjust{
       padding-top: .6rem;
   }
   
   .button{

       opacity: 0;
       transition: opacity 0.4s;
   }
   .todo__list-item:hover .button {
   opacity: 1;
}
</style>
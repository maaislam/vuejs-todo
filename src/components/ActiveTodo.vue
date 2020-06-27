
<template>
    
       <div class="activetodo__list ui segment">
            <li class="ui card fluid" v-for="(activetodo) in showActiveList" :key="activetodo.id">
                <div class="activetodo__list-item">
                    <div class="ui container checkbox adjust">
                        <input type="checkbox" :value="activetodo.id" @input="complete" v-model="activetodo.completed">
                            <label
                            :class="{completed:activetodo.completed}">
                                <h5 >{{activetodo.title}}</h5>
                            </label>
                    </div>
                     <button class="ui icon red button" @click="discard(activetodo)">
                        <i  class="trash icon" ></i>
                    </button>
                   
                    
                </div>
                
            </li>
        </div>
</template>

<script>

    import {  mapGetters, mapActions} from 'vuex';
    

    export default {
        name: 'ActiveTodo',

       
        computed:{

            
             ...mapGetters(['showActiveList']),
          
        },
        methods:{
            
            ...mapActions(['complete','discard']),
            
           
        },
    }
</script>

<style scoped>
    
    li{
        
        list-style: none;
       
    }
    .adjust{
       padding-top: .6rem;
   }
   
    .activetodo__list-item{
       position: relative;
       display: flex;
       padding: 1rem 2rem;
       border-bottom: 1px solid rgb(109, 133, 212);
       
       
    }

     .completed h5{
        text-decoration: line-through;
        pointer-events: none;
        cursor: default;
        color: rgb(155, 155, 155);
        align-items: center;
        
    }

       .button{

       opacity: 0;
       transition: opacity 0.4s;
   }
   .activetodo__list-item:hover .button {
   opacity: 1;
}
</style>
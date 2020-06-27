
<template>
       <div class="completedtodo__list ui segment">
            <button a @click="delAllCompleted" class="ui primary button">Clear Completed</button>
            <li class="ui card fluid "  v-for="(completedtodo, index) in showCompleteList" :key="index">
                <div class="completedtodo__list-item">
                    <div class="ui container checked checkbox">
                       
                           <h5>{{completedtodo.title}}</h5>
                            
                    </div>
                    
                </div>
                
            </li>
        </div>
</template>

<script>

    import {  mapGetters, mapActions} from 'vuex';
    

    export default {
        name: 'CompletedTodo',

       
        computed:{

            
             ...mapGetters(['showCompleteList']),
          
        },
        methods:{
            
            ...mapActions(['delAllCompleted']),
            
           
        },
    }
</script>

<style scoped>
    
    li{
        
        list-style: none;
       
    }

    .completedtodo__list{
    
        padding: 5rem 10rem;
    }

    .completedtodo__list-item{
        position: relative;
       display: flex;
       padding: 1rem 2rem;
       border-bottom: 1px solid rgb(109, 133, 212);
      
       
    }
    .checkbox h5{
        text-decoration: line-through;
        color: rgb(155, 155, 155);
    }
</style>
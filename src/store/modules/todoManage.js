



const state = {

    todos:[],
    completedTodos:[],
    editedTodo:null,
    activeTodo:[],
    showAll:true,
    showActive:false,
    showCompleted:false
};



const getters = {

    allTodo:(state)=>{
     
    return state.todos
  },

  showActiveList:(state)=>{
    return state.activeTodo;
  },
  showActiveListLength:(state)=>{
      if(state.activeTodo.length>0){
        return state.activeTodo.length;
      }
    
  },
  

  showCompleteList:(state)=>{
    return state.completedTodos;
  },
  editedTodo:(state)=>{
    return state.editedTodo;
  },
  showAllClick:(state)=>{
    return state.showAll;
  },
  showActiveClick:(state)=>{
    return state.showActive;
  },
  showCompletedClick:(state)=>{
    return state.showCompleted;
  }
 


};



const mutations= {
    addTodo:(state, payload)=>{
        if (payload.target.value!==''){
           
           state.todos.unshift({
               id: state.todos.length, title:payload.target.value, completed:false
           });
            state.activeTodo = state.todos;
           // console.log(state.activeTodo)
        }
         payload.target.value = '';

         

    },
    discard:(state, todo)=>{

        const pos = state.todos.indexOf(todo);
      
        const elementPos = state.todos.map((x)=>{return x.id})[pos];
        
        

        //map over completed todo array to findindex of element with id equals to elementPos

       
        
        const elementPosInActiveArray = state.activeTodo.map((x)=>{return x.id}).indexOf(elementPos);
   

        state.todos.splice(pos ,1);
        //delete item from completed list
        



        //delete item from active list
        if(elementPosInActiveArray!==-1){
            
            state.activeTodo.splice(elementPosInActiveArray ,1);
        }
       

    },
    complete:(state, payload)=>{

            
         var pos = state.todos.map((e) => { 
                
                    return e.id.toString(); 
                }).indexOf(payload.target.value); 
        
        if (payload.target.checked){

            
            state.todos[pos].completed = true;

            state.activeTodo = state.todos.filter((todo)=>{
                return todo.completed == false;
            });

       
            state.completedTodos.unshift(state.todos[pos]); 

            //console.log(state.activeTodo)
        
            }else if (!payload.target.checked){

                

                state.todos[pos].completed = false
               
                state.completedTodos.shift();
                
                state.activeTodo = state.todos.filter((todo)=>{
                    return todo.completed == false;
                });
                
                //console.log(state.activeTodo)
            } 
    },

    editTodo:(state, todo)=>{
        state.editedTodo = todo;
    },
   
    editDone:(state, todo)=>{
        
        if(state.editedTodo){
            state.editedTodo = null;
            todo.title = todo.title.trim();
        }
    },
    showAll:(state, payload)=>{
        
        if (payload){
            state.showAll = true;
            state.showActive = false;
            state.showCompleted = false
        }
    },
    showActive:(state, payload)=>{
        
        if (payload){
            state.showAll = false;
            state.showActive = true;
            state.showCompleted = false
        }
    },
    showCompleted:(state, payload)=>{
        
        if (payload){
            state.showAll = false;
            state.showActive = false;
            state.showCompleted = true
        }
    },
   
    delAllCompleted:(state, payload)=>{

        if(payload){
            //delete all completed todo
            
            //also delete active todos from all todo list
            const test = state.todos.filter((todo)=>{
                return todo.completed == false;
            });
            state.completedTodos=[];
            state.todos = test;
            console.log(test)
        }
    }
    
};











const actions = {

    addTodo:(context, payload)=>{

        context.commit('addTodo', payload)
    },
    discard:(context, payload)=>{

        context.commit('discard', payload)
    },
    
    complete:(context, payload)=>{

        context.commit('complete', payload)
    },
  
    editTodo:(context, payload)=>{

        context.commit('editTodo', payload)
    },
  
    editDone:(context, payload)=>{

        context.commit('editDone', payload)
    },
    showAll:(context, payload)=>{

        context.commit('showAll', payload)
    },
    showActive:(context, payload)=>{

        context.commit('showActive', payload)
    },
    showCompleted:(context, payload)=>{

        context.commit('showCompleted', payload)
    },
    delAllCompleted:(context, payload)=>{

        context.commit('delAllCompleted', payload)
    },
    

    
};



export default {
    state,
    getters,
    mutations,
    actions
}
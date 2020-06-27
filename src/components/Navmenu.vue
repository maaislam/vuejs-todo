<template>
    <div class="ui container nav">
        
        <div class="ui segment bottom attached tabular menu nav-link">
            <button @click="showAll" :class="{active:showAllClick}" class="ui toggle button">All Todo</button>
            <button @click="showActive" :class="{active:showActiveClick}" class="ui toggle button">Active Todos</button>
            <button @click="showCompleted" :class="{active:showCompletedClick}" class="ui toggle button">Completed Todos</button>
            <button :class="{show:showActiveListLength}" class="adjust ui red button hide">{{showActiveListLength}} remaining todos</button>
        </div>
       
    </div>
</template>

<script>

    import {  mapGetters, mapActions} from 'vuex';

    export default {
        name: 'NavMenu',
        
        
        computed:{

            
             ...mapGetters(['showAllClick', 'showActiveClick', 'showCompletedClick', 'showActiveListLength']),
          
        },
        methods:{
            
            ...mapActions(['showAll', 'showActive', 'showCompleted']),
            
           
        },
    }
</script>

<style scoped>
    .nav{
        position: fixed;
        background-color: rgba(223, 232, 235, 0.774);
        left: 50%;
        top: 100%;
        transform: translate(-50%, -90%);
        z-index: 10;
        padding-left: 30rem;
        width: 100%;
        
    }
    .adjust{
        margin-left: 20rem;
    }

    .show{
        display: block !important;
        
    }


</style>
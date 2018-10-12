<template>
    <div>
         <span>{{msg}}</span>
        <!--<router-view></router-view>-->
        <button @click="show">notify</button>
    </div>

</template>

<script>
    export default {
        data(){
            return {
                msg:'hello world'
            }
        },
        methods:{
            show(){
                this.$notify()
            }
        },
        computed:{
        },
        components:{
        }
    }
</script>

<style scoped> </style>

<template>
    <div class="card-field">
        <div class="card-field__container" >
            <CardTicket @click="toDetailes()"/>
        </div>
    </div>
</template>

<script>
import CardTicket from '@/components/CardTicket.vue';

export default{
    components:{
        CardTicket
    },
    methods:{
        toDetailes(){
            this.$router.push({name:'intoTicket'})
        }
    }
}
</script>

<style lang="less">
.card-field{
    &__container{
        display: block;
    }
}
</style>
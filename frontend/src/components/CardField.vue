<template>
    <div class="card-field">
        <div class="card-field__container" v-for="ticket in store.showTickets">
            <CardTicket @click="toDetailes(ticket.id)" :price="ticket.costs.slice(0, -3)" :aviacompany="ticket.aviacompany"
                :from="ticket.from" :to="ticket.to" :timefrom="ticket.timefrom.split('T')[1].slice(0, -8)" :timeto="ticket.timeto.split('T')[1].slice(0, -8)"
                :timeway="ticket.waytime.split('T')[1].slice(0, -8).split(':')" :text="ticket.stops.length" :stops="ticket.stops.toString(' ')" />
        </div>
        
    </div>
</template>

<script>
import CardTicket from '@/components/CardTicket.vue';
import { useTicketStore } from '@/main.js';
import axios from 'axios';

export default {
    components: {
        CardTicket
    },
    methods: {
        toDetailes(value) {
            this.store.id = value
            this.$router.push({ name: 'intoTicket', params:{id:value} })

        }
    },
    mounted() {
        axios.get('https://6618cd0b9a41b1b3dfbdf92d.mockapi.io/api/Tickets').then(
            (res) => {
                console.log(res)
                this.store.tickets = res.data
                this.store.showTickets = res.data
            }
        )
    },
    setup(){
        return{
            store: useTicketStore(),
        }
    }
}
</script>

<style lang="less">
.card-field {
    &__container {
        display: block;
    }
}
</style>
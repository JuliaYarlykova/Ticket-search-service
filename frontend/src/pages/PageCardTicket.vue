<template>
    <div class="page-ticket">
        <div class="page-ticket__container">
            <div class="page-ticket__firstline">
                <routerLink class="page-ticket__back" to="/">
                    <Link class="page-ticket__link"/>
                    вернуться назад</routerLink>
            
            <h1 class="page-ticket__company">{{tickets.aviacompany}}</h1>
            </div>
            <div class="page-ticket__wrap">
                <h1 class="page-ticket__way">{{ tickets.from }} - {{ tickets.to }}</h1>
                <dl class="page-ticket__dl">
                    <dt class="page-ticket__dt">стоимость</dt>
                    <dd class="page-ticket__dd">{{tickets.costs}}Р
                    </dd>
                    <dt class="page-ticket__dt">время</dt>
                    <dd class="page-ticket__dd">{{tickets.timefrom}}-{{tickets.timeto}}
                    </dd>
                    <dt class="page-ticket__dt">в пути</dt>
                    <dd class="page-ticket__dd">{{waytimeh}}ч {{ waytimem }}м
                    </dd>
                    <dt class="page-ticket__dt">Пересадки: {{ stopsLength}}</dt>
                    <dd class="page-ticket__dd">{{stops}}
                    </dd>
                    <dt class="page-ticket__dt">дата вылета</dt>
                    <dd class="page-ticket__dd">{{ tickets.datefrom }}
                    </dd>
                    <dt class="page-ticket__dt">дата прилета</dt>
                    <dd class="page-ticket__dd">{{tickets.dateto}}
                    </dd>
                    <dt class="page-ticket__dt">класс</dt>
                    <dd class="page-ticket__dd">{{ class }}
                    </dd>
                    <dt class="page-ticket__dt">багаж</dt>
                    <dd class="page-ticket__dd">{{ laggage }}
                    </dd>
                </dl>
                
            </div>
            <div class="page-ticket__wrapper">
                <button class="page-ticket__bron" @click="toForm()">Забронировать</button>
            </div>
            
           

        </div>
    </div>
<MessagePP v-show="store2.show" @open="openPP()"/>
</template>

<script>
import MessagePP from '@/components/MessagePP.vue';
import Link from '@/components/svg/Link.vue';
import { useShowStore, useTicketStore } from '@/main.js';
import axios from 'axios';

export default{
    data(){
        return{
            store: useTicketStore(),
            store2: useShowStore(),
            tickets:{

            },
            waytimeh:0,
            waytimem:0,
            stopsLength:0,
            stops:'-',
            class: '-',
            laggage:'-'
        }
        
    },
    components:{
        MessagePP,
        Link
    },
    methods:{
        toForm(){
            this.$router.push({name:'intoForm'})
        },

    },
    mounted(){
        axios.get(`https://6618cd0b9a41b1b3dfbdf92d.mockapi.io/api/Tickets/${this.store.id}`).then(
            (res) => {
                console.log(res)
                this.tickets = res.data
                this.tickets.costs = this.tickets.costs.slice(0, -3)
                this.tickets.timefrom = this.tickets.timefrom.split('T')[1].slice(0, -8)
                this.tickets.timeto = this.tickets.timeto.split('T')[1].slice(0, -8)
                this.waytimeh= this.tickets.waytime.split('T')[1].slice(0, -8).split(':')[0]
                this.waytimem= this.tickets.waytime.split('T')[1].slice(0, -8).split(':')[1]
                this.stopsLength= this.tickets.stops.length
                if (this.stopsLength !== 0) this.stops = this.tickets.stops.toString(' ')
                this.tickets.datefrom = this.tickets.datefrom.split('T')[0].split('-').join('.')
                this.tickets.dateto = this.tickets.dateto.split('T')[0].split('-').join('.')
                if ( this.tickets.class) this.class = 'бизнес' 
                else this.class = 'эконом'
                if ( this.tickets.laggage) this.laggage = 'платный' 
                else this.laggage = 'бесплатный'
                
                
            }
        )
    }
}

</script>

<style lang="less">

.page-ticket{
    &__container{
        .container();
        display: flex;
        flex-direction: column;
        margin: 50px auto;
    }
    &__link{
        width: 24px;
        height: 24px;
    }
    &__back{
        display: flex;
        flex-direction: row;
        gap:5px;
        align-items: center;
        text-decoration: none;
        font-size: 20px;
        text-transform: lowercase;
        color: @black;
        text-align: center;
    }
    &__way{
        font-size: 30px;
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
    }
    &__company{
        font-size: 25px;
        font-weight: 400;
        text-transform: uppercase;
        text-align: center;
    }
    &__firstline{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 50px;
        align-items: center;
        @media @bw650 {
            flex-direction: column;
            gap: 20px;
        }

    }
    &__wrap{
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        margin-bottom: 50px;
    }
    &__dt{
        font-size: 30px;
        font-weight: 500;
        float: left;
        width:100%;
    max-width: 300px;
    overflow: hidden;
    clear: left;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media @bw650 {
        font-size: 25px;
    }
    }
    &__dd{
        font-size: 30px;
        margin-left: 300px;
        font-weight: 200;
        margin-bottom: 25px;
        @media @bw650 {
        font-size: 25px;
        margin-left: 180px;
    }
    }
    &__bron{
        border-radius: 20px;
        background-color: @dark_blue;
        color: @white1;
        height: 50px;
        width: 300px;
        font-size: 24px;
    }
    &__wrapper{
        display: flex;
        justify-content: center;
    }
}
</style>
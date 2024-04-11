<template>
    <div class="page-ticket">
        <div class="page-ticket__container">
            <div class="page-ticket__firstline">
                <routerLink class="page-ticket__back" to="/">вернуться назад</routerLink>
            <h1 class="page-ticket__way">москва сочи</h1>
            <h1 class="page-ticket__company">sdhj</h1>
            </div>
            <div class="page-ticket__wrap">
                <dl class="page-ticket__dl">
                    <dt class="page-ticket__dt">стоимость</dt>
                    <dd class="page-ticket__dd">456
                    </dd>
                    <dt class="page-ticket__dt">mov-hkt</dt>
                    <dd class="page-ticket__dd">10:20-15:30
                    </dd>
                    <dt class="page-ticket__dt">в пути</dt>
                    <dd class="page-ticket__dd">15ч 21м
                    </dd>
                    <dt class="page-ticket__dt">пересадки</dt>
                    <dd class="page-ticket__dd">1 - дфов
                    </dd>
                    <dt class="page-ticket__dt">дата</dt>
                    <dd class="page-ticket__dd">15,15,15
                    </dd>
                    <dt class="page-ticket__dt">класс</dt>
                    <dd class="page-ticket__dd">эконом
                    </dd>
                    <dt class="page-ticket__dt">багаж</dt>
                    <dd class="page-ticket__dd">платный
                    </dd>
                </dl>
                
            </div>
            <div class="page-ticket__wrapper">
                <button class="page-ticket__bron" @click="toForm()">Забронировать</button>
            </div>
            
           

        </div>
    </div>
    
</template>

<script>

export default{
    methods:{
        toForm(){
            this.$router.push({name:'intoForm'})
        }
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
    &__back{
        text-decoration: none;
        font-size: 20px;
        text-transform: lowercase;
        color: @black;
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
        justify-content: center;
        margin-bottom: 50px;
    }
    &__dt{
        font-size: 30px;
        font-weight: 500;
        float: left;
    width: 160px;
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
        margin-left: 230px;
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
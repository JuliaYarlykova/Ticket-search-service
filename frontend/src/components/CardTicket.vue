<template>
    <div class="card">
        <div class="card__container">
            <div class="card__info">
                <p class="card__first-title">1234</p>
                <p class="card__first-title">dshbsjh</p>
            </div>
            
            <div class="card__wrap">
                <div class="card__block">
                    <p class="card__title">mov-hkt</p>
                    <p class="card__text">10:20-15:30</p>
                </div>
                <div class="card__block">
                    <p class="card__title">
                        в пути
                    </p>
                    <p class="card__text">15ч 21м</p>
                </div>
                <div class="card__block">
                    <p class="card__title"></p>
                    <p class="card__text">hkg</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
.card{
    margin-bottom: 50px;
    &__container{
        .container-part();
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    &__info{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    &__first-title{
        font-size: 20px;
        font-weight: 400;
        color: @light_blue;
    }
    &__wrap{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    &__block{
        display: block;
    }
    &__title{
        font-size: 14px;
        color: @gray;
        font-weight:300;
        text-transform: uppercase;
        padding-bottom: 5px;
    }
    &__text{
        font-size: 14px;
        color: @black;
        font-weight:600;
        text-transform: uppercase;
    }
}
</style>
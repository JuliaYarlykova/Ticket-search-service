<template>
    <div class="card">
        <div class="card__container">
            <div class="card__info">
                <p class="card__first-title">{{ price }}</p>
                <p class="card__first-title">{{ aviacompany }}</p>
            </div>

            <div class="card__wrap">
                <div class="card__block">
                    <p class="card__title">{{ from }}-{{ to }}</p>
                    <p class="card__text">{{ timefrom }}-{{ timeto }}</p>
                </div>
                <div class="card__block">
                    <p class="card__title">
                        в пути
                    </p>
                    <p class="card__text">{{ timeway[0] }}ч {{ timeway[1] }}м</p>
                </div>
                <div class="card__block">
                    <p class="card__title">Пересадки: {{ text }}</p>
                    <p class="card__text">{{ stops }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        price: {
            type: String,
            default: '-'
        },
        aviacompany: {
            type: String,
            required: true
        },
        from: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        },
        timefrom: {
            type: String,
            required: true
        },
        timeto: {
            type: String,
            required: true
        },
        timeway: {
            type: String,
            default: '-'
        },
        text: {
            type: String,
            required: true
        },
        stops: {
            type: String,
            default: '-'
        },

    }
}

</script>

<style lang="less">
.card {
    margin-bottom: 50px;

    &__container {
        .container-part();
        display: flex;
        flex-direction: column;
        gap: 20px;
        transition: 0.2s;
        cursor: pointer;

        &:hover {
            box-shadow: -1px 0px 50px 0px @gray_50;
        }
    }

    &__info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    &__first-title {
        font-size: 20px;
        font-weight: 400;
        color: @light_blue;
    }

    &__wrap {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    &__block {
        display: block;
    }

    &__title {
        font-size: 14px;
        color: @gray;
        font-weight: 300;
        text-transform: uppercase;
        padding-bottom: 5px;
    }

    &__text {
        font-size: 14px;
        color: @black;
        font-weight: 600;
        text-transform: uppercase;
    }
}
</style>
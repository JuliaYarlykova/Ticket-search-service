<template>
    <div class="filter">
        <div class="filter__container">
            <p class="filter__title">
                количество пересадок
            </p>
            <div class="filter__check check" v-for="check in checks">
                <label class=" check__label">
                    <input type="checkbox" class="check__input" required  />
                    <span class="check__mark"></span>
                    <p class="check__text">
                        {{ check }}
                    </p>
                </label>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            checks: ['Все', 'Без пересадок', "1 пересадка", "2 пересадки", "3 пересадки"]
        }

    }
}
</script>

<style lang="less">
.filter {
    width: 100%;
    max-width: 300px;
    height: auto;
    @media @bw1340 {
        max-width: 250px;
    }
    

    &__container {
        .container-part();

    }

    &__title {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.3;
        text-transform: uppercase;
        margin-bottom: 20px;
        @media @bw1340 {
            font-size: 14px;
        }
    }
}

.check {
    position: relative;
    cursor: pointer;
    border-color: @light_blue;
    margin-bottom: 20px;

    &__label{
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center
        }

    &__input {
        .is-hidden();

        &:checked {
            &~.check__mark {
                background-color: @white;
                border-color: @light_blue;
                border-radius: 5px;

                &::after {
                    content: "";
                    display: block;
                    position: absolute;
                    left: 7px;
                    top: 3px;
                    width: 6px;
                    height: 13px;
                    border-bottom: 2px solid @light_blue;
                    border-right: 2px solid @light_blue;
                    transform: rotate(45deg);
                }
            }
        }
    }

    &__mark {
        box-sizing: border-box;
        display: block;
        position: relative;
        left: 0;
        top: 0;
        width: 24px;
        height: 24px;
        border: 1px solid @gray;
        background-color: transparent;
        transition: background-color 0.2s;
        border-radius: 5px;

    }
    &__text{
        font-size: 18px;
        font-weight: 300;
        @media @bw1340 {
            font-size: 14px;
        }
    }
}
</style>
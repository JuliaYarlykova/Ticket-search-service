<template>
    <div class="sort">
        <div class="sort__container">
            <label class="sort__label">
                <input type="checkbox" class="sort__input" required />
                <span class="sort__mark">самый дешевый</span>
            </label>
            <label class="sort__label">
                <input type="checkbox" class="sort__input" required />
                <span class="sort__mark sort__mark--r">самый быстрый</span>
            </label>
        </div>
    </div>
</template>

<style lang="less">
.sort {
    margin-bottom: 50px;
    &__container {
        display: flex;
        flex-direction: row;
        width: 100%;
        max-width: 500px;
        margin-top: 15px;
        @media @bw1020 {
            max-width: 400px;
        }
    }

    &__mark {
        height: 60px;
       
        width: auto;
        padding: 15px 50px;
        background-color: @white;
        color: @black;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.3;
        text-transform: uppercase;
        margin-bottom: 20px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        box-shadow: -1px 0px 10px 0px @gray_50;
        @media @bw1020 {
            padding: 10px 25px;
            font-size:14px;
        }
        @media @bw650 {
            padding: 15px 27px;
        }
        @media @bw400 {
            padding: 15px 20px;
            font-size:12px;
        }

        &--r {
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
        }
    }

    &__input {
        .is-hidden();

        &:checked {
            &~.sort__mark {
                background-color: @light_blue;
                color: @white;

            }
        }
    }
}
</style>
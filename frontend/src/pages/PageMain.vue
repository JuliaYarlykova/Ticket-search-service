<template>

    <main class="page-main">
        <div class="page-main__container">
            <FilterTransfer />
            <div class="page-main__wrap">
                <Sort />
                <CardField />
            </div>

        </div>
    </main>

</template>

<script>
import CardField from '@/components/CardField.vue';
import Sort from '@/components/Sort.vue';
import FilterTransfer from '../components/FilterTransfer.vue';

export default {
    components: {
        FilterTransfer,
        Sort,
        CardField
    }

}
</script>

<style lang="less">
.page-main {
    &__container {
        .container();
        margin-top: 100px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        @media @bw650 {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
        }
    }
}
</style>
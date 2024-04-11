<template>
    <header class="page-header">
        <div class="page-header__container">
            <Plain class="page-header__icon" />
        </div>
    </header>

</template>

<script>
import Plain from './svg/Plain.vue';

export default {
    components: {
        Plain
    }
}
</script>

<style lang="less">
.page-header {
    &__container {
        .container();
        display: flex;
        justify-content: center;
    }

    &__icon {
        color: @light_blue;
        width: 100px;
        height: 100px;
    }
}
</style>
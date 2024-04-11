<script>
import { RouterView } from 'vue-router';
import HeaderPage from './components/HeaderPage.vue';
import PageMain from './pages/PageMain.vue';
export default{
  components:{
    HeaderPage,
    PageMain
  }
}

</script>

<template>
<HeaderPage />
<RouterView />

</template>

<style lang="less">


* {
 margin: 0;
 padding: 0;
}
body,
html {
 font-size: 16px;
}
button {
 background-color: transparent;
 border: none;
 cursor: pointer;
}

</style>

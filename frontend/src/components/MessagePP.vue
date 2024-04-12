<template>
    <div class="pp">
        <div class="pp__container">
            <hi class="pp__title">Билет забронирован</hi>
            <button class="pp__yes" @click="close()">ок</button>
        </div>
    </div>
</template>

<script>
import {useShowStore} from '@/main.js'
export default{
  setup(){
    return{
      store: useShowStore()
    }
  },
  methods:{
    close(){
      this.store.show = false
    }
  }
}
</script>

<style lang="less">
.pp{
    box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 90px 100px 50px;
  

  overflow-y: auto;
  z-index: 110;

  @media @bw650 {
    padding: 90px 40px 50px;
  }
  &__container{
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: auto;
    padding: 20px 20px 40px;
    background-color: @white;
    background-position: 0 0;
    background-size: auto;
    background-repeat: repeat;
    text-align: center;
    border: 1px solid @light_blue;
    align-items: center;
    box-shadow: -1px 0px 50px 0px @gray_50;
    @media @bw650 {
      max-width: 220px;
    }
    
  }
  &__title{
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    @media @bw650 {
      font-size: 16px;
    }
  }
  &__yes{
    border: none;
    width: 200px;
    height: 40px;
    background-color: @light_blue;
    color: @white;
    @media @bw650 {
      width: 170px;
    }
  }
}
</style>
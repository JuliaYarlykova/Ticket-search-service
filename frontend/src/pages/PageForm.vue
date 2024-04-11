<template>
    <div class="pp-auth">
      <div class="pp-auth__container">
        <button class="pp-auth__btn-close" @click="">
          <SvgX class="pp-auth__svg-cls" />
        </button>
        <form action="" class="pp-auth__form form" @submit.prevent="" ref="form">
          <h2 class="pp-auth__title">Контактные данные</h2>
          <input type="text" class="pp-auth__input" placeholder="фамилия" >
          <input type="text" class="pp-auth__input" placeholder="имя" >
          <input type="text" class="pp-auth__input" placeholder="отчество" >
          <input type="text" class="pp-auth__input" placeholder="электронная почта" >
          <input type="text" class="pp-auth__input" placeholder="телефон" >
          <button type="submit" class="pp-auth__btn" >
            Отправить
          </button>
        </form>
      </div>

    </div>
</template>

<script>
import SvgX from '../components/svg/x.vue'

export default{
    components:{
        SvgX
    }
}


</script>

<style lang="less">
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 1.5s ease
}

.pp-auth {
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 90px 100px 50px;

  @supports (backdrop-filter: blur(25px)) {
    background-color: @black_40;
    backdrop-filter: blur(25px);
  }

  overflow-y: auto;
  z-index: 110;
  @media @bw650 {
    padding: 90px 40px 50px;
  }

  &__container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border: solid @dark_blue;
    width: 100%;
    max-width: 518px;
    margin: auto;
    padding: 70px 40px 40px;
    background-color: @white2;
    background-position: 0 0;
    background-size: auto;
    background-repeat: repeat;
    @media @bw650 {
      padding: 70px 20px 40px;
    }
  }

  &__error {
    color: red;
    margin-bottom: 55px;
  }

  &__btn-close {
    display: flex;
    justify-content: flex-end;
    margin-top: -60px;
    margin-right: -20px;
    color: @black;
  }

  &__svg-cls {
    width: 24px;
    height: 24px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__input {
    box-sizing: border-box;
    border-width: 2px 0px 2px;
    border-top-color: @dark_blue ;
    border-bottom-color: @dark_blue;
    width: 100%;
    background-color: @white2;
    padding: 17px 20px 16px;
    color: @black;
    font-size: 16px;
    height: 55px;
    outline: none;
    margin-bottom: 60px;
    @media @bw650 {
      margin-bottom: 20px;
    }

    &::placeholder {
      color: @placeholder_color;
    }
  }

  &__title {
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    color: @text_color;
    margin-bottom: 85px;
  }

  &__btn {

    border: none;
    color: @white1;
    background-color: @dark_blue;
    width: 226px;
    height: 52px;
    border-radius: 50px;
  }

  &__btn-bottom {
    border: none;
    width: 226px;
    height: 30px;
    color: @dark_blue;
    margin-top: 20px;
  }
}

.invalid {
  margin-bottom: 5px;
  border-top-color: red;
  border-bottom-color: red;
}
</style>
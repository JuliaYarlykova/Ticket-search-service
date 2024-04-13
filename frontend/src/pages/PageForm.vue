<template>
  <div class="pp-auth">
    <div class="pp-auth__container">
      <button class="pp-auth__btn-close" @click="toDetailes(store.id)">
        <SvgX class="pp-auth__svg-cls" />
      </button>
      <form action="" class="pp-auth__form form" @submit.prevent="submitData()" ref="form">
        <h2 class="pp-auth__title">Контактные данные</h2>
        <input type="text" class="pp-auth__input" placeholder="фамилия" v-model.trim="form.name">
        <input type="text" class="pp-auth__input" placeholder="имя" v-model.trim="form.surname">
        <input type="text" class="pp-auth__input" placeholder="отчество" v-model.trim="form.patronymic">
        <input type="text" class="pp-auth__input" placeholder="электронная почта" v-model.trim="form.email">
        <p class="pp-auth__mes" v-if="v$.form.email.$dirty && (v$.form.email.email)">Почта введена неверно!</p>
        <input type="text" class="pp-auth__input" placeholder="телефон" v-model.trim="form.phone">
        <button type="submit" class="pp-auth__btn">
          Отправить
        </button>
        <p class="pp-auth__mes" v-if="v$.form.$dirty && (v$.form.$errors.length !== 0)">Не все поля заполнены!</p>
      </form>
    </div>

  </div>
</template>

<script>
import { useShowStore, useTicketStore } from '@/main';
import { useVuelidate } from '@vuelidate/core';
import { email, required } from '@vuelidate/validators';
import axios from 'axios';
import SvgX from '../components/svg/x.vue';

export default {
  components: {
    SvgX
  },
  setup() {
    return {
      store: useTicketStore(),
      store2: useShowStore(),
      v$: useVuelidate()
    }
  },
  data() {

    return {
      form: {
        name: '',
        surname: '',
        patronymic: '',
        email: '',
        phone: '',
        idticket: this.store.id
      }
    }
  },
  methods: {
    async submitData() {
      const isFormCorrect = await this.v$.$validate()
      if (!isFormCorrect) return
      axios.post('https://6618cd0b9a41b1b3dfbdf92d.mockapi.io/api/forms', this.form).then(
        (res) => {
          console.log(res)
          this.toDetailes()
          this.store2.show = true


        }
      )
    },
    toDetailes() {

      this.$router.push({ name: 'intoTicket', params: { id: this.store.id } })

    }
  },
  validations() {
    return {
      form: {
        name: { required },
        surname: { required },
        patronymic: { required },
        email: { required, email },
        phone: { required },
      }


    }
  }
}


</script>

<style lang="less">
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

  &__mes {
    color: red;
    padding: 5px 0 5px;
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
    margin-top: 60px;

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
    margin-bottom: 45px;
  }

  &__btn {

    border: none;
    color: @white1;
    background-color: @dark_blue;
    width: 226px;
    height: 52px;
    border-radius: 50px;
    margin-top: 20px;
    transition: background-color 0.2s;

    &:hover {
      background-color: @light_blue;
    }
  }

}
</style>
<template>
    <div class="pp">
        <div class="pp__container">
            <hi class="pp__title">Билет забронирован</hi>
        </div>
    </div>
</template>

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
  &__container{
    width: 100%;
    max-width: 518px;
    margin: auto;
    padding: 70px 40px 40px;
    background-color: @white;
    background-position: 0 0;
    background-size: auto;
    background-repeat: repeat;
  }
}
</style>
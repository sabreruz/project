<template>
  <div class="analysis">
    <div class="container">
      <h2>病情診斷</h2>
    </div>
    <div>
      <!--在這之間加入連動下拉選單-->
    </div>
    <div class="start_analysis">
      <input type="button" class="submit" value="開始分析" @click.prevent="" />
    </div>
  </div>
</template>

<script>
//import Loading from "../components/ForgotPassword/LoadingComponent.vue";
//未來點擊按鈕跳出視窗擊正在run的畫面可以參考ForgotPassword裡的寫法
export default {};
</script>

<style lang="scss" scoped>
.analysis {
  background-color: #f0f0f0;
  .container {
    border: 5px #ae57a4 solid;
    width: 700px;
    height: 70px;
    border-radius: 10px;
    background-color: #9999cc;
    text-align: center;
    margin-top: 50px;
    h2 {
      text-align: center;
      font-size: 50px;
      font-weight: 700;
      vertical-align: middle;
    }
    @media (max-width: 700px) {
      text-align: center;
      padding: auto auto;
      font-size: 40px;
      width: auto;
      height: 70px;
    }
  }
  .start_analysis {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    .submit {
      border: 5px #0066cc solid;
      border-radius: 10px;
      text-align: center;
      width: 100px;
      height: 50px;
      background-color: #c4e1ff;
      font-size: 20px;
      font-weight: 600;

      &:hover {
        color: #fff;
        background-color: #2894ff;
      }
    }
  }
}
</style>

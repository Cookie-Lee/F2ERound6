<template>
  <div class="main pt-11">
    <v-img
      :src="imgLogo"
      max-height="54"
      max-width="57"
      class="ma-auto"
    ></v-img>
    <div class="logotitle mt-3"><span>不想上班</span></div>
    <div class="title"><span>Success!</span></div>
  </div>
</template>
<script>
import imgLogo from "../assets/logo2.svg";
export default {
  name: "SuccessTop",
  data: () => ({
    imgLogo,
  }),
};
</script>
<style scoped>
.main {
  text-align: center;
}
.logotitle {
  margin-bottom: -28px;
}
.logotitle span {
  text-align: left;
  letter-spacing: 7.38px;
  color: #425752;
  font-size: 12px;
  font-family: AdobeMingStd-Light;
}
.title span {
  text-align: center;
  font: Italic 110px/138px Rage;
  letter-spacing: 17.6px;
  color: #496146;
}
</style>

<template>
  <div class="main">
    <div class="d-flex justify-space-around align-center">
      <v-img :src="imgLogo" class="myLogo"></v-img>
      <v-img :src="imgRoom2" class="myBanner col-6 d-flex align-center">
        <div class="myTitle1">I don't want to work</div>
      </v-img>
      <div class="myTitle2 d-flex align-content-space-between flex-wrap">
        <span>不</span>
        <span>想</span>
        <span>－</span>
        <span>上</span>
        <span>班</span>
      </div>
    </div>
    <div style="text-align: center;">
      <button @click="slideClick" style="outline: none;">
        <div class="slidetext">
          Slide
        </div>
        <div class="slideicon"><span>></span><span>></span></div>
      </button>
    </div>
  </div>
</template>
<script>
import imgRoom2 from "../assets/房2.png";
import imgLogo from "../assets/logo2.svg";
export default {
  name: "Index",
  data: () => ({
    scrollOptions: {
      duration: 600,
      easing: "linear",
    },
    imgRoom2,
    imgLogo,
  }),
  methods: {
    slideClick() {
      this.$vuetify.goTo("#rooms", this.scrollOptions);
    },
  },
};
</script>
<style scoped>
.main {
  margin-top: 5vh;
  min-height: 100vh;
}
.mainTitle {
  background-image: url("../assets/房2.png");
}
.myLogo {
  max-width: 5.7vw;
  max-height: 5.4vw;
}
.myTitle1 {
  font: Italic 4.8vw Rage;
  letter-spacing: 10.4px;
  color: #496146;
  width: 690px;
}
.myTitle2 {
  width: 2.8vw;
  font-size: 2.8vw;
  letter-spacing: 0px;
  color: #425752;
  height: 35vw;
  font-family: AdobeMingStd-Light;
}
.myBanner {
  overflow: visible;
  margin-right: -200px;
  margin-left: -200px;
}
.slidetext {
  text-align: center;
  font: Italic 2.1vw Rage;
  letter-spacing: 4.32px;
  color: #425752;
  opacity: 0.66;
  margin-top: 60px;
}
.slideicon {
  text-align: center;
  font: Italic 2.1vw Rage;
  letter-spacing: 4.32px;
  color: #425752;
  opacity: 0.66;
  transform: matrix(0, 1, -1, 0, 0, 0);
}
.slideicon span:first-child {
  margin-right: -9px;
}
</style>

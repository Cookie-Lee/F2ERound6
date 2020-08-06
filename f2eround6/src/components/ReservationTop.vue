<template>
  <div class="row pa-0 ma-0">
    <div class="col-8 pa-0">
      <v-img :src="imageUrl[0]" max-height="428"></v-img>
    </div>
    <div class="col-4 pa-0">
      <v-img :src="imageUrl[1]" max-height="214"></v-img>
      <v-img :src="imageUrl[2]" max-height="214"></v-img>
    </div>
    <div class="restitle d-flex align-self-end justify-end">
      <div>{{ name }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ReservationTop",
  props: ["name", "imageUrl"],
};
</script>
<style scoped>
.restitle {
  width: 100%;
  position: absolute;
  font: Italic 110px/138px Rage;
  letter-spacing: 17.6px;
  color: #496146;
}
.restitle div {
  margin-bottom: -56px;
  margin-right: 80px;
}
</style>

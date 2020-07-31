<template>
  <div>
    <div class="roomstitle">ROOMS</div>
    <div class="row">
      <RoomCard class="col-4" v-for="item in 6" :key="item" />
    </div>
  </div>
</template>
<script>
import RoomCard from "./RoomCard";
export default {
  name: "Rooms",
  components: { RoomCard },
  data: () => ({}),
};
</script>
<style scoped>
.roomstitle {
  text-align: center;
  font: Italic 4.8vw Rage;
  letter-spacing: 10.4px;
  color: #496146;
  margin-top: 8.3vw;
}
</style>

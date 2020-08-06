<template>
  <div id="rooms">
    <div class="roomstitle">ROOMS</div>
    <div class="row">
      <RoomCard
        class="col-4"
        v-for="item in items"
        :key="item.id"
        :uid="item.id"
        :imageUrl="item.imageUrl"
      />
    </div>
  </div>
</template>
<script>
import RoomCard from "./RoomCard";
export default {
  name: "Rooms",
  components: { RoomCard },
  created() {
    this.$http({
      method: "get",
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer TyAhyPQ0BDpZZyZkG8wGmSGh0RQAb8frGPjKyMvf4XbPv3zXyENPv5csmmKq",
      },
      url: "https://challenge.thef2e.com/api/thef2e2019/stage6/rooms",
    })
      .then((res) => {
        this.items = res.data.items;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data: () => ({
    items: [],
  }),
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

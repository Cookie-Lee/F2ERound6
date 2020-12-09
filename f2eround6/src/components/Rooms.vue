<template>
  <div id="rooms">
    <div class="roomstitle">ROOMS</div>
    <v-row>
      <v-col cols="4" v-for="item in items" :key="item.id">
        <RoomCard :uid="item.id" :imageUrl="item.imageUrl" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import RoomCard from "./RoomCard";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Rooms",
  components: { RoomCard },
  created() {
    //this.$store.dispatch("getRoomsItems");
    //沒有傳參數時可以用mapActions
    //有傳參數時就還是要用dispatch (參考ReservationCard.vue)
    this.getRoomsItems();
  },
  computed: {
    /*items() {
      return this.$store.state.RoomsModules.Rooms.items;
    },*/
    ...mapGetters("RoomsModules", ["items"]),
  },
  methods: {
    ...mapActions("RoomsModules", ["getRoomsItems"]),
  },
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

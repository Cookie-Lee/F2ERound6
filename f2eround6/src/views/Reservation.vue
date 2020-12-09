<template>
  <div>
    <ReservationTop
      v-if="!isSuccess"
      :name="room.name"
      :imageUrl="room.imageUrl"
    />
    <SuccessTop v-if="isSuccess" />
    <div class="row pa-0 ma-0">
      <div class="col-6">
        <ReservationCard v-if="!isSuccess" :roomid="room.id" />
        <SuccessCard v-if="isSuccess" :booking="bookingData" :room="room" />
      </div>
      <div class="col-6">
        <ReservationInfo :room="room" :checkinswitch="false" />
      </div>
    </div>
    <Footer class="mt-16" />
  </div>
</template>
<script>
import Footer from "../components/Footer";
import ReservationTop from "../components/ReservationTop";
import ReservationCard from "../components/ReservationCard";
import ReservationInfo from "../components/ReservationInfo";
import SuccessTop from "../components/SuccessTop";
import SuccessCard from "../components/SuccessCard";

import { mapGetters } from "vuex";

export default {
  name: "Reservation",
  data: () => ({}),
  methods: {},
  components: {
    ReservationTop,
    ReservationCard,
    ReservationInfo,
    Footer,
    SuccessTop,
    SuccessCard,
  },
  props: ["room"],
  computed: {
    ...mapGetters(["isSuccess", "bookingData"]),
  },
};
</script>

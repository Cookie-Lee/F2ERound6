<template>
  <div>
    <ReservationTop v-if="false" :name="room.name" :imageUrl="room.imageUrl" />
    <SuccessTop />
    <div class="row pa-0 ma-0">
      <div class="col-6">
        <ReservationCard v-if="false" :roomid="room.id" />
        <SuccessCard />
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
export default {
  name: "Reservation",
  components: {
    ReservationTop,
    ReservationCard,
    ReservationInfo,
    Footer,
    SuccessTop,
    SuccessCard,
  },
  props: ["room"],
};
</script>

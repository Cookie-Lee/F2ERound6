<template>
  <div>
    <ReservationTop :name="room.name" :imageUrl="room.imageUrl" />
    <div class="row pa-0 ma-0">
      <div class="col-6"><ReservationCard /></div>
      <div class="col-6"><ReservationInfo :room="room" /></div>
    </div>
    <Footer class="mt-16" />
  </div>
</template>
<script>
import Footer from "../components/Footer";
import ReservationTop from "../components/ReservationTop";
import ReservationCard from "../components/ReservationCard";
import ReservationInfo from "../components/ReservationInfo";
export default {
  name: "Reservation",
  components: { ReservationTop, ReservationCard, ReservationInfo, Footer },
  props: ["room"],
};
</script>

<template>
  <v-app id="app">
    <router-link to="/">Index</router-link>
    <router-link to="/reservation">Reservation</router-link>
    <router-view />
  </v-app>
</template>
<script>
export default {
  name: "App",
  data: () => ({}),
};
</script>

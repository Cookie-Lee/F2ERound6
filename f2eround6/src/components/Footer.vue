<template>
  <div class="main d-flex justify-end">
    <v-img :src="imgLogo" max-width="57" max-height="54"></v-img>
    <v-divider vertical class="footerdivider align-self-center"></v-divider>
    <div>
      <div
        class="footercontact"
        v-for="(item, index) in contactInfo"
        :key="index"
      >
        <v-icon dark size="15">mdi-{{ item.icon }}</v-icon>
        <span>{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import imgLogo from "../assets/logo2.png";
export default {
  name: "Footer",
  data: () => ({
    imgLogo,
    contactInfo: [
      {
        icon: "phone",
        value: "07-536-0000",
      },
      {
        icon: "map-marker",
        value: "香港銅鑼灣興發街1號",
      },
      {
        icon: "instagram",
        value: "I_dont_wank_to_work",
      },
    ],
  }),
};
</script>
<style scoped>
.main {
  background: #425752 0% 0% no-repeat padding-box;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 120px;
}
.footerdivider {
  margin-left: 35px;
  margin-right: 35px;
  border-width: 1px;
  background-color: #e3eae2;
  height: 35px;
}
.footercontact {
  margin-bottom: 7px;
}
.footercontact:last-child {
  margin-bottom: 0px;
}
.footercontact i {
  margin-right: 10px;
}
.footercontact span {
  letter-spacing: 0px;
  color: #ffffff;
  font-size: 12px;
  font-family: Segoe UI Regular;
}
</style>

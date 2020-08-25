<template>
  <div class="d-flex justify-center roomcardmain">
    <div class="roomcardtitle">
      {{ room.name }}
    </div>
    <v-skeleton-loader :loading="loading" type="card-avatar, article, actions">
      <v-card class="roomcard" @click="goto">
        <v-img
          :src="imageUrl"
          class="roomcardimg"
          min-height="300"
          min-width="300"
        ></v-img>
        <div class="d-flex justify-space-between roomcardsubtitleblock">
          <div class="text-center roomcardsubtitle">
            <div>人數</div>
            <div>
              {{
                room.descriptionShort
                  ? room.descriptionShort.GuestMax ===
                    room.descriptionShort.GuestMin
                    ? room.descriptionShort.GuestMin
                    : `${room.descriptionShort.GuestMin}~${room.descriptionShort.GuestMax}`
                  : ""
              }}
            </div>
          </div>
          <div class="text-center roomcardsubtitle">
            <div>床</div>
            <div>
              {{
                room.descriptionShort
                  ? room.descriptionShort.Bed.toString()
                  : ""
              }}
            </div>
          </div>
          <div class="text-center roomcardsubtitle">
            <div>大小</div>
            <div>
              {{ room.descriptionShort ? room.descriptionShort.Footage : ""
              }}<span>m<sup>2</sup></span>
            </div>
          </div>
        </div>
        <v-divider style="margin-top: 12px; margin-bottom: 12px;"></v-divider>
        <div
          class="roomcardcontent d-flex align-center justify-center text-center"
        >
          {{ roomAmenities }}
        </div>
        <v-divider style="margin-top: 14px; margin-bottom: 14px;"></v-divider>
        <div class="roomcardpriceh d-flex justify-center">
          <div class="align-self-center">假日</div>
          <div>${{ room.holidayPrice }}</div>
        </div>
        <div class="roomcardpricen d-flex justify-center">
          <div class="align-self-center">平日</div>
          <div>${{ room.normalDayPrice }}</div>
        </div>
      </v-card>
    </v-skeleton-loader>
  </div>
</template>
<script>
export default {
  name: "RoomCard",
  props: ["uid", "imageUrl"],
  data: () => ({
    room: {},
    loading: true,
  }),
  methods: {
    goto() {
      this.$router.push({ name: "Reservation", params: { room: this.room } });
    },
  },
  computed: {
    roomAmenities() {
      let amenities = [];
      if (this.room.amenities) {
        const translate = {
          "Wi-Fi": "wifi",
          Breakfast: "早餐",
          "Mini-Bar": "迷你吧",
          "Room-Service": "客房服務",
          Television: "電視",
          "Air-Conditioner": "冷氣",
          Refrigerator: "冰箱",
          Sofa: "沙發",
          "Great-View": "景觀",
          "Smoke-Free": "禁止吸菸",
          "Child-Friendly": "適合兒童",
          "Pet-Friendly": "可帶寵物",
        };
        Object.keys(this.room.amenities).forEach((el) => {
          if (this.room.amenities[el]) {
            amenities.push(` ${translate[el]} `);
          }
        });
      }
      return amenities.toString();
    },
  },
  created() {
    this.$http({
      method: "get",
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer TyAhyPQ0BDpZZyZkG8wGmSGh0RQAb8frGPjKyMvf4XbPv3zXyENPv5csmmKq",
      },
      url:
        "https://challenge.thef2e.com/api/thef2e2019/stage6/room/" + this.uid,
    })
      .then((res) => {
        this.room = res.data.room[0];
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped>
.roomcardmain {
  margin-top: 65px;
  margin-bottom: 40px;
}
.roomcardtitle {
  letter-spacing: 4.16px;
  color: #496146;
  writing-mode: vertical-rl;
  text-orientation: sideways;
  transform: rotate(-180deg);
  text-align: right;
  width: 35px;
  margin-top: 10px;
  font-family: Adobe Hebrew Regular;
}
.roomcardimg {
  border: 1px solid #e3eae2;
  max-width: 300px;
  max-height: 300px;
}
.roomcard {
  padding: 10px;
  max-width: 320px;
}
.roomcardsubtitleblock {
  margin-left: 4px;
  margin-right: 4px;
}
.roomcardsubtitle div:nth-child(1) {
  text-align: center;
  font-size: 10px;
  letter-spacing: 0px;
  color: #496146;
  margin-top: 11px;
  font-family: Microsoft JhengHei;
}
.roomcardsubtitle div:nth-child(2) {
  font-size: 24px;
  letter-spacing: 0px;
  color: #496146;
  margin-top: 9px;
  font-family: Adobe Hebrew Regular;
}
.roomcardsubtitle div span {
  font-size: 12px;
}
.roomcardcontent {
  font-size: 12px;
  letter-spacing: 0px;
  color: #496146;
  margin-left: 10px;
  margin-right: 10px;
  min-height: 36px;
  font-family: Microsoft JhengHei;
}
.roomcardpriceh div:nth-child(1) {
  position: absolute;
  padding-right: 176px;
  font-size: 12px;
  color: #496146;
  font-family: Microsoft JhengHei;
}
.roomcardpriceh div:nth-child(2) {
  font-size: 18px;
  color: #a5bb94;
  font-family: Adobe Hebrew Regular;
}
.roomcardpricen {
  background: #e3eae2 0% 0% no-repeat padding-box;
  margin-top: 15px;
  margin-left: 0px;
  margin-right: 0px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.roomcardpricen div:nth-child(1) {
  position: absolute;
  padding-right: 176px;
  font-size: 12px;
  color: #496146;
  font-family: Microsoft JhengHei;
}
.roomcardpricen div:nth-child(2) {
  font-size: 26px;
  color: #496146;
  font-family: Adobe Hebrew Regular;
  letter-spacing: 4.16px;
}
</style>

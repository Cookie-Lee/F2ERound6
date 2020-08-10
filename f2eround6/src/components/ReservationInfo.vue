<template>
  <div class="resinfo">
    <div class="resinfotitle">預約房間:</div>
    <div class="resinfotitle">{{ room.name }}</div>
    <div class="ml-1 mt-8 resinfocontent">
      {{ room.description }}
    </div>
    <div class="ml-1 mt-4 resinfocontent2">
      <span>房間限制人數:</span>
      <span class="ml-3">{{
        room.descriptionShort.GuestMax === room.descriptionShort.GuestMin
          ? room.descriptionShort.GuestMin
          : `${room.descriptionShort.GuestMin}~${room.descriptionShort.GuestMax}`
      }}</span>
      <span>人</span>
    </div>
    <div class="ml-1 mt-4 resinfocontent2">
      <span>房間大小:</span>
      <span class="ml-3">{{ room.descriptionShort.Footage }}</span>
      <span>平方公尺</span>
    </div>
    <div class="ml-1 mt-4 resinfocontent2">
      <span>{{ myContent2 }}</span>
    </div>
    <div class="pa-4 mt-11 resinfoamenities">
      <div>{{ myAmenities }}</div>
    </div>
    <div
      class="ml-12 mr-12 mt-8 d-flex justify-space-between resinfocontent3"
      v-if="checkinswitch"
    >
      <div>
        <div>
          <div>checkIn 時間</div>
          <div>
            {{ room.checkInAndOut.checkInEarly }}
            ~
            {{ room.checkInAndOut.checkInLate }}
          </div>
        </div>
        <div class="mt-4">
          <div>平日(一~四)</div>
          <div>${{ room.normalDayPrice }}</div>
        </div>
      </div>
      <div>
        <div>
          <div>最晚checkout 時間</div>
          <div>{{ room.checkInAndOut.checkOut }}</div>
        </div>
        <div class="mt-4">
          <div>假日(五~日)</div>
          <div>${{ room.holidayPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ReservationInfo",
  props: ["room", "checkinswitch"],
  computed: {
    myContent2() {
      /* 計算床數 */
      let bedgroups = {}; //床的群組, 放 '床名': 數量
      //將每個床都跑一次, 如果名稱已經在bedgroups就把值+1, 不在bedgroups就塞進去並讓值為1
      this.room.descriptionShort.Bed.forEach(function(item) {
        if (Object.keys(bedgroups).indexOf(item) < 0) {
          bedgroups[`${item}`] = 1;
        } else {
          bedgroups[`${item}`] = bedgroups[`${item}`] + 1;
        }
      });

      let str = ""; //初始化回傳字串

      //把bedgroups每個項目都轉成字串
      Object.keys(bedgroups).forEach(function(item) {
        str += `${bedgroups[`${item}`]}張${item}床`;
      });

      //如果有獨立衛浴就加上這段
      if (this.room.descriptionShort["Private-Bath"] > 0) {
        str += `, ${this.room.descriptionShort["Private-Bath"]}間獨立衛浴`;
      }

      return str;
    },
    myAmenities() {
      let amenities = [];
      if (this.room.amenities) {
        if (this.room.amenities["Wi-Fi"]) {
          amenities.push(" wifi");
        }
        if (this.room.amenities["Breakfast"]) {
          amenities.push(" 早餐");
        }
        if (this.room.amenities["Mini-Bar"]) {
          amenities.push(" 小吧檯");
        }
        if (this.room.amenities["Room-Service"]) {
          amenities.push(" 客房服務");
        }
        if (this.room.amenities["Television"]) {
          amenities.push(" 電視");
        }
        if (this.room.amenities["Air-Conditioner"]) {
          amenities.push(" 冷氣");
        }
        if (this.room.amenities["Refrigerator"]) {
          amenities.push(" 冰箱");
        }
        if (this.room.amenities["Sofa"]) {
          amenities.push(" 沙發");
        }
        if (this.room.amenities["Great-View"]) {
          amenities.push(" 景觀");
        }
        if (this.room.amenities["Smoke-Free"]) {
          amenities.push(" 禁止吸煙");
        }
        if (this.room.amenities["Child-Friendly"]) {
          amenities.push(" 適合兒童");
        }
        if (this.room.amenities["Pet-Friendly"]) {
          amenities.push(" 可帶寵物");
        }
      }
      return amenities.toString();
    },
  },
};
</script>
<style scoped>
.resinfo {
  margin-top: 80px;
  margin-left: 64px;
  margin-right: 112px;
}
.resinfotitle {
  text-align: left;
  letter-spacing: 4.16px;
  color: #707070;
  font-size: 26px;
  font-family: Adobe Hebrew Regular;
}
.resinfocontent {
  text-align: left;
  letter-spacing: 0px;
  color: #496146;
  font-size: 16px;
  font-family: Adobe Hebrew Regular;
}
.resinfocontent2 {
  text-align: left;
  letter-spacing: 0px;
  color: #496146;
  font-size: 16px;
  font-family: Microsoft JhengHei;
}
.resinfoamenities {
  background: #e3eae2 0% 0% no-repeat padding-box;
}
.resinfoamenities div {
  text-align: center;
  letter-spacing: 0px;
  color: #496146;
  font-size: 16px;
  font-family: Microsoft JhengHei;
}
.resinfocontent3 div div:nth-child(1) {
  text-align: left;
  letter-spacing: 0px;
  color: #496146;
  font-size: 12px;
  font-family: Microsoft JhengHei;
}
.resinfocontent3 div div:nth-child(2) {
  text-align: left;
  letter-spacing: 0px;
  color: #496146;
  font-size: 24px;
  font-family: Adobe Hebrew Regular;
}
</style>

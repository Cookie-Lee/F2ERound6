<template>
  <div class="main mt-10">
    <div class="successcard pt-4 pl-7 pr-8 pb-8">
      <div class="successcardtitle">預約成功!</div>
      <div class="mt-8">
        <span>姓名</span>
        <span class="pl-4">{{ booking[0].name }}</span>
      </div>
      <div class="mt-7">
        <span>電話</span>
        <span class="pl-4">{{ booking[0].tel }}</span>
      </div>
      <div class="mt-7">
        <span>日期</span>
      </div>
      <div v-if="normaldaynum > 0" class="mt-4 d-flex justify-space-between">
        <div><span>平日(一~五)</span></div>
        <div>
          <span>${{ room.normalDayPrice }}</span>
          <span class="ml-3 mr-3">x</span>
          <span>{{ normaldaynum }}晚</span>
        </div>
        <div>
          <span>${{ room.normalDayPrice * normaldaynum }}</span>
        </div>
      </div>
      <div v-if="holidaynum > 0" class="mt-4 d-flex justify-space-between">
        <div><span>假日(六~日)</span></div>
        <div>
          <span>${{ room.holidayPrice }}</span>
          <span class="ml-3 mr-3">x</span>
          <span>{{ holidaynum }}晚</span>
        </div>
        <div>
          <span>${{ room.holidayPrice * holidaynum }}</span>
        </div>
      </div>
      <v-divider class="mt-3" color="#A5BB94"></v-divider>
      <div class="mt-4">
        <span
          >${{
            normaldaynum * room.normalDayPrice + holidaynum * room.holidayPrice
          }}</span
        >
      </div>
    </div>
    <div class="successalert mt-3 pt-3 pl-10 pr-10 pb-4">
      <div><span>提醒!</span></div>
      <div class="d-flex justify-space-between">
        <div>
          <div><span>checkIn 時間</span></div>
          <div>
            <span class="alertvalue"
              >{{ room.checkInAndOut.checkInEarly }}~{{
                room.checkInAndOut.checkInLate
              }}</span
            >
          </div>
        </div>
        <div>
          <div><span>最晚checkout 時間</span></div>
          <div>
            <span class="alertvalue">{{ room.checkInAndOut.checkOut }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SuccessCard",
  props: ["booking", "room"],
  computed: {
    normaldaynum() {
      return this.booking.filter(function(item) {
        return [1, 2, 3, 4, 5].indexOf(new Date(item.date).getDay()) > -1;
      }).length;
    },
    holidaynum() {
      return this.booking.filter(function(item) {
        return [0, 6].indexOf(new Date(item.date).getDay()) > -1;
      }).length;
    },
  },
};
</script>
<style scoped>
.main {
  margin-left: 112px;
  margin-right: 64px;
}
.successcard {
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #a5bb94;
  font-family: Microsoft JhengHei;
}
.successcardtitle {
  text-align: center;
  letter-spacing: 4.16px;
  color: #707070;
  font-size: 26px;
}
.successcard div span {
  text-align: left;
  letter-spacing: 0px;
  color: #425752;
  font-size: 17px;
  font-family: Segoe UI Regular;
}
.successcard div:nth-child(2) span:nth-child(2),
.successcard div:nth-child(3) span:nth-child(2),
.successcard div:nth-child(5) span:nth-child(5),
.successcard div:nth-child(6) span:nth-child(5) {
  text-align: left;
  letter-spacing: 0px;
  color: #496146;
  font-weight: bold;
  font-size: 16px;
  font-family: Microsoft JhengHei;
}
.successcard div:last-child {
  text-align: right;
}
.successcard div:last-child span {
  text-align: left;
  letter-spacing: 0px;
  color: #425752;
  font-weight: bold;
  font-size: 23px;
  font-family: Microsoft JhengHei;
}
.successalert {
  background: #e3eae2 0% 0% no-repeat padding-box;
  border: 1px solid #a5bb94;
}
.successalert span {
  text-align: left;
  letter-spacing: 0px;
  color: #425752;
  font-size: 12px;
  font-family: Microsoft JhengHei;
}
.successalert .alertvalue {
  text-align: left;
  letter-spacing: 0px;
  color: #425752;
  font-size: 24px;
  font-family: Adobe Hebrew Regular;
}
</style>

<template>
  <div class="resblock pl-6 pr-6 pt-2 pb-12">
    <div>
      <span>日期</span>
      <v-menu
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="myDates"
            readonly
            outlined
            dense
            color="#a5bb94"
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="dates"
          color="#72916E"
          no-title
          range
          scrollable
          locale="zh-tw"
        >
        </v-date-picker>
      </v-menu>
    </div>
    <div>
      <span>姓名</span>
      <v-text-field
        outlined
        dense
        color="#a5bb94"
        v-model="name"
      ></v-text-field>
    </div>
    <div>
      <span>電話</span>
      <v-text-field
        outlined
        dense
        color="#a5bb94"
        v-model="phone"
      ></v-text-field>
    </div>
    <div>
      <v-btn color="#496146" dark block height="63" class="mt-4"
        >確定預定日期
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  name: "ReservationCard",
  data: () => ({ dates: [], name: "", phone: "" }),
  computed: {
    myDates() {
      //如果dates沒有值或dates長度是0就回傳空字串
      if (!this.dates || this.dates.length === 0) {
        return "";
      }
      let str;
      //取得第1個日期的年月日
      const [year1, month1, day1] = this.dates[0].split("-");
      //自訂格式"年/月/日"
      str = `${year1}/${month1}/${day1}`;
      //如果有第2個日期就做這個if
      if (this.dates.length > 1) {
        //取得第2個日期的年月日
        const [year2, month2, day2] = this.dates[1].split("-");
        //自訂格式"年/月/日"
        let str2 = `${year2}/${month2}/${day2}`;
        //判斷日期1跟日期2的大小來決定字串擺放順序
        if (this.dates[0] > this.dates[1]) {
          str = `${str2} ~ ${str}`;
        } else if (this.dates[1] > this.dates[0]) {
          str += ` ~ ${str2}`;
        }
      }
      //回傳最後的字串
      return str;
    },
  },
};
</script>
<style scoped>
.resblock {
  background: #e3eae2 0% 0% no-repeat padding-box;
  border: 1px solid #a5bb94;
  margin-top: 80px;
  margin-left: 112px;
  margin-right: 64px;
}
.resblock div span {
  text-align: left;
  letter-spacing: 0px;
  color: #425752;
  font-size: 17px;
  font-family: Segoe UI Regular;
}
.resblock div .v-input {
  margin-top: 8px;
  border-radius: 0;
}
</style>

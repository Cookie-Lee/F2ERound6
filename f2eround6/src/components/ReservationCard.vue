<template>
  <div class="resblock pl-6 pr-6 pt-2 pb-12">
    <v-form ref="form">
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
              required
              :rules="[(v) => !!v || '請選擇日期']"
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
          required
          :rules="[(v) => !!v || '姓名必填']"
        ></v-text-field>
      </div>
      <div>
        <span>電話</span>
        <v-text-field
          outlined
          dense
          color="#a5bb94"
          v-model="phone"
          required
          :rules="[(v) => !!v || '電話必填']"
        ></v-text-field>
      </div>
      <div>
        <v-btn
          color="#496146"
          dark
          block
          height="63"
          class="mt-4"
          @click="submit"
          >確定預定日期
        </v-btn>
      </div>
      <v-alert v-if="alertmsg" class="mt-2" dense outlined type="error">
        {{ alertmsg }}
      </v-alert>
    </v-form>
  </div>
</template>
<script>
export default {
  name: "ReservationCard",
  data: () => ({ dates: [], name: "", phone: "", alertmsg: "" }),
  props: ["roomid"],
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
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$http({
          method: "post",
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer TyAhyPQ0BDpZZyZkG8wGmSGh0RQAb8frGPjKyMvf4XbPv3zXyENPv5csmmKq",
            "Content-Type": "application/json",
          },
          url: `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${this.roomid}`,
          data: JSON.stringify({
            name: this.name,
            tel: this.phone,
            date: this.dates,
          }),
        })
          .then((res) => {
            console.log(res);
            this.$emit("setSuccess", res.data.success);
            this.$emit("setBooking", res.data.booking);
          })
          .catch((err) => {
            this.alertmsg = err.response.data.message;
          });
      }
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

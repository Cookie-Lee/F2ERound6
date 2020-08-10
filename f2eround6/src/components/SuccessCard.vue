<template>
  <div class="main mt-10">
    <div class="successcard pt-4 pl-7 pr-8 pb-8">
      <div class="successcardtitle">預約成功!</div>
      <div class="mt-8">
        <span>姓名</span>
        <span class="pl-4">王小明</span>
      </div>
      <div class="mt-7">
        <span>電話</span>
        <span class="pl-4">0966666666</span>
      </div>
      <div class="mt-7">
        <span>日期</span>
      </div>
      <div class="mt-4 d-flex justify-space-between">
        <div><span>平日(一~四)</span></div>
        <div>
          <span>$1380</span>
          <span class="ml-3 mr-3">x</span>
          <span>2晚</span>
        </div>
        <div><span>$2760</span></div>
      </div>
      <div class="mt-4 d-flex justify-space-between">
        <div><span>假日(六~日)</span></div>
        <div>
          <span>$1500</span>
          <span class="ml-3 mr-3">x</span>
          <span>1晚</span>
        </div>
        <div><span>$1500</span></div>
      </div>
      <v-divider class="mt-3" color="#A5BB94"></v-divider>
      <div class="mt-4">
        <span>$4260</span>
      </div>
    </div>
    <div class="successalert mt-3 pt-3 pl-10 pr-10 pb-4">
      <div><span>提醒!</span></div>
      <div class="d-flex justify-space-between">
        <div>
          <div><span>checkIn 時間</span></div>
          <div><span class="alertvalue">15:00~21:00</span></div>
        </div>
        <div>
          <div><span>最晚checkout 時間</span></div>
          <div><span class="alertvalue">10:00</span></div>
        </div>
      </div>
    </div>
  </div>
</template>
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
.successcard div:nth-child(8) {
  text-align: right;
}
.successcard div:nth-child(8) span {
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

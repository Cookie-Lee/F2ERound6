<template>
  <div class="d-flex justify-center roomcardmain">
    <div class="roomcardtitle">Double Room</div>
    <v-card class="roomcard">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        class="roomcardimg"
      ></v-img>
      <div class="d-flex justify-space-between roomcardsubtitleblock">
        <div class="text-center roomcardsubtitle">
          <div>人數</div>
          <div>2~3</div>
        </div>
        <div class="text-center roomcardsubtitle">
          <div>床</div>
          <div>Double</div>
        </div>
        <div class="text-center roomcardsubtitle">
          <div>大小</div>
          <div>
            26<span>m<sup>2</sup></span>
          </div>
        </div>
      </div>
      <v-divider style="margin-top: 12px; margin-bottom: 12px;"></v-divider>
      <div class="roomcardcontent">
        wifi , 早餐 , 小吧檯 , 客房服務 , 電話 , 空調 , 冰箱 , 禁止吸煙 ,
        適合兒童 , 可帶寵物
      </div>
      <v-divider style="margin-top: 14px; margin-bottom: 14px;"></v-divider>
      <div class="roomcardpriceh d-flex justify-center">
        <div class="align-self-center">假日</div>
        <div>$2500</div>
      </div>
      <div class="roomcardpricen d-flex justify-center">
        <div class="align-self-center">平日</div>
        <div>$2460</div>
      </div>
    </v-card>
  </div>
</template>
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
  margin-right: -13px;
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
  text-align: center;
  font-size: 12px;
  letter-spacing: 0px;
  color: #496146;
  margin-left: 10px;
  margin-right: 10px;
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

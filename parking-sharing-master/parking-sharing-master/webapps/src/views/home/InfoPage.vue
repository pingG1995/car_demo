<template>
  <div class="InfoPage">
    <div class="header">车辆需求信息</div>
    <div class="content">
      <cnet-tabs v-model="activeName">
        <cnet-tab-pane label="供车人信息" name="offer">
          <carOffer v-bind:initial_Data="offerData"></carOffer>
        </cnet-tab-pane>

        <cnet-tab-pane label="需求人信息" name="demand">
          <carOffer v-bind:initial_Data="demandData"></carOffer>
        </cnet-tab-pane>
      </cnet-tabs>
    </div>
    <!-- 页面跳转 -->
    <div class="btnContainer">
      <router-link :to="{path:'/Result',query:{id:1,name:'vue'}}">
        <cnet-button type="primary" round size="medium">开始摇号</cnet-button>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import carOffer from "@/components/carOffer.vue";
//import carDemand from "@/components/carDemand.vue";
export default {
  name: "InfoPage",
  components: {
    carOffer
    //carDemand
  },
  data() {
    return {
      activeName: "offer",
      offerData: [
        {
          id: "0",
          name: "a1",
          date: "2020-02-02",
          carNum: "苏E88888"
        },
        {
          id: "1",
          name: "a2",
          date: "2020-02-02",
          carNum: "苏E22222"
        },
        {
          id: "2",
          name: "a3",
          date: "2020-02-02",
          carNum: "苏E66666"
        },
        {
          id: "3",
          name: "a4",
          date: "2020-02-02",
          carNum: "苏E33333"
        }
      ],
      //提车人信息
      demandData: [
        {
          id: "0",
          name: "b1",
          date: "2020-02-02"
        },
        {
          id: "1",
          name: "b2",
          date: "2020-02-02"
        },
        {
          id: "2",
          name: "b3",
          date: "2020-02-02"
        },
        {
          id: "3",
          name: "b4",
          date: "2020-02-02"
        }
      ]
    };
  }
};
</script> 
<style lang="less">
.InfoPage {
  .header {
    font-size: 30px;
    text-align: center;
  }
  .content {
    margin: 20px;
  }
  .btnContainer {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 40px;
  }
}
</style>
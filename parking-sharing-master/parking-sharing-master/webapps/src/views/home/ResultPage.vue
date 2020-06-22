<template>
    <div class="ResultPage">
        <div class="header">车辆摇号结果</div>
        <div class="content">
            <carResult v-bind:initial_Data="ResultData"></carResult>
        </div>
    </div>

</template>

<script>
// @ is an alias to /src
import carResult from "@/components/carResult.vue";

export default {
  name: "ResultPage",
  components: {
    carResult
    //carDemand
  },
  data() {
    return {
        //摇号结果
        ResultData:[
        {
          id: "0",
          name: "b1",
          date: "2020-02-02",
          carNum: "苏E88888"
        },
        {
          id: "1",
          name: "b2",
          date: "2020-02-02",
          carNum: "苏E22222"
        },
        {
          id: "2",
          name: "b3",
          date: "2020-02-02",
          carNum: "苏E66666"
        },
        {
          id: "3",
          name: "b4",
          date: "2020-02-02",
          carNum: "苏E33333"
        }
    ]  
      
    }
  }
};
</script> 
<style lang="less">
.ResultPage{
    .header {
    font-size: 30px;
    text-align: center;
  }
}
    
</style>
<template>
  <div class="InfoPages">
    <div class="header">车辆需求信息 </div>
    <cnet-tabs v-model="activeName">
            <cnet-tab-pane label="供车人信息" name='offer'>
                <car-ffer></car-ffer>
            </cnet-tab-pane>
    
            <el-tab-pane label="需求人信息" name="demand">
                <carDemand></carDemand>    
            </el-tab-pane>
        </cnet-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import carOffer from "@/components/carOffer.vue";
import carDemand from "@/components/carDemand.vue";
export default {
  name: "Info_pages",
  components: {
    carOffer,
    carDemand
  },
  data(){
      return{
          activeName:'offer'
      }
  }
};
</script> 
<style lang="less">
    .InfoPages{
      .header{
        font-size: 30px;
      }
    }
</style>
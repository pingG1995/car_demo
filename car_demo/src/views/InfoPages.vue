<template>
  <div class="InfoPages">
    <div class="header">车辆需求信息 </div>
    <Info></Info>
  </div>
</template>

<script>
// @ is an alias to /src
import Info from "@/components/Info.vue";

export default {
  name: "InfoPages",
  components: {
    Info
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
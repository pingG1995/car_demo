<template>
  <div class="ResultPages">
    <h2>摇号结果</h2>
    <Result></Result>
  </div>
</template>

<script>
// @ is an alias to /src
import Result from "@/components/Result.vue";

export default {
  name: "InfoPages",
  components: {
    Result
  }
};
</script>
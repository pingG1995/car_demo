<template>
  <div class="carResult">
    <cnet-table
      :data="Data"
      class="ResultTable"
      ref="ResultTable"
      :model="Data"
      style="width: 100%"
      highlight-current-row
    >
      <cnet-table-column prop="id" label="序号" width="180"></cnet-table-column>
      <cnet-table-column prop="name" label="姓名" width="180"></cnet-table-column>
      <cnet-table-column prop="date" label="日期" width="250">
        <template slot-scope="scope" width="250">
          <cnet-date-picker
            size="mini"
            type="date"
            v-model="scope.row.date"
            placeholder="选择日期"
            disabled
          ></cnet-date-picker>
        </template>
      </cnet-table-column>
      <cnet-table-column prop="carNum" label="车位"></cnet-table-column>
    </cnet-table>
  </div>
</template>

<script>
module.exports = {
  name: "Result",
  props: {
    initial_Data: Array
  },
  data() {
    return {
      Data: this.initial_Data
    };
  },
  methods: {}
};
</script>

<style lang="less">
* {
  font-size: 14px;
  .carResult {
    width: 800px;
    .ResultTable{
      margin-top: 40px;
      margin-left: 40px;
    }
  }
}
</style>
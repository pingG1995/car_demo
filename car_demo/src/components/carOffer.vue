<template>
  <div class="carOffer">
    <div class="search">
      <label>序号：</label>
      <cnet-input
        size="mini"
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="searchInput.id"
      ></cnet-input>

      <label>姓名：</label>
      <cnet-input
        size="mini"
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="searchInput.name"
      ></cnet-input>

      <label>日期：</label>
      <cnet-date-picker
        class="serach-date"
        size="mini"
        type="date"
        v-model="searchInput.date"
        placeholder="选择日期"
      ></cnet-date-picker>

      <label>车位：</label>
      <cnet-input
        size="mini"
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="searchInput.carNum"
      ></cnet-input>

      <cnet-button class="serach-btn" size="mini" @click="find()">查找</cnet-button>
      <cnet-button type="primary" size="mini" @click="add()">添加</cnet-button>
      <cnet-button type="success" size="mini" @click="save_back">保存并返回</cnet-button>
    </div>
    <cnet-table :data="offerData" ref="OfferTable" :model="offerData" highlight-current-row>
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
      <cnet-table-column prop="carNum" label="车位" width="180"></cnet-table-column>
      <cnet-table-column align="left" width="180">
        <template slot="header" slot-scope="scope">
          <span>操作</span>
        </template>
        <template slot-scope="scope">
          <cnet-button class="edit_btn" size="mini" @click="edit(scope.$index)">编辑</cnet-button>
          <!-- 弹出框 -->
          <cnet-dialog title="供车人信息" :visible.sync="dialogFormVisible">
            <cnet-form :model="formData">
              <cnet-form-item label="序号：">
                <cnet-input v-model="formData.id" autocomplete="off"></cnet-input>
              </cnet-form-item>
              <cnet-form-item label="姓名：">
                <cnet-input v-model="formData.name" autocomplete="off"></cnet-input>
              </cnet-form-item>
              <cnet-form-item>
                <div>
                  <span>日期：</span>
                </div>
                <cnet-date-picker
                  size="large"
                  type="date"
                  v-model="formData.date"
                  placeholder="选择日期"
                ></cnet-date-picker>
              </cnet-form-item>
              <cnet-form-item label="车位号：">
                <cnet-input v-model="formData.carNum" autocomplete="off"></cnet-input>
              </cnet-form-item>
            </cnet-form>
            <div slot="footer" class="dialog-footer">
              <cnet-button @click="form_cancle()">取 消</cnet-button>
              <cnet-button type="primary" @click="form_confirm()">确 定</cnet-button>
            </div>
          </cnet-dialog>
          <cnet-button class="edit_btn" size="mini" type="danger" @click="remove(scope.$index)">删除</cnet-button>
        </template>
      </cnet-table-column>
    </cnet-table>
  </div>
</template>

<script>
export default {
  name: "carOffer",
  mounted() {
    console.log("tab1组件");
  },
  
};
</script>
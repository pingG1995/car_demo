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

      <cnet-button class="serach-btn" size="mini" @click="find">查找</cnet-button>
      <cnet-button type="primary" size="mini" @click="add">添加</cnet-button>
      <cnet-button type="success" size="mini" @click="save_back">保存并返回</cnet-button>
    </div>
    <div class="container" style="width:1200px">
      <cnet-table :data="Data.slice((currentpage-1)*pagesize,currentpage*pagesize)" ref="OfferTable" highlight-current-row class="infoTable">
        <cnet-table-column prop="id" label="序号" show-overflow-tooltip width="200px"></cnet-table-column>
        <cnet-table-column prop="name" label="姓名" show-overflow-tooltip  width="200px"></cnet-table-column>
        <cnet-table-column prop="date" label="日期" show-overflow-tooltip width='250px'>
          <template slot-scope="scope"  show-overflow-tooltip>
            <cnet-date-picker size="mini" type="date" v-model="scope.row.date" placeholder="选择日期"></cnet-date-picker>
          </template>
        </cnet-table-column>
        <cnet-table-column prop="carNum" label="车位" width="200px"></cnet-table-column>
        <cnet-table-column align="left" width="200px">
          <template slot="header">
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
                  <cnet-input disabled v-model="formData.carNum" autocomplete="off"></cnet-input>
                </cnet-form-item>
              </cnet-form>
              <div slot="footer" class="dialog-footer">
                <cnet-button @click="form_cancle">取 消</cnet-button>
                <cnet-button type="primary" @click="form_confirm">确 定</cnet-button>
              </div>
            </cnet-dialog>
            <cnet-button class="edit_btn" size="mini" type="danger" @click="remove(scope.$index)">删除</cnet-button>
          </template>
        </cnet-table-column>
      </cnet-table>
      <!-- 导航栏 -->
  
    </div>
    <div class="pagination">
    <cnet-pagination
      small
      class="pagination_li"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentpage"
      :show-sizes=true
      :page-size="pagesize" 
      :page-sizes='[2,4,6,8]'
      layout="total, sizes, prev, pager, next, jumper"
      :pager-count="pagecount"
      :total="Data.length">
    </cnet-pagination>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: "Info",
  props: {
    initial_Data: Array
  },
  data() {
    return {
      Data: this.initial_Data,
      //供车人信息
      //提车人信息搜索
      searchInput: {
        id: "",
        name: "",
        date: "",
        carNum: ""
      },

      //标签是否打开
      dialogFormVisible: false,
      //标签数据
      formData: {
        id: "",
        name: "",
        date: "",
        carNum: ""
      },
      //当前选择项
      curIndex: -1,
      //按键状态位设置
      editIndex: false,
      addIndex: false,
      removeIndex: false,
      findIndex: false,
      //副本对应项
      copyIndex: -1,

      ///////////导航栏
      //当前页
      currentpage:1,
      //每页显示个数
      pagesize:5,
      pagecount:2,
    };
  },

  mounted() {
    this.Data_copy = JSON.parse(JSON.stringify(this.Data));
    //this.offerData_copy=this.offerData;
    console.log("mounted");
  },
  methods: {
    //信息确认
    form_confirm() {
      this.dialogFormVisible = false;
      this.Data[this.curIndex].id = this.formData.id;
      this.Data[this.curIndex].name = this.formData.name;
      this.Data[this.curIndex].date = this.formData.date;
      this.Data[this.curIndex].carNum = this.formData.carNum;
      this.editIndex = true;
      this.update_local();
      this.editIndex = false;
    },
    //信息取消
    form_cancle() {
      this.dialogFormVisible = false;
    },
    //修改对应项 弹窗显示
    edit(index) {
      //弹窗显示
      console.log("edit");
      this.curIndex = index;
      this.formData.id = this.Data[index].id;
      this.formData.name = this.Data[index].name;
      this.formData.date = this.Data[index].date;
      this.formData.carNum = this.Data[index].carNum;
      this.dialogFormVisible = true;
      this.copy_index();
    },
    //删除对应项
    remove(index) {
      this.curIndex = index;
      this.Data.splice(index, 1);
      this.removeIndex = true;
      this.update_local();
      this.removeIndex = false;
    },
    // 找到copy中代办项
    copy_index() {
      for (var i = 0; i < this.Data_copy.length; i++) {
        if (
          this.Data_copy[i].id == this.Data[this.curIndex].id &&
          this.Data_copy[i].name == this.Data[this.curIndex].name &&
          this.Data_copy[i].date == this.Data[this.curIndex].date &&
          this.Data_copy[i].carNum == this.Data[this.curIndex].carNum
        ) {
          this.copyIndex = i;
          console.log("COPY_INDEX IS DONE");
          break;
        }
      }
    },
    //状态更新
    update_local() {
      console.log("update");
      //点击编辑键

      if (this.editIndex) {
        console.log("confirm");
        console.log("copyIndex is:" + this.copyIndex);
        console.log("curIndex is:" + this.curIndex);
        if (this.copyIndex != -1) {
          this.Data_copy.splice(this.copyIndex, 1, this.Data[this.curIndex]);
        } else {
          this.Data_copy.splice(this.curIndex, 1, this.Data[this.curIndex]);
        }
      }
      //点击增加按键
      if (this.addIndex) {
        console.log("update_add");
        this.Data_copy.push(this.searchInput);
      }

      //点击删除按键
      if (this.removeIndex) {
        this.copy_index();
        this.Data_copy.splice(this.copyIndex, 1);
        console.log("remove");
      }
      console.log("update_end");
    },
    //本地数据复制
    copy_local() {
      this.Data = [];
      this.Data = JSON.parse(JSON.stringify(this.Data_copy));
      //this.offerData_copy=this.offerData;
      console.log("copy");
    },
    //查找
    find() {
      this.findIndex = true;
      console.log("find");
      this.copy_local();
      var id = this.searchInput.id;
      var name = this.searchInput.name;
      var date = this.searchInput.date;
      var carNum = this.searchInput.carNum;
      this.Data = this.Data.filter(function(item) {
        return (
          item.id.indexOf(id) > -1 &&
          item.name.indexOf(name) > -1 &&
          item.date.indexOf(date) > -1 &&
          item.carNum.indexOf(carNum) > -1
        );
      });
      this.findIndex = false;
      this.searchInput = {
        id: "",
        name: "",
        date: "",
        carNum: ""
      };
    },
    //添加数据
    add() {
      this.addIndex = true;
      this.Data.push(this.searchInput);
      console.log("add");
      this.update_local();

      this.searchInput = {
        id: "",
        name: "",
        date: "",
        carNum: ""
      };
      console.log("add_clear");
      this.addIndex = false;
    },
    //保存数据

    save_back() {
      this.copy_local();
    },
     //每页显示数目改变时
    handleSizeChange(size){
      this.pagesize=size;
    },
    //当前页改变时
    handleCurrentChange(currentPage){
      this.currentpage=currentPage;
    }

  }
};
</script>

<style lang="less">
* {
  font-size: 14px;
  // width:1296px;
  .carOffer {
    width: 100%;
    .search {
      text-align: left;
      width: 100%;
      margin-bottom: 10px;
      margin-top: 10px;
      margin-left: 0;
      .cnet-input {
        width: 150px;
        margin-right: 10px;
      }
      .serach-btn {
        margin-left: 5px;
      }
      .serach-date {
        margin-right: 10px;
        width: 150px;
      }
    }
    .container {
      width: 1200px;
      .infoTable {
        margin: 15px 5px;
      }
      .edit_btn {
        margin-left: 10px;
      }
    }
    .pagination{
      width: 200px;
      height: 30px;
      margin: 0px 850px;
      text-align: center;
      // background-color: aquamarine;
      .el-pagination{
        text-align: center;
      }
    }
  }
}
</style>
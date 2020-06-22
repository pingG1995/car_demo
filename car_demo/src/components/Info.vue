<template>
  <!-- 实现基本的增删改查 -->
  <div class="Info">
    <div class>
      <cnet-tabs type="card"  v-model='activeName' @tab-click="handleClick">
        <cnet-tab-pane label="供车人信息" name='offer'>
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
                <cnet-button
                  class="edit_btn"
                  size="mini"
                  type="danger"
                  @click="remove(scope.$index)"
                >删除</cnet-button>
              </template>
            </cnet-table-column>
          </cnet-table>
        </cnet-tab-pane>

        <!-- 需车人信息 -->
        <cnet-tab-pane label="需求人信息" name="demand">
          <div class="search">
            <label>序号：</label>
            <input searchable search-mode="button" v-model="searchInput_demand.id" />

            <label>姓名：</label>
            <input searchable search-mode="button" v-model="searchInput_demand.name" />

            <label>日期：</label>
            <input searchable search-mode="button" v-model="searchInput_demand.date" />
            <cnet-button @click="find_demand" class="serach-btn">查找</cnet-button>
            <cnet-button type="primary" @click="add_demand">添加</cnet-button>
          </div>
          <cnet-table :data="offerData">
            <cnet-table-column prop="id" label="序号" width="180"></cnet-table-column>
            <cnet-table-column prop="name" label="姓名" width="180"></cnet-table-column>
            <cnet-table-column prop="date" label="日期" width="180"></cnet-table-column>
            <cnet-table-column width="180">
              <template slot="header" slot-scope="scope">
                <span>操作</span>
              </template>
              <template slot-scope="scope">
                <cnet-button size="mini" @click="edit_demand(scope.$index)">编辑</cnet-button>
                <cnet-button size="mini" type="danger" @click="remove_demand(scope.$index)">删除</cnet-button>
              </template>
            </cnet-table-column>
          </cnet-table>
        </cnet-tab-pane>
      </cnet-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

module.exports = {
  name: "Info",
  data() {
    return {
      //供车人信息
      
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
      //选中tab页
      activeName:'offer',
      offerData_copy: [],
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
      ],

      //提车人信息搜索
      searchInput: {
        id: "",
        name: "",
        date: "",
        carNum: ""
      },
      searchInput_demand: {
        id: "",
        name: "",
        date: ""
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
      copyIndex: -1
    };
  },
  
  mounted() {
    this.offerData_copy= JSON.parse(JSON.stringify(this.offerData));
    //this.offerData_copy=this.offerData;
    console.log(1);
    localStorage.setItem("demand_data", JSON.stringify(this.demandData));
  },
  methods: {
      handleClick(){
          if(this.activeName=='offer'){
              this.offerData=JSON.parse(JSON.stringify(this.Data));
          }
          else{
              this.offerData=JSON.parse(JSON.stringify(this.demandData));
          }
      },
    //信息确认
    form_confirm() {
      this.dialogFormVisible = false;
      this.offerData[this.curIndex].id = this.formData.id;
      this.offerData[this.curIndex].name = this.formData.name;
      this.offerData[this.curIndex].date = this.formData.date;
      this.offerData[this.curIndex].carNum = this.formData.carNum;
      this.editIndex = true;
      this.update_local();
      this.editIndex = false;
    },
    //信息取消
    form_cancle() {
      this.dialogFormVisible = false;
    },
    //修改对应项 弹窗显示
    edit(index: any) {
      //弹窗显示
      
      this.curIndex = index;
      this.formData.id = this.offerData[index].id;
      this.formData.name = this.offerData[index].name;
      this.formData.date = this.offerData[index].date;
      this.formData.carNum = this.offerData[index].carNum;
      this.copy_index();
      this.dialogFormVisible = true;
    },
    //删除对应项
    remove(index: any) {
      this.curIndex = index;
      this.offerData.splice(index, 1);
      this.removeIndex = true;
      this.update_local();
      this.removeIndex = false;
    },
    // 找到copy中代办项
    copy_index() {
      for (var i = 0; i < this.offerData_copy.length; i++) {
        if (
          this.offerData_copy[i].id == this.offerData[this.curIndex].id &&
          this.offerData_copy[i].name == this.offerData[this.curIndex].name &&
          this.offerData_copy[i].date == this.offerData[this.curIndex].date &&
          this.offerData_copy[i].carNum == this.offerData[this.curIndex].carNum
        ) {
          this.copyIndex = i;
          console.log('COPY_INDEX IS DONE');
          break;
        }
      }
    },
    //状态更新
    update_local() {
        
      
      console.log('update');
      //点击编辑键
      
      if (this.editIndex) {
        console.log('confirm');
        console.log('copyIndex is:'+this.copyIndex);
        console.log('curIndex is:'+this.curIndex);
        if(this.copyIndex!=-1){
             this.offerData_copy.splice(this.copyIndex, 1,this.offerData[this.curIndex]);
        }
        else{
            this.offerData_copy.splice(this.curIndex,1,this.offerData[this.curIndex]);
        }
        
      }
      //点击增加按键
    if (this.addIndex) {
        console.log('update_add');
        this.offerData_copy.push(this.searchInput);
    
      }

      //点击删除按键
      if (this.removeIndex) {
          this.copy_index();
        this.offerData_copy.splice(this.copyIndex, 1);
        console.log('remove');
      }
      console.log('update_end')
    
    },
    //本地数据复制
    copy_local() {
        this.offerData=[];
       this.offerData= JSON.parse(JSON.stringify(this.offerData_copy));
    //this.offerData_copy=this.offerData;
      console.log('copy');
    },
    //查找
    find() {
      this.findIndex = true;
      this.copy_local();
      var id = this.searchInput.id;
      var name = this.searchInput.name;
      var date = this.searchInput.date;
      var carNum = this.searchInput.carNum;
      this.offerData = this.offerData.filter(function(item: any) {
        return (
          item.id.indexOf(id) > -1 &&
          item.name.indexOf(name) > -1 &&
          item.date.indexOf(date) > -1 &&
          item.carNum.indexOf(carNum) > -1
        );
      });
      this.findIndex=false;
      this.searchInput = {
        id: "",
        name: "",
        date: "",
        carNum: ""
      };
      console.log('find');
    },
    //添加数据
    add() {
      this.addIndex=true;
      this.offerData.push(this.searchInput);
      console.log('add')
      this.update_local();
      
      this.searchInput = {
        id: '',
        name: '',
        date: '',
        carNum: ''
      };
      console.log('add_clear')
      this.addIndex = false;
      
    },
    //保存数据

    save_back() {
        this.copy_local();
    },

    //////////////////////需求者部分/////////
    //修改对应项 弹窗显示
    edit_demand(index: any) {
      //弹窗显示
      this.curIndex = index;
      this.update_local_demand();
    },
    //删除对应项
    remove_demand(index: any) {
      this.curIndex = index;
      this.demandData.splice(index, 1);
      this.update_local_demand();
    },
    //状态更新
    update_local_demand() {
      localStorage.setItem("demand_data", JSON.stringify(this.demandData));
    },
    //本地数据复制
    copy_local_demand() {
      this.demandData = JSON.parse(localStorage.getItem("demand_data"));
    },
    //查找
    find_demand() {
      this.copy_local_demand();
      var id = this.searchInput_demand.id;
      var name = this.searchInput_demand.name;
      var date = this.searchInput_demand.date;
      //var carNum=this.searchInput_demand.carNum;
      this.demandData = this.demandData.filter(function(item: any) {
        return (
          item.id.indexOf(id) > -1 &&
          item.name.indexOf(name) > -1 &&
          item.date.indexOf(date) > -1
        );
      });
    },
    //添加数据
    add_demand() {
      this.demandData.push(this.searchInput_demand);
      this.searchInput_demand = {
        id: "",
        name: "",
        date: ""
      };
      this.update_local_demand();
    }
  }
};
</script>
<style lang="less">
* {
  font-size: 14px;
  .Info {
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
    .edit_btn {
      margin-left: 10px;
    }
  }
}
</style>
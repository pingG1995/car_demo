<template>
<!-- 实现摇号的结果展示 -->
    <div class='Result'>
        <cnet-table :data="ResultData">
            <cnet-table-column prop="index" label="序号" width="180"></cnet-table-column>
            <cnet-table-column prop="name" label="姓名" width="180"></cnet-table-column>
            <cnet-table-column prop="date" label="日期" width="180"></cnet-table-column>
            <cnet-table-column prop="carNum" label="车位" width="180"></cnet-table-column>
            <cnet-table-column align="left" width="180">
                <template slot="header" slot-scope="scope">
                    <span>操作</span>
                </template>
                <template slot-scope="scope">
                    <cnet-button size="mini">编辑</cnet-button>
                    <cnet-button size="mini" type="danger">删除</cnet-button>
                </template>
            </cnet-table-column>
        </cnet-table>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

module.exports={
    name:'Info',
    data () {
        return {
            ResultData: [{
                index: 0,
                name:'a1',
                date: '2020-02-02',
                carNum: '苏E88888',
            }, {
                index: 1,
                name:'a2',
                date: '2020-02-02',
                carNum: '苏E22222',
            }, {
                index: 2,
                name:'a3',
                date: '2020-02-02',
                carNum: '苏E66666',
            }, {
                index: 3,
                name:'a4',
                date: '2020-02-02',
                carNum: '苏E33333',
            }],

            demandData: [{
                index: 0,
                name:'b1',
                date: '2020-02-02',
            }, {
                index: 1,
                name:'b2',
                date: '2020-02-02',
            
            }, {
                index: 2,
                name:'b3',
                date: '2020-02-02',
            }, {
                index: 3,
                name:'b4',
                date: '2020-02-02',
            }],
        searchOffer:'',
        }
   },
    computed:{

    }
}
</script>
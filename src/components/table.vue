<template>
<div>
  <el-table
    :data="tableData3"
    selection-mode="multiple"
    style="width: 100%">
    <el-table-column
      type="selection"
      width="50">
    </el-table-column>
    <el-table-column
      inline-template
      label="日期"
      width="120">
      <div>{{ row.date }}</div>
    </el-table-column>
    <el-table-column
      property="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      property="address"
      label="地址"
      show-tooltip-when-overflow>
    </el-table-column>
  </el-table>
  <input type="text" v-model="tips.data">
  <p>{{tips.data}}</p>
</div>
  
</template>

<script>
  export default {

    props: ['tips'],
    data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },

    methods: {

    }
  }
</script>
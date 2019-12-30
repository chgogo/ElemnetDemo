<template>
  <div>
    <el-table  ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%;border:solid 1px #EBEEF5" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-colume prop="name" label="姓名" width="120"></el-table-colume>
      <el-table-colume prop="age" label="年龄" width='120'></el-table-colume>
      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
    </el-table>
    <el-table :data="tableData2" style="width: 100%;border:solid 1px #EBEEF5; margin-top: 10px" >
      <el-table-column prop="date" label="日期" width="200" ></el-table-column>
      <el-table-column prop="name" label="姓名" width="200" ></el-table-column>
      <el-table-column prop="hobby" label="爱好" width="200" ></el-table-column>
      <el-table-column prop="age" label="年龄" width="200" ></el-table-column>
      <el-table-column prop="height" label="身高"  show-overflow-tooltip></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      tableData: [{
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
      tableData2: [{
        date: '2019-12-12',
        name: 'aa',
        hobby: '玩游戏玩游戏',
        age: '11',
        height: '1.5',
      },{
        date: '2019-12-26',
        name: 'bb',
        hobby: '打篮球打篮球',
        age: '22',
        height: '1.78'
      },{
        date: '2019-11-11',
        name: 'bb',
        hobby: '看书看书看书',
        age: '99',
        height: '2.02'
      },{
        date: '2019-11-11',
        name: 'bb',
        hobby: '看书看书看书',
        age: '99',
        height: '2.02'
      },{
        date: '2019-11-11',
        name: 'bb',
        hobby: '看书看书看书',
        age: '99',
        height: '2.02'
      }],
    }
  },

  methods: {
    handleSelectionChange(){

    },
  }
}
</script>

<style scoped lang='scss'>

</style>

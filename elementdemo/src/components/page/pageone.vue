<template>
<div>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item>首页</el-breadcrumb-item>
    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="iptzzz">
    <span class="searchbtn">搜索：</span>
    <el-input v-model="ipt1" placeholder="请输入地址"></el-input>
    <el-input v-model="ipt2" placeholder="请输入部门"></el-input>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <el-button type="primary" icon="el-icon-edit">添加</el-button>
  </div>
  <el-table :data='tabData' border style="width: 100%" id="out-table">
    <el-table-column prop="name"  label="姓名" align="center"></el-table-column>
    <el-table-column prop="age"  label="年龄" align="center"></el-table-column>
    <el-table-column prop="hobby"  label="爱好" align="center"></el-table-column>
    <el-table-column prop="time" label="时间" align="center"></el-table-column>
    <el-table-column label="图片上传" align="center">
      <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </el-table-column>
    <el-table-column label="操作" align="center">
      <template>
        <el-button type="primary" size="small">查看</el-button>
        <el-button type="primary" size="small" @click="isshowPag">编辑</el-button>
        <el-button type="success" size="small"  @click="outTable">导出</el-button>
        <el-button type="danger" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block">
    <el-pagination
    @size-change= 'sizeChange'
    @current-change = 'currentChange'
    :current-page="page4"
    :page-sizes="[100,200,300,400]"
    :page-size="pageSize"
    layout="total, sizes,prev,pager,next,jumper"
    :total="400"
    >
    </el-pagination>
  </div>
  <el-dialog title="编辑" :visible.sync="showdialog" width="30%">
    <el-form :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model='form.region' placeholder="请选择活动区域">
          <el-option label="区域1" value="beijing"></el-option>
          <el-option label="区域2" value="shanghai"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="请选择日期" v-model="form.date1" style="width: 100%"></el-date-picker>
        </el-col>
        <el-col :span="2" class="line"></el-col>
        <el-col :span="11">
          <el-time-picker placeholder="请选择时间" v-model="form.date2" style="width: 100%"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="及时配送">
        <el-switch v-model="form.peisong"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type" @change="handleCheckedCitiesChange">
          <el-checkbox label="1" name="type" value="1">美食</el-checkbox>
          <el-checkbox label="地推轰动" name="type" value="2"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type" value="3"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type" value="4"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线下停车场免费"></el-radio>
          <el-radio label="提供免费早餐"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</div>
</template>
<script>
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
export default {
  name: '',
  data () {
    return {
      ipt1: '',
      ipt2: '',
      tabData: [
        {
          name: '小虎',
          age: '90',
          hobby: '下象棋',
          time: '2019-06-24'
        },
        {
          name: '小龙',
          age: '22',
          hobby: '巴斯凯特爆',
          time: '2016-03-01'
        },
        {
          name: '小兰',
          age: '3',
          hobby: '吃饭',
          time: '2008-09-14'
        }
      ],
      page4: 1, // 显示的是第几页
      pageSize: 100, // 每页显示的条数
      showdialog: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        peisong: false,
        type: [],
        resource: '',
        desc: '',
      },
      dialogImageUrl: '',
      dialogVisible: false,
    }
  },
  mouted() {
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleCheckedCitiesChange(val){
      console.log(val)
    },
    sizeChange(val) {
      console.log('每页多少条' + val)
      this.pageSize = val;
    },
    currentChange(val) {
      console.log('当前页' + val)
      this.page4 = val;
    },
    isshowPag() {
      this.showdialog = true;
    },
    outTable() {
      var wb = XLSX.utils.table_to_book(document.querySelector('#out-table'))
      var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
      try {
        FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), '表格信息.xlsx')
      } catch (e) { if (typeof console !== 'undefined') console.log(e, wbout) }
       return wbout
    },
  }
}
</script>

<style scoped lang='scss'>
.el-breadcrumb__inner{
  font-weight: bold;
}
.iptzzz{
  align-items: center;
  margin-top: 10px;
}
.el-input{
  width: 200px;
  margin-right: 10px;
}
.searchbtn{
  font-size: 14px;
  color: #000;
}
.el-table--border{
  margin-top: 10px;
}
.block{
  margin-top: 10px;
}
.line{
  width: 6px;
  height: 1px;
  margin: 18px 10px;
  background: #ccc;
}
.el-button+ .el-button{
  margin-left: 0;
  margin-top: 10px
}
</style>

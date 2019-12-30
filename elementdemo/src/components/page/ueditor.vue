<template>
<div>
  <div id="wangeditor">
    <div ref="editorElem" style="text-align:left;"></div>
  </div>
  <div class="block">
    <el-date-picker v-model="value1" type="date" placeholder="选择日期" @change='change'></el-date-picker>
    <el-rate v-model="valuestate"></el-rate>
    <el-tree :data="data" show-checkbox node-key="id" :default-expanded-keys="[2,3]" :default-checked-keys="[5]" :props="defaultProps"></el-tree>
  </div>
</div>
</template>
<script>
import E from "wangeditor";
export default {
  name: '',
  data () {
    return {
      editor: null,
      editorContent: '',
      value1: '',
      valuestate: '',
      data: [{
        id: 1,
        label: '一级1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1',
          },{
            id: 10,
            label: '三级 1-1-2',
          }]
        }]
      },{
        id: 2,
        label: '二级2',
        children: [{
          id: 5,
          label: '二级 2-1',
          children: [{
            id: 11,
            label: '三级 2-1-1',
          },{
            id: 12,
            label: '三级 2-1-2',
          },{
            id: 13,
            label: '三级 2-1-3' 
          }]
        }]
      }]
    }
  },
  // props: ['catchData'], // 接收父组件的方法
  mounted() {
    this.editor = new E(this.$refs.editorElem);
    // 编辑器的事件，每次改变会获取其html内容
    this.editor.customConfig.onchange = html => {
      this.editorContent = html;
      // this.catchData(this.editorContent); // 把这个html通过catchData的方法传入父组件
    };
    this.editor.customConfig.menus = [
      // 菜单配置
      'head', // 标题
      'bold', // 粗体
      'fontSize', // 字号
      'fontName', // 字体
      'italic', // 斜体
      'underline', // 下划线
      'strikeThrough', // 删除线
      'foreColor', // 文字颜色
      'backColor', // 背景颜色
      'link', // 插入链接
      'list', // 列表
      'justify', // 对齐方式
      'quote', // 引用
      'emoticon', // 表情
      'image', // 插入图片
      'table', // 表格
      'code', // 插入代码
      'undo', // 撤销
      'redo' // 重复
    ];
    this.editor.create(); // 创建富文本实例
  },
  methods: {
    change(date) {
      var d = new Date(date) // 中国标准时间转换成时间格式
      var datetime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
      console.log(datetime)
    }
  }
}
</script>

<style scoped lang='scss'>

</style>

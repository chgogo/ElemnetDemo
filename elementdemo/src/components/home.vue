<template>
<div v-loading.fullscreen.lock="homeloding" class="main">
  <el-container>
    <el-header>
      <span  @click="iscollapsclick(isaside)">
        <i class="el-icon-s-operation"></i>
      </span>
      <h1 class="pagename">Thanks后台管理系统</h1>
      <span>
        <el-dropdown size="medium" @command="dropmenu" trigger="click">
          <span class="el-dropdown-link">
            管理员<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command='1'>设置</el-dropdown-item>
            <el-dropdown-item command='2' divided>查看权限</el-dropdown-item>
            <el-dropdown-item command='3' divided>
              <el-button type="text" @click="open2">退出</el-button>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
    </el-header>
    <el-container>
      <el-aside :class="showclass">
        <el-menu class="el-menu-vertical-demo" default-active="1-1-4" :default-openeds="['1']" background-color="#334157" text-color="#fff" :collapse="isCollapse" :router ='true'>
          <el-submenu v-for="(item, index) in (res.data)" :key="index"  :index= 'item.idx'>
            <template slot="title">
              <i :class="item.ico"></i>
              <span>{{ item.title}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="(item, index) in (item.children)" :key="index"  :index="item.url">
                <i :class="item.ico"></i>
                <span>{{ item.title}}</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      homeloding: false,
      opend: true,
      isaside: true,
      isCollapse: false,
      showclass: 'showaside',
      res: [],
    }
  },
  methods: {
    lodingHome() { // 页面一开始的加载
      this.homeloding = true;
      setTimeout( ()=>{
        this.homeloding = false;
      },300)
    },
    iscollapsclick(isaside) {
      this.isaside = !isaside;
      this.isCollapse = isaside;
      if(this.isaside !=true){
        this.showclass = 'hidaside';
      } else {
        this.showclass = 'showaside';
      }
    },
    dropmenu(command){
      console.log(command)
    },  
    open2() { // 点击退出按钮
      this.$confirm('确认退出？, 是否继续退出?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then((action) => {
        if(action === 'confirm'){
          localStorage.clear();
          this.$router.push('/login')
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消退出'
        })
      });
    },
  },
  created () {
    this.lodingHome()
    let res = {
      success: true,
      data: [
        {
          title: '订单管理',
          idx: '1',
          ico: 'el-icon-upload',
          children: [
            {
              title: '订单管理-1',
              idx: 1-1,
              ico: 'el-icon-error',
              url: 'one',
            },
            {
              title: '订单管理-2',
              idx: 1-2,
              ico: 'el-icon-star-off',
              url: 'oneone'
            }
          ],
        },
        {
          title: '内容管理',
          idx:'2',
          ico: 'el-icon-menu',
          children: [
            {
              title: '内容管理-1',
              idx: 2-1,
              ico: 'el-icon-loading',
              url: 'two',
            }
          ],
        },
        {
          title: '优惠券管理',
          idx: '3',
          ico: 'el-icon-phone',
          children: [
            {
              title: '优惠券管理-1',
              idx: 3-1,
              ico: 'el-icon-phone-outline',
              url: 'three',
            }
          ]
        },
        {
          title: '地图定位',
          idx: '4',
          ico: 'el-icon-position',
          children: [
            {
              title: '地图定位-1',
              idx: 4-1,
              ico: 'el-icon-map-location',
              url: 'four'
            }
          ]
        },
        {
          title: '富文本编辑器',
          idx: '5',
          ico: 'el-icon-thumb',
          children: [
            {
              title: '富文本编辑器-1',
              idx: 5-1,
              ico: 'el-icon-thumb',
              url: 'ueditor'
            }
          ]
        },
        {
          title: '表格',
          idx: '6',
          ico: 'el-icon-thumb',
          children: [
            {
              title: '表格-1',
              idx: 5-1,
              ico: 'el-icon-thumb',
              url: 'xx'
            }
          ]
        }
      ],
    }
    this.res = res;
  },
}
</script>
<style scoped lang="scss">
.main{
  height: 100%;
}
.el-container,.is-vertical{
  height: 100%;
}
.el-header{
  background: #334157;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-icon-s-operation{
  font-size: 25px;
}
.el-aside{
  background: #334157;
}
.el-submenu__title{
  color: #fff;
}
.showaside{
  width: 300px !important;
  transition: width 1s;
}
.hidaside{
  width:64px !important;
  transition: width 1s;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 300px;
  min-height: 400px;
}
.el-menu{
  border-right: none;
}
.el-icon-s-operation{
  color: #fff;
}
.el-dropdown{
  color: #fff;
}
.el-button--text{
  color: #606266;
}
.pagename{
  color: #fff;
}
</style>
<template>
<div class="main">
  <el-form label-width="100px"   label-position="left" :inline="true" :model="model" :rules="rules" ref="rules">
    <el-form-item label="账号" prop="username">
      <el-input type="text" v-model="model.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" autocomplete="off" v-model="model.password"></el-input>
    </el-form-item>
    <el-checkbox class="remember" v-model="rememberpwd">记住密码</el-checkbox>
    <el-button type="primary" style="margin-top: 20px" @click="loginidx(rules)">登录</el-button>
  </el-form>
</div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      checked: true, // 记住密码
      model: { // 表单数据
        username: '',
        password: '',
      }, 
      rememberpwd: false,
      rules: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
    }
  },
  methods: {
    loginidx(rules) {
      this.$router.push('/one')
      localStorage.setItem('Tonk','1');
    },
  },
  mounted() {

  },
  created() {
    if(Boolean(localStorage.getItem('Tonk'))){
      this.$router.push('/one')
    }
  },
}
</script>
<style scoped lang='scss'>
.main{
  width: 100%;
  height: 100%;
  background-image: url(http://demo.cssmoban.com/cssthemes6/tmag_13_Grace/assets/img/bg/bg3.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  padding-top: 18%;
}
.el-form{
  border-radius: 10px;
  margin: 0px auto;
  width: 350px;
  padding: 30px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  text-align: left;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  display: flex; 
  flex-direction: column;
}
</style>

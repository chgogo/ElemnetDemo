<template>
  <div>
    <h1>Vuex 的使用</h1>
    <h1>
      {{ name1}}
    </h1>
    <h1>
      {{ this.$store.state.count}}
    </h1>
    <el-button type="text" @click="add">加</el-button>
    <el-button type="text" @click="jian">减</el-button>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations} from 'vuex'; // vue定义的辅助函数
export default {
  name: '',
  data () {
    return {
      msg: 18,
    }
  },
  computed: {
    ...mapState({ // 辅助函数
      name1:state => state.name
    })
  },
  methods: {
    add() {
      // this.$store.commit('add') // mutation 修改state中的值
      this.$store.dispatch('addfun') // actions 修改state中的值
    },
    jian() {
      let n = 10
      // this.$store.commit('jie') // mutation 修改state中的值
      // this.$store.dispatch('jiefun') // actions 修改state中的值
      this.$store.dispatch('jiefun', n) // action 中传参数
    },
  },
  created() {
    console.log(this.$store.state.count)
    // setInterval(() => { // 每隔一秒钟都执行一次定时器,不清除定时器的话会一直执行
    //   console.log('setInerval')
    // }, 1000);
    // setTimeout(() => { // 一秒console一次就清除定时器了
    //   console.log('setTimeout')
    // }, 1000);
  },
}
</script>

<style scoped lang='scss'>

</style>
<template>
<div>
  <div id="container"></div>
  <div id="panel"></div>
</div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
      map: null,
    }
  },
  methods: {
    loadmap() {
      this.map = new AMap.Map('container',{
        zoom: 11, //级别
        center: [116.397428, 39.90923],
        viewMode: '3D'
      })
      let thit = this;
      AMap.plugin('AMap.Driving', function(){
        let driving = new AMap.Driving({
          policy: AMap.DrivingPolicy.LEAST_TIME, // AMap.DrivingPolicy.LEAST_TIME驾车路线策略最快捷的模式
          map: thit.map,
          panel: 'panel',
        })
        var startLngLat = [116.379028, 39.865042]
        var endLngLat = [116.427281, 39.903719]
        driving.search(startLngLat,endLngLat, function(status,result){
          console.log(status,result)
        })
      })
    }
  },
  mounted() {
    this.loadmap();
  },
}
</script>

<style scoped lang='scss'>
.el-main{
  padding: 0;
}
#container{
  width: 100%;
  height: 100vh;
}
#panel {
  position: fixed;
  background-color: white;
  max-height: 90%;
  overflow-y: auto;
  top: 80px;
  right: 10px;
  width: 280px;
}
#panel .amap-call {
  background-color: #009cf9;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
#panel .amap-lib-driving {
	border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
}
</style>

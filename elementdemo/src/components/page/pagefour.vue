<template>
<div>
  <div id="positionMap"></div>
  <div class="info">
    <h4 id='status'></h4><hr>
    <p id='result'></p><hr>
    <p >由于众多浏览器已不再支持非安全域的定位请求，为保位成功率和精度，请升级您的站点到HTTPS。</p>
</div>
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
    weather() { // 检测天气
      AMap.plugin('AMap.Weather', function() {
        let weather = new AMap.Weather();
        weather.getLive('晋城市', function(err,data){
          console.log(err,data)
        })
      })
    },
    loadMap() { // 定位获取你当下的地理位置信息
      this.map = new AMap.Map('positionMap',{
        esizeEnable: true
      });
      let thit = this;
      AMap.plugin('AMap.Geolocation',function(){
        let geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, // 是否高精度定位
          timeout: 10000, // 设置定位超时时间
          buttonOffset: new AMap.Pixel(10, 20),
          zoomToAccuracy: true,
          buttonPosition: 'RB' // 定位按钮的位置 RB表示右下
        })
        thit.map.addControl(geolocation)
        geolocation.getCurrentPosition(function(status,result){
          if(status=='complete'){
            thit.onComplete(result)
          }else{
            thit.onError(result)
          }
        });
      })
    },
    onComplete(data) {
      document.getElementById('status').innerHTML='定位成功'
      var str = [];
      str.push('定位结果：' + data.position);
      str.push('定位类别：' + data.location_type);
      if(data.accuracy){
        str.push('精度：' + data.accuracy + ' 米');
      }//如为IP精确定位结果则没有精度信息
      str.push('是否经过偏移：' + (data.isConverted ? '是' : '否'));
      document.getElementById('result').innerHTML = str.join('<br>');
    },
    onError(data) {
      document.getElementById('status').innerHTML='定位失败'
      document.getElementById('result').innerHTML = '失败原因排查信息:'+data.message;
    }
  },
  mounted() {
    this.loadMap();
    this.weather(); 
  }
}
</script>

<style scoped lang='scss'>
#positionMap{
  width: 100%;
  height: 100vh;
}
.info{
  width: 46rem;
  height: 200px;
  position: absolute;
  top: 75px;
  background: #fff;
  padding: 10px;
}
</style>

<template>
<div>
  <div class="echarBox">
    <div id="main" style="width: 40%; height: 400px"></div>
    <div id="line" style="width: 40%; height: 400px"></div>
    <div id="pie" style="width: 40%; height: 400px"></div>
  </div>
</div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    
    }
  },
  methods: {
    loadEcharts() {
      let myChart = this.$echarts.init(document.getElementById('main'));
      let option = {
        title: {
          text: 'ECharts'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        tooltip: {},
        legend: {
          data:['销量','价格浮动']
        },
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 46, 10, 10, 20]
        },{
          name: '价格浮动',
          type: 'line',
          data: [5, 20, 46, 10, 10, 20],
        }]
      }
      myChart.setOption(option);
    },
    loadLine() {
      let myChart = this.$echarts.init(document.getElementById('line'));
      let option = {
        title: {
          text: '折线图',
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
          },
          {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
          },
          {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
          },
          {
            name:'直接访问',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
          },
          {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
          }
        ],
      }
      myChart.setOption(option)
    },
    loadpie() {
      let myChart = this.$echarts.init(document.getElementById('pie'))
      let option = {
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
        },
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: ['50%','70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data:[
            {value:335, name:'直接访问'},
            {value:310, name:'邮件营销'},
            {value:234, name:'联盟广告'},
            {value:135, name:'视频广告'},
            {value:1548, name:'搜索引擎'}
          ],
        }],
      }
      myChart.setOption(option)
    }
  },
  mounted() {
    this.loadEcharts();
    this.loadLine();
    this.loadpie();
  },
  created() {
    // console.log(this)
  }
}
</script>

<style scoped lang='scss'>
.echarBox{
  display: flex;
  flex-wrap: wrap;
}
</style>

<template>
    <div>
      <h1 class="top">欢迎来到图表</h1>

        <el-button>Scatter</el-button>
        <el-button type="primary">Line</el-button>
        <el-button type="success">Pie</el-button>
        <el-button type="info">Bar</el-button>
        <el-button type="warning">PictorialBar</el-button>
        <el-button type="danger">Dataset</el-button>
      <div :class="[this.$store.state.isShow ? 'loading' : '']"></div>
    </div>
</template>

<script>
import { Button, Select } from 'element-ui'
import axios from 'axios'

export default {
  name: 'function',
  components: {
    [Button.name]: Button,
    [Select.name]: Select
  },
  data () {
    return {

    }
  },
  created () {
    axios.post('/h5Gateway/customer/getCarousel', {sysCode: 'H5'})
      .then(function (response) {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  $a : 20px;
  .top{
     font-size: $a;
    text-align: center;
   }

</style>

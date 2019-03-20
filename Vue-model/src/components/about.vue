<template>
<div>
  <!--<div class="test">-->
    <!--<div class="test-con"></div>-->
    <!--<input type="text"  class="ipt" @blur="sj"/>-->

  <!--</div>-->
  <!--<div id="example-1">-->
    <!--<button @click="show = !show">-->
      <!--Toggle render-->
    <!--</button>-->
    <!--<div style="position: absolute; left: 50px;">-->
    <!--<transition name="slide"-->
              <!--:duration=5000-->
                <!--enter-active-class="animated hinge"-->

    <!--&gt;-->
      <!--<p v-if="show">yes</p>-->
    <!--</transition>-->
    <!--</div>-->

    <!--</div>-->
<div :class="[this.$store.state.isShow ? 'loading' : '']"></div>

  <button @click="getData">请求数据</button>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'about',
  data () {
    return {
      show: false,
      loading: true

    }
  },
  beforeCreate () {
    this.loading = true
  },
  created () {
    console.log(this.$store.state.products)
  },
  mounted () {
    this.show = true
    this.loading = false
  },
  methods: {
    sj () {
      window.scrollTo(100, 0)
    },
    getData () {
      axios.get('https://www.apiopen.top/journalismApi?abc=1')

        .then(res => {
          axios.get('https://www.apiopen.top/journalismApi?abc=1')
            .then(res => {
              console.log(res)// 返回请求的结果
            })
            .catch(err => {
              console.log(err)
            })
        })
        .catch(err => {
          console.log(err)
        })
    }

  }
}
</script>

<style lang="scss" scoped>
.test{
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  .test-con{
    width: 100px;
    height: 100px;
    border: 1px solid red;
  }
  .test-con:active{
    width:200px;
  }
  .ipt{
    width: 100px;
    height: 30px;
    border: 1px solid red;
  }
  .ipt:focus{
    width: 200px;
    transition: 1s;
  }
}
/*.slide-enter-to{*/
 /*animation-duration: 2.5s;*/
  /*animation-iteration-count:infinite;//定义执行的次数 transtion中的duration定义执行过程的时间*/
/*}*/
/*.slide-enter-active {*/
  /*transition: all 10s ease;*/
/*}*/
/*.slide-leave-active {*/
  /*transition: all 10s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
/*}*/
/*.slide-enter, .slide-leave-to*/
  /*!* .slide-fade-leave-active for below version 2.1.8 *! {*/
  /*transform: translateX(10px);*/
  /*opacity: 0;*/
/*}*/

</style>

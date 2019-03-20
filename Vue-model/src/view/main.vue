<template>
<div>
    <ul class="main">
      <li v-for="(item,index) in list" @click="active(item,index)" :class="index==num?'actives':''" :key="index" >
        {{item.item}}
      </li>
    </ul>
    <router-view/>
</div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      list: [
        {item: '首页'},
        {item: '组件'},
        {item: '图表'},
        {item: '我的 '}
      ],
      num: 0
    }
  },
  created () {
    switch (this.$route.name) {
      case 'index':
        this.num = 0
        break
      case 'component':
        this.num = 1
        break
      case 'function':
        this.num = 2
        break
      case 'my':
        this.num = 3
        break
      case 'about':
        this.num = 3
        break
    }
  },
  methods: {
    active (item, index) {
      this.num = index
      switch (index) {
        case 0:
          this.$router.push({
            path: 'index'

          })
          break
        case 1:
          this.$router.push({
            path: 'component'
          })
          break
        case 2:
          this.$router.push({
            path: 'function'
          })
          break
        case 3:
          this.$router.push({
            path: 'my'
          })
          break
      }
    }

  }
}
</script>

<style scoped>
  .main {
    width: 100%;
    display: flex;
    position: fixed;
    z-index: 1000;
    bottom: 0;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
   .main li {
    flex: 1;
    padding: 4px 0;
     list-style-type: none;
     background: #42b983;
     color: white;
  }
  .actives {
    color: darkblue !important;
  }

</style>

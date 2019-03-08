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
        {item: '功能'},
        {item: '我的 '}
      ],
      num: 0
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

<style lang="scss" scoped>
  .main {
    width: 100%;
    display: flex;
    position: fixed;
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

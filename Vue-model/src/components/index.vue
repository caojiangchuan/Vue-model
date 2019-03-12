<template>
  <div>
   <ul>
     <li v-for="(item,index) in list" @click="active(item,index)" :class="index==num?'actives':''" :key="index">
         {{item.item}}
     </li>
   </ul>
    <br/>

    <br/>

    <br/>

    <br/>

  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      list: [
        {item: 1},
        {item: 1},
        {item: 1},
        {item: 1}
      ],
      num: 0
    }
  },
  created () {
    // alert(this.$route.params.id)
  },
  methods: {
    active (item, index) {
      console.log(item, index)
      this.num = index
      this.$router.push({
        path: `/active/${index}`
      })
    }
  }
}
</script>

<style scoped>
.actives{
  color: red;
}
</style>

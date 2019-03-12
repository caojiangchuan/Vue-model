<template>
<div>
  <span @click="giveFather">sonTwo</span>
</div>
</template>

<script>
export default {
  name: 'sonTwo',
  methods: {
    giveFather () {
      this.$emit('givefather', '我是传递的信息')
    }
  }
}
</script>

<style scoped>

</style>

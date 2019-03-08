<template>
    <div>
     <div @click="about">关于我们</div>
    </div>
</template>

<script>
export default {
  name: 'my',
  methods: {
    about () {
      this.$router.push({
        path: 'about'
      })
    }
  }
}
</script>

<style scoped>

</style>

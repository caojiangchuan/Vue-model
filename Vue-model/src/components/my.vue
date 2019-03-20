<template>
    <div>
     <div @click="about">关于我们</div>
      {{abc}}
    </div>
</template>

<script>
export default {
  name: 'my',
  data () {
    return {

    }
  },
  created () {
    this.$store.dispatch('getdata2')
  },
  methods: {
    about () {
      this.$router.push({
        path: 'about'
      })
    }
  },
  computed: {
    abc () {
      return this.$store.state.List
    }
  }
}
</script>

<style scoped>

</style>

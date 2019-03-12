<template>
    <div>
      <SonOne :getMessage="fatherGetMessage"></SonOne>
      <SonTwo @givefather="getsonchange"></SonTwo>
    </div>
</template>

<script>
import SonOne from './component-son/sonOne'
import SonTwo from './component-son/sonTwo'

export default {
  components: {SonOne, SonTwo},
  name: 'component',
  data () {
    return {
      fatherGetMessage: '父组件传给sonone的信息'
    }
  },
  methods: {
    getsonchange (a) {
      alert(a)
    }
  }
}
</script>

<style scoped>

</style>

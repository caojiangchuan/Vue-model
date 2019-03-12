<template>
<div>active</div>
</template>

<script>
export default {
  name: 'active',
  created () {
    console.log(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>

<template>
  <div id="app">
    <transition      name="slide"
                     enter-active-class="animated fadeIn"
                     leave-active-class="animated fadeOut"
                     :duration="{ enter: 1000, leave: 3000 }"
    >
      <div  v-if="this.$store.state.show" class="tip">{{this.$store.state.message}} </div>

    </transition>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.slide-enter-to {
  animation-duration: 1s;

}
.slide-leave-to {

  animation-duration:1s;
  /*animation-iteration-count:infinite;*/
}
.tip{
  position: absolute;
  z-index: 100000;
  font-size: 14px;
  background: rgba(0,0,0,0.8);
  text-align: center;
  padding: 10px 20px;
  color: white;
  border-radius: 20px;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);

}
</style>

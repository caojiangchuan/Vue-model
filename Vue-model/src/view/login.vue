<template>
  <div class="login">
   <h1>欢迎来到这里</h1>
   <div class="zh"><input type="text" placeholder="请输入账号" v-model="name"></div>
    <div class="psd"><input type="password" placeholder="请输入密码 " v-model="password" ></div>
    <div class="btn" @click="btn">登录</div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      name: '',
      password: ''
    }
  },

  methods: {
    btn () {
      if (this.name === '') {
        alert('账号不能为空')
      } else if (this.name !== '15606926118') {
        alert('账号错误')
      } else if (this.password === '') {
        alert('密码不能为空')
      } else if (this.password !== '666666') {
        alert('密码错误')
      } else {
        this.$router.push({
          path: '/main'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .login{
    width: 100%;
    height: 100%;
    position: absolute;
    background:antiquewhite;
  h1{
    font-size: 20px;
    font-weight: 100;
    text-align: center;
    margin-top: 20px;
    color:slategray;
  }
  }
  .news{
    width: 100%;
    height: 110%;
  }

  .zh,.psd{
    width: 200px;
    height: 30px;
    border: 1px solid lightblue;
    margin: 0px  auto;
    margin-top: 150px ;
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    border-radius: 7px;
  }
  .psd{
    margin-top: 20px ;
  }
  input{
    width: 100%;
    height: 100%;
    border: 0px;
    background: none;
    outline: none;
    text-indent: 10px;
  }
.btn{
  margin: 30px auto;
  width: 100px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background: gray;
}
</style>

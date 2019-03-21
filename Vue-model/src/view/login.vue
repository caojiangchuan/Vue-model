<template>
  <div class="login">
   <h1>欢迎来到这里</h1>
    <el-alert

      title="温馨提示,请注意账户安全"
      type="warning"
      show-icon>
    </el-alert>
   <div class="zh"><input type="text" placeholder="请输入账号" v-model="name"></div>
    <div class="psd"><input type="password" placeholder="请输入密码 " v-model="password" ></div>
    <div class="btn" @click="btn">登录</div>

  </div>
</template>

<script>
import { Alert } from 'element-ui'

export default {
  name: 'login',

  components: {
    [Alert.name]: Alert
  },
  data () {
    return {
      show: false,
      name: '',
      password: '',
      users: {
        name: '15606926118',
        password: '666666'
      }
    }
  },

  methods: {
    hi () {
      this.show = !this.show
    },
    btn () {
      if (this.name === '') {
        this.$store.dispatch('alertTip2', '账号不能为空')
      } else if (this.name !== this.users.name) {
        this.$store.dispatch('alertTip2', '账号输入错误')
      } else if (this.password === '') {
        this.$store.dispatch('alertTip2', '密码不能为空')
      } else if (this.password !== this.users.password) {
        this.$store.dispatch('alertTip2', '密码输入错误')
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

  }
  h1{
    font-size: 20px;
    font-weight: 100;
    text-align: center;
    margin-top: 20px;
    color:slategray;
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

  .tip{

   position: absolute;
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

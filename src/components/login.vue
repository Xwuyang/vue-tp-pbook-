<template>
  <div class="books">
    <div class="header">
      <span>PBOOKS</span>
    </div>
    <div class="box">
      <div class="f-div">
        <i class="icon iconfont icon-1"></i>
        <input class="f-input" v-model="mobile" type="text" placeholder="请输入您的手机号"/>
      </div>
      <div class="f-div">
        <i class="icon iconfont icon-mima1"></i>
        <input class="f-input" v-model="pass" type="password" placeholder="请输入您的密码"/>
      </div>
      <!--<div class="f-div">
        <i class="icon iconfont icon-sousuo"></i>
        <input style="height: 1.5rem;"  type="text" placeholder="请输入您的验证码"/>
        <button class="g-code">获取验证码</button>
      </div>-->
      <div class="f-login">
        <button class="login" @click="dologin()">登录</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'App',
    data () {
      return {
        mobile: '',
        pass: ''
      }
    },
    created () {
    },
    methods: {
      dologin () {
        if(!this.mobile){
          alert('手机号不能为空');
          return false;
        }
        if(!this.pass){
          alert('密码不能为空');
          return false;
        }
        var parmes = {};
        parmes['mobile'] = this.mobile;
        parmes['pass'] = this.pass;
        this.$http.post('apis/api/pbook/doLogin',parmes).then(function(res){
          var json=res.body;
          if(json.code == 200){
            this.$router.push('shelf');
          }else{
            alert(json.msg);
          }
        },function(res){
          alert(res.status)
        });
        //var sta = this.ajax('doLogin','POST',parmes);console.log(2);
      }
    }
  }
</script>

<style>
  body{
    margin: auto;
  }
  .books{
    position: fixed;
    z-index: 10002;
    height:100%;
    background: #fff;
    width: 100%;
  }
  .header{
    width: 100%;
    position: fixed;
    top: 0;
    margin: auto;
    height: 2.5rem;
    background-color: darkred;
    z-index: 10000;
  }
  .header span{
    float: left;
    display: block;
    color: #ffffff;
    font-size: 1rem;
    line-height: 2.5rem;
    margin-left: 1rem;
  }
  .header .icon{
    color: #ffffff;
    font-size: 1rem;
    float: right;
    line-height: 2.5rem;
    margin-right: 1rem;
  }
  .box{
    margin-top: 2.5rem;
    margin-bottom: 2.25rem;
  }
  .f-div{
    padding-top: 1rem;
    padding-left: 10%;
    padding-right: 10%;
  }
  .f-div .icon{
    position: fixed;
    font-size: 1rem;
    margin-left: 0.1rem;
    line-height: 1.8rem;
  }
  .f-div .f-input{
    padding-left: 1.5rem;
    height: 1.5rem;
    width: 88%;
  }
  .f-div .g-code{
    height: 1.5rem;
  }
  .f-login{
    padding-top: 1rem;
  }
  .f-login .login{
    display: block;
    height: 2rem;
    margin: auto;
    width: 60%;
  }
</style>

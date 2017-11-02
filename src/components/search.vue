<template>
  <transition name="right">
  <div class="books">
    <div class="header">
      <div class="search-div">
        <i class="icon iconfont icon-iconfanhui" @click="getback()"></i>
      </div>
      <div class="search-div2">
        <input class="f-input" v-model="name" type="text" placeholder="请输入书名或作者名"/>
      </div>
      <div class="search-div">
        <i class="icon iconfont icon-sousuo"></i>
      </div>
    </div>
    <div class="box">
    </div>
  </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'App',
    data () {
      return {
        name: '',
        pass: ''
      }
    },
    created () {
    },
    methods: {
      getback(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
  .books{
    /*position: relative;*/
    transform: translate3D(0,0,0);
    position: fixed;
    top: 0;
    left:0;
    z-index: 10002;
    height:100%;
    background: #fff;
    width: 100%;
  }
  .right-enter-active{
    transition: transform .5s
  }
  .right-enter /* .fade-leave-active in below version 2.1.8 */ {
    transform: translate3D(100%,0,0);
  }
  .right-leave-active{
    transform: translate3D(0,0,0);
  }
  .right-leave-to{
    transition: transform .5s
  }
  body{
    margin: auto;
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
  .header .icon{
    color: #ffffff;
    font-size: 1rem;
    float: right;
    line-height: 2.5rem;
    margin-right: 1rem;
  }
  .search-div{
    float: left;
    width: 15%;
  }
  .search-div2{
    float: left;
    width: 70%;
  }
  .search-div2 input{
    background-color: darkred;
    padding-top: 0.3rem;
    padding-left: 5%;
    display: block;
    height: 2rem;
    color: #fff;
    width: 95%;
    border-bottom: 1px solid darkred;
    border-top: 1px solid darkred;
    border-left: 1px solid #BBBBBB;
    border-right: 1px solid #BBBBBB;
  }
  ::-webkit-input-placeholder { color:#eee; }
  ::-moz-placeholder { color:#eee; } /* firefox 19+ */
  :-ms-input-placeholder { color:#eee; } /* ie */
  input:-moz-placeholder { color:#eee; }
  .box{
    margin-top: 2.5rem;
    margin-bottom: 2.25rem;
  }
</style>

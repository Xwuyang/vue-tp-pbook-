<template>
  <!-- <transition name="right"> -->
  <div class="books">
    <div class="header">
      <div class="search-div">
        <i class="icon iconfont icon-iconfanhui" @click="getback()"></i>
      </div>
      <div class="search-div2">
        <input class="f-input" v-model="name" type="text" placeholder="请输入书名或作者名"/>
      </div>
      <div class="search-div" @click="getsearchList()">
        <i class="icon iconfont icon-sousuo"></i>
      </div>
    </div>
    <div class="box">
      <div class="pbbood" v-for="li in blist">
        <router-link :to="{path:'./bookinfo',query:{bid:li.id}}">
        <img v-bind:src="li.img">
          <div class="pbintro">
            <span class="pbtitle">{{li.name}}</span>
            <span class="pbgx">{{li.writer}}</span>
            <!--<div class="red-point"></div>-->
          </div>
        </router-link>
      </div>
    </div>
    <vue-loading v-show="isShowLoading" type="beat" color="#d9544e" style="position: fixed;top: 50%;left: 50%; transform: translate3d(-50%,-50%,0)" :size="{ width: '50px', height: '50px' }"></vue-loading>
  </div>
  <!-- </transition> -->
</template>

<script type="text/ecmascript-6">
import vueLoading from 'vue-loading-template'
  export default {
    name: 'App',
    data () {
      return {
        name: '',
        blist: [],
        isShowLoading:false
      }
    },
    created () {
    },
    components: {
      vueLoading
    },
    methods: {
      getback () {
        this.$router.go(-1)
      },
      getsearchList () {
        if (!this.name) {
          return false
        }
        this.isShowLoading = true;
        this.$http.post(this.url+'index.php/api/pbook/getSearchList', {name: this.name}).then(function (res) {
          this.isShowLoading = false;
          var json = res.body.data
          this.blist = json
        }, function (res) {
          alert(res.status)
        })
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
  /*.right-enter-active{
    transition: transform .5s
  }
  .right-enter !* .fade-leave-active in below version 2.1.8 *! {
    transform: translate3D(100%,0,0);
  }
  .right-leave-active{
    transform: translate3D(0,0,0);
  }
  .right-leave-to{
    transition: transform .5s
  }*/
  .fade-enter-active {
    transition: opacity .5s
  }
  .fade-enter/* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
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
  .pbbood{
    height: 3.5rem;
    padding: 0.25rem 1%;
  }
  .pbbood img{
    width: 13%;
    height:80%;
    float: left;
    padding: 0.25rem;
    line-height: 3.5rem;
  }
  .pbbood .pbintro{
    height: 3.5rem;
    width: 70%;
    float: right;
    border-bottom: 1px solid #ddd;
    padding-right: 12%;
  }
  .pbintro span{
    display: block;
    float: left;
    width: 80%;
    font-family:"黑体";
  }
  .pbtitle{
    margin-top: 0.5rem;
    font-size: 0.76rem;
  }
  .pbgx{
    margin-top: 0.25rem;
    font-size: 0.5rem;
    color: burlywood;
  }
  .red-point{
    float: right;
    margin-right: 0.5rem;
    line-height: 3rem;
  }

  .red-point::before{
    content: " ";
    border: 3px solid red;/*设置红色*/
    border-radius:3px;/*设置圆角*/
    position: absolute;
    z-index: 1000;
  }
</style>

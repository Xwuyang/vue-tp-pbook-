<template>
  <!-- <transition name="fade"> -->
  <div>
    <div class="header">
      <span>PBOOKS</span>
      <router-link :to="{path:'./search'}">
      <i class="icon iconfont icon-sousuo"></i>
      </router-link>
    </div>
    <div class="box">
      <pull-to :top-load-method="refresh">
        <div class="pbbood" v-for="li in blist">
          <router-link :to="{path:'./bookinfo',query:{bid:li.bid}}">
          <img v-bind:src="li.img">
          <div class="pbintro">
            <span class="pbtitle">{{li.name}}</span>
            <span class="pbgx">{{li.ntime}}</span>
            <div class="red-point" v-if="li.isup == 1"></div>
          </div>
          </router-link>
        </div>
      </pull-to>
    </div>
    <vue-loading v-show="isShowLoading" type="beat" color="#d9544e" style="position: fixed;top: 50%;left: 50%; transform: translate3d(-50%,-50%,0)" :size="{ width: '50px', height: '50px' }"></vue-loading>
  </div>
  <!-- </transition> -->
</template>
<script type="text/ecmascript-6">
  import PullTo from 'vue-pull-to'
  import vueLoading from 'vue-loading-template'
  export default {
    name: 'App',
    data () {
      return {
        show: true,
        blist : [],
        isShowLoading:false
      }
    },
    created () {
      //var userinfo = this.ajax('getUserInfo');
      this.$http.post(this.url+'index.php/api/pbook/getUserInfo').then(function(res){
        var userinfo=res.body;
        if(userinfo == 0){
          this.$router.push('login');
        }else{
          this.getlist();
        }
      },function(res){
        alert(res.status)
      });
    },
    components: {
      PullTo,
      vueLoading
    },
    methods: {
      refresh(loaded) {
        setTimeout(() => {
          this.getlist();
          loaded('done');
        }, 1000);
      },
      getlist(){
        this.isShowLoading = true;
        this.$http.post(this.url+'index.php/api/pbook/getBookList').then(function(res){
          this.isShowLoading = false;
          var json=res.body.data;
          this.blist = json;
        },function(res){
          alert(res.status)
        });
      }
    }
  }
</script>
<style scoped>
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
    left: 0;
    margin: auto;
    height: 2.5rem;
    background-color: darkred;
    z-index: 10000;
    height: 3rem;
  }
  .header span{
    float: left;
    display: block;
    color: #ffffff;
    font-size: 1rem;
    line-height: 3rem;
    margin-left: 1rem;
  }
  .header .icon{
    color: #ffffff;
    font-size: 1rem;
    float: right;
    line-height: 3rem;
    margin-right: 1rem;
  }
  .box{
    margin-top: 3rem;
    margin-bottom: 2.25rem;
  }
  .pbbood{
    height: 3.5rem;
    padding: 0.25rem 1%;
  }
  .pbbood img{
    width: 13%;
    height:90%;
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
  /* 设置滚动条的样式 */
  ::-webkit-scrollbar {
    width: 12px;
  }
  /* 滚动槽 */
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
  }
  /* 滚动条滑块 */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0,0,0,0.1);
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: darkred;
  }
  /*
  跳转动画
   */
</style>

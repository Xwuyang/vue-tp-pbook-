<template>
  <div>
　　<router-view></router-view>
    <div class="row footer">
      <div class="tab-item" v-for="item in links">
        <a @click="$goRoute(item.route)" class="col">
          <i class="icon iconfont" v-bind:class="item.icon"></i>
          <span class="nd-p">{{item.text}}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        title: '这里是第一个页面',
        links: [
          {
            text: '书架',
            route: '/shelf',
            icon: 'icon-yg-shujia'
          },
          {
            text: '书库',
            route: '/stacks',
            icon: 'icon-tushuziliaoku'
          },
          {
            text: '我的',
            route: '/userinfo',
            icon: 'icon-wode'
          }
        ]
      }
    },
    components: {}
  }
</script>
<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>
<style>
  html{
    background: #f3f3f7;
  }
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10001;
    width: 100%;
    height: 53px;
    border-top: 1px solid #e2e2e2;
    background-color: #fff;
    padding-top: 2px;
  }
  .row{
    display: flex;
  }
  .tab-item{
    flex: 1;
    display: block;
    text-align: center;
  }
  .footer .col {
    display: block;
    text-align: center;
    padding-top: 4px;
    color: #999
  }
  .footer .nd-p {
    padding-top: 4px
  }
  .footer .icon{
    font-size: 26px;
    color: #565e6c;
  }
  .footer .tab-item span {
    font-size: 12px;
    display: block;
    margin-bottom: 2px;
    color: #8c8c8c;
  }
  .footer .router-link-active.col .icon:before, .footer .router-link-active.col span {
    color: #4a90e2;
  }
</style>

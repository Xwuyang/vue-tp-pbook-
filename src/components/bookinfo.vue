<template>
  <div class="books">
    <div class="hleft" @click="pageleft()"></div>
    <div class="hcenter" @click="setting()"></div>
    <div class="hright" @click="pageright()"></div>
    <div class="content" v-html="detail">
    </div>
    <div class="pages">
      <span class="zjm">{{binfo.chapter}} {{binfo.title}}</span>
      <span class="ym">{{pages}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'App',
    data () {
      return {
        binfo : [],
        detail : '',
        pages : ''
      }
    },
    created () {
      this.bodys(this.$route.query.bid);
    },
    methods: {
      pageleft (val, label) {
        //上一页
        if(this.binfo['page'] == 1){
          this.bodys(this.binfo['upcha']);
        }else{
          this.binfo['page'] = this.binfo['page']-1;
          this.detail = this.binfo['binfo'][this.binfo['page']];
          this.pages = this.binfo['page']+'/'+this.binfo['count'];
        }
      },
      pageright (val, label) {
        //下一页
        if(this.binfo['count'] == this.binfo['page']){
          this.bodys(this.binfo['nextcha']);
        }else{
          this.binfo['page'] = this.binfo['page']+1;
          this.detail = this.binfo['binfo'][this.binfo['page']];
          this.pages = this.binfo['page']+'/'+this.binfo['count'];
        }
      },
      setting (val, label) {
        //控制字体从参数
      },
      bodys (cid) {
        this.$http.jsonp('http://cs.com/data.php?act=getBookInfo&cid='+cid,{ credentials: true }).then((response) => {
          var json=response.body;
          this.binfo = json;
          this.detail = this.binfo['binfo'][1];
          this.pages = this.binfo['page']+'/'+this.binfo['count'];
        });
      }
    }
  }
</script>

<style scoped>
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
  .content{
    margin: 2%;
    height:90%;
    width: 96%;
  }
  .pages{
    position: fixed;
    bottom: 0;
    width: 96%;
    margin: 5% 2% 2% 2%;
    font-size: 0.7rem;
  }
  .pages .zjm{
    float: left;
  }
  .pages .ym{
    float: right;
  }
  .hcenter{
    height:100%;
    width: 30%;
    left: 33%;
    position: fixed;
  }
  .hleft{
    height:100%;
    width: 33%;
    left: 0;
    position: fixed;
  }
  .hright{
    height:100%;
    width: 33%;
    right: 0;
    position: fixed;
  }
</style>

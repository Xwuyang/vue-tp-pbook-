import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource);
const colorList = 'http://'
Vue.config.productionTip = false

// 路由跳转
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}
Vue.prototype.ajax = function (url,type,data) {
  type = type?type:'POST';
  data = data?data:{};
  if(type == 'POST'){
    this.$http.post('apis/api/pbook/' + url,data).then(function(res){
      var json=res.body;
      console.log(1);
      return json;
    },function(res){
      alert(res.status)
    });
  }else{
    this.$http.get('apis/api/pbook/' + url,data).then(function(res){
      var json=res.body;
      return json;
    },function(res){
      alert(res.status)
    });
  }
  /*this.$http.jsonp('http://book.com/api/pbook/'+url,{params:data,method:type , credentials: true }).then((response) => {
    var json=response.body;
    return json;
  });*/
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

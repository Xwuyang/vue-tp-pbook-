<template>
  <div class="hx books" v-bind:style="bgstyle">
      <section v-show="ischapt" class="rp_sidebar" id="rp_sidebar" v-bind:style="chaptstyle">
        <div class="rp_ml">
            <div class="rp_bookname" v-html="taptitle">
                
            </div>
            <div class="rp_bookML">
                目录
            </div>
            <input type="hidden" value="2" id="chapterSort">
            <input type="hidden" value="460085328" id="chapterid">
            <input type="hidden" value="460085325" id="bookid">
            <input type="hidden" value="1.1" id="dqpage">
            <input type="hidden" value="3" id="page">
            <input type="hidden" value="1.1" id="slpage">
            <input type="hidden" value="50" id="sunpage">
            <div class="swiper-container">
                <div class="swiper-wrapper" style="padding-top: 0px; padding-bottom: 0px; transform: translate3d(0px, -51px, 0px); transition-duration: 0s; width: 326px; height: 4081px;">
                    <div v-for="(item,index) in chaptlist" class="swiper-slide swiper-slide-visible" >
                        <a @click="getOtherChapter(item.id)" :class="{'curr':item.id==tap,'t':item.id!=tap}">
                            {{item.title}}
                            <em class="f_mf">
                            </em>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <div class="swiper-slide">
                            <span class="orange">
                                还有精彩章节正在加载中...
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <i @click="outChapter()">
            &nbsp;
        </i>
    </section>
    <div class="rp_read">
        <section class="rp_head " v-bind:style="bgstyle">
            <span class="rp_pageinfo">
                1/9
            </span>
            <span id="curChapterTitle" class="rp_readname" v-html="taptitle">
            </span>
        </section>
        <!-- 书名 -->
        <div class="read_content" id="read_content" style="margin-top: 30px; height: 558px;">
            <div class="read_text" id="read_text" style="font-size: 18px; line-height: 29px; height: 558px;" v-html="detail">
            </div>
        </div>
        <div class="clear">
        </div>
    </div>
    <section class="rp_tool_top" style="transition: transform 400ms ease; transform: translate3d(0px, 0px, 0px);">
        <a class="rp_link_back" @click="getback()">
            <i class="icon iconfont icon-iconfanhui" ></i>
        </a>
        <!-- <a href="javascript:;" class="bname">低调术士</a> -->
        <a href="" title="" class="bookDetail">
        </a>
        <a href="javascript:void(0)" class="rp_link_more">
            <span class="img">
            </span>
        </a>
        <a href="" class="rp_link_home">
        </a>
    </section>
    <nav class="rp_tool_bottom" style="transition: transform 400ms ease; transform: translate3d(0px, 0px, 0px);">
        <input type="hidden" id="preChaterUrl" value="/r/l/r.jsp?ln=127_478256_97694945_8_L2L7&amp;at=1&amp;nid=590001212&amp;purl=%2Fr%2Fl%2Fr.jsp%3Fat%3D1%26nid%3D590001212%26bid%3D460085325%26readmode%3D2%26cid%3D460085328&amp;bid=460085325&amp;vt=3&amp;cid=460085327&amp;readmode=2">
        <input type="hidden" id="nChapterUrl" value="/r/l/r.jsp?ln=127_478256_97694945_8_L2L7&amp;at=1&amp;nid=590001212&amp;purl=%2Fr%2Fl%2Fr.jsp%3Fat%3D1%26nid%3D590001212%26bid%3D460085325%26readmode%3D2%26cid%3D460085328&amp;bid=460085325&amp;vt=3&amp;cid=460085329&amp;readmode=2&amp;bid=460085325&amp;vt=3">
        <input type="hidden" id="nextPageUrl" value="/r/l/r.jsp?ln=127_478256_97694945_8_L2L7&amp;at=1&amp;nid=590001212&amp;purl=%2Fr%2Fl%2Fr.jsp%3Fat%3D1%26nid%3D590001212%26bid%3D460085325%26readmode%3D2%26cid%3D460085328&amp;bid=460085325&amp;vt=3&amp;cid=460085329&amp;readmode=2&amp;bid=460085325&amp;vt=3">
        <a @click="getChapter()" class="rp_mulu dragBar">
            <span class="img">
            </span>
            目录
        </a>
        <a href="javascript:void(0)" class="rp_link_bthy ">
            <span class="img">
            </span>
            夜间
        </a>
        <a href="javascript:void(0)" class="rp_link_bg">
            <span class="img">
            </span>
            设置
        </a>
        <!-- <a href="http://wap.cmread.com/r/p/clientdlwap.jsp?ln=127_478256_97694945_8_L2L7&amp;vt=3&amp;dataSrcId=97682862&amp;sqId=ml"
        class="rp_link_ml">
            <span class="img">
            </span>
            客户端
        </a>
        <a href="http://wap.cmread.com/r/p/plMoreV1_1.jsp?ln=127_478256_97682851_8_L2L7L1&amp;vt=3&amp;vt=3&amp;bid=460085325"
        class="rp_link_pl" title="评论">
            <span class="img">
            </span>
            评论
        </a> -->
    </nav>
    <section class="rp_page_action" id="rp_action">
        <article class="rp_left" style="-webkit-user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
        </article>
        <article class="rp_center" style="-webkit-user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
        </article>
        <article class="rp_right" style="-webkit-user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
        </article>
    </section>
    <vue-loading v-show="isShowLoading" type="beat" color="#d9544e" style="position: fixed;top: 50%;left: 50%; transform: translate3d(-50%,-50%,0)" :size="{ width: '50px', height: '50px' }"></vue-loading>
  </div>
</template>
<script type="text/ecmascript-6">
import vueLoading from 'vue-loading-template'
  export default {
    name: 'App',
    data () {
      return {
        binfo : [],
        detail : '',
        pages : '',
        tap :'',
        i :'',
        preppage : '',
        prepsta : 1,
        prepsta_p : 1,
        nextsta : 1,
        nextsta_p : 1,
        cid : '',
        taptitle:'',
        isShowLoading:false,
        bgstyle:'background: #f7efe6;color: #3a3d3a',
        ischapt:false,
        chaptstyle:'width: 360px; height: 588px; transition: transform 400ms ease; transform: translate3d(0px, 0px, 0px);',
        chaptlist:[],
        chaptclass:'swiper-slide swiper-slide-visible',
        reads: ''
      }
    },
    created () {
    },
    components: {
      vueLoading
    },
    mounted () {
        this.cid = this.$route.query.bid
        this.bodys();
    },
    methods: {
      getback () {
        this.$router.go(-1)
      },
      getOtherChapter (tid)　{
          var ty = 0;
          if(tid>=this.tap){
              ty = 1;
          }
          this.tap = tid;
          this.bodys(ty,this.reads);
          this.transUtil(".rp_sidebar", 0, 0, 0);
            $(".rp_s_back").fadeOut(400);
            this.chaptstyle = 'box-flex: 1;background: rgba(247,239,230,1);height: 100%;padding: 18px 17px 10px;box-shadow: 2px 0 5px rgba(0,0,0,.25);z-index: 201;box-sizing: border-box;overflow: hidden;'
            this.ischapt = false;
      },
      getChapter () {//获取章节
        if(!this.chaptlist.length){
            this.isShowLoading = true;
            this.$http.post(this.url+'index.php/api/pbook/getBookChapter', { cid: this.cid}).then(function (res) {
                this.isShowLoading = false;
                var json = res.body.data
                this.chaptlist = json;
                if (this.ischapt == false) {
                    this.transUtil(".rp_sidebar", 400, 0, 0);
                    $(".rp_s_back").fadeOut(400);
                    this.chaptstyle = 'box-flex: 1;background: rgba(247,239,230,1);height: 100%;padding: 18px 17px 10px;box-shadow: 2px 0 5px rgba(0,0,0,.25);z-index: 201;box-sizing: border-box;overflow: hidden;'
                    this.ischapt = true;
                }
            }, function (res) {
                alert(res.status)
            })
        }else{
            if (this.ischapt == false) {
                this.transUtil(".rp_sidebar", 400, 0, 0);
                $(".rp_s_back").fadeOut(400);
                this.chaptstyle = 'box-flex: 1;background: rgba(247,239,230,1);height: 100%;padding: 18px 17px 10px;box-shadow: 2px 0 5px rgba(0,0,0,.25);z-index: 201;box-sizing: border-box;overflow: hidden;'
                this.ischapt = true;
            }
        }
      },
      outChapter () {//收缩章节
        this.transUtil(".rp_sidebar", 0, 0, 0);
        $(".rp_s_back").fadeOut(400);
        this.chaptstyle = 'box-flex: 1;background: rgba(247,239,230,1);height: 100%;padding: 18px 17px 10px;box-shadow: 2px 0 5px rgba(0,0,0,.25);z-index: 201;box-sizing: border-box;overflow: hidden;'
        this.ischapt = false;
      },
      setting (val, label) {
        //控制字体从参数
      },
      setNewTap (tap){
        this.$http.post(this.url+'index.php/api/pbook/setNewTap', { cid: this.cid, tap:this.tap}).then(function (res) {
            
          }, function (res) {
            alert(res.status)
          })
      },
      gettap (ty,_read){
        if(ty == 1){
          this.i++;
        }else{
          this.i--;
        }
        if(this.binfo[this.i]){
          this.detail = this.binfo[this.i]['book_detail']
          this.taptitle = this.binfo[this.i]['title']
          this.tap = this.binfo[this.i]['id']
          this.setNewTap()
            if(this.binfo[this.i-1]){
                this.prepsta_p = 1
            }else{
                this.prepsta_p = 0
            }
            if(this.binfo[this.i+1]){
                this.nextsta_p = 1
            }else{
                this.nextsta_p = 0
            }//console.log(this.nextsta);console.log(this.prepsta);
          var _this = this;
          if(ty == 2){
                    setTimeout(function(){
                _read.totalPage2();
            _read.page = _read.totalPage;
             _read.totalPage2();
                    },0);
            
          }else{
              setTimeout(function(){
                  $('.read_text').offset({left:0});
                _read.page = 1;
                _read.totalPage2();
                },0);
          }
        }else{
            if(ty == 2){
                if(this.prepsta == 0){
                    alert('这已经是第一章了，前面没有了');return false;
                }
            }else{
                if(this.nextsta == 0){
                    alert('这已经是最后一章了，后面没有了');return false;
                }
            }
          this.bodys(ty,_read);
        }
      },
      bodys (ty,_read) {
          this.isShowLoading = true;
        if(this.tap){
          this.$http.post(this.url+'index.php/api/pbook/getNextBookInfo', { cid: this.cid, tap:this.tap ,type:ty}).then(function (res) {
              this.isShowLoading = false;
            var json = res.body.data
            if(json.length){
              this.binfo = json;
              if(ty == 2){
                 var npa = json.length-1;
                this.detail = json[npa]['book_detail']
                this.taptitle = json[npa]['title']
                this.tap = json[npa]['id']
                this.i = npa
                this.prepsta = res.body.prepsta
                this.nextsta = res.body.nextsta
                setTimeout(function(){
                _read.totalPage2();
                _read.page = _read.totalPage;
                _read.totalPage2();
                    },0);
              }else{
                this.detail = json[0]['book_detail']
                this.taptitle = json[0]['title']
                this.tap = json[0]['id']
                this.i = 0
                this.prepsta = res.body.prepsta
                if(!json[1]){
                        this.nextsta = res.body.nextsta
                    }
                    setTimeout(function(){
                        $('.read_text').offset({left:0});
                _read.page = 1;
                _read.totalPage2();
                },0);
              }
              
            }else{
              
              return false;
            }
          }, function (res) {
            alert(res.status)
          })
        }else{
            this.$http.post(this.url+'index.php/api/pbook/getBookInfo', { cid: this.cid, tap:this.tap}).then(function (res) {
                this.isShowLoading = false;
            var json = res.body.data
            if(json){
                this.binfo = json;
                this.detail = json[0]['book_detail']
                this.taptitle = json[0]['title']
                this.tap = json[0]['id']
                this.i = 0
                var _this = this;
                this.prepsta = res.body.prepsta
                if(!json[1]){
                    this.nextsta = res.body.nextsta
                }
                setTimeout(function(){
                _this.read(_this)
                },0);
            }else{
                var msg = '未找到对应书籍';
                alert(msg);
            }
            
            }, function (res) {
            alert(res.status)
            })
        }
        
      },
      transUtil(slt, duration, lenX, lenY) { //移动效果
        $(slt).css("-webkit-transition", "-webkit-transform " + duration + "ms ease");
        $(slt).css("-o-transition", "-o-transform " + duration + "ms ease");
        $(slt).css("-moz-transition", "-moz-transform " + duration + "ms ease");
        $(slt).css("-ms-transition", "-ms-transform " + duration + "ms ease");
        $(slt).css("transition", "transform " + duration + "ms ease");
        $(slt).css("-webkit-transform", "translate3d(" + lenX + "px, " + lenY + "px,0px)");
        $(slt).css("-moz-transform", "translate3d(" + lenX + "px, " + lenY + "px,0px)");
        $(slt).css("-o-transform", "translate3d(" + lenX + "px, " + lenY + "px,0px)");
        $(slt).css("-ms-transform", "translate3d(" + lenX + "px, " + lenY + "px,0px)");
        $(slt).css("transform", "translate3d(" + lenX + "px, " + lenY + "px,0px)");
    },
      read (_this){
        var read = {
            sizeNo:'',
            sizeInfo:'',
            sizeLength:'',
            headHeight:$(".rp_head").height(),
            winWidth:$(window).width(),
            winHeight:$(window).height() - this.headHeight,
            totalPage:'',
            preptotalPage:'',
            page:1,
            contentHeight:'',
            emptyLen:'',
            pageLen:'',
            mlWidth:0,
            vendor:1,
            d:'',
            c:0,
            r:1,
            p:'',
            isnight:0,
            readInit: function() {
                read.fontInit();
                read.daynightInit();
                read.bookBgInit();
                read.fontChange();
                read.bookBgChange();
                read.daynightChange();
                $("#rp_guide").live('touchstart',function(oEvent) {
                    $(this).remove();
                });
                $(".read_content").css("marginTop", this.headHeight);
                read.pageFormat();
                read.totalPage2();
                document.body.addEventListener('touchmove', function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                });
                $("#rp_action .rp_center").click(function(oEvent) {
                    if(read.vendor == 1){
                        read.transUtil2(".rp_tool_top", 400, 0, $(".rp_tool_top").height() - 1);
                        read.transUtil2(".rp_sidebar", 400, read.mlWidth, 0);
                        read.transUtil2(".rp_tool_bottom", 400, 0, "-" + $(".rp_tool_bottom").height());
                        read.vendor = 0
                    }else{
                        read.transUtil2(".rp_tool_top", 400, 0, 0);
                        read.transUtil2(".rp_sidebar", 400, 0, 0);
                        read.transUtil2(".rp_tool_bottom", 400, 0, 0);
                        read.vendor = 1
                    }
                    // this.winWidth = $(window).width();
                    // $(".rp_tool_more,.rp_shadow").fadeToggle(300);
                    // read.transUtil(".rp_tool_top", 400, 0, $(".rp_tool_top").height() - 1);
                    // read.transUtil(".rp_sidebar", 400, this.mlWidth, 0);
                    // read.transUtil(".rp_tool_bottom", 400, 0, "-" + $(".rp_tool_bottom").height());
                    // $(".rp_tool_bg,.rp_tool_other").fadeOut(300);
                    // $(".rp_link_bg").removeClass("on")
                });
                // if(this.vendor == 1){
                    
                // }else{
                //     $("#rp_action .rp_center").click(function(oEvent) {
                //         this.winWidth = $(window).width();
                //         $(" .rp_tool_more,.rp_shadow").fadeToggle(300);console.log(this.c);
                //         if (this.c == 0) {
                //             read.transUtil(".rp_tool_top", 400, 0, $(".rp_tool_top").height() - 1);
                //             read.transUtil(".rp_sidebar", 400, this.mlWidth, 0);
                //             read.transUtil(".rp_tool_bottom", 400, 0, "-" + $(".rp_tool_bottom").height());
                //             this.c = 1
                //         } else {
                //             read.transUtil(".rp_tool_top", 400, 0, 0);
                //             read.transUtil(".rp_sidebar", 400, 0, 0);
                //             read.transUtil(".rp_tool_bottom", 400, 0, 0);
                //             this.c = 0
                //         }
                //         $(".rp_tool_bg,.rp_tool_other").fadeOut(300);
                //         $(".rp_link_bg").removeClass("on")
                //     });
                // }
                $("#rp_action .rp_right").click(function(oEvent) {
                    read.moveRight();
                });
                $("#rp_action .rp_left").click(function(oEvent) {
                    read.moveLeft();
                });
                $('#rp_action').each(function() {
                    var readList = this;
                    var startX, endX, startY, endY, lockDirection;
                    readList.addEventListener('touchstart',
                        function(e) {
                            e.stopPropagation();

                            startX = endX = e.touches[0].pageX;
                            startY = endY = e.touches[0].pageY;
                            lockDirection = ''
                        },
                        false);
                    readList.addEventListener('touchmove',
                        function(e) {
                            this.c = 0;
                            e.stopPropagation();
                            if (!lockDirection || lockDirection === 'x') endX = e.changedTouches[0].pageX;
                            if (!lockDirection || lockDirection === 'y') endY = e.changedTouches[0].pageY;
                            if (!lockDirection) {
                                Math.abs(endX - startX) <= Math.abs(endY - startY) ? lockDirection = 'y' : lockDirection = 'x'
                            }
                            if (lockDirection === 'x') {
                                e.preventDefault();
                                $(" .rp_tool_more,.rp_shadow,.rp_tool_bg,.rp_tool_other").fadeOut(300);
                                read.transUtil2(".rp_tool_top", 400, 0, 0);
                                read.transUtil2(".rp_sidebar", 400, 0, 0);
                                read.transUtil2(".rp_tool_bottom", 400, 0, 0);
                                if (startX > endX) {
                                    if (this.page < this.totalPage) {
                                        if (startX - endX > 0) {
                                            if (this.r == 0) {
                                                read.transUtil(".rp_cover", 0, -(startX - endX), 0);
                                            } else {
                                                read.transUtil(".read_text", 0, -((this.page - 1) * this.winWidth) - (startX - endX), 0);
                                            }
                                        }
                                    }
                                } else if (endX > startX) {
                                    if (this.r == 1) {
                                        if (this.page > 1) {
                                            if (endX - startX > 0) {
                                                read.transUtil(".read_text", 0, -((this.page - 1) * this.winWidth) - (startX - endX), 0);
                                            }
                                        } else {
                                            if (endX - startX > 0) {
                                                read.transUtil(".rp_cover", 0, -(this.winWidth) - (startX - endX), 0);

                                            }
                                        }
                                    } else {
                                        read.preChapter('book');
                                    }
                                }
                                return
                            }
                        },
                        false);
                    readList.addEventListener('touchend', function(e) {
                            e.stopPropagation();
                            if (lockDirection === 'x') {
                                e.preventDefault();
                                if (startX > endX) {
                                    if (startX - endX > 50) {
                                        if ($(".rp_cover").size() == 0) {
                                            this.r = 1;
                                        }
                                        if (this.r == 0) {
                                            read.transUtil(".rp_cover", 400, -$(window).width(), 0);
                                            this.r = 1;
                                        } else {
                                            this.page++;
                                            read.touchRight();
                                            (this.page > this.totalPage) ? this.page = this.totalPage : this.page = this.page;
                                            $(".rp_pageinfo").html(this.page + "/" + this.totalPage);
                                        }
                                    } else {
                                        if (this.r == 0) {
                                            read.transUtil(".rp_cover", 400, 0, 0);
                                        } else {
                                            read.transUtil(".read_text", 400, -((this.page - 1) * this.winWidth), 0);
                                        }
                                    }
                                } else {
                                    if (this.page > 1) {
                                        if (endX - startX > 50) {
                                            (this.page < 1) ? this.page = 1 : this.page = this.page;
                                            this.page--;
                                            read.touchLeft();
                                            $(".rp_pageinfo").html(this.page + "/" + this.totalPage)
                                        } else {
                                            read.transUtil(".read_text", 400, -((this.page - 1) * this.winWidth), 0)
                                        }
                                    } else {
                                        if (endX - startX > 50) {
                                            read.transUtil(".rp_cover", 400, 0, 0);
                                            this.r = 0;
                                        } else {
                                            read.transUtil(".rp_cover", 400, -$(window).width(), 0);
                                            this.r = 1;
                                        }
                                    }
                                }
                            }
                        },
                        false);
                });

                $(window).resize(read.pageFormat);
                $(window).scroll(read.pageFormat)
            },
            touchTop: function() {
                var bTop = $("body").scrollTop();
                var wHeight = $(window).height();
                var bHeight = $("body").height();
                $(".rp_tool_more,.rp_shadow,.rp_tool_bg,.rp_tool_other").fadeOut(300);
                read.transUtil(".rp_tool_top", 400, 0, 0);
                read.transUtil(".rp_sidebar", 400, 0, 0);
                read.transUtil(".rp_tool_bottom", 400, 0, 0);
                this.c = 0;
                if (bTop > 0) {
                    $("body").scrollTop(bTop - (wHeight - 40))
                } else {
                    read.preChapter('book');
                }
            },
            touchBottom: function() {
                var bTop = $("body").scrollTop();
                var wHeight = $(window).height();
                var bHeight = $("body").height();
                $(".rp_tool_more,.rp_shadow,.rp_tool_bg,.rp_tool_other").fadeOut(300);
                read.transUtil(".rp_tool_top", 400, 0, 0);
                read.transUtil(".rp_sidebar", 400, 0, 0);
                read.transUtil(".rp_tool_bottom", 400, 0, 0);
                this.c = 0;
                if (bTop + wHeight < bHeight) {
                    $("body").scrollTop(bTop + (wHeight - 40));
                }

            },
            touchRight: function() {
                if (this.page < this.totalPage) {
                    read.transUtil(".read_text", 400, -((this.page - 1) * this.winWidth), 0);
                    read.transUtil(".rp_dsyp", 400, 0, 0);
                    read.totalPage2();
                } else if (this.page == this.totalPage) {
                    read.transUtil(".read_text", 400, -((this.page - 1) * this.winWidth), 0);
                    $(".rp_dsyp").show();
                    read.totalPage2();
                } else {
                    read.transUtil(".rp_dsyp", 400, 0, 0);
                    read.nextChapter();
                }
            },
            touchLeft: function() {
                read.transUtil(".rp_dsyp", 400, 0, 0); /*UESFTL-5101 sxf  20150921 wap阅读页月票、打赏、评论新增脚本 */
                if (this.page == 1) {
                    if ($(".rp_cover").size() == 0) {
                        //r = 0;
                    }
                    read.transUtil(".read_text", 400, -((this.page - 1) * this.winWidth), 0);
                } else if (this.page < 1) {
                    if ($(".rp_cover").size() > 0) {
                        //r = 0;
                        read.transUtil(".rp_cover", 400, 0, 0);
                    }
                    read.preChapter();
                } else {
                    read.transUtil(".read_text", 400, -((this.page - 1) * this.winWidth), 0);
                    $(".rp_dsyp").hide();
                }
                read.totalPage2();
            },
            moveLeft: function() {
                $(".rp_tool_more,.rp_shadow,.rp_tool_bg,.rp_tool_other").fadeOut(300);
                read.transUtil(".rp_tool_top", 400, 0, 0);
                read.transUtil(".rp_sidebar", 400, 0, 0);
                read.transUtil(".rp_tool_bottom", 400, 0, 0);
                this.c = 0;
                if (this.r == 1) {
                    this.page--;
                    read.touchLeft();
                    (this.page < 1) ? this.page = 1 : this.page = this.page;
                    $(".rp_pageinfo").html(this.page + "/" + this.totalPage);
                    this.p = this.page / this.totalPage;
                } else {
                    read.preChapter();
                }
            },
            moveRight: function() {
                $(".rp_tool_more,.rp_shadow,.rp_tool_bg,.rp_tool_other").fadeOut(300);
                read.transUtil(".rp_tool_top", 400, 0, 0);
                read.transUtil(".rp_sidebar", 400, 0, 0);
                read.transUtil(".rp_tool_bottom", 400, 0, 0);
                this.c = 0;
                if ($(".rp_cover").size() == 0) {
                    this.r = 1;
                }
                if (this.r == 0) {
                    read.transUtil(".rp_cover", 400, -$(window).width(), 0);
                    this.r = 1;
                } else {
                    this.page++;
                    read.touchRight();
                    (this.page > this.totalPage) ? this.page = this.totalPage : this.page = this.page;
                    $(".rp_pageinfo").html(this.page + "/" + this.totalPage);
                    this.p = this.page / this.totalPage;
                }
            },
            daynightInit: function() {
            },
            bookBgInit: function() {
            },
            fontInit: function() {
                //字体初始化
                this.sizeInfo = [{
                    "size": 12,
                    "lineHeight": 20
                }, {
                    "size": 14,
                    "lineHeight": 23
                }, {
                    "size": 16,
                    "lineHeight": 26
                }, {
                    "size": 18,
                    "lineHeight": 29
                }, {
                    "size": 20,
                    "lineHeight": 32
                }, {
                    "size": 22,
                    "lineHeight": 36
                }, {
                    "size": 24,
                    "lineHeight": 38
                }];
                this.sizeNo = 3;
            },
            fontChange: function() {
                this.sizeLength = this.sizeInfo.length;
                //字体放大
                $(".rp_link_fd").tap(function() {
                    this.sizeNo++;
                    if (this.sizeNo == this.sizeLength) {
                        this.sizeNo = this.sizeLength - 1;
                        read.showMessage('字体已放到最大');
                    } else {

                        if (this.sizeNo == this.sizeLength - 1) {
                            $(this).addClass('gray');
                            read.showMessage('字体已放到最大');
                        } else {
                            $(".rp_link_fd,.rp_link_sx").removeClass('gray');
                            read.showMessage('字体放大');
                        }
                        $(".read_text ").css({
                            "font-size": this.sizeInfo[this.sizeNo].size + "px",
                            "line-height": this.sizeInfo[this.sizeNo].lineHeight + "px"
                        });
                        console.log(this.sizeNo);
                        addCookie("sizeNo", this.sizeNo, 30 * 24);
                        read.totalPage2();
                    };
                });
                //字体缩小
                $(".rp_link_sx").tap(function() {
                    this.sizeNo--;
                    if (this.sizeNo < 0) {
                        this.sizeNo = 0;
                        read.showMessage('字体已缩到最小');
                    } else {

                        if (this.sizeNo == 0) {
                            $(this).addClass('gray');
                            read.showMessage('字体已缩到最小');
                        } else {
                            $(".rp_link_fd,.rp_link_sx").removeClass('gray');
                            read.showMessage('字体缩小');
                        }
                        $(".read_text ").css({
                            "font-size": this.sizeInfo[this.sizeNo].size + "px",
                            "line-height": this.sizeInfo[this.sizeNo].lineHeight + "px"
                        });
                        console.log(this.sizeNo);
                        addCookie("sizeNo", this.sizeNo, 30 * 24);
                        read.totalPage2();
                    };
                });
            },
            bookBgChange: function() {
                $(".rp_color_box a").tap(function() {
                    $(".rp_color_box a").removeClass("on");
                    $(this).addClass("on");
                    $("body").removeClass("bg_yellow bg_green bg_blue bg_white bg_black");
                    $("body").addClass($(this).attr("data-rel"));
                    addCookie("bookBg", $(this).attr("data-rel"), 30 * 24)
                });
            },
            daynightChange: function(abc) {
                $(".rp_link_bthy").tap(function() {
                    if (read.isnight == 0) {
                        _this.bgstyle='background: #181a1d;color: #6d7073';
                        $(".rp_link_bthy").html("<span class='img'></span>白天");
                        read.isnight = 1;
                    } else {
                        _this.bgstyle='background: #f7efe6;color: #3a3d3a';
                        $(".rp_link_bthy").html("<span class='img'></span>夜间");
                        read.isnight = 0;
                    }
                });
            },
            pageFormat: function() {
                $(".rp_sidebar").width($(window).width()).height($(window).height());

                this.headHeight = $(".rp_head").height();
                this.winWidth = $(window).width();
                this.winHeight = $(window).height() - this.headHeight;
                $(".read_content,.read_text").height(this.winHeight);
                $(" .rp_tool_more,.rp_shadow,.rp_tool_bg,.rp_tool_other").hide();
                read.transUtil(".rp_tool_top", 400, 0, 0);
                read.transUtil(".rp_sidebar", 400, 0, 0);
                read.transUtil(".rp_tool_bottom", 400, 0, 0);
                $(".rp_s_back").hide();
                this.d = 0;
                this.c = 0;
                if (this.p > 0) {
                    this.totalPage = Math.ceil(document.getElementById("read_text").scrollWidth / this.winWidth);/*王吉*/
                    this.page = Math.ceil(this.totalPage * p);
                    $(".rp_pageinfo").html(this.page + "/" + this.totalPage);
                    read.transUtil(".rp_cover", 400, -$(window).width(), 0);
                    read.transUtil(".read_text", 0, -((this.page - 1) * this.winWidth), 0);
                }
            },
            pageFormat2: function() {
                $(".rp_cover3").width($(window).width() - 40).height($(window).height() - 36);
                var winWidth = $(window).width();
                $(" .rp_tool_more,.rp_shadow,.rp_tool_bg,.rp_tool_other").hide();
                read.transUtil(".rp_tool_top", 400, 0, 0);
                read.transUtil(".rp_sidebar", 400, 0, 0);
                read.transUtil(".rp_tool_bottom", 400, 0, 0);
                $(".rp_s_back").hide();
                this.c = 0;
                this.d = 0;
            },
            totalPage2: function(abc) {
                this.winWidth = $(window).width();
                this.totalPage = Math.ceil(document.getElementById("read_text").scrollWidth / this.winWidth);
                _this.preppage = this.totalPage;
                if(this.page>=this.totalPage){
                    this.page=this.totalPage;
                    read.transUtil(".read_text", 400, -((this.page - 1) * this.winWidth), 0);
                }else{
                    read.transUtil(".rp_dsyp", 400, 0, 0);
                }
                $(".rp_pageinfo").html(this.page + "/" + this.totalPage);
                $('.pop').hide();
            },
            transUtil: function(slt, duration, lenX, lenY) { //移动效果
                // $(slt).css("-webkit-transition", "-webkit-transform " + duration + "ms ease");
                // $(slt).css("-o-transition", "-o-transform " + duration + "ms ease");
                // $(slt).css("-moz-transition", "-moz-transform " + duration + "ms ease");
                // $(slt).css("-ms-transition", "-ms-transform " + duration + "ms ease");
                // $(slt).css("transition", "transform " + duration + "ms ease");
                // $(slt).css("-webkit-transform", "translate3d(" + lenX + "px, " + lenY + "px,0px)");
                // $(slt).css("-moz-transform", "translate3d(" + lenX + "px, " + lenY + "px,0px)");
                // $(slt).css("-o-transform", "translate3d(" + lenX + "px, " + lenY + "px,0px)");
                // $(slt).css("-ms-transform", "translate3d(" + lenX + "px, " + lenY + "px,0px)");
                // $(slt).css("transform", "translate3d(" + lenX + "px, " + lenY + "px,0px)");
                $(slt).offset({left:lenX});
            },
            transUtil2: function(slt, duration, lenX, lenY) { //移动效果
                $(slt).css("-webkit-transition", "-webkit-transform " + duration + "ms ease");
                $(slt).css("-o-transition", "-o-transform " + duration + "ms ease");
                $(slt).css("-moz-transition", "-moz-transform " + duration + "ms ease");
                $(slt).css("-ms-transition", "-ms-transform " + duration + "ms ease");
                $(slt).css("transition", "transform " + duration + "ms ease");
                $(slt).css("-webkit-transform", "translate3d(" + lenX + "px, " + lenY + "px,0px)");
                $(slt).css("-moz-transform", "translate3d(" + lenX + "px, " + lenY + "px,0px)");
                $(slt).css("-o-transform", "translate3d(" + lenX + "px, " + lenY + "px,0px)");
                $(slt).css("-ms-transform", "translate3d(" + lenX + "px, " + lenY + "px,0px)");
                $(slt).css("transform", "translate3d(" + lenX + "px, " + lenY + "px,0px)");
            },
            preChapter: function() {
               this.preptotalPage = this.totalPage;
                   _this.gettap(2,read);
            },
            nextChapter: function() {
               _this.gettap(1,read);
            }
        }
        read.readInit();
        _this.reads = read;
      }
    }
  }
</script>
<style scoped>
  @import '/static/css/miguread2016.css';
.books{
    position: fixed;
    z-index: 10002;
    height:100%;
    width: 100%;
  }
.rp_link_back .icon{
    color: #ffffff;
    font-size: 1.5rem;
    float: left;
    line-height: 50px;
    margin-left: 0.5rem;
}
</style>

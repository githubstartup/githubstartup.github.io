(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-myself-myBank-myBank"],{"06f7":function(t,a,n){var i=n("e512");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=n("4f06").default;e("694148c6",i,!0,{sourceMap:!1,shadowMode:!1})},"0875":function(t,a,n){"use strict";var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"myBank"},[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.bankListMbox,expression:"bankListMbox==true"}],staticClass:"bank-list-Mbox"},t._l(t.list,function(a,i){return n("v-uni-view",{key:i,staticClass:"bank-list-box",on:{click:function(n){n=t.$handleEvent(n),t.getchangeCars(a,i)}}},[n("v-uni-view",{staticStyle:{"padding-top":"25upx"}},[n("v-uni-view",{class:i%2?"bank-list banckgroundtow":"bank-list banckgroundone"},[n("v-uni-view",{staticClass:"bank-list-text"},[n("v-uni-text",[t._v(t._s(a.accountName||a.companyName||a.subordinate))])],1),n("v-uni-view",{staticClass:"bank-list-img"},[n("v-uni-image",{attrs:{src:"../../../static/images/bankchip.png"}})],1),n("v-uni-view",{staticClass:"bank-list-numb uni-flex uni-row"},[t._l(t.roudlist2,function(a,i){return n("v-uni-view",{key:i,staticClass:"nubertext uni-flex uni-row",staticStyle:{"-webkit-flex":"1",flex:"1"}},t._l(t.roudlist,function(t,a){return n("v-uni-view",{key:a,staticClass:"bgroud"})}),1)}),n("v-uni-view",{staticClass:"nubertext",staticStyle:{width:"120upx"}},[t._v(t._s(a.number))])],2)],1)],1)],1)}),1),n("v-uni-view",{staticClass:"bank-btn uni-flex uni-row",on:{click:function(a){a=t.$handleEvent(a),t.goaddbank(a)}}},[n("v-uni-view",{staticClass:"addimg"},[n("v-uni-image",{attrs:{src:t.addicon}})],1),n("v-uni-view",{staticClass:"addtext",staticStyle:{"-webkit-flex":"1",flex:"1"}},[t._v("添加银行卡")]),n("v-uni-view",{staticClass:"addright"},[n("v-uni-image",{attrs:{src:t.addright,mode:""}})],1)],1)],1)},e=[];n.d(a,"a",function(){return i}),n.d(a,"b",function(){return e})},"4a3d":function(t,a,n){"use strict";var i=n("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=i(n("e814")),o=n("890d"),s={data:function(){return{navigateFlag:!1,addicon:"../../../static/images/addicon.png",addright:"../../../static/images/jian-icon.png",companyId:"",list:[],pageNum:1,pageSize:6,roudlist:[{},{},{},{}],roudlist2:[{},{},{}],btn:"",changeCard_id:!1,max:0,pageCounNum:0,bankListMbox:!1,seleblankBtn:!1,companyName:""}},onLoad:function(){try{var t=uni.getStorageSync("userInfo"),a=uni.getStorageSync("companyName");t&&(this.companyId=t.user.id),a&&(this.companyName=a)}catch(i){}this.getBankdata();try{var n=uni.getStorageSync("changeCard_key");n&&(this.seleblankBtn=n)}catch(i){}},onReachBottom:function(){uni.showLoading({title:"拼命加载中"}),console.log(this.pageCounNum,"this.pageCounNum"),this.pageNum<this.pageCounNum&&(this.pageNum++,this.getBankdata()),uni.hideLoading()},onPullDownRefresh:function(){this.pageNum=1,this.getBankdata(),setTimeout(function(){uni.stopPullDownRefresh()},1e3)},methods:{getBankdata:function(){var t=this;(0,o.getBank)("?companyId="+this.companyId+"&pageNum="+this.pageNum+"&pageSize="+this.pageSize).then(function(a){if(a.success)if(0==a.total?(t.bankListMbox=!1,uni.setStorage({key:"carsmassage_key",data:"",success:function(){}})):t.bankListMbox=!0,t.max=a.total,t.pageCounNum=t.pageCoun(t.max,t.pageSize),1==t.pageNum){t.list=a.rows;for(var n=t.list,i=0;i<n.length;i++){n[i].number=n[i].accountNumber.substring(n[i].accountNumber.length-4);var e=n[i].accountAdress,o=e.lastIndexOf("银行");n[i].subordinate=e.substring(0,o+2),n[i].companyName&&(n[i].accountName="")}t.list=n,console.log(t.list)}else if(t.pageNum<=t.pageCounNum){var s=a.rows;t.list=t.list.concat(s);for(var r=t.list,u=0;u<r.length;u++){r[u].number=r[u].accountNumber.substring(r[u].accountNumber.length-4);var d=r[u].accountAdress,c=d.lastIndexOf("银行");r[u].subordinate=d.substring(0,c+2),r[u].companyName&&(r[u].accountName="")}t.list=r,uni.hideLoading(),t.max==t.list.length&&(t.showLoadMore=!0)}})},pageCoun:function(t,a){return t>0?t<a?1:t%a?(0,e.default)(t/a)+1:t/a:0},goaddbank:function(){var t=this;this.navigateFlag||(this.navigateFlag=!0,uni.navigateTo({url:"./addbank"}),setTimeout(function(){t.navigateFlag=!1},200))},getchangeCars:function(t,a){var n=this;try{var i=uni.getStorageSync("changeCard_key");i&&(this.changeCard_id=i)}catch(e){}this.seleblankBtn&&this.changeCard_id&&(this.navigateFlag=!0,uni.setStorage({key:"carsmassage_key",data:t,success:function(){}}),uni.navigateTo({url:"../mywallet/withdrawal/withdrawal"}),setTimeout(function(){n.navigateFlag=!1},2e3))}}};a.default=s},ab0e:function(t,a,n){"use strict";n.r(a);var i=n("4a3d"),e=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(a,t,function(){return i[t]})}(o);a["default"]=e.a},c134:function(t,a,n){"use strict";var i=n("06f7"),e=n.n(i);e.a},e512:function(t,a,n){a=t.exports=n("2350")(!1),a.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-03c1b8d8]{width:100%;height:100%;background-color:#eef1f6}.myBank[data-v-03c1b8d8]{height:100%;background-color:#eef1f6}.bank-list-Mbox[data-v-03c1b8d8]{padding-bottom:%?30?%;background-color:#fff}.bank-list-box .bank-list[data-v-03c1b8d8]{width:%?690?%;height:%?252?%;margin-bottom:%?10?%;margin:0 auto;border-radius:%?12?%;position:relative}.bank-list-box .bank-list-text[data-v-03c1b8d8]{position:relative;height:%?78?%;width:%?590?%;margin:0 auto;font-size:%?36?%;color:#fff}.bank-list-box .bank-list-text uni-text[data-v-03c1b8d8]{position:absolute;bottom:0}.bank-list-box .bank-list-img[data-v-03c1b8d8]{position:absolute;width:%?64?%;height:%?48?%;top:%?36?%;right:%?56?%}.bank-list-box .bank-list-img uni-image[data-v-03c1b8d8]{width:100%;height:100%}.bank-list-box .bank-list-numb[data-v-03c1b8d8]{width:%?590?%;margin:0 auto;line-height:%?150?%;color:#fff}.bank-list-box .bank-list-numb .nubertext[data-v-03c1b8d8]{font-size:%?48?%}.bank-list-box .bank-list-numb .bgroud[data-v-03c1b8d8]{margin-top:%?70?%;width:%?16?%;height:%?16?%;background-color:#fff;border-radius:50%;margin-right:%?16?%}.bank-list-box .banckgroundone[data-v-03c1b8d8]{background:-webkit-gradient(linear,left top,right top,from(#676767),to(#403f3f));background:-o-linear-gradient(left,#676767 0,#403f3f 100%);background:linear-gradient(90deg,#676767,#403f3f)}.bank-list-box .banckgroundtow[data-v-03c1b8d8]{background:-webkit-gradient(linear,left top,right top,from(#dbb168),to(#eac985));background:-o-linear-gradient(left,#dbb168 0,#eac985 100%);background:linear-gradient(90deg,#dbb168,#eac985)}.bank-btn[data-v-03c1b8d8]{height:%?112?%;border-top:%?2?% solid #e2e6e9;background:#fff}.bank-btn .addimg[data-v-03c1b8d8]{width:%?32?%;height:%?32?%;margin:%?40?% %?22?% 0 %?30?%}.bank-btn .addimg uni-image[data-v-03c1b8d8]{width:100%;height:100%}.bank-btn .addtext[data-v-03c1b8d8]{line-height:%?112?%}.bank-btn .addright[data-v-03c1b8d8]{width:%?36?%;height:%?36?%;margin:%?40?% %?30?% 0 0}.bank-btn .addright uni-image[data-v-03c1b8d8]{width:100%;height:100%}body.?%PAGE?%[data-v-03c1b8d8]{background-color:#eef1f6}',""])},e722:function(t,a,n){"use strict";n.r(a);var i=n("0875"),e=n("ab0e");for(var o in e)"default"!==o&&function(t){n.d(a,t,function(){return e[t]})}(o);n("c134");var s=n("2877"),r=Object(s["a"])(e["default"],i["a"],i["b"],!1,null,"03c1b8d8",null);a["default"]=r.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-changePassword-Codepassword"],{"310b":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=i("890d"),a={data:function(){return{phoneNum:"",sms_token:"",totalTime:60,CountBtn:!1,totalTimeBtn:!1,inputList:[{val:"",setFocus:!1},{val:"",setFocus:!1},{val:"",setFocus:!1},{val:"",setFocus:!1}],code:"",numList:[],height:"",navflag:!1}},onLoad:function(){var t=this,n=uni.getSystemInfoSync(),i=(n.windowWidth,n.windowHeight);t.height=i,uni.getStorage({key:"phoneNum",success:function(n){t.phoneNum=n.data}}),uni.getStorage({key:"sms_token",success:function(n){t.sms_token=n.data}}),this.countDown()},methods:{countDown:function(){var t=this;if(60==this.totalTime&&1==this.totalTimeBtn){this.numList=[];var n="phone="+this.phoneNum;(0,e.GetSms)(n).then(function(n){console.log(n),n.success?(t.sms_token=n.sms_token,uni.showModal({content:n.msg,showCancel:!1})):uni.showToast({title:n.msg,icon:"none"})})}if(0==this.CountBtn){this.CountBtn=!0;var i=setInterval(function(){t.totalTime--,t.totalTime<0&&(t.totalTimeBtn=!0,t.totalTime=60,t.CountBtn=!1,clearInterval(i))},1e3)}},nextFocus:function(t){var n=this,i=t.detail.value;if(this.numList=i,this.code=i,i.length>=4){if(this.navflag)return;this.navflag=!0,setTimeout(function(){n.navflag=!1},2e3),this.Postverification()}},Postverification:function(){console.log(this.phoneNum);var t="phone="+this.phoneNum+"&token="+this.sms_token+"&code="+this.code;(0,e.Verification)(t).then(function(t){t.success?(console.log(t),uni.navigateTo({url:"./setpassword"})):uni.showToast({title:t.msg,icon:"none"})})}}};n.default=a},"5b29b":function(t,n,i){var e=i("b64c");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("41ec7086",e,!0,{sourceMap:!1,shadowMode:!1})},"809f":function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"yzm",style:{height:t.height+"px"}},[i("v-uni-view",{staticClass:"title"},[t._v("请输入验证码")]),i("v-uni-view",{staticClass:"uni-flex phoneNum"},[i("v-uni-text",{staticClass:"phoneNumtext"},[t._v("已发送至手机　"+t._s(t.phoneNum))]),i("v-uni-view",{class:1==t.CountBtn?"CountdowOpct Countdow":"Countdow",on:{click:function(n){n=t.$handleEvent(n),t.countDown(n)}}},[t._v("重新发送"),i("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:1==t.CountBtn,expression:"CountBtn==true"}]},[t._v("("+t._s(t.totalTime)+"s)")])],1)],1),i("v-uni-view",{staticClass:"Validation-input"},[i("v-uni-view",{staticStyle:{display:"flex"}},[i("v-uni-view",{staticClass:"inputbox"},[t.numList.length?t._e():i("v-uni-view",{staticClass:"inputcbox cursor"}),t.numList.length?i("v-uni-view",{staticClass:"inputcbox"},[t._v(t._s(t.numList[0]))]):t._e()],1),i("v-uni-view",{staticClass:"inputbox"},[1===t.numList.length?i("v-uni-view",{staticClass:"inputcbox cursor"}):t._e(),t.numList.length>=2?i("v-uni-view",{staticClass:"inputcbox"},[t._v(t._s(t.numList[1]))]):t._e()],1),i("v-uni-view",{staticClass:"inputbox"},[2===t.numList.length?i("v-uni-view",{staticClass:"inputcbox cursor"}):t._e(),t.numList.length>=3?i("v-uni-view",[t._v(t._s(t.numList[2]))]):t._e()],1),i("v-uni-view",{staticClass:"inputbox"},[3===t.numList.length?i("v-uni-view",{staticClass:"inputcbox cursor"}):t._e(),t.numList.length>=4?i("v-uni-view",[t._v(t._s(t.numList[3]))]):t._e()],1)],1),i("v-uni-input",{staticClass:"input",attrs:{type:"number",maxlength:"4"},on:{input:function(n){n=t.$handleEvent(n),t.nextFocus(n)}}})],1)],1)},a=[];i.d(n,"a",function(){return e}),i.d(n,"b",function(){return a})},9005:function(t,n,i){"use strict";i.r(n);var e=i("809f"),a=i("ae4b");for(var o in a)"default"!==o&&function(t){i.d(n,t,function(){return a[t]})}(o);i("b478");var s=i("2877"),u=Object(s["a"])(a["default"],e["a"],e["b"],!1,null,"aaa8ff66",null);n["default"]=u.exports},ae4b:function(t,n,i){"use strict";i.r(n);var e=i("310b"),a=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,function(){return e[t]})}(o);n["default"]=a.a},b478:function(t,n,i){"use strict";var e=i("5b29b"),a=i.n(e);a.a},b64c:function(t,n,i){n=t.exports=i("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.yzm[data-v-aaa8ff66]{background-color:#fff}[data-v-aaa8ff66] uni-page-body{background-color:#fff!important}.title[data-v-aaa8ff66]{height:%?264?%;text-align:center;line-height:%?264?%;font-size:%?36?%;font-weight:600;color:#333}.phoneinput[data-v-aaa8ff66]{height:%?50?%}.phoneNum[data-v-aaa8ff66]{margin-left:12%;width:80%;height:%?60?%;color:#999;font-size:%?30?%;padding-bottom:%?120?%}.Countdow[data-v-aaa8ff66]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;margin-left:%?20?%;color:#0072ff}.CountdowOpct[data-v-aaa8ff66]{opacity:.5}.Validation-input[data-v-aaa8ff66]{margin:0 auto;position:relative;width:%?480?%;height:%?102?%;padding-left:%?20?%}.inputbox[data-v-aaa8ff66]{border:1px solid #979797;width:%?88?%;height:%?88?%;margin-right:%?20?%;border-radius:%?12?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.input[data-v-aaa8ff66]{position:absolute;left:%?-200?%;top:0;width:%?600?%;height:%?88?%}.inputcbox[data-v-aaa8ff66]{width:%?88?%;height:%?88?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.cursor[data-v-aaa8ff66]{width:1px;height:%?40?%;background-color:#000;-webkit-animation:focus-data-v-aaa8ff66 .7s infinite;animation:focus-data-v-aaa8ff66 .7s infinite}@-webkit-keyframes focus-data-v-aaa8ff66{0%{opacity:1}to{opacity:0}}@keyframes focus-data-v-aaa8ff66{0%{opacity:1}to{opacity:0}}body.?%PAGE?%[data-v-aaa8ff66]{background-color:#fff!important}',""])}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-changePassword-Codepassword~pages-home-changePassword-changePassword~pages-home-changePas~ca85ef0d"],{"3b8d":function(t,e,r){"use strict";r.r(e),r.d(e,"default",function(){return a});var n=r("795b"),o=r.n(n);function i(t,e,r,n,i,a,u){try{var c=t[a](u),s=c.value}catch(f){return void r(f)}c.done?e(s):o.a.resolve(s).then(n,i)}function a(t){return function(){var e=this,r=arguments;return new o.a(function(n,o){var a=t.apply(e,r);function u(t){i(a,n,o,u,c,"next",t)}function c(t){i(a,n,o,u,c,"throw",t)}u(void 0)})}}},"890d":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.csMonth=e.monthFlow=e.ordersList=e.orderList=e.orderFlow=e.getDetail=e.indexList=e.uploadImage=e.applyAgent=e.chanProvincial=e.SelectOrderdate=e.ManageCompany=e.limitBlacklist=e.CompanyCars=e.Dispatch=e.SelectCompany=e.checkBalances=e.Feedback=e.getInformation=e.getBank=e.AddBank=e.MoneyWithdrawals=e.MoneyDetailed=e.httpExit=e.httpUploadFile=e.addressQuery=e.Apigetapply=e.Postpassword=e.Verification=e.GetSms=e.ApiPasswordLogin=void 0;var n=r("a275"),o=function(t){return(0,n.post)("wx/login",t)};e.ApiPasswordLogin=o;var i=function(t){return(0,n.post)("/wx/send/sms",t)};e.GetSms=i;var a=function(t){return(0,n.post)("/user/verification/code",t)};e.Verification=a;var u=function(t){return(0,n.post)("/user/change/password",t)};e.Postpassword=u;var c=function(t){return(0,n.get)("wx/openId"+t)};e.Apigetapply=c;var s=function(t){return(0,n.get)("/certification/address"+t)};e.addressQuery=s;var f=function(t){return(0,n.post)("file/upload",t)};e.httpUploadFile=f;var l=function(t){return(0,n.post)("logout",t)};e.httpExit=l;var p=function(t){return(0,n.get)("/get/withdrawal/info"+t)};e.MoneyDetailed=p;var h=function(t){return(0,n.post)("/confirm/withdrawal"+t)};e.MoneyWithdrawals=h;var d=function(t){return(0,n.post)("/save/apply/bank"+t)};e.AddBank=d;var g=function(t){return(0,n.get)("/get/apply/bank/cards"+t)};e.getBank=g;var v=function(t){return(0,n.get)("/get/messages/info"+t)};e.getInformation=v;var y=function(t){return(0,n.post)("/suggestions/feedback"+t)};e.Feedback=y;var m=function(t){return(0,n.get)("/wallet/record"+t)};e.checkBalances=m;var w=function(t){return(0,n.get)("/proxy/company/list"+t)};e.SelectCompany=w;var b=function(t){return(0,n.post)("/send/company/orders"+t)};e.Dispatch=b;var x=function(t){return(0,n.get)("/order/perfect/carList"+t)};e.CompanyCars=x;var k=function(t){return(0,n.post)("/company/blacklist"+t)};e.limitBlacklist=k;var L=function(t){return(0,n.get)("/proxy/company/list"+t)};e.ManageCompany=L;var _=function(t){return(0,n.get)("/select/order/receivings"+t)};e.SelectOrderdate=_;var E=function(t){return(0,n.get)("/existing/proxy/address"+t)};e.chanProvincial=E;var T=function(t){return(0,n.post)("/submit/apply",t)};e.applyAgent=T;var j=function(t){return(0,n.post)("/upload/img",t)};e.uploadImage=j;var P=function(t){return(0,n.get)("/select/order/datas"+t)};e.indexList=P;var C=function(t){return(0,n.get)("/select/order/Detail"+t)};e.getDetail=C;var O=function(t){return(0,n.get)("/select/water/datas"+t)};e.orderFlow=O;var S=function(t){return(0,n.get)("/select/order/datas/home"+t)};e.orderList=S;var I=function(t){return(0,n.get)("/select/order/datas"+t)};e.ordersList=I;var F=function(t){return(0,n.get)("/select/order/days"+t)};e.monthFlow=F;var q=function(t){return(0,n.post)("/upload/multipart/img",t)};e.csMonth=q},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",s="object"===typeof t,f=e.regeneratorRuntime;if(f)s&&(t.exports=f);else{f=e.regeneratorRuntime=s?t.exports:{},f.wrap=b;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",g={},v={};v[a]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(I([])));m&&m!==n&&o.call(m,a)&&(v=m);var w=_.prototype=k.prototype=Object.create(v);L.prototype=w.constructor=_,_.constructor=L,_[c]=L.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},f.awrap=function(t){return{__await:t}},E(T.prototype),T.prototype[u]=function(){return this},f.AsyncIterator=T,f.async=function(t,e,r,n){var o=new T(b(t,e,r,n));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},E(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=I,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:I(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}}}function b(t,e,r,n){var o=e&&e.prototype instanceof k?e:k,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=j(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function k(){}function L(){}function _(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function T(t){function e(r,n,i,a){var u=x(t[r],t,n);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"===typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,a)})}a(u.arg)}var r;function n(t,n){function o(){return new Promise(function(r,o){e(t,n,r,o)})}return r=r?r.then(o,o):o()}this._invoke=n}function j(t,e,r){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return F()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var u=P(a,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=x(t,e,r);if("normal"===c.type){if(n=r.done?d:p,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}function P(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,P(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function I(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:F}}function F(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a275:function(t,e,r){"use strict";var n=r("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.get=a,e.post=u;var o=n(r("795b")),i=n(r("b29f"));n(r("e143"));function a(t,e){return uni.showLoading({title:"加载中..."}),new o.default(function(r,n){i.default.get(t,{data:e}).then(function(t){r(t.data),uni.hideLoading()}).catch(function(t){n(t),uni.hideLoading()})})}function u(t,e){return new o.default(function(r,n){i.default.post(t,{data:e}).then(function(t){r(t.data)}).catch(function(t){n(t)})})}i.default.config.baseUrl="https://api.proxy.rrbus.com/api/cp/",i.default.interceptors.request(function(t){t.header["content-type"]="application/x-www-form-urlencoded",t.header["App-Token"]="C3140819F598454C9DE316F83C00238D";var e=uni.getStorageSync("accessToken");return t.header["Access-Token"]=e,t}),i.default.interceptors.response(function(t){"认证失败！ Access-Token无效"==t.data.msg&&setTimeout(function(){uni.reLaunch({url:"/pages/home/login/login"})},1200),t.errMsg&&"request:fail timeout"==t.errMsg&&uni.showToast({icon:"none",image:"/static/icon_error.png",title:"请求超时",duration:1250}),500==t.statusCode&&uni.showToast({icon:"none",image:"/static/icon_error.png",title:"网络故障",duration:1500});var e=t.data;if(e.code&&200!=e.code)switch(e.code){case"401":uni.showToast({icon:"none",image:"/static/icon_error.png",title:e.msg,duration:1200,complete:function(){setTimeout(function(){uni.reLaunch({url:"/pages/login/login.vue"})},1200)}});break;case 404:break;case 500:break;case 504:break;default:uni.showToast({icon:"none",image:"/static/icon_warn.png",title:e.msg,duration:1200})}return t})},aef6:function(t,e,r){"use strict";var n=r("5ca1"),o=r("9def"),i=r("d2c8"),a="endsWith",u=""[a];n(n.P+n.F*r("5147")(a),"String",{endsWith:function(t){var e=i(this,t,a),r=arguments.length>1?arguments[1]:void 0,n=o(e.length),c=void 0===r?n:Math.min(o(r),n),s=String(t);return u?u.call(e,s,c):e.slice(c-s.length,c)===s}})},b29f:function(t,e,r){"use strict";(function(t){var n=r("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r("a745")),i=n(r("a4bb"));r("f559"),r("aef6");var a=n(r("795b"));r("6b54"),r("87b3"),r("96cf");var u=n(r("3b8d")),c=n(r("d225")),s=n(r("b0b4")),f=function(){function t(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,c.default)(this,t),this.config={},this.config.baseUrl=r.baseUrl?r.baseUrl:"",this.config.dataType=r.dataType?r.dataType:"json",this.config.responseType=r.responseType?r.responseType:"text",this.config.header=r.header?r.header:{},this.reqInterceptors=null,this.resInterceptors=null,this.interceptors={request:function(t){e.reqInterceptors=t},response:function(t){e.resInterceptors=t}}}return(0,s.default)(t,[{key:"get",value:function(){var t=(0,u.default)(regeneratorRuntime.mark(function t(e){var r,n=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},t.abrupt("return",this._request("get",e,r));case 2:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"post",value:function(){var t=(0,u.default)(regeneratorRuntime.mark(function t(e){var r,n=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},t.abrupt("return",this._request("post",e,r));case 2:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"put",value:function(){var t=(0,u.default)(regeneratorRuntime.mark(function t(e){var r,n=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},t.abrupt("return",this._request("put",e,r));case 2:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"delete",value:function(){var t=(0,u.default)(regeneratorRuntime.mark(function t(e){var r,n=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:{},t.abrupt("return",this._request("delete",e,r));case 2:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"setConfig",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.config=this._deepCopy(this._merge(this.config,t))}},{key:"getConfig",value:function(){return this.config}},{key:"_request",value:function(t,e,r){var n=this,o=this._deepCopy(this._merge(this.config,r)),i={};if(this.reqInterceptors&&"function"===typeof this.reqInterceptors){var c=this.reqInterceptors(o);if("[object Promise]"===Object.prototype.toString.call(c))return c;i=this._deepCopy(c)}else i=this._deepCopy(o);var s=this._formatUrl(i.baseUrl,e);return new a.default(function(e,r){uni.request({url:s,method:t,data:i.data?i.data:{},header:i.header,dataType:i.dataType,responseType:i.responseType,complete:function(){var t=(0,u.default)(regeneratorRuntime.mark(function t(o){var i,a,u;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(i=o,!n.resInterceptors||"function"!==typeof n.resInterceptors){t.next=22;break}if(a=n.resInterceptors(i),a){t.next=8;break}return r("返回值已被您拦截！"),t.abrupt("return");case 8:if("[object Promise]"!==Object.prototype.toString.call(a)){t.next=21;break}return t.prev=9,t.next=12,a;case 12:u=t.sent,e(u),t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](9),r(t.t0);case 19:t.next=22;break;case 21:i=a;case 22:e(i);case 23:case"end":return t.stop()}},t,this,[[9,16]])}));function o(e){return t.apply(this,arguments)}return o}()})})}},{key:"_formatUrl",value:function(t,e){if(!t)return e;var r="",n=t.endsWith("/"),o=e.startsWith("/");return r=n&&o?t+e.substring(1):n||o?t+e:t+"/"+e,r}},{key:"_merge",value:function(t,e){var r=this._deepCopy(t);if(!e||!(0,i.default)(e).length)return r;for(var n in e)if("header"!==n)r[n]=e[n];else if("[object Object]"===Object.prototype.toString.call(e[n]))for(var o in e[n])r[n][o]=e[n][o];return r}},{key:"_deepCopy",value:function(t){var e=(0,o.default)(t)?[]:{};for(var r in t)t.hasOwnProperty(r)&&("object"===typeof t[r]?e[r]=this._deepCopy(t[r]):e[r]=t[r]);return e}}]),t}();t.$request||(t.$request=new f);var l=new f,p=l;e.default=p}).call(this,r("c8ba"))}}]);
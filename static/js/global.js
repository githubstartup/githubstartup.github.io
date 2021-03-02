import map from './map.js'
Date.prototype.format = function(fmt)   
{ //author: meizz   
  var o = {   
    "M+" : this.getMonth()+1,                 //月份   
    "d+" : this.getDate(),                    //日   
    "h+" : this.getHours(),                   //小时   
    "m+" : this.getMinutes(),                 //分   
    "s+" : this.getSeconds(),                 //秒   
    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
    "S"  : this.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}  


const building = function(){
	uni.showToast({
		icon: 'none',
		title: '敬请期待'
	})
}

const formatDate = function(date, fmt){
	var o = {
	  "M+" : date.getMonth()+1,                 //月份   
	  "d+" : date.getDate(),                    //日   
	  "h+" : date.getHours(),                   //小时   
	  "m+" : date.getMinutes(),                 //分   
	  "s+" : date.getSeconds(),                 //秒   
	  "q+" : Math.floor((date.getMonth()+3)/3), //季度   
	  "S"  : date.getMilliseconds()             //毫秒   
	};   
	if(/(y+)/.test(fmt)){
		fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
	}
	for(var k in o){
		if(new RegExp("("+ k +")").test(fmt)){
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
		}
	}
	return fmt;
}

const formatDateTen = function(date){
	return formatDate(date, "yyyy-MM-dd")
}
const timestampToTime = function(timestamp,type){//时间戳转换日期,type为传入想转换的格式如Y/M/D/h/m 2019/10/09 20:28
					var len=timestamp.toString().length;
					if(len==13){//时间戳为10位需*1000，时间戳为13位的话不需乘1000
						var date = new Date(timestamp);
					}else{
						var date = new Date(timestamp*1000);
					}
	       var Y = date.getFullYear() + '/';
	       var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '/';
	       var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
	       var h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':';
	       var m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()) + ':';
	       var s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());
				 if(type=='Y/M/D/h/m'){
					 var m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes());
					 return Y+M+D+h+m
				 }else{
					 return Y+M+D;
				 }
}
const formatMoney = function(money){
	money = Number(money);
	if(isNaN(money)){
		return 0.00
	}
	money = Number(money/100).toFixed(2)
	return money;
}


const formatRate = function(rate){
	rate = Number(rate);
	if(isNaN(rate)){
		return 0.00
	}
	rate = Number(rate * 100).toFixed(2)
	return rate;
}

const formatCardNo = function(cardNo){
	if(!cardNo){
		return ''
	}
	return ("" + cardNo).replace(/\w+(\d{4})$/g, '$1')
}

const objectToFormStr = function(object, encode){
	let str = '';
	for(let key in object){
		let value = object[key]
		str += ('&' + key + '=' + value)
	}
	if(str.length > 0){
		str = str.substring(1)
	}
	return str;
}

module.exports = {
	formatDateTen,
	formatMoney,
	formatRate,
	formatCardNo,
	building,
	objectToFormStr,
	map,
	timestampToTime,
}

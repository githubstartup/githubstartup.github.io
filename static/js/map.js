const cardType = {
  '1': '信用卡',
  '0': '储蓄卡'
}

const vip = {
	'1': '普通用户',
	'2': 'VIP会员',
	'3': '代理商',
	'4': '运营中心',
}
const authStatusBadge = {
	'0': {text: '未认证', type: 'default'},
	'1': {text: '未完成', type: 'warning'},
	'2': {text: '已认证', type: 'success'},
	'-1': {text: '认证失败', type: 'error'}
}

const repaymentOrderStatusBadge = {
	'NORMAL': {text: '处理中', type: 'primary'},
	'PENDING': {text: '处理中', type: 'primary'},
	'SUCCESS': {text: '已到账', type: 'success'},
	'FAIL': {text: '已失败', type: 'error'}
}

const cashOrderStatusBadge = {
	'0': {text: '处理中', type: 'primary'},
	'1': {text: '交易成功', type: 'success'},
	'2': {text: '交易失败', type: 'error'},
	'3': {text: '交易取消', type: 'default'}
}

module.exports = {
	cardType,
	vip,
	authStatusBadge,
	repaymentOrderStatusBadge,
	cashOrderStatusBadge
}

// 在筛选栏中选中的商品 lycList
var selectedOption
//大列表模式中 添加动态构造元素的父标签ID
var grid_view_detail
//小列表模式中 添加动态构造元素的父标签ID
var list_view_detail
//当前选中商品类型的数据集合
var currentShopList=shopList.lycList
//动态构造元素的内容
var appendHtml=''

var shopItem={
    id: '',
    type: '',
    type_name: '',
    png: '',
    name: '',
    content: '',
    sale_state: '',
    zj_price: '',
    yj_price: ''
}
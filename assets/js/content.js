
// 在筛选栏中选中的商品 lycList
var selectedOption=''
//大列表模式中 添加动态构造元素的父标签ID
var grid_view_detail
//小列表模式中 添加动态构造元素的父标签ID
var list_view_detail
//订单界面 添加动态构造元素的父标签ID
var orderView
var imgView
//所有商品集合
var allShopItem = []
//相关结果
var resultCount=0
//当前选中商品类型的数据集合
var currentShopList=initList()
//动态构造元素的内容
var appendHtml = ''



function initList(){
    resultCount=0
    //当前选中商品类型的数据集合
     for (let i in shopList) {
        // shopList
        shopList[i].forEach(item => {
            allShopItem.push(item)
            resultCount++
        })
    }
    return allShopItem
}
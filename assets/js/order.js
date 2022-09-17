var orderList =
    {}


var customerOrder = {
    name: 'liuxy'//顾客昵称
    , phoneNumber: '15948372001'//顾客昵称
    , sumZj: 0//租金合计
    , sumYj: 0//押金合计
    , order: []
}

/**
 * 点击购买
 * @param id
 * @param type
 */
function fnClickBye(itemId) {
    console.log("fnClickBye", itemId)
    //校验登录
    allShopItem.map(i => {

        if (i.id == itemId) {
            customerOrder.order.push(i)
            customerOrder.sumZj += parseInt(i.zj_price)
            customerOrder.sumYj += parseInt(i.yj_price)
        }
    })
    initOrderView()
}

/**
 * 点击喜欢
 * @param id
 * @param type
 */
function clickLike(data) {
    console.log(data.id)
    console.log(data.id)
}

/**
 * 点击详情
 * @param id
 * @param type
 */
function clickDeatil(data) {
    console.log(data.id)
    console.log(data.id)
}


function initOrderView() {
    appendHtml = ''
    orderView = document.getElementById("orderView")
    imgView = document.getElementById("imgView")
    customerOrder.order.forEach(item => {
        appendHtml += `<li class="cart-list">
                            <div class="cart-img"><img src="${item.png}" alt=""></div>
                            <div class="cart-title">
                                <div class="fsz-16">
                                    <a href="#"> <span class="light-font"> 崭新 </span> <strong>${item.name}</strong></a>
                                    <h6 class="sub-title-1">${item.type_name}</h6>
                                </div>
                                <div class="price">
                                    <strong class="clr-txt">￥${item.zj_price} </strong>
                                    <del class="light-font">￥${item.yj_price}</del>
                                </div>
                            </div>
                            <div class="close-icon" onclick="clickCencl('${item.id}')"><i class="fa fa-close clr-txt"></i></div>
                        </li> `

    })
    orderView.innerHTML = `
                    <a href="#"> <img alt="" src="assets/img/icons/cart-icon.png"/> </a>
                        <span class="cnt crl-bg">${customerOrder.order.length}</span> <span class="price">￥${customerOrder.sumZj}</span>
                    <ul class="pop-up-box cart-popup" style="position:absolute; height:400px; overflow:auto" id="canvasView">
                        ` + appendHtml + `
                        <li class="cart-list sub-total">
                            <div class="pull-left">
                                <strong>总计</strong>
                            </div>
                            <div class="pull-right">
                                <strong class="clr-txt">￥${customerOrder.sumZj}</strong>
                                 <del class="light-font">￥${customerOrder.sumYj}</del>
                            </div>
                        </li>
                        <li class="cart-list buttons">
                            <div class="pull-left">
                                <a  href="#orderView_new" data-toggle="modal" class="theme-btn-sm-2">下单</a>

                            </div>
                            <div class="pull-right">
                                <a href="javascript:void(0)" class="theme-btn-sm-3"> 退出 </a>
                            </div>
                        </li>
                </ul>`
    imgView.innerHTML = appendHtml


}

/**
 * 从购物车中取消商品
 * @param id
 */
function clickCencl(itemId) {
    console.log("clickCencl", itemId)

    //校验登录
    customerOrder.order.map(i => {

        if (i.id == itemId) {
            customerOrder.order.splice(i, 1)
            customerOrder.sumZj -= parseInt(i.zj_price)
            customerOrder.sumYj -= parseInt(i.yj_price)
            return;
        }
    })
    initOrderView()
}


//点击下单生成图片
function saveImage() {
    console.log('saveImage')
    // var dom = document.getElementById('canvasView');

    const config = {
        useCORS: true
        , windowHeight: window.scrollHeight + 24 + 100//获取y方向页面包含滚动条的高度，24和100为padding,margin
        , windowHeight: 1000 + 24 + 100//获取y方向页面包含滚动条的高度，24和100为padding,margin
        , width: 1000//48为padding值
        , height: 1000//可见高度+padding+margin
        , x: -300//滚动条高度修复
        , y: -20//滚动条高度修复
        , scrollX: 17
    }
    let a = document.createElement("a");
    // html2canvas(document.querySelector("#canvasView"),config).then((canvas) => {
    html2canvas(document.querySelector("#imgView")).then((canvas) => {
        let dom = document.body.appendChild(canvas);
        // dom.style.display = "none";
        // a.style.display = "none";
        // document.body.removeChild(dom);
        let blob = dataURLToBlob(dom.toDataURL("image/png"));
        a.setAttribute("href", URL.createObjectURL(blob));
        //这块是保存图片操作  可以设置保存的图片的信息
        a.setAttribute("download", 'xx' + ".png");
        document.body.appendChild(a);
        a.click();
        // URL.revokeObjectURL(blob);
        // document.body.removeChild(a);
    })
}

//图片格式转换方法
function dataURLToBlob(dataurl) {
    let arr = dataurl.split(",");
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type: mime});
}
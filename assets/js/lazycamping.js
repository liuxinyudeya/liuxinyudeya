window.onload = function () {
    var lycList = shopList.lycList
    var lycsize = shopList.lycList.length
    let lycItemList = ''

    var shopMenu_1 = document.getElementById("lycList_1")
    for (let i = 0; i < lycsize; i++) {
        //
        let lyc = lycList[i]
        let lycItem = ` <div class="item">
                                <div class="product-box">
                                    <div class="product-media">
                                        <img class="prod-img" alt="" src="assets/img/products/1.png"/>
                                        <img class="shape" alt="" src="assets/img/icons/shap-small.png"/>
                                        <div class="prod-icons">
                                            <a class="fa fa-heart" onclick="clickLike(this)" id="${lyc.id}">1</a>
                                            <a href="#" class="fa fa-shopping-basket">2</a>
                                            <a href="#product-preview" data-toggle="modal" class="fa fa-expand">3</a>
                                        </div>
                                    </div>
                                    <div class="product-caption">
                                        <h3 class="product-title">
                                            <a href="#"> <span class="light-font"> organic </span>
                                                <strong>tomato</strong></a>
                                        </h3>
                                        <div class="price">
                                            <strong class="clr-txt">$50.00 </strong>
                                        </div>
                                    </div>
                                </div>
                            </div>`
        lycItemList += lycItem

    }


    shopMenu_1.innerHTML = lycItemList


}

function clickLike(data) {
    console.log("clickLike")
    console.log(data.id)
}


window.onload = function () {
    var lycList = shopList.lycList
    var lycsize = shopList.lycList.length
    let lycItemList = ''

    var shopMenu_1 = document.getElementById("lycList_1")
    for (let i = 0; i < lycsize; i++) {
        //
        let lyc = lycList[i]
        let lycItem = `<div class="item">
                    <div class="deal-item">
                        <div class="deal-icons">
                            <a href="#" class="fa fa-heart"></a>
                            <a href="#" class="fa fa-shopping-basket"></a>
                            <a href="#product-preview" data-toggle="modal" class="fa fa-expand"></a>
                        </div>
                        <div class="deal-content">
                            <div class="text-right">
                                <span class="prod-tag tag-1">new</span> <span class="prod-tag tag-2">sale</span>
                            </div>
                            <div class="deal-text">
                                <h4 class="sub-title"> ORGANIC FRUITS </h4>
                                <h2 class="fsz-30 pb-15"><a href="#"> <span class="light-font">fresh </span> <strong>rasberry </strong>
                                </a></h2>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy...</p>
                                <div class="price pt-15">
                                    <strong class="clr-txt">$50.00 </strong>
                                    <del class="light-font">$65.00</del>
                                </div>
                            </div>
                            <div class="deal-img"><img alt="" src="assets/img/extra/deal-1.png"/></div>
                        </div>
                    </div>
                </div>`
        lycItemList += lycItem

    }


    shopMenu_1.innerHTML =  lycItemList


}

function clickLike(data) {
    console.log("clickLike")
    console.log(data.id)
}



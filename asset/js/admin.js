let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
let userAccounts = localStorage.getItem("userAccounts") ? JSON.parse(localStorage.getItem("userAccounts")) : [];
let orderList;

const menuItems = document.querySelectorAll(".js-menu");
for(const menuItem of menuItems){
    menuItem.addEventListener("click",function(e){
        menuItems.forEach(function (item) {
            item.classList.remove("menu-active")
        })
        menuItem.classList.add("menu-active");
    })
}

const productBtn = document.querySelector(".product-btn")
productBtn.addEventListener("click",function(e) {
    renderProducts();
})

const orderBtn = document.querySelector(".order-btn")
orderBtn.addEventListener("click",function(e){
    renderOrderNotes();
})


function renderProducts() {
    const mainContent = document.querySelector(".main-content");
    mainContent.innerHTML=``;
    const productList= document.createElement("div");
    productList.classList.add("product-lists");
    let str = ""
    products.forEach((item) => {
        str += `
            <div class="product_list_content data-id="${item.id}">
                <div class="product_list_items">
                ${item.name}
                </div>
                <div class="product_list_items"><span style="color:var(--theme-color)">${item.price}</span></div>
                <div class="product_list_items">${item.quantity}</div>
                <div class="product_list_items">
                    <i class="fa-solid fa-trash product_delelte_btn"></i>
                    <i class="fa-solid fa-pen-to-square product_update_btn"></i>
                </div>
            </div>
        `
    })
    productList.innerHTML = str;
    mainContent.append(productList);
}





















function renderOrderNotes() {
    orderList = localStorage.getItem("orderList") ? JSON.parse(localStorage.getItem("orderList")) : [];
    const orderNoteListContent = document.querySelector(".main-content")
    orderNoteListContent.innerHTML=``;
    console.log(orderNoteListContent)
    console.log(orderList)
    orderList.forEach((item) => {
        const tt = (item.status === "Chưa xử lý") ? "Chưa xử lý" : "Đã xử lý"
        const tt2 = (item.status === "Chưa xử lý") ? "Đã xử lý" : "Chưa xử lý"
        const orderDivOverview = document.createElement("div")
        const orderDivDetail = document.createElement("div")
        orderDivOverview.classList.add("order")
        if(tt === "Chưa xử lý") orderDivOverview.classList.add("background_red")
        else orderDivOverview.classList.add("background_blue")
        orderDivDetail.classList.add("order-detail", "hide");
        orderDivOverview.innerHTML = `
            <div class="orderNote_list_items">${item.orderNoteID}</div>
            <div class="orderNote_list_items">${item.date}</div>
            <div class="orderNote_list_items">
                <select class="orderNote_selection">
                    <option value="${tt}" selected>${tt}</option>
                    <option value="${tt2}">${tt2}</option>
                </select>
            </div>
            <div class="orderNote_list_items">${item.totalPrice} đ</div>
            <div class="orderNote_list_items order-detail-btn">Xem chi tiết <i class="fa-solid fa-plus"></i>
            </div>
        ` 
        let str = ""
        let str1  = `
                <div class="orderNote_customerInfo">
                    Tên khách hàng: ${item.customerName}</br>
                    Số điện thoại: ${item.phoneNumber}
                </div>
            `
        item.buyItems.forEach((item) => {
            str += `
            <div class="order-item">
            <div class="order-product-name">${item.name}</div>
            <div class="order-product-price">${item.price}đ</div>
            <div class="order-product-quantity">${item.quantity}</div>
         </div>
                `
        })
        str1 += str
        orderDivDetail.innerHTML = str1
        orderNoteListContent.append(orderDivOverview, orderDivDetail)
    });
    document.querySelectorAll(".order-detail-btn").forEach(function(item){
        const orderNoteDetail= getParentElement(item,".order").nextElementSibling; 
        item.onclick = function() {
            if(orderNoteDetail.classList.contains("hide")){
                item.innerHTML=`
                ẩn bớt <i class="fa-solid fa-minus"></i>
            `
            }else  {
                item.innerHTML= `
                Xem chi tiết <i class="fa-solid fa-plus"></i>
                `
            }
            orderNoteDetail.classList.toggle("hide");
        }
    })
    changeOrderNoteStatus();
}

function changeOrderNoteStatus() {
    const orderNoteSelects = document.querySelectorAll(".orderNote_selection");
    orderNoteSelects.forEach((item) => {
        item.onchange = function() {
            const tt = item.value
            
            const orderNote = getParentElement(item,".order");
            const index = orderList.findIndex((i) => {return i.orderNoteID === parseInt(orderNote.children[0].innerText)})
            if(index !== -1) orderList[index].status = tt
            localStorage.setItem("orderList", JSON.stringify(orderList))
        }
    })
}










function getParentElement(element, parent) {
    while(element.parentElement) {
        if(element.parentElement.matches(parent)) {
            return element.parentElement;
        }
        element = element.parentElement;
    }
}
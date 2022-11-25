let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
let userAccounts = localStorage.getItem("userAccounts") ? JSON.parse(localStorage.getItem("userAccounts")) : [];
let orderList = localStorage.getItem("orderNoteList") ? JSON.parse(localStorage.getItem("orderNoteList")) : [];

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
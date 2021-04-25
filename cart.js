let remove = document.querySelectorAll(".btn-danger");
let add = document.querySelectorAll(".btn-primary");
let purchase = document.querySelector(".btn-purchase");

remove.forEach(elem => {
    elem.addEventListener("click", (e)=>{
        e.target.parentElement.parentElement.remove()
        console.log(e.target);
    })
});


add.forEach(elem =>{
    elem.addEventListener("click", (e) =>{
        let product = e.target.parentElement;
        let title = product.querySelector(".card-title").innerText;
        let price = product.querySelector(".price").textContent;
        let img = product.parentElement.querySelector(".card-img-top").src
        addToCart(title, price, img);
        console.log(title, price, img)
    })
})

purchase.addEventListener("click", purchased)


function purchased(){
    alert("Thank you for your purchase!")
    let cartItems = document.querySelector(".cart-items");
    while(cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
}
function addToCart(title, price, img){
    let cart= document.createElement("div")
    cart.className="cart-row"
    let cartItems = document.querySelector(".cart-items");
    let contents = `
    <div class="cart-item cart-column">
    <img class="cart-item-image" src="${img}" width="100" height="100">
    <span class="cart-item-title">${title}</span>
</div>
<span class="cart-price cart-column">${price}</span>
<div class="cart-quantity cart-column">
    <button class="btn btn-danger" type="button">REMOVE</button>
</div>
    `
    cart.innerHTML = contents
    cartItems.append(cart)
    
   
        cartItems.addEventListener("click", (e)=>{
            e.target.parentElement.parentElement.remove()
        })
   
}


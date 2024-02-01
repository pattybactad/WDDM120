// mainScript.js

var cartItems = [];

function addToCart(itemName, itemPrice) {
    var newItem = { name: itemName, price: itemPrice };
    cartItems.push(newItem);
    updateCart();
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
}

function updateCart() {
    var cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = "";

    if (cartItems.length === 0) {
        cartContainer.innerHTML = "Cart is empty";
    } else {
        for (var i = 0; i < cartItems.length; i++) {
            var cartItem = document.createElement("div");
            cartItem.innerHTML = cartItems[i].name + " - $" + cartItems[i].price;

            var removeButton = document.createElement("button");
            removeButton.textContent = "X";
            removeButton.classList.add("remove-button");
            removeButton.onclick = (function(index) {
                return function() {
                    removeFromCart(index);
                };
            })(i);

            cartItem.appendChild(removeButton);
            cartContainer.appendChild(cartItem);
        }
    }
}

function toggleBackgroundColor() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

function displayPopup() {
    alert("Welcome to Safaia Coffee! Enjoy our premium roast coffee.");
}

function changeImage() {
    var mainImage = document.querySelector('.main-image');

    if (mainImage.src.includes('coff2-header.png')) {
        mainImage.src = './assets/hero/yellow.png';
        mainImage.style.width = '100%';
        mainImage.style.height = 'auto';
    } else {
        mainImage.src = './assets/hero/coff2-header.png';
        mainImage.style.width = '';
        mainImage.style.height = '';
    }
}

var cartItems = [];

// adding to cart function
function addToCart(itemName, itemPrice) {
    var newItem = { name: itemName, price: itemPrice };
    cartItems.push(newItem);
    updateCart();
}


// removing from cart function
function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
}


// adding / removing items from the cart
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


//toggling background color
function toggleBackgroundColor() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}

//mouse hover pop-up message function
function displayPopup() {
    alert("Welcome to Safaia Coffee! Enjoy our premium roast coffee.");
}

//change hero banner function
function changeImage() {
    var mainImage = document.querySelector('.main-image');

    if (mainImage.src.includes('coff2-header.png')) {
        mainImage.src = 'assets/hero/yellow.png';
        mainImage.style.width = '100%';
        mainImage.style.height = 'auto';
    } else {
        mainImage.src = './assets/hero/coff2-header.png';
        mainImage.style.width = '';
        mainImage.style.height = '';
    }
}

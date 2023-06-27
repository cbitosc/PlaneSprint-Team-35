let cartItems = [];

function addToCart(itemName) {
    cartItems.push(itemName);
    alert("Item added to cart!");
}

function displayCart() {
    // Create a new page or modal to display the cart items
    // Iterate over the cartItems array and display each item
    // Customize the cart display as per your requirements
    document.write(cartItems.values);

}
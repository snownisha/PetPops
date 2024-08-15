let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    cartItem.classList.remove('active');
    navbar.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}




document.addEventListener('DOMContentLoaded', function() {
    const cartContainer = document.querySelector('.cart-items-container');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            const name = this.getAttribute('data-name');
            const price = this.getAttribute('data-price');
            const image = this.getAttribute('data-image');

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <span class="fas fa-times"></span>
                <img src="${image}" alt="${name}" height="90" width="90">
                <div class="content">
                    <h3>${name}</h3>
                    <div class="price">₹${price}</div>
                </div>
            `;

            cartContainer.appendChild(cartItem);

            // Attach the remove functionality to the new item
            cartItem.querySelector('.fa-times').addEventListener('click', function() {
                cartItem.remove();
            });
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // Function to handle the removal of cart items
    function removeCartItem(event) {
        const cartItem = event.target.closest('.cart-item');
        cartItem.remove();
    }

    // Attach the removeCartItem function to all existing remove buttons
    document.querySelectorAll('.cart-item .fa-times').forEach(button => {
        button.addEventListener('click', removeCartItem);
    });

    // If you are dynamically adding cart items, you should re-attach the event listener
    // whenever a new item is added (refer to the earlier code).
});




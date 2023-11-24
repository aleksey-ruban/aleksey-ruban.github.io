"use strict";

window.onload = function() {
    hideCategories();

    cartAccumulator = new CartAccumulator(6);
    increaseCart();
    decreaseCart();

    loadInterestProducts();
}
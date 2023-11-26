"use strict";

window.onload = function() {
    hideCategories();

    cartAccumulator = new CartAccumulator(6);
    increaseCart();
    decreaseCart();

    var urlParams = new URLSearchParams(window.location.search);
    var code = urlParams.get('detailCode');

    loadDetailCharacteristics(code);
    loadInterestProducts();
}
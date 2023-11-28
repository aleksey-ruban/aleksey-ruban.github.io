"use strict";

window.onload = function() {
    hideCategories();

    generateCartContentInfo();
    getCartCount();

    var urlParams = new URLSearchParams(window.location.search);
    var code = urlParams.get('detailCode');

    loadDetailCharacteristics(code);
    loadInterestProducts();
}
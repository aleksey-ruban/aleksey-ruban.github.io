"use strict";

window.onload = function() {
    hideCategories();

    generateCartContentInfo();
    getCartCount();

    var urlParams = new URLSearchParams(window.location.search);
    var detailCode = urlParams.get('detailCode');

    if (detailCode) {
        prepareForButOnclick(detailCode);
        loadCartContent();
    } else {
        loadCartContent();
    }

    
}
"use strict";

function synchronizeBuySections(button, operation) {
    let id = button.parentElement.parentElement.id;
    if (id == "buy-section-desktop") {
        let section = document.getElementById("buy-section-mobile");
        if (operation == 1) {
            let anotherButton = section.querySelector(".buy-button-cart");
            addToCart(anotherButton);
        } else if (operation == 2) {
            let anotherButton = section.querySelector(".button-minus");
            minusButton(anotherButton);
        } else if (operation == 3) {
            let anotherButton = section.querySelector(".button-plus");
            plusButton(anotherButton);
        }
    } else if (id == "buy-section-mobile") {
        let section = document.getElementById("buy-section-desktop");
        if (operation == 1) {
            let anotherButton = section.querySelector(".buy-button-cart");
            addToCart(anotherButton);
        } else if (operation == 2) {
            let anotherButton = section.querySelector(".button-minus");
            minusButton(anotherButton);
        } else if (operation == 3) {
            let anotherButton = section.querySelector(".button-plus");
            plusButton(anotherButton);
        }
    }
}
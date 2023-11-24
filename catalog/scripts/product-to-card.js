"use strict";

function addToCart(button) {
    let card = button.parentElement.parentElement;
    
    let buttonsContainer = card.querySelector(".buy-buttons-container");
    let adjustNumber = card.querySelector(".adjust-products-number");

    buttonsContainer.classList.add("removed");
    adjustNumber.classList.remove("removed");

    increaseCart();
}

function removeFromCart(button) {
    let card = button.parentElement.parentElement;
    
    let buttonsContainer = card.querySelector(".buy-buttons-container");
    let adjustNumber = card.querySelector(".adjust-products-number");

    buttonsContainer.classList.remove("removed");
    adjustNumber.classList.add("removed");
}

function plusButton(button) {
    let card = button.parentElement.parentElement;

    let spanNumber = card.querySelector(".adjust-products-number span");
    spanNumber.innerText = Number(spanNumber.innerText) + 1;

    increaseCart();
}

function minusButton(button) {
    let card = button.parentElement.parentElement;

    let spanNumber = card.querySelector(".adjust-products-number span");
    if (Number(spanNumber.innerText) == 1) {
        removeFromCart(button);
    } else {
        spanNumber.innerText = Number(spanNumber.innerText) - 1;
    }

    decreaseCart();
}
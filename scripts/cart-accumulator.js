"use strict";

function CartAccumulator(startingValue) {
    this.value = startingValue;
    this.increase = function() {
        this.value++;
    };
    this.decrease = function() {
        this.value--;
    }
}

var cartAccumulator;

function increaseCart() {
    cartAccumulator?.increase();
    
    let cartCounters = document.getElementsByClassName("cart-link-counter");
    for (var i = 0; i < cartCounters.length; i++) {
        cartCounters[i].innerText = cartAccumulator.value;
    }
}

function decreaseCart() {
    cartAccumulator?.decrease();
    
    let cartCounters = document.getElementsByClassName("cart-link-counter");
    for (var i = 0; i < cartCounters.length; i++) {
        cartCounters[i].innerText = cartAccumulator.value;
    }
}
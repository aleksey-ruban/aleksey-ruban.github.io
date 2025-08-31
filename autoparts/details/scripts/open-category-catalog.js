"use strict";

function openCategory(id) {
    var url = "/autoparts/catalog/autoparts.html";
    var queryString = '?category=' + encodeURIComponent(id);

    window.location.href = url + queryString;
}
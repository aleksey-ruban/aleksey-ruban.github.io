"use strict";

function openCatalog(brand) {
    var url = "/autoparts/catalog/catalog.html";
    var queryString = '?brand=' + encodeURIComponent(brand);

    window.location.href = url + queryString;
}
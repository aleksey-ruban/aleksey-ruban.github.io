"use strict";

function openCatalogCategories(category) {
    var url = "/autoparts/catalog/autoparts.html";
    var queryString = '?category=' + encodeURIComponent(category);

    window.location.href = url + queryString;
}
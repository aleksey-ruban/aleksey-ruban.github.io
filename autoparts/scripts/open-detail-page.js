"use strict";

function openDetailPage(card) {
    var detailCode = card.getAttribute("detail-code");
    var url = "/autoparts/details/detail.html";
    var queryString = '?detailCode=' + encodeURIComponent(detailCode);
        window.location.href = url + queryString;
}
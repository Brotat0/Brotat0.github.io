// ==UserScript==
// @name         [CSS] Dionysis MAL
// @namespace    CSS
// @version      0.1
// @description  -
// @author       Dionysis
// @match        https://*.myanimelist.net/animelist/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var cssUrl = 'https://brotat0.github.io/CSS/MAL/dion_mal.css';


    $(document).ready(function () {
        $('head').append('<link href="' + cssUrl + '" rel="stylesheet" type="text/css">');
    });
})();

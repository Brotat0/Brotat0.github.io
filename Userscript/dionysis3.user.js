// ==UserScript==
// @name         [CSS] Dionysis #3
// @namespace    CSS
// @version      0.1
// @description  -
// @author       Dionysis
// @match        https://*.dubtrack.fm/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var cssUrl = 'https://brotat0.github.io/CSS/dionysis3.css';
    

    $(document).ready(function () {
        $('head').append('<link href="' + cssUrl + '" rel="stylesheet" type="text/css">');
    });
})();

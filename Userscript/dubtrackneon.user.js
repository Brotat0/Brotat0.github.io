// ==UserScript==
// @name         [CSS] Dionysis - Dubtrack Neon
// @namespace    CSS
// @version      0.1
// @description  -
// @author       Dionysis
// @match        https://*.dubtrack.fm/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var cssUrl = 'https://brotat0.github.io/CSS/dubtrackneon.css';
    

    $(document).ready(function () {
        $('head').append('<link href="' + cssUrl + '" rel="stylesheet" type="text/css">');
    });
})();



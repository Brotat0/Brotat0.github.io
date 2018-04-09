// ==UserScript==
// @name         [CSS] Dionysis - Mediumpurple
// @namespace    CSS
// @version      0.1
// @description  -
// @author       Dionysis
// @match        https://*.dubtrack.fm/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var cssUrl = 'https://brotat0.github.io/CSS/mediumpurple.css';
    

    $(document).ready(function () {
        $('head').append('<link href="' + cssUrl + '" rel="stylesheet" type="text/css">');
    });
})();

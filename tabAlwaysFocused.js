// ==UserScript==
// @name         ALWAYS FOCUS
// @namespace    http://tampermonkey.net/
// @version      2024-10-31
// @description  try to take over the world!
// @author       pablorios
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener("visibilitychange", onVisibilityChange);
    function onVisibilityChange (e) {
        console.log(e);
        Object.defineProperty(document, "hidden", { value : false });
    }
})();


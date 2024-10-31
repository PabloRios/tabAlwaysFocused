// ==UserScript==
// @name         ALWAYS FOCUS
// @namespace    https://github.com/PabloRios/tabAlwaysFocused
// @version      2024-10-31
// @description  Maintain an artificial focus on browser tabs.
// @author       pablorios
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener("visibilitychange", (e) => {
        console.log(e);
        Object.defineProperty(document, "hidden", { value : false });
    });
})();


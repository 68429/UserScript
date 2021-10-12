// ==UserScript==
// @name Anti-NoCopy
// @version 0.1.0
// @description
// ==/UserScript==
! function() {
    var a = document,
        b = ["userSelect", "khtmlUserSelect", "MozUserSelect", "MsUserSelect", "WebkitUserSelect"];
    f = function() {
        return true;
    };
    Array.prototype.forEach.call(a.all, function(a) {
        a.style &&
        b.forEach(function(b) {
            a.style[b] = "auto"
        }), a.onmousedown = a.onmousemove = a.onmouseup = a.onselectstart = ""
    }), a.onmousedown = a.onmousemove = a.onmouseup = a.onselectstart = a.oncontextmenu = a.body.oncontextmenu = f;
    obs = document.all;
    for (i = 0; i < obs.length; i++) {
        obs[i].oncontextmenu = 'return true;';
        obs[i].onselectstart = 'return true;';
    }
}();

! function () {
    for (var a = function (a, b) {
            void 0 === b && (b = !0);
            var c = a.parentNode,
                d = a.parentNode.parentNode.parentNode,
                e = d.querySelector(".tab-content.active"),
                f = d.querySelector(a.getAttribute("href"));
            if (c.classList.contains("active")) return !1;
            if (d.querySelector(".tabs .active").classList.remove("active"), c.classList.add("active"), b) {
                e.classList.add("fade"), e.classList.remove("in");
                var g = function () {
                    this.classList.remove("fade"), this.classList.remove("active"), f.classList.add("active"), f.classList.add("fade"), f.offsetWidth, f.classList.add("in"), this.removeEventListener("transitionend", g), this.removeEventListener("webkitTransitionEnd", g), this.removeEventListener("oTransitionEnd", g), this.removeEventListener("mozTransitionEnd", g)
                };
                e.addEventListener("transitionend", g), e.addEventListener("webkitTransitionEnd", g), e.addEventListener("oTransitionEnd", g), e.addEventListener("mozTransitionEnd", g)
            } else f.classList.add("active"), e.classList.remove("active")
        }, b = document.querySelectorAll(".tabs a"), c = 0; c < b.length; c++) b[c].addEventListener("click", function (b) {
        a(this)
    });
    var d = function (b) {
        var c = window.location.hash,
            d = document.querySelector('a[href="' + c + '"]');
        null === d || d.classList.contains("active") || a(d, void 0 !== b)
    };
    window.addEventListener("hashchange", d), d()
}();
if (!self.define) {
    let e, s = {};
    const r = (r, i) => (r = new URL(r + ".js", i).href, s[r] || new Promise((s => {
        if ("document" in self) {
            const e = document.createElement("script");
            e.src = r, e.onload = s, document.head.appendChild(e)
        } else e = r, importScripts(r), s()
    })).then((() => {
        let e = s[r];
        if (!e) throw new Error(`Module ${r} didn’t register its module`);
        return e
    })));
    self.define = (i, n) => {
        const o = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (s[o]) return;
        let t = {};
        const c = e => r(e, o),
            l = {
                module: {
                    uri: o
                },
                exports: t,
                require: c
            };
        s[o] = Promise.all(i.map((e => l[e] || c(e)))).then((e => (n(...e), t)))
    }
}
define(["./workbox-2d118ab0"], (function (e) {
    "use strict";
    e.setCacheNameDetails({
        prefix: "vuestagram"
    }), self.addEventListener("message", (e => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
    })), e.precacheAndRoute([{
        url: "/css/app.a764b9bc.css",
        revision: null
    }, {
        url: "/index.html",
        revision: "1330384b460bf53d68e4a79edb9cf715"
    }, {
        url: "/js/app.d08d3fac.js",
        revision: null
    }, {
        url: "/js/chunk-vendors.ee3257dd.js",
        revision: null
    }, {
        url: "/manifest.json",
        revision: "6a1ad00dd7d473f746f3897d0ce8c52e"
    }, {
        url: "/robots.txt",
        revision: "b6216d61c03e6ce0c9aea6ca7808f7ca"
    }], {})
}));
//# sourceMappingURL=service-worker.js.map
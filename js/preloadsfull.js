(function () {

    if (!document.head) return;

    const host = location.hostname;
    const preloaded = new Set();

    function preload(url, as) {
        if (!url || preloaded.has(url)) return;
        preloaded.add(url);

        const l = document.createElement("link");
        l.rel = "preload";
        l.as = as;
        l.href = url;
        l.crossOrigin = "anonymous";
        document.head.appendChild(l);
    }

    function watch(matchFn, as) {
        new MutationObserver(() => {
            document.querySelectorAll(as === "style" ? "link[rel='stylesheet']" : "script[src]")
                .forEach(el => {
                    const url = el.href || el.src;
                    if (matchFn(url)) {
                        preload(url, as);
                    }
                });
        }).observe(document.documentElement, {
            childList: true,
            subtree: true
        });
    }

    // ⏳ Delay antes de iniciar (2s)
    setTimeout(() => {

        /* =======================
         * YOUTUBE
         * ======================= */
        if (host.includes("youtube.com")) {

            // CSS del player
            watch(
                url => /\/www-player.*\.css/.test(url),
                "style"
            );

            // JS del player (clave)
            watch(
                url => /\/s\/player\/.*\/base\.js/.test(url),
                "script"
            );

            // Runtime común
            watch(
                url => /\/www\/base\.js/.test(url),
                "script"
            );
        }

        /* =======================
         * GMAIL
         * ======================= */
        if (host.includes("mail.google.com")) {

            watch(
                url => url.includes("/css/"),
                "style"
            );

            watch(
                url => url.includes("/_/)") || url.includes("/mss/"),
                "script"
            );
        }

        /* =======================
         * OUTLOOK / HOTMAIL
         * ======================= */
        if (host.includes("outlook.live.com")) {

            watch(
                url => url.includes("/css/"),
                "style"
            );

            watch(
                url => url.includes("res.cdn.office.net"),
                "script"
            );
        }

        /* =======================
         * FACEBOOK / INSTAGRAM
         * ======================= */
        if (
            host.includes("facebook.com") ||
            host.includes("instagram.com")
        ) {

            watch(
                url => /rsrc\.php.*\.css/.test(url),
                "style"
            );
        }

    }, 2000);

})();

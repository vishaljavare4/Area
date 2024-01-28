!function(n) {
    "use strict";
    n(window).on("load", function() {
        var t;
        t = n(".spinner-wrapper"),
        setTimeout(function() {
            t.fadeOut(500)
        }, 500)
    }),
    n(window).on("scroll load", function() {
        20 < n(".navbar").offset().top ? n(".fixed-top").addClass("top-nav-collapse") : n(".fixed-top").removeClass("top-nav-collapse")
    }),
    n(function() {
        n(document).on("click", "a.page-scroll", function(t) {
            var o = n(this);
            n("html, body").stop().animate({
                scrollTop: n(o.attr("href")).offset().top
            }, 600, "easeInOutExpo"),
            t.preventDefault()
        })
    }),
    n(".navbar-nav li a").on("click", function(t) {
        n(this).parent().hasClass("dropdown") || n(".navbar-collapse").collapse("hide")
    }),
    n("#js-rotating").Morphext({
        animation: "fadeIn",
        separator: ",",
        speed: 2e3,
        complete: function() {}
    });
    new Swiper(".card-slider",{
        autoplay: {
            delay: 4e3,
            disableOnInteraction: !1
        },
        loop: !0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            992: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 1
            }
        }
    });
    n(".popup-with-move-anim").magnificPopup({
        type: "inline",
        fixedContentPos: !1,
        fixedBgPos: !0,
        overflowY: "auto",
        closeBtnInside: !0,
        preloader: !1,
        midClick: !0,
        removalDelay: 300,
        mainClass: "my-mfp-slide-bottom"
    });
    var o = n(".grid").isotope({
        itemSelector: ".element-item",
        layoutMode: "fitRows"
    });
    n(".filters-button-group").on("click", "a", function() {
        var t = n(this).attr("data-filter");
        o.isotope({
            filter: t
        })
    }),
    n(".button-group").each(function(t, o) {
        var e = n(o);
        e.on("click", "a", function() {
            e.find(".is-checked").removeClass("is-checked"),
            n(this).addClass("is-checked")
        })
    });
    var e = 0;
    n(window).scroll(function() {
        if (n("#counter").length) {
            var t = n("#counter").offset().top - window.innerHeight;
            0 == e && n(window).scrollTop() > t && (n(".counter-value").each(function() {
                var t = n(this)
                  , o = t.attr("data-count");
                n({
                    countNum: t.text()
                }).animate({
                    countNum: o
                }, {
                    duration: 2e3,
                    easing: "swing",
                    step: function() {
                        t.text(Math.floor(this.countNum))
                    },
                    complete: function() {
                        t.text(this.countNum)
                    }
                })
            }),
            e = 1)
        }
    }),
    n("input, textarea").keyup(function() {
        "" != n(this).val() ? n(this).addClass("notEmpty") : n(this).removeClass("notEmpty")
    }),
    n("body").prepend('<a href="#header" class="back-to-top page-scroll">Back to Top</a>');
    n(window).scroll(function() {
        700 < n(window).scrollTop() ? n("a.back-to-top").fadeIn("500") : n("a.back-to-top").fadeOut("500")
    }),
    n(".button, a, button").mouseup(function() {
        n(this).blur()
    })
}(jQuery);

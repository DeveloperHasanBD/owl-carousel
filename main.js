$('.mtshm_top_slider').owlCarousel({
            animateOut: 'animate__fadeOut',
            animateIn: 'animate__fadeIn',
            nav: false,
            loop: true,
            dots: false,
            smartSpeed: 4000,
            autoplayTimeout:42000,
            autoplay: true,
            margin: 20,
            responsiveClass: true,
            items: 1,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    loop: true,
                    smartSpeed: 4000,
                },
                700: {
                    items: 1,
                    nav: true,
                    loop: true,
                    smartSpeed: 4000,
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true,
                    smartSpeed: 4000,
                },
            }
        });

        var spb_sl_arrow = $("#spb_sl_arrow").attr('src');
        var spb_sr_arrow = $("#spb_sr_arrow").attr('src');


        $('.hm_destinazioni_top_cat_slider button.owl-prev').html("<img src=" + spb_sl_arrow + ">");
        $('.hm_destinazioni_top_cat_slider button.owl-next').html("<img src=" + spb_sr_arrow + ">");

$(".fruits_owl-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 20,
    autoHeight: true,
    nav: true,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>',
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 3,
        },
        991: {
            items: 4,
        },
    },
});

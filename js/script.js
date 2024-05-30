// izolace jQuery
// -----------------
// (function ($) {})(jQuery);
// $(function () {});
// -----------------

$(function () {
    const banner = $('.share__banner'),
        icon = $('.share__icon');

    banner.hide();

    icon.on('mouseover', function () {
        banner.show().on('mouseover', function () {
            banner.show();
        });
        banner.on('mouseleave', function () {
            banner.hide();
        });
        icon.on('mouseleave', function () {
            banner.hide();
        });
    });
});



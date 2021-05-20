(function ($) {
    const $nav = $('#navArea');
    const $btn = $('.toggle_btn');
    const $navbtn = $('.inner a');
    const open = 'open';
    let h = $(window).height();

    $('.wrap').css('display', 'none');
    $('.loader-bg ,.loader').height(h).css('display', 'flex');
    // menu open close
    $btn.on('click', function () {
        if (!$nav.hasClass(open)) {
            $nav.addClass(open);
        } else {
            $nav.removeClass(open);
        }
    });
    // mask close
    $navbtn.on('click', function () {
        $nav.removeClass(open);
    });
}
)(jQuery);
$(window).on('load', function () { //全ての読み込みが完了したら実行
    const webStorage = function () {
        const $loading = $('.loading');
        const ua = navigator.userAgent;

        if (sessionStorage.getItem('access')) {
            $('.loading').css('display', 'none')
            $('.wrap').css('display', 'flex');
        } else {
            if (ua.indexOf('iPhone') > -1 || (ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1)) {
                $('.loading').delay(1500).fadeOut(800);
            } else {
                $('.loading').delay(2500).fadeOut(800);
                $('.loading-text').delay(1500).queue(function () {
                    $(this).addClass("animation");
                });
            }
            $('.wrap').css('display', 'flex');
            sessionStorage.setItem('access', 0);
        }
    }

    webStorage();
    $('.works-slide').flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true
    });


});
function nameClick() {
    sessionStorage.removeItem('access');
    window.location.href = 'https://tsucchy.me/';
}
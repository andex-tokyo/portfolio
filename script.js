(function ($) {
    const $nav = $('#navArea');
    const $btn = $('.toggle_btn');
    const $navbtn = $('.inner a');
    const open = 'open';
    let h = $(window).height();

    $('.wrap').css('display', 'none');
    $('.loader-bg ,.loader').height(h).css('display', 'flex');
    $(".overlay-back").click(function () {
        $(".overlay").fadeOut();　/*ふわっと消える*/
    });
    $(".products").on('click', function () {
        let index = $('.products').index(this);
        $(".overlay").eq(index).fadeIn();
        $('.overlay-slide').flickity({
            // options
            cellAlign: 'left',
            contain: true
        });
    });
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
    $('.loading').delay(2500).fadeOut(800);
    $('.loading-text').delay(1500).queue(function () {
        $(this).addClass("animation");
    });
    $('.wrap').css('display', 'flex');

});

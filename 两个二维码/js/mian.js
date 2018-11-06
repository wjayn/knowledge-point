var timer = setTimeout(function () {
    $('.jiantou').hide();
}, 5000);

var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',

    onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画

    },
    onSlideChangeEnd: function (swiper) {
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    },
    onSlideChangeStart: function (swiper) {
        clearTimeout(timer);
        timer = setTimeout(function () {
            $('.jiantou').hide();
        }, 5000);
    }
});

qrcode();

function qrcode() {
    $(document).on('touchstart', '.qrcode1', function () {
        $('.realQrcode').attr('src', $(this).attr('src'));
        $('.realQrcode').css('z-index', '10');
    }).on('touchstart', '.qrcode2', function () {
        $('.realQrcode').attr('src', $(this).attr('src'));
        $('.realQrcode').css('z-index', '10');
    }).on('touchend', '.qrcode', function () {
        $('.realQrcode').css('z-index', '-1');
    }).on('touchcancel', '.qrcode', function () {
        $('.realQrcode').css('z-index', '-1');
    })
}



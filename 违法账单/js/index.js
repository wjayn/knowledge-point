var timer;
var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
        console.log(111111);
        var t = 3;

        clearInterval(timer);
        timer = setInterval(function () {
            console.log(t);
            if (t == 0) {
                clearInterval(timer);
                location.href = 'oldDriver1.html?illegalTimes=0';
            }
            t--;
        }, 1000);


    },
    onSlideChangeEnd: function (swiper) {
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
});


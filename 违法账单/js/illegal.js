// var a = 1;
// LoadSwiper();
// var timer = setInterval(function () {
//     if (a < 3) {
//         change();
//         LoadSwiper();
//         a++;
//     } else {
//         clearInterval(timer);
//     }
//
// }, 5000);
// function change() {
//     var aniClass = 'ani' + a;
//     $(`.${aniClass}`).attr('swiper-animate-effect', 'bounceOut');
//     $(`.${aniClass}`).attr('swiper-animate-delay', '1s');
//     $(`.${aniClass}`).attr('swiper-animate-duration', '0.5s');
// }
// function LoadSwiper() {
//     var mySwiper = new Swiper('.swiper-container', {
//         direction: 'vertical',
//         onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
//             swiperAnimateCache(swiper); //隐藏动画元素
//             swiperAnimate(swiper); //初始化完成开始动画
//         },
//         onSlideChangeEnd: function (swiper) {
//             swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
//         },
//         onSlideChangeStart: function (swiper) {
//             clearTimeout(timer);
//             timer = setTimeout(function () {
//                 $('.ani').attr('swiper-animate-effect', 'zoomOut');
//             }, 5000);
//         }
//     });
// }

// var illegalData = JSON.parse(localStorage.getItem('2017IllegalData'));
var illegalData = {
    "id": "17",
    "plateNumber": "陕AE60A8",
    "plateNumberType": "02",
    "engineNumber": "10224762",
    "illegalTimes": 4,
    "maxScoreOnce": 0,
    "totalScore": 0,
    "maxFinesOnce": 100,
    "totalFines": 300,
    "maxAction": "1043",
    "maxIllegalAction": "变更车道影响其他车辆行驶",
    "accumulateDays": 361,
    "district1": "610127",
    "districtName1": "西安",
    "district2": "610105",
    "districtName2": "曲江",
    "district3": null,
    "districtName3": null,
    "district4": null,
    "districtName4": null,
    "district5": null,
    "districtName5": null
};
/* 无违法 */
if (illegalData.illegalTimes == 0) {

}

$('.swiper-slide:nth-of-type(1) p:nth-of-type(1)').html(illegalData.accumulateDays + '天');// 连续无交通违法日
$('.swiper-slide:nth-of-type(2) p:nth-of-type(1)').html(illegalData.maxScoreOnce + '分');//坐高单次违法扣分
$('.swiper-slide:nth-of-type(3) p:nth-of-type(1)').html(illegalData.maxIllegalAction);//最多交通违法类型
$('.swiper-slide:nth-of-type(4) p:nth-of-type(1)').html(illegalData.maxFinesOnce + '元');//最多单笔罚金
$('.swiper-slide:nth-of-type(5) p:nth-of-type(1)').html(illegalData.totalFines + '元');//交通违法总罚金
$('.swiper-slide:nth-of-type(6) p:nth-of-type(1)').html(illegalData.totalScore + '分');//交通违法总扣分
$('.swiper-slide:nth-of-type(7) p:nth-of-type(1)').html(illegalData.illegalTimes + '次');//交通违法总次数
/* 我的驾驶轨迹 */
$('.swiper-slide:nth-of-type(8) p:nth-of-type(1)').html(illegalData.districtName1);
$('.swiper-slide:nth-of-type(8) p:nth-of-type(2)').html(illegalData.districtName2);
$('.swiper-slide:nth-of-type(8) p:nth-of-type(3)').html(illegalData.districtName1);
$('.swiper-slide:nth-of-type(8) p:nth-of-type(4)').html(illegalData.districtName1);
$('.swiper-slide:nth-of-type(8) p:nth-of-type(5)').html(illegalData.districtName1);


if (!illegalData.districtName1) {
    $('.swiper-slide:nth-of-type(8) p:nth-of-type(1)').html('陕西');
} else {
    $('.swiper-slide:nth-of-type(8) p:nth-of-type(1)').html(illegalData.districtName1);
}
// if (!!illegalData.districtName2) {
//     $('.swiper-slide:nth-of-type(9) p:nth-of-type(2)').html(illegalData.districtName2);
// }
// if (!illegalData.districtName3) {
//     $('.swiper-slide:nth-of-type(9) p:nth-of-type(3)').html(illegalData.districtName3);
// }
// if (!illegalData.districtName4) {
//     $('.swiper-slide:nth-of-type(9) p:nth-of-type(4)').html(illegalData.districtName4);
// }
// if (!illegalData.districtName5) {
//     $('.swiper-slide:nth-of-type(9) p:nth-of-type(5)').html(illegalData.districtName5);
// }


var timer;
var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function (swiper) {
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    },
    onSlideChangeStart: function () {
        var swiper9 = $('.swiper-slide:nth-of-type(8)').html();
        var swiperActive = $('.swiper-slide-active').html();
        // var t = 5;
        //
        // if (swiper9 == swiperActive) {
        //     clearInterval(timer);
        //     timer = setInterval(function () {
        //         console.log(t);
        //         if (t == 0) {
        //             clearInterval(timer);
        //             t = 5;
        //             location.href = 'oldDriver1.html?illegalTimes=' + illegalData.illegalTimes;
        //         }
        //         $('.swiper-slide:nth-of-type(8) p:nth-of-type(6)').html('倒计时还剩' + t + 's');
        //         t--;
        //     }, 1000);
        //
        // } else {
        //     clearInterval(timer);
        //     t = 5;
        //     $('.swiper-slide:nth-of-type(8) p:nth-of-type(6)').html('倒计时还剩' + t + 's');
        // }
    }
});

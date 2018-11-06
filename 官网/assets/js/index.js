$('.carousel').carousel({
    interval: 3000
});

/* 轮播新闻 */
$("#demo1").slide({mainCell: ".bd ul", effect: "top", autoPlay: true, triggerTime: 0});


//大事件动画
var eventsTop = 0;
var isGoing = true;
$(window).scroll(function (event) {
    eventsTop = $('.cars-icon').offset().top;
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    var visibleBottom = y + document.documentElement.clientHeight - 80;
    if (eventsTop < visibleBottom && isGoing == true) {
        isGoing = false;
        firstCar2013();
    }
});

var isRunning;
$(".icon-position-2013, .content-2013").mouseover(function () {
    clearInterval(isRunning);
    $(".cars-icon").stop();
    car2013();
});
$(".icon-position-2013, .content-2013").mouseout(function () {
    checkCarsPosition();
});

$(".icon-position-2014, .content-2014").mouseover(function () {
    clearInterval(isRunning);
    $(".cars-icon").stop();
    car2014();
});
$(".icon-position-2014, .content-2014").mouseout(function () {
    checkCarsPosition();
});

$(".icon-position-2015, .content-2015").mouseover(function () {
    clearInterval(isRunning);
    $(".cars-icon").stop();
    car2015();
});
$(".icon-position-2015, .content-2015").mouseout(function () {
    checkCarsPosition();
});

$(".icon-position-2016, .content-2016").mouseover(function () {
    clearInterval(isRunning);
    $(".cars-icon").stop();
    car2016();
});
$(".icon-position-2016, .content-2016").mouseout(function () {
    checkCarsPosition();
});

$(".icon-position-2017, .content-2017").mouseover(function () {
    clearInterval(isRunning);
    $(".cars-icon").stop();
    car2017();
});
$(".icon-position-2017, .content-2017").mouseout(function () {
    checkCarsPosition();
});

$(".icon-position-2018, .content-2018").mouseover(function () {
    clearInterval(isRunning);
    $(".cars-icon").stop();
    car2018();
});
$(".icon-position-2018, .content-2018").mouseout(function () {
    checkCarsPosition();
});


function checkCarsPosition() {
    isRunning = setInterval(function () {
        if (parseInt($(".cars-icon").position().left) == -100) {
            car2013();
        } else if (parseInt($(".cars-icon").offset().left) == -100) {
            car2013();
        } else if (parseInt($(".cars-icon").position().left) == 75 ||
            parseInt($(".cars-icon").position().left) == 74 ||
            parseInt($(".cars-icon").position().left) == 76) {
            car2014();
        } else if (parseInt($(".cars-icon").position().left) == 175 ||
            parseInt($(".cars-icon").position().left) == 174 ||
            parseInt($(".cars-icon").position().left) == 176) {
            car2015();
        } else if (parseInt($(".cars-icon").position().left) == 415 ||
            parseInt($(".cars-icon").position().left) == 414 ||
            parseInt($(".cars-icon").position().left) == 416) {
            car2016();
        } else if (parseInt($(".cars-icon").position().left) == 505 ||
            parseInt($(".cars-icon").position().left) == 504 ||
            parseInt($(".cars-icon").position().left) == 506) {
            car2017();
        }else if (parseInt($(".cars-icon").position().left) == 745 ||
            parseInt($(".cars-icon").position().left) == 734 ||
            parseInt($(".cars-icon").position().left) == 736) {
            car2018();
        } else if (parseInt($(".cars-icon").position().left) == 835 ||
            parseInt($(".cars-icon").position().left) == 834 ||
            parseInt($(".cars-icon").position().left) == 836) {
            carOver();
        }
    }, 2400);
}

function firstCar2013() {
    $(".cars-icon").animate({left: "75px"}, 600, "linear", function () {
        $(".year-2013").addClass("hidden");
        $(".year-2013").siblings(".events-years").removeClass("hidden");
        $(".content-2013").removeClass("hidden");
        $(".icon-position-2013").addClass("active");
        $(".content-2013").siblings('.events-content').addClass('hidden');
        $(".icon-position-2013").siblings('.map-icon01').removeClass('active');
        checkCarsPosition();
    });
}


function car2013() {
    $(".cars-icon").animate({left: "75px"}, 700, "linear", function () {
        $(".year-2013").addClass("hidden");
        $(".year-2013").siblings(".events-years").removeClass("hidden");
        $(".content-2013").removeClass("hidden");
        $(".icon-position-2013").addClass("active");
        $(".content-2013").siblings('.events-content').addClass('hidden');
        $(".icon-position-2013").siblings('.map-icon01').removeClass('active');
    });
}

function car2014() {
    $(".cars-icon").animate({left: "175px"}, 500, "linear", function () {
        $(".year-2014").addClass("hidden");
        $(".year-2014").siblings(".events-years").removeClass("hidden");
        $(".content-2014").removeClass("hidden");
        $(".icon-position-2014").addClass("active");
        $(".content-2014").siblings('.events-content').addClass('hidden');
        $(".icon-position-2014").siblings('.map-icon01').removeClass('active');
    });
}

function car2015() {
    $(".cars-icon").animate({left: "415px"}, 900, "linear", function () {
        $(".year-2015").addClass("hidden");
        $(".year-2015").siblings(".events-years").removeClass("hidden");
        $(".content-2015").removeClass("hidden");
        $(".icon-position-2015").addClass("active");
        $(".content-2015").siblings('.events-content').addClass('hidden');
        $(".icon-position-2015").siblings('.map-icon01').removeClass('active');
    });
}

function car2016() {
    $(".cars-icon").animate({left: "505px"}, 700, "linear", function () {
        $(".year-2016").addClass("hidden");
        $(".year-2016").siblings(".events-years").removeClass("hidden");
        $(".content-2016").removeClass("hidden");
        $(".icon-position-2016").addClass("active");
        $(".content-2016").siblings('.events-content').addClass('hidden');
        $(".icon-position-2016").siblings('.map-icon01').removeClass('active');
    });
}

function car2017() {
    $(".cars-icon").animate({left: "745px"}, 900, "linear", function () {
        $(".year-2017").addClass("hidden");
        $(".year-2017").siblings(".events-years").removeClass("hidden");
        $(".content-2017").removeClass("hidden");
        $(".icon-position-2017").addClass("active");
        $(".content-2017").siblings('.events-content').addClass('hidden');
        $(".icon-position-2017").siblings('.map-icon01').removeClass('active');
    });
}

function car2018() {
    $(".cars-icon").animate({left: "835px"}, 700, "linear", function () {
        $(".year-2018").addClass("hidden");
        $(".year-2018").siblings(".events-years").removeClass("hidden");
        $(".content-2018").removeClass("hidden");
        $(".icon-position-2018").addClass("active");
        $(".content-2018").siblings('.events-content').addClass('hidden');
        $(".icon-position-2018").siblings('.map-icon01').removeClass('active');
    });
}

function carOver() {
    $(".cars-icon").animate({left: "1160px"}, 900, "linear", function () {
        $(".events-years").removeClass("hidden");
        $(".events-content").addClass("hidden");
        $(".map-icon01").removeClass("active");
        $(".cars-icon").offset({
            left: -100
        });
    });
}
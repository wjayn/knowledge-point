


/* 底部二维码显示隐藏  */
$("body").on("mouseover",".wechat-icon,.weibo-icon,.app-icon",function () {
    var diy = $(this).attr("diy");
    $(".footer-"+diy+"-code").removeClass("hidden");
});
$("body").on("mouseout",".wechat-icon,.weibo-icon,.app-icon",function () {
    var diy = $(this).attr("diy");
    $(".footer-"+diy+"-code").addClass("hidden");
});


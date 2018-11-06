//适配
window.use_screen_base = '750';
(function (a, b) {
    if (typeof(use_screen_base) != "undefined") {
        var c = "orientationchange" in b ? "orientationchange" : "resize",
            d = use_screen_base.indexOf("_mate"),
            e = parseInt(use_screen_base),
            f = a.documentElement,
            g = function () {
                var a = f.clientWidth,
                    c = b.innerWidth;
                f.style.fontSize = 100 * (c / e) + "px"
            };
        if (/iPad.*OS|iPhone.*OS/.test(navigator.userAgent) && d > 0) {
            var h = a.querySelectorAll("meta[name=viewport]");
            h[0] && h[0].setAttribute("content", "width=device-width, user-scalable=no, initial-scale=" + 1 / b.devicePixelRatio)
        }
        g(), b.addEventListener(c, g, !1), delete use_screen_base
    }
})(document, window);

//js获取url参数
function getUrlParams(name, url) {
    if (!url) url = window.location.href;
    var params = {};
    var url = decodeURI(url);
    var idx = url.indexOf("?");
    if (idx > 0) {
        var queryStr = url.substring(idx + 1);
        var args = queryStr.split("&");
        for (var i = 0, a, nv; a = args[i]; i++) {
            nv = args[i] = a.split("=");
            params[nv[0]] = nv.length > 1 ? nv[1] : true;
        }
    }
    return params[name];
}

/** 显示加载流动条HTML5版
 *
 * @param {int} show     为1表示显示 为0表示隐藏
 * @returns {undefined}
 *
 */
function showloaddinghtml5(show, strs) {
    if (show == 0) {
        $("#mess_loaddinghtml5").remove();
    } else {
        if (strs == "" || strs == undefined) strs = "";
        if (!$("#mess_loaddinghtml5").attr("id")) { //不存在创建
            $("body").append('<div id="mess_loaddinghtml5"><div class="loadding"><div class="loaddingtishi">' + strs + '</div><div class="spinner"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div></div></div>'); //写入内容
        }
        $("#mess_loaddinghtml5").css("display", '');
    }
}

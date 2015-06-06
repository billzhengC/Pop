function $j(element) {
    // 获取 DOM 对象的短写，如果你在用 jQuery 也可以采用类似的方法
    return document.getElementById(element);
};

//window.addEventListener('load', function() {
//
//
//
//});



$(document).ready(function() {
    $("embed").wrap("<div id='my-comment-stage' class='container'></div>");
    $("#my-comment-stage").wrap("<div id='my-player' class='abp' style='width:480px; height:400px; background:#000;'></div>");
    // 在窗体载入完毕后再绑定
    var CM = new CommentManager($j('my-comment-stage'));
    CM.init();


    var danmakuTimeline = [{
        "mode": 1,
        "text": "",
        "stime": 0,
        "size": 25,
        "color": 0xffffff
    }];
    CM.load(danmakuTimeline);

    //val = $("#inputbox").val()

    var danmaku = {
        "mode": 1,
        //"text": val,
        "text":"HelloWorld",
        "stime": 1000,
        "size": 30,
        "color": 0xff0000
    };
    CM.send(danmaku);
    //CM.insert(danmaku);
    CM.start();
    //CM.time(1000); // 通报播放时间


    //startTime = Date.now(); // 设定起始时间
    //if (iVal >= 0) {
    //    clearInterval(iVal); // 如果之前就有定时器，把它停掉
    //}
    ////建立新的定时器
    //iVal = setInterval(function() {
    //    var playTime = Date.now() - startTime; // 用起始时间和现在时间的差模拟播放
    //    CM.time(playTime); // 通报播放时间
    //    $('txPlayPos').textContent = playTime; // 显示播放时间
    //}, 100); // 模拟播放器每 100ms 通报播放时间
});

// 开放 CM 对象到全局这样就可以在 console 终端里操控
//window.CM = CM;
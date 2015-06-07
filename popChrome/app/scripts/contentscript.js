function $j(element) {
    // 获取 DOM 对象的短写，如果你在用 jQuery 也可以采用类似的方法
    return document.getElementById(element);
}




$(document).ready(function() {
    $("embed").wrap("<div id='my-comment-stage' class='container'></div>");
    $("#my-comment-stage").wrap("<div id='my-player' class='abp' style='width:480px; height:400px; background:#000;'></div>");
    // 在窗体载入完毕后再绑定


    chrome.runtime.onConnect.addListener(function(port) {
        port.onMessage.addListener(function(msg) {
            document.write("BB");
        });
    });
    //chrome.runtime.onMessage.addListener(
    //    function(request, sender, sendResponse) {
    //        document.write("BB");
    //    });

    var CM = new CommentManager($j("my-comment-stage"));
    CM.init();


    var dan1 = [{
        "mode": 1,
        "text": "HHHHHH1111",
        "stime": 0,
        "size": 25,
        "color": 0xffffff
    }];
    CM.load(dan1);

    //val = $("#inputbox").val()

    var dan2 = {
        "mode": 1,
        //"text": val,
        "text":"HHHHHH2222",
        "stime": 1000,
        "size": 30,
        "color": 0xff0000
    };
    CM.insert(dan2);
    var dan3 = {
        "mode": 1,
        //"text": val,
        "text":"HHHHHH3333",
        "stime": 1500,
        "size": 30,
        "color": 0xff0000
    };
    CM.insert(dan3);
    //CM.insert(danmaku);
    CM.start();
    CM.time(2000);
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
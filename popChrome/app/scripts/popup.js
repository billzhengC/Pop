

function setChildTextNode(elementId, text) {
    document.getElementById(elementId).innerText = text;
}

// Tests the roundtrip time of sendRequest().
function sendDanmaku() {
    val = $("#inputbox").val();
    //chrome.runtime.sendMessage(tabs[0].id, val);


    var port = chrome.tabs.connect(1);
    port.postMessage(val);




    //chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //    document.write("Sent");
    //    chrome.tabs.sendMessage(tabs[0].id, val);
    //});
}

//// Tests the roundtrip time of Port.postMessage() after opening a channel.
//function testConnect() {
//    setChildTextNode("resultsConnect", "running...");
//
//    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
//        var timer = new chrome.Interval();
//        timer.start();
//
//        var port = chrome.tabs.connect(tabs[0].id);
//        port.postMessage({counter: 1});
//        port.onMessage.addListener(function getResp(response) {
//            if (response.counter < 1000) {
//                port.postMessage({counter: response.counter});
//            } else {
//                timer.stop();
//                var usec = Math.round(timer.microseconds() / response.counter);
//                setChildTextNode("resultsConnect", usec + "usec");
//            }
//        });
//    });
//}
$('.ui.dropdown').hide();
$("#friends").on('click', function() {
    if ($('.ui.dropdown').hasClass("active")) {
        $('.ui.dropdown').dropdown('hide');
        $('.ui.dropdown').hide();
    }
    else {
        $('.ui.dropdown').show();
        $('.ui.dropdown').dropdown();
        $('.ui.dropdown').dropdown('show');
    }

});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#testRequest').addEventListener(
        'click', sendDanmaku);
});
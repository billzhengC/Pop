

function setChildTextNode(elementId, text) {
    document.getElementById(elementId).innerText = text;
}

// Tests the roundtrip time of sendRequest().
function sendDanmaku() {
    var val = $("#inputbox").val();
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        document.write("Sent");
        chrome.tabs.sendMessage(tabs[0].id, val);
    });
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

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#testRequest').addEventListener(
        'click', sendDanmaku);
});
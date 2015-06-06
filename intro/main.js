//var $j = jQuery.noConflict(); //此处$j就代表JQuery 
//$j('#msg').hide();
function $j(element) {
	// 获取 DOM 对象的短写，如果你在用 jQuery 也可以采用类似的方法
	return document.getElementById(element);
};

window.addEventListener('load', function() {
	// 在窗体载入完毕后再绑定
	var CM = new CommentManager($j('my-comment-stage'));
	CM.init();

	// 先启用弹幕播放（之后可以停止）
	CM.start();
	// 绑定按钮们
	$j('btnLoadTimeline').addEventListener('click', function(e) {
		e.preventDefault(); // 抑制默认操作
		var danmakuTimeline = [{
			"mode": 1,
			"text": "",
			"stime": 0,
			"size": 25,
			"color": 0xffffff
		}];
		CM.load(danmakuTimeline);
	});

	$j('btnInsertTimeline').addEventListener('click', function(e) {
		e.preventDefault(); // 抑制默认操作
		var danmaku = {
			"mode": 1,
			"text": "Hello CommentCoreLibrary",
			"stime": 1000,
			"size": 30,
			"color": 0xff0000
		};
		CM.insert(danmaku);
	});

	var startTime = 0,
		iVal = -1;
	$j('btnTimer').addEventListener('click', function(e) {
		e.preventDefault(); // 抑制默认操作
		startTime = Date.now(); // 设定起始时间
		if (iVal >= 0) {
			clearInterval(iVal); // 如果之前就有定时器，把它停掉
		}
		//建立新的定时器
		iVal = setInterval(function() {
			var playTime = Date.now() - startTime; // 用起始时间和现在时间的差模拟播放
			CM.time(playTime); // 通报播放时间
			$j('txPlayPos').textContent = playTime; // 显示播放时间
		}, 100); // 模拟播放器每 100ms 通报播放时间
	});


	$(document).ready(function() {

		alert("赞")
		$('#getContent').click(function(e) {
			$("cmt").bind("click", function(e) {
				alert("赞")
			})

			e.preventDefault(); // 抑制默认操作
			var danmakuTimeline = [{
				"mode": 1,
				"text": "",
				"stime": 0,
				"size": 25,
				"color": 0xffffff
			}];
			CM.load(danmakuTimeline);

			val = $("#inputbox").val()
			e.preventDefault(); // 抑制默认操作
			var danmaku = {
				"mode": 1,
				"text": val,
				"stime": 40,
				"size": 30,
				"color": 0xff0000
			};
			CM.insert(danmaku);

			$("cmt").bind("click", function(e) {
				alert("赞")
			})

			e.preventDefault(); // 抑制默认操作
			startTime = Date.now(); // 设定起始时间
			if (iVal >= 0) {
				clearInterval(iVal); // 如果之前就有定时器，把它停掉
			}
			//建立新的定时器
			iVal = setInterval(function() {
				var playTime = Date.now() - startTime; // 用起始时间和现在时间的差模拟播放
				CM.time(playTime); // 通报播放时间
				$j('txPlayPos').textContent = playTime; // 显示播放时间
			}, 20); // 模拟播放器每 100ms 通报播放时间

			MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
			var i = 0
			var observer = new MutationObserver(function(mutations, observer) {
				// fired when a mutation occurs
				console.log(12345);
				i += 1
				if ($(".cmt").length = 0) {}

				$(".cmt").unbind()
				$(".cmt").bind("click", function(e) {
					$(this).animate({
						opacity: 0.25,
						left: '+=50',
						height: 'toggle'
					}, 500, function() {
						// Animation complete.
					});
					console.log("zan");
					console.log($(this).text())
				})
			});

			// define what element should be observed by the observer
			// and what types of mutations trigger the callback
			observer.observe(document.getElementById("my-comment-stage"), {
				//subtree: true,
				//attributes: true,
				childList: true
					//...
			});

			//			$("#my-comment-stage").on("change",function(e) {
			//				alert("赞");
			//				$("cmt").bind("click", function(e) {
			//					alert("赞");
			//				})
			//			})
		})
	})

	// 开放 CM 对象到全局这样就可以在 console 终端里操控
	window.CM = CM;
});
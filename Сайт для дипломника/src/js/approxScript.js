{
	$(document).ready(function () {
		var cont_left = $("#images").positiion().left;
		$("a img").hover(function () {
			$(this).parent().parent().css("z-index", 1);
			$(this).animate({
				height: "340",
				width: "255",
				left: "-=50",
				top: "-=50"

			}, "fast");
		}, function () {
			$(this).parent().parent().css("z-index", 0);
			$(this).animate({
				height: "150",
				width: "150",
				left: "+=50",
				top: "+=50"
			}, "fast");
		});
		$(".dip").each(function (index) {
			var left = (index * 160) + cont_left;
			$(this).css("left", left + "px");
		});

	});
}
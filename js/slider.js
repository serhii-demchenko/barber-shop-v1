$(document).ready(function () {
	$(".header-slider").slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 1500,
		arrows: true,
	});
	// плавное перемещение страницы к нужному блоку
	$("a.go").click(function (e) {
		e.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({ scrollTop: destination }, 800);
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$(".scroll-up").fadeIn();
		} else {
			$(".scroll-up").fadeOut();
		}
	});
});

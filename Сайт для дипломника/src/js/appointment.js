$(document).ready(function () {
	$('#app').click(function (event) {
		$('.appointment_frame2.disapp,.appointment2, body').toggleClass('appear');
		$('body').toggleClass('lock');
	});
	$('#but').click(function (event) {
		$('.appointment_frame2.disapp,.appointment2, body').toggleClass('');
	});

});

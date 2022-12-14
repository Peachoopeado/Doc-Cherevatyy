$(document).ready(function () {
	$('#app,.appointment_frame2.disapp,.service_button').click(function (event) {
		$('.appointment_frame2.disapp,.appointment2.disapp, body').toggleClass('appear');
		$('body').toggleClass('lock');
	});
	$('.service_frame').click(function (event) {
		$('.appointment_frame2.disapp,.appointment2, body').toggleClass('');
	});

});

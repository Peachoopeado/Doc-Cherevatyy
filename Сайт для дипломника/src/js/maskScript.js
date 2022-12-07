$(function () {
	$("#user_phone_input").mask("+7(999) 999-99-99")
})

function noDigits(event) {
	if ("1234567890".indexOf(event.key) != -1)
		event.preventDefault();
}
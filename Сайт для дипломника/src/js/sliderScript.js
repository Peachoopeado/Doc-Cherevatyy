const slider = ItcSlider.getOrCreateInstance('itc-slider');
document.addEventListener('DOMContentLoaded', () => {
	const slider = ItcSlider.getOrCreateInstance('.itc-slider');
});

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.slider').forEach((el) => {
		ItcSlider.getOrCreateInstance(el);
	});
});

ItcSlider.getOrCreateInstance('.itc-slider', {
	loop: true,
	swipe: true
});
this.#state.elListItem.forEach((el, index) => {
	this.#state.els.push({ el, index, order: index, translate: 0 });
});
this.#state.intervalId = setInterval(() => {
	this.#state.direction = 'next';
	this.#move();
}, this.#config.interval);



Object.keys(this.#state.events).forEach((type) => {
	if (this.#state.events[type][2]) {
		const el = this.#state.events[type][0];
		const fn = this.#state.events[type][1];
		el.addEventListener(type, fn);
	}
});
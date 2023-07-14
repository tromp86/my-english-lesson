const scrollAnimations = (entries, observer) => {
	entries.forEach((entry) => {
		// анимируем, если элемент целиком попадает в отслеживаемую область
		if(entry.isIntersecting && entry.intersectionRatio == 1) {
			entry.target.classList.add('box--visible');
		} else {
			entry.target.classList.remove('box--visible');
		}
	});
}

// создаём обсервер с параметрами
const options = {
	threshold: 1.0,
};
const observer = new IntersectionObserver(scrollAnimations, options);

const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
	observer.observe(box);
});

const boxesWords = document.querySelectorAll('.boxWords');
boxesWords.forEach((boxWords) => {
	observer.observe(boxWords);
});
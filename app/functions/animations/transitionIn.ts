import anime from "animejs";
import magicScroll from "../magicScroll/magicScroll";
import range from "../range/range";

export default function transitionIn(
	id: string,
	progress: number,
	height: string
) {
	let animation = anime({
		targets: id,
		translateY: [200, 0],
		opacity: [0, 1],
		easing: "easeInOutBack",
		autoplay: false,
	});
	let init = 0,
		final = (window.innerHeight * 100) / parseInt(height);
	if (progress > init) {
		animation.seek(
			magicScroll(range(progress, init, final), 0, 100) * animation.duration
		);
	}
}

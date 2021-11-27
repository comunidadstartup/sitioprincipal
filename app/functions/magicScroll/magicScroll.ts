/**
 * 
 * @param progress 
 * @param base 
 * @param limit 
 * @description Defines a range to scale the percentage
 */
function magicScroll(progress: number, base: number, limit: number): number;
function magicScroll(
	progress: number,
	base: number,
	limit: number,
	sufix?: string
): string;
function magicScroll(
	progress: number,
	base: number,
	limit: number,
	sufix?: string
) {
	let calc = (progress / 100) * limit;
	return calc > base
		? sufix
			? calc + sufix
			: calc
		: sufix
		? base + sufix
		: base;
}

export default magicScroll;

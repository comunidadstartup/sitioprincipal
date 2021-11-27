/**
 * 
 * @param num 
 * @param base 
 * @param target 
 * @returns 
 * @description Utilizes a percentage to represent the progress in a given range
 */
export default function relative(num: number, base: number, target: number) {
	let range = base > target ? base - target : target - base;
	let rel = (num * range) / 100;
	return target > base ? base + rel : base - rel;
}

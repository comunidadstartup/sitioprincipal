export default function range(progress: number, init: number, end: number) {
	return (progress - init) / (end - init);
}

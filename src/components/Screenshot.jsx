import { Carousel } from './Carousel'
export const Screenshot = () => {
	return (
		<div className="max-w-6xl mx-auto px-5 py-32" >
		<h2 className="text-center text-2xl text-blue-600 font-bold">A beautiful way to present</h2>
		<h1 className="text-5xl text-center font-extrabold text-[#1a002d] my-5">App screenshots</h1>
		<Carousel />
		</div>
	)
}
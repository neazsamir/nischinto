import { FaCheckCircle } from "react-icons/fa";

export const Card = () => {
	const items = ["Lowest fees in market", "Fast and secure transactions", "Fast and secure transactions"]
	return (
		<div className="max-w-6xl mx-auto py-32">
		<div className="lg:grid grid-cols-2 items-center gap-5 mx-auto max-w-[600px] lg:max-w-max px-5">
		<figure className="relative hidden lg:block" >
		<img src="https://softivuspro.com/mosto/money-transfer/assets/images/design/card-bg.png" alt="card bg" />
		<img className="absolute top-64 right-0 h-[200px] animate-moveCard" src="https://softivuspro.com/mosto/money-transfer/assets/images/design/card-one.png" alt="card" />
		<img className="absolute bottom-[270px] left-0 h-[200px] animate-moveCard" src="https://softivuspro.com/mosto/money-transfer/assets/images/design/card-two.png" alt="card" />
		</figure>
		<div>
			<h2 className="text-2xl text-blue-600 font-bold">Get Your Card</h2>
			<h1 className="text-5xl font-extrabold text-[#1a002d] my-5">One card for all your online payments</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique tincidunt arcu.</p>
					<ul>
					{items.map((item, i) => {
						return (
									<li key={i} className="flex items-center gap-3 text-2xl font-bold mt-3">
										<FaCheckCircle className="text-[#00d831]" />
										{item}
									</li>
								)
							})}
				</ul>
		</div>
		</div>
		</div>
	)
}
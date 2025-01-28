import { FaCheckCircle } from "react-icons/fa";

export const Wallet = () => {
	const items = ["Lowest fees in market", "Fast and secure transactions", "Fast and secure transactions"]
	return (
		<div className="bg-[url(https://softivuspro.com/mosto/money-transfer/assets/images/wallet/wallet-bg.png)] bg-no-repeat bg-cover bg-center">
			<div className="max-w-6xl mx-auto py-32">
				<div className="lg:grid grid-cols-2 items-center max-w-[600px] mx-auto lg:max-w-max px-5 relative">
					<div>
						<h2 className="text-2xl font-bold text-blue-600">Buy growing crypto right from your phone</h2>
						<h1 className="my-5 text-5xl font-extrabold text-[##110028]">A crypto wallet from the future</h1>
						<p className="mb-5">Dictum fusce ut placerat orci nulla pellentesque nulla facilisi nullam vehicula ipsum eu volutpat odio facilisis.</p>
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
					<figure className="hidden lg:block">
						<img src="https://softivuspro.com/mosto/money-transfer/assets/images/wallet/wallet.png" alt="image link broken" />
					</figure>
				</div>
			</div>
		</div>
	)
}
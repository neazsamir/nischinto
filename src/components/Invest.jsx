export const Invest = () => {
	const items = [
		{
		img: "https://softivuspro.com/mosto/money-transfer/assets/images/invest/built.png",
		name: "Built-in digital wallet",
		alt: "wallet"
	},
		{
		img: "https://softivuspro.com/mosto/money-transfer/assets/images/invest/cards.png",
		name: "Virtual credit cards",
		alt: "card"
	},
		{
		img: "https://softivuspro.com/mosto/money-transfer/assets/images/invest/payments.png",
		name: "Send & Receive payments",
		alt: "payments"
	},
		{
		img: "https://softivuspro.com/mosto/money-transfer/assets/images/invest/reports.png",
		name: "Monthly & weekly reports",
		alt: "reports"
	},
	]
	return (
		<div className="max-w-[600px] lg:max-w-7xl mx-auto my-32 px-5" >
			<div className="lg:grid lg:grid-cols-2 items-center" >
			<figure className="hidden lg:block" >
			<img className="drop-shadow-glowDark" src="https://i.imgur.com/AHgR3ac.png" alt="invest" />
			</figure>
			<div>
				<h2 className="text-2xl font-bold text-blue-600" >Payments app for Everyday essentials</h2>
				<h1 className="text-4xl lg:text-6xl leading-[40px] lg:leading-[70px] font-extrabold text-[#0b001a] mt-5" >Send, receive and invest money right from your phone</h1>
				<p className="my-5 lg:my-10">Make day-to-day spending a breeze with all things money in one place</p>
				<div>
				{
					items.map(({name, img, alt}, i) => {
		return	<div key={i} className="flex gap-5 items-center my-5 lg:my-10" >
					<figure>
						<img className="rounded-2xl" src={img} alt={alt} />
					</figure>
					<div className="flex justify-between flex-col lg:gap-2" >
						<h3 className="text-[18px] md:text-[20px] lg:text-2xl font-bold" >{name}</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
					</div>
					</div>
					})
				}
				</div>
			</div>
			</div>
		</div>
	)
}
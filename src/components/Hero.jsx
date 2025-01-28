export const Hero = () => {
	return (
		<div className="bg-[url(https://softivuspro.com/mosto/money-transfer/assets/images/hero/hero-bg.png)] bg-no-repeat bg-cover bg-center" >
		<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 px-5" >
			<div>
			<div className="my-16 lg:mt-32 lg:mb-64 max-w-[600px] lg:max-w-max mx-auto" >
				<h3 className="font-bold text-2xl  text-blue-600" >Security - Privacy - User friendly</h3>
				<h1 className="lg:text-6xl text-4xl font-extrabold my-5 text-[#0f0024]" >One App, All Things Money</h1>
				<p className="mt-5 text-[20px]" >From easy money management,crypto investments and trade. Open your mosto account.</p>
				<div className="flex gap-5 mt-5">
					<a>
						<img src="https://softivuspro.com/mosto/money-transfer/assets/images/play-store.png" alt="play store" />
					</a>
					<a>
						<img src="https://softivuspro.com/mosto/money-transfer/assets/images/app-store.png" alt="apple store" />
					</a>
			</div>
			</div>
			</div>
			<div className="h-full relative hidden lg:block" >
				<img className="h-[600px] absolute bottom-0 right-0 z-20" src="https://softivuspro.com/mosto/money-transfer/assets/images/hero/mockup.png" alt="mockup" />
				<img className="absolute -right-32 animate-spin" src="https://softivuspro.com/mosto/money-transfer/assets/images/hero/circle.png" alt="ring" />
				<img className="absolute top-32 -right-[100px] animate-move-left-right" src="https://softivuspro.com/mosto/money-transfer/assets/images/hero/wallet.png" alt="ring" />
			</div>
		</div>
		</div>
	)
}
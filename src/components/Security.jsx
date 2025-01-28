export const Security = () => {
	return (
		<div className="max-w-6xl mx-auto mt-16" >
			<div className="lg:grid grid-cols-2 gap-10 items-center max-w-[600px] lg:max-w-max px-5 mx-auto" >
			<figure className="hidden lg:block" >
			<img src="https://softivuspro.com/mosto/money-transfer/assets/images/design/design-illustration.png" alt="image link broken" />
			</figure>
			<div>
				<h2 className="text-2xl font-bold text-blue-600">Security that’s strong as oak</h2>
				<h1 className="text-5xl font-extrabold text-[#1a002d] my-5" >Bulletproof security by design</h1>
				<p>We use bank-level security, 256-bit encryption, and allow two-factor authentication for added security.</p>
				<div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 px-12 sm:px-16 lg:pl-0 lg:pr-20" >
					<div className="p-4 rounded-2xl shadow-everySide bg-[#FFECFF]" >
					<h3 className="text-[20px] text-center font-bold mb-2">0</h3>
					<p className="font-bold text-center">Security incidents</p>
					</div>
					<div className="p-4 rounded-2xl shadow-everySide bg-[#E1F3FD]" >
					<h3 className="text-[20px] text-center font-bold mb-2">256 bits</h3>
					<p className="font-bold text-center">AES encryption</p>
					</div>
					<div className="p-4 rounded-2xl shadow-everySide bg-[#FFE9EB]" >
					<h3 className="text-[20px] text-center font-bold mb-2">CISA+</h3>
					<p className="font-bold text-center">Security certification</p>
					</div>
					<div className="p-4 rounded-2xl shadow-everySide bg-[#EAFFF8]" >
					<h3 className="text-[20px] text-center font-bold mb-2">100%</h3>
					<p className="font-bold text-center">Encrypted data</p>
					</div>
				</div>
			</div>
			</div>
		</div>
	)
}
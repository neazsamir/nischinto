import Marquee from 'react-fast-marquee'

export const WhyUs = () => {
	const items = [
		{
			img: 'https://softivuspro.com/mosto/money-transfer/assets/images/choice/hidden.png',
			name: 'No hidden fees',
		},
		{
			img: 'https://softivuspro.com/mosto/money-transfer/assets/images/choice/crypto.png',
			name: 'Crypto support',
		},
		{
			img: 'https://softivuspro.com/mosto/money-transfer/assets/images/choice/support.png',
			name: 'World class Support',
		},
		{
			img: 'https://softivuspro.com/mosto/money-transfer/assets/images/choice/payments.png',
			name: 'Secure payments',
		},
		{
			img: 'https://softivuspro.com/mosto/money-transfer/assets/images/choice/withdrawal.png',
			name: 'Free cash withdrawal',
		},
		{
			img: 'https://softivuspro.com/mosto/money-transfer/assets/images/choice/investing.png',
			name: 'Investing features',
		},
		{
			img: 'https://softivuspro.com/mosto/money-transfer/assets/images/choice/payments.png',
			name: 'Secure payments',
		},
		]
	return (
		<div className="bg-[url(https://softivuspro.com/mosto/money-transfer/assets/images/choice/choice-bg.png)] bg-no-repeat bg-cover bg-center mt-16" >
		<div className="max-w-6xl mx-auto overflow-x-hidden" >
		<div>
		<div className="max-w-[600px] mx-auto py-32" >
		<h3 className="text-center text-2xl text-blue-600 font-bold my-5">Why Nischinto</h3>
		<h1 className="text-4xl lg:text-5xl text-center font-extrabold text-[#1a002d] mb-5 leading-[40px] lg:leading-[70px]">Learn Why Nischinto is the Right Choice for you</h1>
		<p className="text-center mb-5">Join 16+ mil people who already trust us with their money</p>
		</div>
		<Marquee>
		{
		items.map(({img, name}, i) => {
			return <div key={i} className="flex items-center justify-center flex-col w-[200px] mx-2" >
		<img src={img} alt={name} />
		<h2 className="text-center text-2xl text-[#1a002d]">{name}</h2>
		<p className="text-center text-[15px] mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
		</div>
		})
		}
		</Marquee>
		</div>
		</div>
		</div>
	)
}
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Client } from './components/Client'
import { Invest } from './components/Invest'
import { Wallet } from './components/Wallet'
import { Security } from './components/Security'
import { WhyUs } from './components/WhyUs'
import { Card } from './components/Card'
import { Tutorial } from './components/Tutorial'
import { Screenshot } from './components/Screenshot'
export const App = () => {
	 return (
	 	<div className="overflow-hidden" >
	 		<section id="header" >
	 		<Header />
	 		</section>
	 		<section id="hero">
	 		<Hero />
	 		</section>
	 		<section id="client">
	 		<Client />
	 		</section>
	 		<section id="invest">
	 		<Invest />
	 		</section>
	 		<section id="wallet">
	 		<Wallet />
	 		</section>
	 		<section id="security">
	 		<Security />
	 		</section>
	 		<section id="whyus">
	 		<WhyUs />
	 		</section>
	 		<section id="card">
	 		<Card />
	 		</section>
	 		<section id="tutorial">
	 		<Tutorial />
	 		</section>
	 		<section id="screenshot">
	 		<Screenshot />
	 		</section>
	 	</div>
	 )
}
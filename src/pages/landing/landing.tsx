import {
	Hero,
	Slider,
	WhyWe,
	Menu,
	Branches,
	NavBar,
	Video,
	Carousel,
	Footer,
} from '../../components'
import AboutUs from '../../components/about-us/about-us'

const Landing = () => (
	<>
		<NavBar />
		<Hero />
		<Slider />
		<WhyWe />
		{/* <Menu /> */}
		<Carousel />
		<Branches />
		<Video />
		<AboutUs />
		<Footer />
	</>
)

export default Landing

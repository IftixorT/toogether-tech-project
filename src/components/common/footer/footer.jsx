import { FC } from 'react'
import './footer.scss'

import facebook from '../../../assets/images/footer/facebook.svg'
import twitter from '../../../assets/images/footer/twitter.svg'
import telegram from '../../../assets/images/footer/telegram.svg'
import instagram from '../../../assets/images/footer/instagram.svg'
import logo from '../../../assets/images/navbar/logo.png'




function Footer() {

	return (
		<footer className="footer bg-dark d-flex align-items-center justify-space-between">
			<div className="about d-flex flex-column">
				<img src={logo} alt="Logo" className="logo" />

				<h6 className="about">
				2022 Supreme Grill - All rights reserved
				</h6>
				<div className="messengers d-flex">
					<div className="messengerBg bg-white">
						<img src={facebook} alt="facebook" />
					</div>
					<div className="messengerBg bg-white">
						<img src={twitter} alt="twitter" />
					</div>
					<div className="messengerBg bg-white">
						<img src={telegram} alt="telegram" />
					</div>
					<div className="messengerBg bg-white">
						<img src={instagram} alt="instagram" />
					</div>
				</div>
			</div>
			<div className="menus d-flex">
				<div className="_menu">
					<a href="/">Home</a>
					<a href="/">Menu</a>

				</div>
				<div className="_menu">
					<h6>About</h6>
					<h6>Our Story</h6>
					<h6>Benefits</h6>
					<h6>Team</h6>
					<h6>Careers</h6>
				</div>
			</div>
		</footer>
	)
}

export default Footer

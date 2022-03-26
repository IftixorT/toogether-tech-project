import {FC} from 'react'
import './footer.scss'

import facebook from '../../../assets/images/footer/facebook.svg'
import twitter from '../../../assets/images/footer/twitter.svg'
import telegram from '../../../assets/images/footer/telegram.svg'
import instagram from '../../../assets/images/footer/instagram.svg'

import logo from '../../../assets/images/navbar/logo.png'


export interface FooterProps {}

const Footer: FC<FooterProps> = () => {
	return (
		<footer className="footer bg-dark d-flex align-items-center justify-space-between">
			<div className="about d-flex flex-column">
				<h3 className="logo text-warning font-weight-lighter">
				<img src={logo} alt="Logo" className="logo" />
				</h3>
				<h6 className="about">
				2022 Supreme Grill - All rights reserved
				</h6>
				<div className="messengers d-flex">
					<div className="messengerBg bg-white">
						<img src={facebook} alt="facebook" />
						<a href=""></a>
					</div>
					<div className="messengerBg bg-white">
						<img src={twitter} alt="twitter" />
						<a href=""></a>
					</div>
					<div className="messengerBg bg-white">
						<img src={telegram} alt="telegram" />
						<a href="@supreme.grill"></a>
					</div>
					<div className="messengerBg bg-white">
						<img src={instagram} alt="instagram" />
						<a href="@supreme.grill"></a>
					</div>
				</div>
			</div>
			<div className="menus d-flex">
				<div className="_menu">
					<h6><a href="/">Home</a></h6>
					<h6><a href="/#section_menu">Menu</a></h6>
					<h6><a href="/#section_branch">Branches</a></h6>
				</div>
				<div className="_menu">
				<h6><a href="/#section_about">About</a></h6>
				<h6><a href="/partnership">Partnership</a></h6>
				</div>
			</div>
		</footer>
	)
}

export default Footer

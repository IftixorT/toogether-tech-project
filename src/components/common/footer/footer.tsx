import {FC} from 'react'
import './footer.scss'
import {Link} from 'react-router-dom'
import facebook from '../../../assets/images/footer/facebook.svg'
import twitter from '../../../assets/images/footer/twitter.svg'
import telegram from '../../../assets/images/footer/telegram.svg'
import instagram from '../../../assets/images/footer/instagram.svg'
import logoml from '../../../assets/images/logo-ml.png'

export interface FooterProps {}

const Footer: FC<FooterProps> = () => {
	return (
		<div className="footer-section">
			<div className="footer-section__container">
				<div className="footer">
					<div className="footer__left">
						<h1 className="footer__left__title">
							<img src={logoml} />
						</h1>
						<h1 className="footer__left__subtitle">
							Copyright © 2022. Supreme Doner Kebab. All rights reserved.
						</h1>
						<h1 className="footer__left__social">
							<a
								href="https://www.facebook.com/Supreme-D%C3%B6ner-Kebab-101841565467412/"
								target="blank"
							>
								<img src={facebook} alt="img" />
							</a>
							<a href="#">
								<img src={twitter} alt="img" />
							</a>
							<a href="#">
								<img src={telegram} alt="img" />
							</a>
							<a href="https://www.instagram.com/supreme.grill" target="blank">
								<img src={instagram} alt="img" />
							</a>
						</h1>
					</div>
					<div className="footer__right">
						<div className="footer__right__item">
							<Link to="/">
								<a>Home</a>
							</Link>
							<Link to="/menu">
								<a>Menu</a>
							</Link>
							<a href="#">
								<a>Our branches</a>
							</a>
						</div>
						<div className="footer__right__item">
							<a href="#">
								<a>About</a>
							</a>
							<Link to="/partnership">
								<a>Partnership</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer

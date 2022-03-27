import classes from './slider.module.css'
import Img1 from '../../../../assets/images/menu-gallery/menu-gallery-img-1.jpg'
import Img2 from '../../../../assets/images/menu-gallery/menu-gallery-img-2.jpg'
import Img3 from '../../../../assets/images/menu-gallery/menu-gallery-img-3.jpg'
import Img4 from '../../../../assets/images/menu-gallery/menu-gallery-img-4.jpg'
import Img5 from '../../../../assets/images/menu-gallery/menu-gallery-img-5.jpg'
import Img6 from '../../../../assets/images/menu-gallery/menu-gallery-img-6.jpg'
import Img7 from '../../../../assets/images/menu-gallery/menu-gallery-img-7.jpg'
// import Img8 from '../../../../assets/images/menu-gallery/menu-gallery-img-8.jpg'
import Img9 from '../../../../assets/images/menu-gallery/menu-gallery-img-9.jpg'

import {Swiper, SwiperSlide} from 'swiper/react/swiper-react.js'
import 'swiper/swiper.scss' // core Swiper
import 'swiper/modules/navigation/navigation.scss' // Navigation module
import 'swiper/modules/pagination/pagination.scss' // Pagination module

import SwiperCore, {Autoplay, Navigation} from 'swiper'
import SliderBox from './slider-box'

SwiperCore.use([Navigation, Autoplay])
function Carousel() {
	const data = [
		{
			img: Img1,
		},
		{
			img: Img2,
		},
		{
			img: Img3,
		},

		{
			img: Img4,
		},

		{
			img: Img5,
		},

		{
			img: Img6,
		},

		{
			img: Img7,
		},
		{
			img: Img9,
		},
	]
	let next = document.querySelector('.swiper-button-next')
	console.log(next)

	return (
		<div className={classes.slider}>
			<h2> Gallery</h2>
			<div className={classes.slide}>
				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					navigation={true}
					loop={true}
					// eslint-disable-next-line react/jsx-no-duplicate-props
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					breakpoints={{
						600: {
							slidesPerView: 1,
							spaceBetween: -40,
						},
						700: {
							slidesPerView: 1,
							spaceBetween: -50,
						},
						1024: {
							slidesPerView: 1,
							spaceBetween: -50,
						},
						1250: {
							slidesPerView: 1,
							spaceBetween: -60,
						},

						1500: {
							slidesPerView: 1,
							spaceBetween: -80,
						},
					}}
					className={classes.mySwiper}
				>
					{data.map((data, idx) => {
						return (
							<SwiperSlide className={classes.prev} key={idx}>
								<SliderBox data={data} />
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</div>
	)
}

export default Carousel

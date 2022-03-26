import classes from './slider.module.css'

function SliderBox({data}) {
 return (
 	<div className={classes.slideBox}>
									<img className={data.class} src={data.img} alt="food" />
								</div>
 )
}

export default SliderBox

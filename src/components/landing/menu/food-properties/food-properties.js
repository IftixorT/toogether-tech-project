import FoodPropertyCard from './style'

const FoodProperties = ({ category }) => {
	console.log(category, "data")
	return (
		<>
			{category?.items.map((item) => {
				return (
					<>
						<div className="container">
							<div className="row">
								<div className="col-md-12">
								<FoodPropertyCard key={item?.id} className="food-property">
									<div className='food-property-card'>
										<div>
											<p className="recommend">Recomended</p>
											<h3 className="food-name">{item?.subtitle}</h3>
										</div>
										<div className="cost">{item?.price}</div>
									</div>
									<p className="data">{item?.description}</p>
								</FoodPropertyCard>
								</div>
							</div>
						</div>
					</>
				)

			})}
		</>
	)
}

export default FoodProperties

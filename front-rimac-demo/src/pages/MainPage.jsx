import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllInsurances } from '../redux/actions/insuranceActions'
import AppFrame from '../components/AppFrame'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { HiHome } from 'react-icons/hi'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const MainPage = ({insurances, getAllInsurances}) => {

	useEffect(() => { getAllInsurances() }, [getAllInsurances])

	return (
			<AppFrame>
				<Breadcrumbs separator="›" aria-label="breadcrumb" style={{ 
					margin: "30px 0 40px 0",
					color: "#676f8f",
					fontSize: 13,
				}}>
					<Link underline="hover" color="inherit" href="#">
						<HiHome />
					</Link>
					<Link underline="hover" color="inherit" href="#">
						Mis seguros
					</Link>
				</Breadcrumbs>
				<Typography variant="h4" color="inherit" style={{fontWeight:"bold"}}>Mis seguros</Typography>
				<Typography variant="body1" color="inherit">Conoce y gestiona tus seguros desde aquí</Typography>
				<Grid container item xs={12} spacing={3} style={{marginTop:40}}>
					{
						insurances.map((item) => (
							<Grid item xs={4} key={item.insuranceId}>
								<Card sx={{ minWidth: 275 }}>
									<CardContent>
										<div className="expired-policy-group expired-policy-group--info">
											<span className="icon-round"></span>
											<span className="expired-policy"> Vigente hasta el {item.dateUntil}</span>
										</div>
										<Typography variant='body2'>PLACA {item.plate}</Typography>
										<Typography variant="h6" component="div">
											Seguro Vehicular
										</Typography>
									</CardContent>
									<CardActions style={{flexDirection: "row", justifyContent: "flex-end", marginBottom:30, marginRight:30}}>
										<Link underline="hover" color="inherit"  href={`/detalle/${item.insuranceId}`} to={`/detalle/${item.insuranceId}`} style={{color: "#6769ff"}}>
											Mis seguros {'>'}
										</Link>
									</CardActions>
								</Card>
							</Grid>
						))
					}
				</Grid>
			</AppFrame>	
			
	)
}

const mapStateToProps = state => ({
	insurances: state.insurances.all
})

const mapDispachToProps = {
	getAllInsurances
}

export default connect(mapStateToProps, mapDispachToProps)(MainPage)
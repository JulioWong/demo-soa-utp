import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchInsurances } from '../redux/actions/insuranceActions'

import AppFrame from '../components/AppFrame'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { HiHome } from 'react-icons/hi'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const MainPage = ({insurances, fetchInsurances}) => {

	useEffect(() => { fetchInsurances() }, [fetchInsurances])

	return (
			<AppFrame>
				<Breadcrumbs separator="›" aria-label="breadcrumb" class="breadcrumb">
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
						insurances.data.map((item) => (
							<Grid item xs={4}>
								<Card sx={{ minWidth: 275 }}>
									<CardContent>
										<div class="expired-policy-group expired-policy-group--info">
											<span class="icon-round"></span>
											<span class="expired-policy"> Vigente hasta el {item.dateUntil}</span>
										</div>
										<Typography variant='body2'>PLACA {item.plate}</Typography>
										<Typography variant="h6" component="div">
											Seguro Vehicular
										</Typography>
									</CardContent>
									<CardActions style={{flexDirection: "row", justifyContent: "flex-end", marginBottom:30, marginRight:30}}>
										<Link underline="hover" color="inherit" href="/detalle/1" class="detalle">
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
	insurances: state.allInsurances.payload
})

const mapDispachToProps = {
	fetchInsurances
}

export default connect(mapStateToProps, mapDispachToProps)(MainPage)
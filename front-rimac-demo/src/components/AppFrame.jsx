import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import { Link as LinkRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

const AppFrame = ({ children }) => {

  const pages = ['Mis seguros', 'Servicios', 'Beneficios', 'Trámites', 'Pagos'];

  return (
    <Grid container justifyContent="center" alignItems="center">
      <AppBar position="static" style={{ background: '#EF3340' }}>
				<Container maxWidth="lg">
					<Grid container spacing={4} justifyContent="space-between" alignItems="center">
						<Grid item md={4}>
							<IconButton color="inherit" aria-label="menu">
								<Link 
								component={LinkRouter}
								to="/" 
								color="inherit" 
								aria-label="menu">
									<img src="/D_Logo_Mundorimac.svg" alt='logo'/>
								</Link>
							</IconButton>
						</Grid>
						<Grid container item md={8}>
							<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
								{pages.map((page) => (
									<Button
										key={page}
										color="inherit"
									>
										{page}
									</Button>
								))}
							</Box>
						</Grid>
					</Grid>
				</Container>
      </AppBar>
      <Container maxWidth="lg">{children}</Container>
    </Grid>
  )
}

AppFrame.propTypes = {
  children: PropTypes.node,
}

export default AppFrame
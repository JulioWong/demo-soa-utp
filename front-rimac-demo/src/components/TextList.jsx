import React from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const TextList = () => (
  <Grid container item direction='column' spacing={3}>
    <Grid item>
      <Typography display="block" variant="subtitle1" style={{fontWeight: 450}}>Número de poliza</Typography>
      <Typography display="block" variant="body1" style={{color:'#7981B2'}}>808883</Typography>
    </Grid>
    <Grid item>
      <Typography display="block" variant="subtitle1" style={{fontWeight: 450}}>Vigencia</Typography>
      <Typography display="block" variant="body1" style={{color:'#7981B2'}}>Del 07/09/2018 al 07/12/2022</Typography>
    </Grid>
    <Grid item>
      <Typography display="block" variant="subtitle1" style={{fontWeight: 450}}>Contratante y Responsable</Typography>
      <Typography display="block" variant="body1" style={{color:'#7981B2'}}>Pandero S.a. Eafc</Typography>
    </Grid>
    <Grid item>
      <Typography display="block" variant="subtitle1" style={{fontWeight: 450}}>Asegurado</Typography>
      <Typography display="block" variant="body1" style={{color:'#7981B2'}}>Julio Cesar Wong Rodriguez</Typography>
    </Grid>
    <Grid item>
      <Typography display="block" variant="subtitle1" style={{fontWeight: 450}}>Año</Typography>
      <Typography display="block" variant="body1" style={{color:'#7981B2'}}>2018</Typography>
    </Grid>
    <Grid item>
      <Typography display="block" variant="subtitle1" style={{fontWeight: 450}}>Chasis</Typography>
      <Typography display="block" variant="body1" style={{color:'#7981B2'}}>9BWAB45UXJT145750</Typography>
    </Grid>
    <Grid item>
      <Typography display="block" variant="subtitle1" style={{fontWeight: 450}}>Motor</Typography>
      <Typography display="block" variant="body1" style={{color:'#7981B2'}}>CFZT59074</Typography>
    </Grid>
    <Grid item>
      <Typography display="block" variant="subtitle1" style={{fontWeight: 450}}>Gas</Typography>
      <Typography display="block" variant="body1" style={{color:'#7981B2'}}>NO</Typography>
    </Grid>
  </Grid>
)

export default TextList
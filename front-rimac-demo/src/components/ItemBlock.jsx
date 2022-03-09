import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const ItemBlock = ({ title, value }) => (
  <Grid item>
    <Typography display="block" variant="subtitle1" style={{fontWeight: 450}}>{ title }</Typography>
    <Typography display="block" variant="body1" style={{color:'#7981B2'}}>{value}</Typography>
  </Grid>
)

export default ItemBlock;
import React from 'react';
import Grid from '@material-ui/core/Grid'
import ItemBlock from './ItemBlock';

const InfoDetail = ({ insurance }) => {
  return (
    <Grid container item direction='column' spacing={3}>
      <ItemBlock title="Número de póliza" value={insurance.numPolicy}/>
      <ItemBlock title="Vigencia" value={`Del ${insurance.dateSince} al ${insurance.dateUntil}`}/>
      <ItemBlock title="Contratante y Responsable" value={insurance.nameContractor}/>
      <ItemBlock title="Asegurado" value={`${insurance.name} ${insurance.lastName}`}/>
      <ItemBlock title="Año" value={insurance.anio}/>
      <ItemBlock title="Chasis" value={insurance.chassis}/>
      <ItemBlock title="Motor" value={insurance.motor}/>
      <ItemBlock title="Gas" value={insurance.hasGas}/>
    </Grid>
  )
}

export default InfoDetail

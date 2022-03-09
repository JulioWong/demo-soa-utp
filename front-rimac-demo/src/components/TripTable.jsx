import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { getAllTrips } from '../redux/actions/tripActions'

const TripTable = ({proposalId, trips, getAllTrips}) => {
  
  useEffect(() => { getAllTrips(proposalId) }, [getAllTrips, proposalId])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>Total de Km recorridos ({trips.totalKm} Km)</caption>
        <TableHead>
          <TableRow>
            <TableCell>Km recorrido</TableCell>
            <TableCell align="right">Fecha</TableCell>
            <TableCell align="right">Hora inicio</TableCell>
            <TableCell align="right">Hora fin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            trips.data.map((item) => (
              <TableRow key={1}>
                <TableCell component="th" scope="row">
                  {item.km} km	
                </TableCell>
                <TableCell align="right">{item.date}</TableCell>
                <TableCell align="right">{item.since}</TableCell>
                <TableCell align="right">{item.until}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const mapStateToProps = state => ({
	trips: state.trips,
})

const mapDispachToProps = {
	getAllTrips
}

export default connect(mapStateToProps, mapDispachToProps)(TripTable)

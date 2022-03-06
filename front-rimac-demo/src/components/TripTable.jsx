import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const TripTable = () => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="caption table">
      <caption>Total de Km recorridos (320 Km)</caption>
      <TableHead>
        <TableRow>
          <TableCell>Km recorrido</TableCell>
          <TableCell align="right">Fecha</TableCell>
          <TableCell align="right">Hora inicio</TableCell>
          <TableCell align="right">Hora fin</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow key={1}>
          <TableCell component="th" scope="row">
            20 km	
          </TableCell>
          <TableCell align="right">05/03/2021</TableCell>
          <TableCell align="right">03:00 pm</TableCell>
          <TableCell align="right">04:00 pm</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
)

export default TripTable
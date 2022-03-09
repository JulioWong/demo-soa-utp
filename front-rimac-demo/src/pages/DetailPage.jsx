import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom';
import TabPanel from '../components/TabPanel'
import AppFrame from '../components/AppFrame'
import InfoDetail from '../components/InfoDetail'
import TripTable from '../components/TripTable'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Link from '@material-ui/core/Link'
import { HiHome } from 'react-icons/hi'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { findOneInsurance } from '../redux/actions/insuranceActions'

const DetailPage = ({ insurance, findOneInsurance }) => {

  const { insuranceId } = useParams();

  useEffect(() => { findOneInsurance(insuranceId) }, [findOneInsurance])

  const [valueTab, setTab] = React.useState(0);
  const handleChangeTabs = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <AppFrame>
      <Breadcrumbs separator="›" aria-label="breadcrumb" class="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          <HiHome />
        </Link>
        <Link underline="hover" color="inherit" href="/">
          Mis seguros
        </Link>
        <Link underline="hover" color="inherit" href="#">
          {insurance.plate}
        </Link>
      </Breadcrumbs>
      <Typography variant="h4" color="inherit" style={{fontWeight:"bold"}}>Seguro vehicular</Typography>
      <Typography variant="body1" color="inherit" style={{marginTop:20}}>Placa {insurance.plate}</Typography>

      <Box sx={{ width: '100%' }} style={{marginTop:30}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={valueTab} onChange={handleChangeTabs} aria-label="basic tabs example">
            <Tab label="Detalle" value={0} />
            <Tab label="Mis viajes" value={1} />
          </Tabs>
        </Box>
        <Divider />
        <TabPanel value={valueTab} index={0}>
          <InfoDetail insurance={insurance}/>
        </TabPanel>
        <TabPanel value={valueTab} index={1}>
          <TripTable />
        </TabPanel>
      </Box>
    </AppFrame>
  )
}

const mapStateToProps = state => ({
	insurance: state.insurances.one
})

const mapDispachToProps = {
	findOneInsurance
}

export default connect(mapStateToProps, mapDispachToProps)(DetailPage)
import React, { useEffect, forwardRef } from 'react'
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

const MuiLink = forwardRef((props, ref) => (
  <Link underline="hover" color="inherit" ref={ref} {...props} >
    {props.children}  
  </Link>
));

const DetailPage = ({ insurance, findOneInsurance }) => {

  const { insuranceId } = useParams();

  useEffect(() => { findOneInsurance(insuranceId) }, [findOneInsurance, insuranceId])

  const [valueTab, setTab] = React.useState(0);
  const handleChangeTabs = (event, newValue) => {
    setTab(newValue);
  };

  const plate = insurance.plate ? insurance.plate : "";

  return (
    <AppFrame>
      <Breadcrumbs separator="›" aria-label="breadcrumb" style={{ 
        margin: "30px 0 40px 0",
        color: "#676f8f",
        fontSize: 13,
      }}>
        <MuiLink href="/"><HiHome /></MuiLink>
        <MuiLink href="/">Mis seguros</MuiLink>
        <MuiLink href="#">{plate}</MuiLink>
      </Breadcrumbs>
      <Typography variant="h4" color="inherit" style={{fontWeight:"bold"}}>Seguro vehicular</Typography>
      <Typography variant="body1" color="inherit" style={{marginTop:20}}>Placa {insurance.plate}</Typography>

      <Box sx={{ width: '100%' }} style={{marginTop:30}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={valueTab} onChange={handleChangeTabs}>
            <Tab label="Detalle" value={0} />
            <Tab label="Mis viajes" value={1} />
          </Tabs>
        </Box>
        <Divider />
        <TabPanel value={valueTab} index={0}>
          <InfoDetail insurance={insurance}/>
        </TabPanel>
        <TabPanel value={valueTab} index={1}>
          <TripTable proposalId={insurance.proposalId}/>
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
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import ClinicHeader from './components/ClinicHeader/index'
import ClinicFooter from './components/ClinicFooter/index'

const PatientLayout = () => {
  return (
    <Box>
      <ClinicHeader/>
      <Outlet />
      <ClinicFooter/>
    </Box>
  )
}

export default PatientLayout
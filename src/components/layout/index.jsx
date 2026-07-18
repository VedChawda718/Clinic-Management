import { Outlet } from 'react-router-dom'

const PatientLayout = () => {
  return (
    <div>
      <div>PatientLayout Header/Shell</div>
      <Outlet />
    </div>
  )
}

export default PatientLayout
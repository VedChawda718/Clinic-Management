import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PatientRoutes from './PatientRoutes'
import AdminRoutes from './AdminRoutes'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect base / to /app */}
        <Route path="/" element={<Navigate to="/app" replace />} />
        
        {/* Nested patient routes under /app */}
        <Route path="app/*" element={<PatientRoutes />} />
        
        {/* Nested admin routes under /admin */}
        <Route path="admin/*" element={<AdminRoutes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

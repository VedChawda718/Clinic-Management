import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Dashboard = lazy(() => import("@/apps/admin/Dashboard"));
const Patients = lazy(() => import("@/apps/admin/Patients"));

const AdminRoutes = () => {
  return (
    <Suspense fallback={<div>Loading Admin...</div>}>
      <Routes>
        <Route index element={<div>Admin Area (Please navigate to /admin/dashboard or /admin/patients)</div>} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="patients" element={<Patients />} />
      </Routes>
    </Suspense>
  )
}

export default AdminRoutes

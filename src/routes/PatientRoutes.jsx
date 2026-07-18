import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import PatientLayout from '../components/layout'

const HomePage = lazy(() => import("@/apps/patient/HomePage"));
const Calendar = lazy(() => import("@/apps/patient/Calendar"));
const Queue = lazy(() => import("@/apps/patient/Queue"));

// Placeholders for auth state and fallback component
const isAccessAllowed = true;
const AccessDenied = () => <div>Access Denied</div>;

const PatientRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<PatientLayout />}>
          <Route index element={isAccessAllowed ? <HomePage /> : <AccessDenied />} />
          <Route path="calendar" element={isAccessAllowed ? <Calendar /> : <AccessDenied />} />
          <Route path="queue" element={isAccessAllowed ? <Queue /> : <AccessDenied />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default PatientRoutes
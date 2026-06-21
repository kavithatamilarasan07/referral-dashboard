import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './pages/Signup' 
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ReferralDetails from './pages/ReferralDetails'
import ProtectedRoute from './componants/ProtectedRoute'

const NotFound = () => <h1>404 Not Found</h1>

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 🔥 Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/referral/:id"
          element={
            <ProtectedRoute>
              <ReferralDetails />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
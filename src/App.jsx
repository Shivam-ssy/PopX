import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Welcome from './components/welcome/Welcome'
import Login from './components/authPages/Login'
import SignUp from './components/authPages/SignUp'
import Profile from './components/profile/Profile'
import NotFound from './components/NotFound/NotFound'
import { Toaster } from 'react-hot-toast'
import AuthGuard from "./utils/AuthGuard"
function App() {
  return (
    <>
      <Toaster position='top-center' />
      <Router>
        <Routes>
          <Route index path='/' element={<Welcome />} />

          {/* Public pages, redirect logged-in users */}
          <Route
            path='/login'
            element={
              <AuthGuard requireAuth={false}>
                <Login />
              </AuthGuard>
            }
          />
          <Route
            path='/signup'
            element={
              <AuthGuard requireAuth={false}>
                <SignUp />
              </AuthGuard>
            }
          />

          {/* Protected pages, redirect non-logged-in users */}
          <Route
            path='/profile'
            element={
              <AuthGuard requireAuth={true}>
                <Profile />
              </AuthGuard>
            }
          />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

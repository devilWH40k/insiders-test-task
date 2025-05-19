import { Routes, Route, Navigate } from 'react-router-dom'

import RootLayout from './Layouts/RootLayout/RootLayout'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import DashboardPage from './pages/DashboardPage/DashboardPage'
import SettingsPage from './pages/DashboardPage/pages/SettingsPage/SettingsPage'
import TodoPage from './pages/DashboardPage/pages/TodoPage/TodoPage'
import ProfilePage from './pages/DashboardPage/pages/ProfilePage/ProfilePage'

import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/dashboard" element={<RootLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="todo" element={<TodoPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
    </>
  )
}

export default App

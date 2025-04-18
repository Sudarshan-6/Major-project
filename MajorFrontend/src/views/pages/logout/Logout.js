import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Clear authentication state
    localStorage.removeItem('isAuthenticated')

    // Redirect to login page
    navigate('/login')
  }, [navigate])

  return null
}

export default Logout
import React from 'react'
import { Navigate } from 'react-router-dom'

export const UserProfilePageProtection = ({userProfileID, children}) => {
    if(!userProfileID) {
        return <Navigate to='/' />
    }
  return (
    children
  )
}

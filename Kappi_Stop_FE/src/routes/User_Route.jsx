import React from 'react'
import { Route } from 'react-router'
import User_Management from '../pages/user_management/User_Management'

const User_Route = () => {
  return (
    <>
    <Route path='/user_management' element={<User_Management />}/>
    </>
  )
}

export default User_Route
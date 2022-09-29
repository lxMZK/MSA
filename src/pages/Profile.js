import React from 'react'
import { Link } from 'react-router-dom'

const Profile = ({logout}) => {
  return (
    <div>
        <Link to="/Dashboard">Dashboard</Link>
        <h1>Hi you are logged in</h1>
        <button onClick={logout}>LogOut</button>
    </div>
  )
}
export default Profile;

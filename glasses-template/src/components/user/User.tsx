import React from 'react'
import UserLogo from './user-logo/Logo'
import './User.scss'
import IUser from '../../interfaces/IUser'

let user: IUser = {
  logo: {
    logo:
      'https://avatars1.githubusercontent.com/u/52864645?s=460&u=f3bf8ecfca702ff776b5434ea8219b7341eaabaf&v=4',
  },
  name: 'Ярослав',
  isVisible: true,
}

export default function User() {
  return (
    <div className="user-container">
      <h1>{user.name}</h1>
      <UserLogo logo={user.logo.logo} />
    </div>
  )
}

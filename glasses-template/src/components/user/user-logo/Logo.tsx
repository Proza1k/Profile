import React from 'react'
import './Logo.scss'
import IUserLogo from '../../../interfaces/IUserLogo'

export default function UserLogo(props: IUserLogo) {
  return <img className="user__logo" src={props.logo} alt="Logo" />
}

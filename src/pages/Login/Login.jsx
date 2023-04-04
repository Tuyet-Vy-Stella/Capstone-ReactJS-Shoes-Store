import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function Login() {
  return (
    <section className='login'>
      <div className='container'>
        <h1 className='login_title'>Login</h1>
        <LoginForm/>
      </div>
    </section>
  )
}

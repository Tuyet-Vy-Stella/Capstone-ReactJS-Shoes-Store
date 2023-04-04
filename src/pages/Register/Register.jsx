import React from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'

export default function Register() {
  return (
    <section className='register'>
      <div className='container'>
        <h1 className='register_title'>Register</h1>
        <RegisterForm/>
      </div>
    </section>
  )
}

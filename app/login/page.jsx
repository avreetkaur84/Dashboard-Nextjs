import React from 'react'
import styles from '../ui/login/login.module.css'

function Login() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1 className='text-center text-3xl font-semibold'>Login</h1>
        <input type="text" placeholder='username' />
        <input type="password" placeholder='password' />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
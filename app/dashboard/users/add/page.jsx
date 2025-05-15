import React from 'react'
import styles from '../../../ui/dashboard/users/add/addUser.module.css'

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type='text' name='username' placeholder='username' required />
        <input type='email' name='email' placeholder='email' required />
        <input type='password' name='password' placeholder='password' required />
        <input type='phone' name='phone' placeholder='phone' required />

        <select name='isAdmin' id='isAdmin'>
          <option value={false}>IsAdmin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select> 

        <select name='isActive' id='isActive'>
          <option value={true}>IsActive?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select> 

        <textarea name='address' id='address' rows='3' placeholder='Address' />

        <button type='submit' >Submit</button>
      </form>
    </div>
  )
}

export default AddUserPage
import React from 'react'
import styles from '../../ui/dashboard/users/users.module.css'
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/ui/dashboard/pagination/pagination'

function UsersPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/user/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />
                <div className="">John Doe</div>
              </div>
            </td>
            <td>john@gmail.com</td>
            <td>22.01.2025</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
                  <div className="">
                    <button className={` ${styles.button} ${styles.view} `}>View</button>
                  </div>
                </Link>
                <div className="">
                  <button className={` ${styles.button} ${styles.delete} `}>Delete</button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <Pagination/>
    </div>
  )
}

export default UsersPage
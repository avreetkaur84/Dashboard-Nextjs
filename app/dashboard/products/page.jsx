import React from 'react'
import styles from '../../ui/dashboard/products/products.module.css'
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/ui/dashboard/pagination/pagination'

function ProductsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/user/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image src="/noproduct.jpg" alt="" width={40} height={40} className={styles.productImage} />
                <div className="">IPhone 15</div>
              </div>
            </td>
            <td>This </td>
            {/* is a phone which is famous for its camera but it imports the display from Samsung */}
            <td>$999</td>
            <td>Admin</td>
            <td>16</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
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

export default ProductsPage
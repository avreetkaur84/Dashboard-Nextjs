import React from 'react'
import styles from '../../../ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt='' fill />
        </div>
        John Doe
      </div>

      <div className={styles.formContainer}>
        <form action="" className={styles.form} >
          <label>Title</label>
          <input type='text' name='title' placeholder='John Doe' />

          <label>Price</label>
          <input type='number' name='price' placeholder='$10.00' />

          <label>Stock</label>
          <input type='number' name='stock' placeholder='23' />

          <label>Color</label>
          <input type='text' name='color' placeholder='red' />

          <label>Size</label>
          <input type='text' name='size' placeholder='67' />

          <label>Category</label>
          <select name='cat' id='cat' >
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>

          <label>Description</label>
          <textarea type='text' name='description' placeholder='details of product' rows="6" />

          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleProductPage
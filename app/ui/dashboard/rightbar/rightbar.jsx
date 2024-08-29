import Image from 'next/image'
import React from 'react'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'
import styles from "./rightbar.module.css"

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg}/>
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available Now</span>
          <h3 className={styles.title}>How to use the new version of the admin dashboard</h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias asperiores quidem fugiat natus. Deleniti asperiores eaque iure explicabo. Voluptas ea ipsum recusandae repellat eius incidunt fuga similique rerum qui dolorum?
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            Watch
          </button>
        </div>
        
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg}/>
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Coming Soon</span>
          <h3 className={styles.title}>How to use the new version of the admin dashboard</h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias asperiores quidem fugiat natus. Deleniti asperiores eaque iure explicabo. Voluptas ea ipsum recusandae repellat eius incidunt fuga similique rerum qui dolorum?
          </p>
          <button className={styles.button}>
            <MdReadMore/>
            Learn
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default Rightbar
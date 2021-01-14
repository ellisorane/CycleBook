import React from 'react'

import styles from './PostImg.module.css'

const PostImage = ({ img, changeImg, postImgIndex }) => {
    return (
        <div>
            <div className={styles.imgContainer}>
                <img src={img.length > 1 ? img[postImgIndex] : img} alt="img" className={styles.postedImage} />
            </div>
            
            {/* IF POST HAS MORE THAN ONE IMAGE SHOW THESE BTNS */}
            {
            img.length > 1 ? 
            <div className={styles.btnContainer}>
                <button onClick={() => changeImg(img, 'prev')} className={styles.btn}>◀</button> 
                <button onClick={() => changeImg(img, 'next')} className={styles.btn}>▶</button>
            </div> : null
            }
        </div>
    )
}

export default PostImage

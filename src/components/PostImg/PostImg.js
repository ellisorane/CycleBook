import React from 'react'

import styles from './PostImg.module.css'

const PostImage = ({ img, changeImg, id, imgIndex, postData }) => {
    
    return (
        <div>
            <div className={styles.imgContainer}>
                <img src={img.length > 1 ? img[imgIndex] : img} alt="img" className={styles.postedImage} />
            </div>
            
            {/* IF POST HAS MORE THAN ONE IMAGE SHOW THESE BTNS */}
            {
            img.length > 1 ? 
            <div className={styles.btnContainer}>
                {/* <button onClick={() => changeImg(postData, 'prev', id)} className={styles.btn}>◀</button>  */}
                <button onClick={() => changeImg(postData, 'prev', id)} className="btn">◀</button> 
                <button onClick={() => changeImg(postData, 'next', id)} className="btn">▶</button>
            </div> : null
            }
        </div>
    )
}


export default PostImage

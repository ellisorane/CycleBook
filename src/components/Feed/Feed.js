import React, { useState } from 'react'
import styles from './Feed.module.css'


const Feed = ({ posts, hidePost }) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <>
      {posts.map((post) => {
        const { id, username, userImg, img, title, content } = post;
            return(
              <div key={id} className={styles.userPost}>
                <div className={styles.hideAndLike}>
                <button className={styles.Like}>💖</button>
                <button onClick={() => hidePost(id)} className={styles.hidePost}>🚫</button>
                </div>
                
                <img src={img} alt="img" className={styles.postedImage} />
                <h2>{title}</h2>
                <p>
                  {/* Only show a portion of the content if it is more than 180 chars */}
                  {readMore ? content : `${content.substring(0, 220)}....`}
                  {content.length > 180 ? <span onClick={() => setReadMore(!readMore)} className={styles.moreOrLess}>{readMore ? ' show less' : ' read more'}</span> : null }
                </p>
                <div className={styles.userInfo}>
                    <p>{username}</p>
                    <img src={userImg} alt={username} className={styles.userImage} />
                </div>
              </div>
            )
     }) }
    </>
  );
};

export default Feed
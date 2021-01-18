import React from 'react'

import PostImg from './PostImg/PostImg'
import styles from './Feed.module.css'


const Feed = ({ posts, hidePost, readMore, setReadMore, changeImg, postImgIndex }) => {

  return (
    <div>
      {posts.map((post) => {
        const { id, username, userImg, img, imgIndex, title, content } = post;

        return (
          <div key={id} className={styles.userPost}>
            <div className={styles.hideAndLike}>
            <button className={styles.Like}>💖</button>
            <button onClick={() => hidePost(id)} className={styles.hidePost}>🚫</button>
            </div>

            <PostImg img={img} changeImg={changeImg} postImgIndex={postImgIndex} imgIndex={imgIndex} />

            <h2>{title}</h2>
            <p>
              {/* ONLY SHOW A PORTION OF THE CONTENT IF IT OS MORE THAN 180 CHARS */}
              {readMore ? content : content.substring(0, 220)}
              {content.length > 180 ? <span onClick={() => setReadMore(!readMore)} className={styles.moreOrLess}>{readMore ? ' show less' : '.... read more'}</span> : null }
            </p>
            <div className={styles.userInfo}>
                <p>{username}</p>
                <img src={userImg} alt={username} className={styles.userImage} />
            </div>
          </div>
        )
      })}
    </div>
    );
}

export default Feed
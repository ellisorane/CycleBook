import React from 'react'
import styles from './Feed.module.css'


const Feed = ({users}) => {
  return (
    <>
      {users.map((user) => {
        const { id, username, userImg, img, title, content } = user;
            return(
                <div key={id} className={styles.userPost}>
                    <img src={img} alt="img" className={styles.postedImage} />
                    <h2>{title}</h2>
                    <p>{content}</p>
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
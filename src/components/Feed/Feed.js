import React from 'react'
import { GrLike } from 'react-icons/gr'
import { GrDislike } from 'react-icons/gr'

import PostImg from '../PostImg/PostImg'
import styles from './Feed.module.css'


const Feed = ({ posts, hidePost, readMore, setReadMore, changeImg, handleLikes }) => {

  return (
    <div>
      {posts.map((post) => {
        const { id, username, userImg, img, imgIndex, title, content, reactions, comments } = post;

        return (
          <div key={id} className={styles.userPost}>
            <div className={styles.hideAndLike}>
              <button onClick={() => handleLikes(id, 'like')} className={styles.like} disabled={reactions.clicked ? true : false}> <GrLike /> <span>Likes {reactions.likes}</span> </button>
              <button onClick={() => handleLikes(id, 'dislike')} className={styles.dislike} disabled={reactions.clicked ? true : false}> <GrDislike /> <span>Dislikes {reactions.dislikes}</span> </button>
              <button onClick={() => hidePost(id)} className={styles.hidePost}>Hide 🚫</button>
            </div>

            <PostImg id={id} img={img} changeImg={changeImg} imgIndex={imgIndex} postData={posts} />

            <h2>{title}</h2>
            <p>
              {/* ONLY SHOW A PORTION OF THE CONTENT IF IT OS MORE THAN 180 CHARS */}
              {readMore ? content : content.substring(0, 220)}
              {content.length > 180 ? <span onClick={() => setReadMore(!readMore)} className={styles.moreOrLess}>{readMore ? ' show less' : '.... read more'}</span> : null }
            </p>
            <div className={styles.commentDiv}>
              <hr/>
              <p>Comments</p>
              <textarea className={styles.commentInput} placeholder="Comment here" /><br/>
              <button>Submit</button>
              {comments.map((comm, index) => {
                console.log(comm)
                return <p key={index} className={styles.comments}><strong>{comm.user} :</strong> {comm.comment}</p>
              })}
            </div>
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
import React, {useState} from 'react'
import ReadMoreAndLess from 'react-read-more-less'
import { GrLike } from 'react-icons/gr'

import PostImg from '../PostImg/PostImg'
import styles from './Feed.module.css'


const Feed = ({ posts, hidePost, changeImg, handleLikes, handleSubmitComment, currentComment, setComment }) => {

  return (
    <div>
      {posts.map((post) => {
        const { id, username, userImg, img, imgIndex, title, content, reactions, comments } = post;

        return (
          <div key={id} className={styles.userPost}>
            <div className={styles.hideAndLike}>
              <button onClick={() => handleLikes(id)} className={styles.like} disabled={reactions.clicked ? true : false}> <GrLike /> <span>{reactions.clicked ? 'Liked' : 'Likes'} {reactions.likes}</span> </button>
              <button onClick={() => hidePost(id)} className={styles.hidePost}>Hide 🚫</button>
            </div>

            <PostImg id={id} img={img} changeImg={changeImg} imgIndex={imgIndex} postData={posts} />

            <h2>{title}</h2>
            
              {/* ONLY SHOW A PORTION OF THE CONTENT IF IT OS MORE THAN 180 CHARS */}
              <ReadMoreAndLess
                className="read-more-content"
                charLimit={180}
                readMoreText="Read more"
                readLessText=" Read less"
              >
                {content}
              </ReadMoreAndLess>
            <div className={styles.commentDiv}>
              <hr/>
              <p>Comments</p>
              <form onSubmit={(e) => handleSubmitComment(e, id, currentComment)}>
                <textarea onChange={(e) => setComment(e.target.value)} value={currentComment} className={styles.commentInput} /><br/>
                <button className="btn">Submit</button>
              </form>
              {comments.map((comm, index) => {
                // console.log(comm)
                return <div key={index} className={styles.comments}>
                  <strong>{comm.user} :</strong>
                  <ReadMoreAndLess
                    className="read-more-content"
                    charLimit={140}
                    readMoreText="Read more"
                    readLessText=" Read less"
                  >
                  {comm.comment}
                  </ReadMoreAndLess>
                </div>
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
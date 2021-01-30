import React, {useState} from 'react'
import ReadMoreAndLess from 'react-read-more-less'
import { GrLike } from 'react-icons/gr'
import { MdDelete } from 'react-icons/md'

import PostImg from '../PostImg/PostImg'
import styles from './Feed.module.css'


const Feed = ({ posts, hidePost, changeImg, handleLikes, handleSubmitComment, currentComment, setComment, deleteComment }) => {

  return (
    <div>
      {posts.map((post) => {
        const { id, username, userImg, img, imgIndex, title, content, reactions, comments, date } = post;

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
                return <div key={index} className={styles.comments}>
                  <div className={styles.leftDiv}>
                    <strong>{comm.user} :</strong>
                    <ReadMoreAndLess
                      className="read-more-content"
                      charLimit={140}
                      readMoreText="Read more"
                      readLessText=" Read less"
                    >
                    {comm.comment}
                    </ReadMoreAndLess>
                    <p className={styles.commentDate}>{comm.date}</p>
                  </div>
                  <div className={styles.rightDiv}>
                    {/* IF THE USER IS THE CURRENT USER ADD A DELETE BUTTON  */}
                    {comm.currentUser ? <button onClick={() => deleteComment(comm.id)} className={styles.dltComment}><MdDelete /></button> : null}
                  </div>
                </div>
              })}
            </div>
            <div className={styles.userInfo}>
              <p>{username}</p>
              <img src={userImg} alt={username} className={styles.userImage} />
              <p>{date}</p>
            </div>
          </div>
        )
      })}
    </div>
    );
}

export default Feed
import React, { useState } from 'react'
import './App.css'
import postData from './components/data/feedData'

import Navbar  from './components/Navabar/Navbar'
import Feed from './components/Feed/Feed'

function App() {
  //POSTS STATE
  const [posts, setPosts] = useState(postData)
  //TO BE USED IN FEED.JS FOR CONTROLLING HOW MUCH OF A POST'S TEXT IS SHOWN
  const [readMore, setReadMore] = useState(false)
  //TO BE USED IN POST.JS FOR CONTROLLING THE INDEX OF WHAT IMAGE IS SHOWN IF THERE ARE MULTIPLE IMAGES
  const [postImgIndex, setPostImgIndex] = useState(0)
  
  //NAVIGATE IMAGE SLIDER BY MANIPULATING THE POSTIMAGEINDEX IF THERE IS MORE THAN ONE IMAGE ON A POST
  const changeImg = (arr, dir) => {
    if (dir === 'next' && postImgIndex < arr.length - 1) {
      setPostImgIndex(() => {
        let newIndex = postImgIndex + 1
        console.log(newIndex)
        return newIndex
      })
    } 
    if (dir === 'prev' && postImgIndex > 0) {
      setPostImgIndex(() => {
        let newIndex = postImgIndex - 1
        console.log(newIndex)
        return newIndex
      })
    }
  }


  //HIDE INDIVIDUAL USER POSTS
  const hidePost = (id) => {
    const unhiddenPosts = posts.filter(post => post.id !== id)
    setPosts(unhiddenPosts)
  }

  //REFRESH THE PAGE AFTER ALL POSTS ARE HIDDEN
  const refreshFeed = () => {
    console.log('clicked')
    setPosts(postData)
  }

  
  let feed = <Feed posts={posts} hidePost={hidePost} readMore={readMore} setReadMore={setReadMore} changeImg={changeImg} postImgIndex={postImgIndex} />

  if (posts.length === 0) {
      feed = <button onClick={refreshFeed} className="refreshFeed">Refresh Feed</button>
  }

  return (
    <div className="App">
      <Navbar />
      {feed}
    </div>
  );
}

export default App;

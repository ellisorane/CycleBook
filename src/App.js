import React, { useState } from 'react'
import './App.css'
import postData from './components/data/feedData'

import { Navbar } from './components/Navabar/Navbar'
import Feed from './components/Feed/Feed'

function App() {
  //Create posts state and setPosts state
  const [posts, setPosts] = useState(postData)

  //Hide user post 
  const hidePost = (id) => {
    const unhiddenPosts = posts.filter(post => post.id !== id)
    setPosts(unhiddenPosts)
  }

  const refreshFeed = () => {
    console.log('clicked')
    setPosts(postData)
  }

  let feed = <Feed posts={posts} hidePost={hidePost} />

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

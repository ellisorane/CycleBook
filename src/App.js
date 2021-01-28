import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css'

import postData from './components/data/feedData'
import marketplaceData from './components/data/marketplaceData'
import Navbar  from './components/Navabar/Navbar'
import Feed from './components/Feed/Feed'
import Marketplace from './components/Marketplace/Marketplace'


const App = () => {
  //ACCOUNT DROPDOWN LIST USED IN NAV.JS
  const [showAcNav, setShowAcNav] = useState(false)

  //POSTS STATE
  const [posts, setPosts] = useState(postData)
  // console.log(posts)

  //USED IN  MARKETPLACE.JS TO RECIEVE MARKETPLACE DATA
  const [marketplacePosts, setMarketplacePosts] = useState(marketplaceData)

  //MARKETPLACE FILTER
  const [mkCategories, setMkCategoies] = useState(['All', ...new Set(marketplaceData.map(data => data.brand))])

  //USED FOR COMMENTS IN FEED.JS
  let [currentComment, setComment] = useState('')

  //HANDLE COMMENT SUBMISSIONS
  const handleSubmitComment = (e, id, comment) => {
    e.preventDefault()
    //CHECK FOR EMPTY INPUT
    if (comment !== '') {
      const newPosts = posts.map(post => {
        if (post.id === id) {
          let updatedPost = {
            ...post,
            comments: [
              ...post.comments,
              {
                user: 'Anonymous015678',
                comment: comment
              }
            ]
          }
          return updatedPost
        }
        return post
      })
      setPosts(newPosts)
      setComment('')
    }

  }

  //LIKES AND DISLIKES IN FEED.JS
  const handleLikes = (id) => {
    const newPosts = posts.map(post => {
      if (post.id === id) {
        let updatedPost = {
          ...post,
          reactions: {
            clicked: true,
            likes: post.reactions.likes + 1
          }
        }
        return updatedPost
      }
      return post
    })

    setPosts(newPosts)
  }

  //FILTER ITEMS IN MARKETPLACE BY BRAND IN MARKETPLACE.JS
  const mkFilter = (category) => {
    if(category === 'All') {
      setMarketplacePosts(marketplaceData)
      return marketplaceData
    }

    const filteredMk = marketplaceData.filter(data => data.brand === category)
    setMarketplacePosts(filteredMk)
    return marketplacePosts
  }

  // IMAGE SLIDER FUNCTION IN ALL COMPONENTS WITH MULTIPLE IMAGES
  const changeImg = (postData, dir, id) => {
    //CREATE A NEW SET OF POSTS BY COPYING THE OLD POSTS STATES
    const newPosts = postData.map(post => {
      //IF THE CURRENT ID MATCHES THE ID IN THE DATA, UPDATE THAT POST'S IMGINDEX BY INCREMENTS OF 1
      if (post.id === id) {
        if (dir === 'next') {
          let updatedPost = {
            ...post,
            imgIndex: post.imgIndex + 1
          }
          //RESET THE IMGINDEX TO 0 IF IT EXCEEDS THE IMG ARRAY LENGTH
          if (dir === 'next' && post.imgIndex > post.img.length - 2) {
            updatedPost = {
              ...post,
              imgIndex: 0
            }
          }
          return updatedPost
        }
        //UPDATE THE POST'S IMGINDEX BY DECREMENTS OF 1
        if (dir === 'prev') {
          let updatedPost = {
            ...post,
            imgIndex: post.imgIndex - 1
          }
          //SET THE IMGINDEX TO SHOW THE LAST IMG
          if (dir === 'prev' && post.imgIndex < 1) {
            updatedPost = {
              ...post,
              imgIndex: post.img.length - 1
            }
          }
          return updatedPost
        }
        
      }
      return post
    })

    if (postData === marketplacePosts) {
      return setMarketplacePosts(newPosts)
    }
    if (postData === posts) {
     return setPosts(newPosts)
    }
  }
  
  //HIDE INDIVIDUAL USER POSTS
  const hidePost = (id) => {
    const unhiddenPosts = posts.filter(post => post.id !== id)
    setPosts(unhiddenPosts)
  }

  //REFRESH THE PAGE AFTER ALL POSTS ARE HIDDEN
  const refreshFeed = () => {
    setPosts(postData)
  }

  let feed = <Feed
    posts={posts}
    hidePost={hidePost}
    changeImg={changeImg}
    handleLikes={handleLikes}
    currentComment={currentComment}
    setComment={setComment}
    handleSubmitComment={handleSubmitComment} />

  if (posts.length === 0) {
      feed = <button onClick={refreshFeed} className="refreshFeed btn">Refresh Feed</button>
  }

  return (
    <Router>
      <div className="App">
        <Navbar showAcNav={showAcNav} setShowAcNav={setShowAcNav} />
        <Switch>
          <Route path="/marketplace">
            <Marketplace
              marketplacePosts={marketplacePosts}
              changeImg={changeImg}
              mkFilter={mkFilter}
              mkCategories={mkCategories} />
          </Route>
          
          <Route path="/">
            {feed}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

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

//CREATE AN ARRAY OF CATEGORIES FOR THE MARKETPLACE
// const catergories = ['all', ...new Set(marketplaceData.map(data => data.brand)), ...new Set(marketplaceData.map(data => data.year)), ...new Set(marketplaceData.map(data => data.engine))]
const catergories = ['All', ...new Set(marketplaceData.map(data => data.brand))]

const App = () => {
  //ACCOUNT DROPDOWN LIST USED IN NAV.JS
  const [showAcNav, setShowAcNav] = useState(false)

  //POSTS STATE
  const [posts, setPosts] = useState(postData)
  // console.log(posts)

  //USED IN FEED.JS FOR CONTROLLING HOW MUCH OF A POST'S TEXT IS SHOWN
  const [readMore, setReadMore] = useState(false)

  //USED IN  MARKETPLACE.JS TO RECIEVE MARKETPLACE DATA
  const [marketplacePosts, setMarketplacePosts] = useState(marketplaceData)

  //MARKETPLACE FILTER
  const [mkCategories, setMkCategoies] = useState(catergories)

  //FILTER ITEMS IN MARKETPLACE BY BRAND 
  const mkFilter = (category) => {
    if(category === 'All') {
      setMarketplacePosts(marketplaceData)
      return marketplaceData
    }

    const filteredMk = marketplaceData.filter(data => data.brand === category)
    setMarketplacePosts(filteredMk)
    return marketplacePosts
  }

  // NAVIGATE IMAGE SLIDER
  const changeImg = (postData, dir, id) => {
    const newPosts = postData.map(post => {
      if (post.id === id) {
        if (dir === 'next') {
          const updatedPost = {
            ...post,
            imgIndex: post.imgIndex + 1
          }
          return updatedPost
        }
        // if (dir === 'next' && post.imgIndex > post.img.length - 2) {
        //   const updatedPost = {
        //     ...post,
        //     imgIndex: 0
        //   }
        //   return updatedPost
        // }
        if (dir === 'prev') {
          const updatedPost = {
            ...post,
            imgIndex: post.imgIndex - 1
          }
          return updatedPost
        }
        // if (dir === 'prev' && post.imgIndex < 1) {
        //   const updatedPost = {
        //     ...post,
        //     imgIndex: post.img.length - 1
        //   }
        //   return updatedPost
        // }
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

  let feed = <Feed posts={posts} hidePost={hidePost} readMore={readMore} setReadMore={setReadMore} changeImg={changeImg} />

  if (posts.length === 0) {
      feed = <button onClick={refreshFeed} className="refreshFeed">Refresh Feed</button>
  }

  return (
    <Router>
      <div className="App">
        <Navbar showAcNav={showAcNav} setShowAcNav={setShowAcNav} />
        <Switch>
          <Route path="/marketplace">
            <Marketplace marketplacePosts={marketplacePosts} readMore={readMore} setReadMore={setReadMore} changeImg={changeImg} mkFilter={mkFilter} mkCategories={mkCategories} />
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

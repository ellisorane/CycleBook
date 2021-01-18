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
const catergories = ['all', ...new Set(marketplaceData.map(data => data.brand))]
console.log(catergories)

function App() {
  //ACCOUNT DROPDOWN LIST USED IN NAV.JS
  const [showAcNav, setShowAcNav] = useState(false)
  //POSTS STATE
  const [posts, setPosts] = useState(postData)
  //USED IN FEED.JS FOR CONTROLLING HOW MUCH OF A POST'S TEXT IS SHOWN
  const [readMore, setReadMore] = useState(false)
  //USED IN POST.JS FOR CONTROLLING THE INDEX OF WHAT IMAGE IS SHOWN IF THERE ARE MULTIPLE IMAGES
  const [postImgIndex, setPostImgIndex] = useState(0)
  //USED IN  MARKETPLACE.JS TO RECIEVE MARKETPLACE DATA
  const [marketplacePosts, setMarketplacePosts] = useState(marketplaceData)
  //MARKETPLACE FILTER
  const [mkCategories, setMkCategoies] = useState(catergories)

  //FILTER ITEMS IN MARKETPLACE BY BRAND 
  const mkFilter = (category) => {
    if(category === 'all') {
      setMarketplacePosts(marketplaceData)
      return marketplaceData
    }

    const filteredMk = marketplaceData.filter(data => data.brand === category)
    setMarketplacePosts(filteredMk)
    return marketplacePosts
  }

  // NAVIGATE IMAGE SLIDER BY MANIPULATING THE POSTIMAGEINDEX IF THERE IS MORE THAN ONE IMAGE ON A POST
  const changeImg = (arr, dir) => {
    let newIndex
    if (dir === 'next') {
      setPostImgIndex(() => {
        newIndex = postImgIndex + 1
        return newIndex
      })
    }

    if (dir === 'next' && postImgIndex > arr.length - 2) {
      setPostImgIndex(() => {
        newIndex = 0
        return newIndex
      })
    }

    if (dir === 'prev') {
      setPostImgIndex(() => {
        newIndex = postImgIndex - 1
        return newIndex
      })
    }

    if (dir === 'prev' && postImgIndex < 1) {
      setPostImgIndex(() => {
        newIndex = arr.length - 1
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
    setPosts(postData)
  }

  let feed = <Feed posts={posts} hidePost={hidePost} readMore={readMore} setReadMore={setReadMore} changeImg={changeImg} postImgIndex={postImgIndex} />

  if (posts.length === 0) {
      feed = <button onClick={refreshFeed} className="refreshFeed">Refresh Feed</button>
  }

  return (
    <Router>
      <div className="App">
        <Navbar showAcNav={showAcNav} setShowAcNav={setShowAcNav} />
        <Switch>
          <Route path="/marketplace">
            <Marketplace marketplacePosts={marketplacePosts} readMore={readMore} setReadMore={setReadMore} changeImg={changeImg} postImgIndex={postImgIndex} mkFilter={mkFilter} mkCategories={mkCategories} />
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

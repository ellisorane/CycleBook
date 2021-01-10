import React, { useState } from 'react'
import './App.css'
import data from './app/data/feedData'

import { Navbar } from './app/Navabar/Navbar'
import Feed from './app/Feed/Feed'

function App() {
  //Create users state amd setState
  const [users, setUsers] = useState(data)
    return (
      <div className="App">
        <Navbar />
        <Feed users={users} />
      </div>
    );
}

export default App;

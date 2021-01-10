import React, { useState } from 'react'
import './App.css'
import data from './components/data/feedData'

import { Navbar } from './components/Navabar/Navbar'
import Feed from './components/Feed/Feed'

function App() {
  //Create users state and setState
  const [users, setUsers] = useState(data)
    return (
      <div className="App">
        <Navbar />
        <Feed users={users} />
      </div>
    );
}

export default App;

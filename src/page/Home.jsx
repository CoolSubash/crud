import React from 'react'
import Navbar from '../component/navbar/Navbar'
import { Link } from 'react-router-dom'
import '../App.css'
const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar></Navbar>
        <div className="section-home">
          <h1>Welcome to your Memory Gallery.</h1>
          <button>
            <Link to="/posts" className="link_decoration">
              Read Memory
            </Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default Home

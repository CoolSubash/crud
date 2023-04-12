import React from 'react'
import './gallery.css'
import Navbar from '../component/navbar/Navbar'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Gallery = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/post')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <Navbar />
      <div className="gallery">
        <div className="gallery-heading">
          <h1>Gallery</h1>
        </div>

        <div className="gallery-container">
          {posts &&
            posts.length > 0 &&
            posts.map((post) => (
              <Link to={`/posts/${post._id}`} className="post_info">
                <div key={posts._id} className="crewmate-card">
                  <h2>Name: {post.name}</h2>
                  <p>Speed: {post.speed}</p>
                  <p>Color: {post.color}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  )
}

export default Gallery

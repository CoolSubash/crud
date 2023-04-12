import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import './singlepost.css'
import Navbar from '../component/navbar/Navbar'
const Singlepost = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/v1/post/${id}`)
        const data = await response.json()
        setPost(data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchPost()
  }, [id])

  const handledelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/post/${id}`, {
        method: 'DELETE',
      })
      console.log(response)
      const responseData = await response.json()
      console.log(responseData)

      if (!response.ok) {
        throw new Error('Failed to delete content')
      }

      alert('Successfully Deleted')
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  console.log(id)
  const handleUpdate = () => {
    navigate(`/updatepost/${id}`)
  }

  return (
    <>
      <Navbar />
      {!post ? (
        <div className="loading-state">
          <img
            src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif"
            className="gif"
            alt=""
          />
        </div>
      ) : (
        <div className="post">
          <h1>Name: {post.name}</h1>
          <p>Speed: {post.speed}</p>
          <p>Color: {post.color}</p>
          <div className="btn">
            <button onClick={handleUpdate}>Update</button>
            <button className="delete" onClick={handledelete}>
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Singlepost

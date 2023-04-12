import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './page/Home.jsx'
import Createpost from './page/Createpost.jsx'
import Gallery from './page/Gallery.jsx'
import Singlepost from './page/Singlepost'
import Updatepost from './page/Updatepost'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="createpost" element={<Createpost />} />
          <Route path="posts" element={<Gallery></Gallery>} />
          <Route path="posts/:id" element={<Singlepost />} />
          <Route path="updatepost/:id" element={<Updatepost />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

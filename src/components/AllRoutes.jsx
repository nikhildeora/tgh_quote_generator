import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Bookmark from '../Pages/Bookmark/Bookmark';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bookmark' element={<Bookmark />} />
    </Routes>
  )
}

export default AllRoutes;
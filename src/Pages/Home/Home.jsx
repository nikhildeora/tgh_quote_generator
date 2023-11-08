import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const {random, tags} = useSelector(store=>store); 
  const dispatch = useDispatch();
 
  return (
    <div>
        <h2>{random.content}</h2>
    </div>
  )
}

export default Home;
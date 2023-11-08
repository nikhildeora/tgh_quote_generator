import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Quote from '../../components/Quote/Quote';
import DropDown from '../../components/DropDown/DropDown';
import { funFetchAllTags, funGenerateRandomQoute } from '../../redux/actions';
import styles from "./home.module.css";

const Home = () => {
  const random = useSelector(store=>store.random); 
  const dispatch = useDispatch();
  const [curTag, setCurTag] = useState("");
 
 

//  It will fetch random quote  
 const getNextQuote = () => {
    dispatch(funGenerateRandomQoute(curTag));
 }

  return (
    <div className={styles.home_div}>
        <Quote quoteProp={random} />
        <DropDown tagRenderProp={setCurTag} />
        <button className={styles.next_quote_button} onClick={getNextQuote}>Next Quote</button>
    </div>
  )
}

export default Home;
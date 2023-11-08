import React, { useState } from 'react'
import styles from "./quote.module.css";
import { useDispatch } from 'react-redux';
import { funBookmarkQuote } from '../../redux/actions';

const BookmarkQuote = ({quoteProp}) => {
  const dispatch = useDispatch();

  const bookmarkQuote = () => {
    dispatch(funBookmarkQuote(quoteProp));
  }

  return (
    <div className={styles.quote_main_top_div}>
       <p onClick={bookmarkQuote}><i style={{color:"gold"}} className={`fa-${quoteProp.isBookmark ? "solid" : "regular"} fa-star`}></i></p>
       <p className={styles.quote_content_para}>{quoteProp.content}</p>
       <p className={styles.quote_author}>~{quoteProp.author}</p>
    </div>
  )
}

export default BookmarkQuote;
import React, { useState } from 'react'
import styles from "./quote.module.css";
import { useDispatch } from 'react-redux';
import { funBookmarkQuote, funDeleteBookmarkQuote } from '../../redux/actions';

const BookmarkQuote = ({quoteProp}) => {
  const dispatch = useDispatch();

  const deleteBookMarkQuote = (id) => {
     dispatch(funDeleteBookmarkQuote(id));
  }

  return (
    <div className={`${styles.quote_main_top_div} ${styles.bookmark_main_div}`}>
       <p><i style={{color:"gold"}} className={`fa-${quoteProp.isBookmark ? "solid" : "regular"} fa-star`}></i></p>
       <p className={styles.quote_content_para}>{quoteProp.content}</p>
       <p className={styles.quote_author}>~{quoteProp.author}</p>
       <p onClick={()=>deleteBookMarkQuote(quoteProp._id)} className={styles.delete_bookmark_cross}>x</p>
    </div>
  )
}

export default BookmarkQuote;
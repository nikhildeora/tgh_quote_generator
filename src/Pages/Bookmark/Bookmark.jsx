import React from 'react'
import { useSelector } from 'react-redux';
import BookmarkQuote from '../../components/Quote/BookmarkQuote';
import styles from "./bookmark.module.css";

const Bookmark = () => {
 const bookmarks = useSelector(store=>store.bookmarks)

  return (
    <div className={styles.bookmark_div}>
      {bookmarks.length>0 && bookmarks?.map((item,i)=>{
        return <BookmarkQuote key={i} quoteProp={item} />
      })}
    </div>
  )
}

export default Bookmark;
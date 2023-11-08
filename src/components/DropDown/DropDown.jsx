import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from "./dropDown.module.css";
import { funGenerateRandomQoute } from '../../redux/actions';

const DropDown = ({tagRenderProp}) => {
  const tags = useSelector(store=>store.tags)
  const dispatch = useDispatch();

  const changeQuoteByTag = (e) => {
    // it will change curTag value in Home, and when you click next quote it will chnage on basis of these tag 
    tagRenderProp(e.target.value);
    // to fetch random tag with tag value 
    dispatch(funGenerateRandomQoute(e.target.value));
  }

  return (
    <div className={styles.drop_down_main_div}>
      <select onChange={changeQuoteByTag} className={styles.drop_down_select}>
        <option value="">random</option>
        {tags.length>0 && tags?.map((tag,i)=>{
          return (
            <option key={i} value={`${tag}`} >{tag}</option>
          )
        })}
      </select>
    </div>
  )
}

export default DropDown;
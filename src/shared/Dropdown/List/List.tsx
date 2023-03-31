import React from 'react';
import { IItem } from '../exemples/IItem';
import styles from './list.css';

interface IListProps {
  arrayLiItem: IItem[]
  isDropdown: boolean
  comments?: number
}

export function List({ arrayLiItem, isDropdown, comments }:IListProps) {
  return (
    <>
      <ul
      className={isDropdown? styles.listDropdown : styles.listPost}
      >
        {arrayLiItem.map(({ value, As, AsClassName, className }:IItem) => {
          if ((window.innerWidth <= 1020) &&
          (As === 'span' && AsClassName === 'dropdownPost_comment' || 
          As === 'span' && AsClassName === 'dropdownPost_share' ||
          As === 'span' && AsClassName === 'dropdownPost_save')) {
            return
          }
          else {
          return (
            <li
              key={AsClassName}
              className={styles[className]}
              >
                <As
                  className={styles[AsClassName]}
                  onClick={() => AsClassName === 'dropdownPost_hide' ? console.log("object") : false}
                  >
                    {
                    (!isDropdown && AsClassName === 'dropdownPost_comment') 
                    && <>{comments} </>
                    }
                    {value}
              </As>
            </li>
          );}
        })}
      </ul>
      {isDropdown && <button className={styles.closeBtn}>Закрыть</button>}
    </>
    
  );
}

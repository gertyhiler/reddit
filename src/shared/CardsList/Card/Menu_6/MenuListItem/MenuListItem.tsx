import React from 'react';
import { EIcon, Icon } from '../../../../icon/Icon';
import styles from './menulistitem.css';

interface IMenuListItemProps {
  desktop: boolean
  postId?: string
}

export function MenuListItem({desktop, postId = '123'}:IMenuListItemProps) {
  return (
    <ul className={styles.menuItemsList}>
      { desktop && 
        <li className={styles.menuItem}>
          <Icon width="15" height="15" iconName={EIcon.Comment}/>
        <span>Комментарии</span> 
        </li>
      }

      { desktop && 
      <div className={styles.divider}></div>
      }

      { desktop && 
        <li className={styles.menuItem}>
          <Icon width="12" height="14" iconName={EIcon.Share}/>
        <span>Поделиться</span> 
        </li>
      }

      { desktop && 
      <div className={styles.divider}></div>
      }

      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <Icon width="12" height="12" iconName={EIcon.Block}/>
        <span>Скрыть</span> 
      </li>

    <div className={styles.divider}></div>

    { desktop && 
        <li className={styles.menuItem}>
          <Icon width="14" height="14" iconName={EIcon.Save}/>
        <span>Сохранить</span> 
        </li>
      }

      { desktop && 
      <div className={styles.divider}></div>
      }

      <li className={styles.menuItem}>
      <Icon width="14" height="12" iconName={EIcon.Report}/>
        <span>Пожаловаться</span>
      </li>
    </ul>
  );
}

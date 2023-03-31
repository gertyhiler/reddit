import React from 'react';
import { Dropdown_6 } from '../../../Dropdown_6';
import { EIcon, Icon } from '../../../icon/Icon';
import styles from './menu.css';
import { MenuListItem } from './MenuListItem';


export function Menu() {
  const desktop:boolean = typeof window !== 'undefined' ? window.innerWidth >= 1020 : false;
  return (
    <Dropdown_6
    button={ <button
      className={styles.menuButton}
      >
       <Icon width="5" height="20" iconName={EIcon.Menu}/>
      </button>}
    >
      <div className={styles.dropdown}>
      <MenuListItem {...{desktop}}/>
      <button className={styles.closeButton}>Закрыть</button>
      </div>
    </Dropdown_6>
  );
}

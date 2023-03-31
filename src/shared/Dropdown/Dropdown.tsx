import React from 'react';
import { IItem } from './exemples/IItem';
import styles from './dropdown.css';
import { List } from './List';
import { createPortal } from 'react-dom';

interface IDropdownProps {
  onClick: () => void
  arrayLiItem: IItem[]
  btnRect: Array<number>
}

export function Dropdown({onClick, arrayLiItem, btnRect}:IDropdownProps) {
  const node = document.getElementById("dropdown-modal");
  if (!node) return null;

  return createPortal(
    <div className={styles.container}
    style={{left: btnRect[0], top: btnRect[1] + btnRect[2]}} 
    >
      <div className={styles.listContainer} onClick={() => onClick()}>
        <List {...{arrayLiItem, isDropdown: true}}/>
      </div>
    </div>, node
  );
}

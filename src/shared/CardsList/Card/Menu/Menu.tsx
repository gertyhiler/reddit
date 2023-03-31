import React, { useEffect, useRef, useState } from 'react';
import styles from './menu.css';
import { arrayLiItem } from '../../../Dropdown/exemples/menuDropdownList';
import { Dropdown } from '../../../Dropdown';
import { EIcon, Icon } from '../../../icon/Icon';

export interface IMenuProps {
  onClick: () => void
}

export function Menu() {
  const [isOpen, setOpen] = useState(false);
  const [btnRect, setBtnRect] = useState([0,0])
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    setBtnRect([rect.left, rect.top, rect.height]);
    }
  }, [isOpen])

  return (
    <div
      className={styles.menu}
      >
        <button
        className={styles.menuButton}
        onClick={() => {
          setOpen(!isOpen);
        }}
        ref={btnRef}
        >
         <Icon width="5" height="20" iconName={EIcon.Menu}/>
        </button>
        {isOpen && 
          <Dropdown {...{onClick: () => setOpen(!isOpen), arrayLiItem, btnRect}}/>}
      </div>
  );
}

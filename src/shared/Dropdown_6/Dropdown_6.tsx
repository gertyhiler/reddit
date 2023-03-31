import React, { useEffect, useState } from 'react';
import styles from './dropdown_6.css';

interface IDropdownProps {
  button: React.ReactNode
  children: React.ReactNode
  isOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
}

const NOOP = () => {};

export function Dropdown_6({ button, children, isOpen, onOpen = NOOP, onClose = NOOP }:IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
  useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

  const hendleOpen = () => {
    // if (isOpen !== undefined) {
      setIsDropdownOpen(!isDropdownOpen);
  }
  return (
    <div className={styles.container}>
      <div onClick={hendleOpen} className={styles.menu}>
        {button}
      </div>
      {isDropdownOpen && 
      <div className={styles.listContainer}>
        <div className={styles.list}>
        {children}
        </div>
      </div>
      }
    </div>
  );
}

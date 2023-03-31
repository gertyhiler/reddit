import React from 'react';
import { useUserData } from '../../../hooks/useUserData';
import styles from './serchblock.css';
import { UserBlock } from './UserBlock';


export function SearchBlock() {
  const {data, loading} = useUserData();
  return (
    <div
      className={styles.searchBlock}
    >

    searchBlock
    <UserBlock username={data.name} avatarSrc={data.iconImg} loading={loading}/>
    </div>
  );
}

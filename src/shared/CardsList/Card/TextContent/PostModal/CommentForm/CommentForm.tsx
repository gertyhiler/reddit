import React, { ChangeEvent, useState, useEffect, } from 'react';
import { useSelector } from 'react-redux';
import { rootReducer } from '../../../../../../redux/rootStore';
import { EIcon, Icon } from '../../../../../icon/Icon';
import { useForm, SubmitHandler } from "react-hook-form";
import styles from './commentform.css';
import { create } from 'zustand';

interface ICommentFormProps {
  answerName?: string
}

type Inputs = {
  comment: string,
};

interface ZustandState {
  comment: string,
  setComment: (text: string) => void
}

const useCommentStore = create<ZustandState>((set) => ({
  comment: 'Привет из Zustand!',
  setComment: (text) =>  set({comment: text})
}))

export function CommentForm({answerName}:ICommentFormProps) {
  const name = useSelector<rootReducer>(store => store.me.data.name)
  // const [commentValue, setCommentValue] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const {comment, setComment} = useCommentStore();

  const { register, handleSubmit, setFocus } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => alert(JSON.stringify(data));
  
  useEffect(() => {
    setFocus("comment");
    if (answerName !== undefined || name !== undefined) {
      setIsLogin(true);
    }
  }, [name]);

  function hendleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setComment(event.target.value);
    console.log("OnChangeEventState: " + comment);
  }
  // {`${answerName? answerName : name}, оставьте ваш комментарий`}

  return (
    
    <div className={styles.formWrapper}>
      {!isLogin && <div>войдите, чтобы оставить комментарий</div>}
      {isLogin && (
          <form className="commentForm" onSubmit={handleSubmit(onSubmit)}>
          <textarea
            className={styles.commentInput}
            defaultValue={comment}
            {...register("comment", {onChange: (e)=>hendleChange(e)})}
          />
          <div className={styles.formControls}>
              <ul className={styles.controlList}>
                <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => {e.preventDefault()}}><Icon width='20' height='12' iconName={EIcon.FragmentCode}/></button></li>
                <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => {e.preventDefault()}}><Icon width="18" height="18" iconName={EIcon.Image}/></button></li>
                <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => {e.preventDefault()}}><Icon width="16" height="20" iconName={EIcon.Document}/></button></li>
                <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => {e.preventDefault()}}><Icon width="14" height="17" iconName={EIcon.Download}/></button></li>
                <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => {e.preventDefault()}}><Icon width="18" height="18" iconName={EIcon.Contact}/></button></li>
                <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => {e.preventDefault()}}><Icon width="22" height="16" iconName={EIcon.Update}/></button></li>
                <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => {e.preventDefault()}}><Icon width="20" height="10" iconName={EIcon.Link}/></button></li>
                <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => {e.preventDefault()}}><Icon width="20" height="18" iconName={EIcon.СameraVoiсe}/></button></li>
                <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => {e.preventDefault()}}><Icon width="20" height="20" iconName={EIcon.Discuss}/></button></li>
                <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => {e.preventDefault()}}><Icon width="19" height="19" iconName={EIcon.Edit}/></button></li>
                <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => {e.preventDefault()}}><Icon width="16" height="18" iconName={EIcon.Translite}/></button></li>
                <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => {e.preventDefault()}}><Icon width="20" height="20" iconName={EIcon.PDFDocument}/></button></li>
              </ul>
            <button className={styles.formBtn}>Комментировать</button>
            </div>
          </form>
      )}
    
    </div>
  );
}
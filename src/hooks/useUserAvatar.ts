import axios from "axios";
import { useEffect, useState } from "react";

export function useUserAvatar(username: string) : string {
  const [userAvatar, setUserAvatar] = useState('');

  useEffect(() => {
    if(username === "[deleted]") return
    axios.get(
      `https://www.reddit.com/user/${username}/about.json`
    ).then((res) => {
      setUserAvatar(res.data.data['snoovatar_img'])
    }).catch(console.log)
  }, [username]);

  return userAvatar;
}
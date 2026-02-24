import { useState } from 'react';
import AvatarEditor from '../AvatarEditor';

interface AvatarProps {
  nickname: string,
  realname: string
}

function Avatar(props: AvatarProps) {
  const [avatarUrl, setAvatarUrl] = useState('/src/assets/photo.png');

  const handleAvatarChange = (newAvatarUrl: string) => {
    setAvatarUrl(newAvatarUrl);
  };

  return (
    <div className='
      avatar__container 
      flex 
      flex-row
      items-center
      w-full
      gap-8
      '>

      <div className='avatar__photo'>
        <AvatarEditor
          currentAvatar={avatarUrl}
          nickname={props.nickname}
          realname={props.realname}
          onAvatarChange={handleAvatarChange}
        />
      </div>

      <div className='avatar__texts'>

        <div className='text__title'>
          <h1>{props.nickname}</h1>
        </div>

        <div className='text__name mt-3'>
          <h2>{props.realname}</h2>
        </div>

        <div className='text__follow'>
          <button className='mt-5 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'>
            Follow
          </button>
        </div>

      </div>

    </div>
  );
}

export default Avatar;
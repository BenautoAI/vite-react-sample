import ProfileCard from './index';

interface ProfileData {
  id: string;
  nickname: string;
  realname: string;
  imageUrl: string;
  isFollowing?: boolean;
}

interface ProfileCardListProps {
  profiles: ProfileData[];
  columns?: number;
  onFollow?: (profileId: string) => void;
}

function ProfileCardList(props: ProfileCardListProps) {
  const { profiles, columns = 3, onFollow } = props;

  const handleFollowClick = (profileId: string) => {
    if (onFollow) {
      onFollow(profileId);
    }
  };

  return (
    <div 
      className='profilecardlist__container gap-4'
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          nickname={profile.nickname}
          realname={profile.realname}
          imageUrl={profile.imageUrl}
          isFollowing={profile.isFollowing}
          onFollow={() => handleFollowClick(profile.id)}
        />
      ))}
    </div>
  );
}

export default ProfileCardList;

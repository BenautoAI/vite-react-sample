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
  dragState?: {
    draggedId: string | null;
    dragOverId: string | null;
  };
  onDragStart?: (e: React.DragEvent<HTMLDivElement>, id: string) => void;
  onDragOver?: (e: React.DragEvent<HTMLDivElement>, id: string) => void;
  onDragLeave?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop?: (e: React.DragEvent<HTMLDivElement>, id: string) => void;
  onDragEnd?: (e: React.DragEvent<HTMLDivElement>) => void;
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
          id={profile.id}
          nickname={profile.nickname}
          realname={profile.realname}
          imageUrl={profile.imageUrl}
          isFollowing={profile.isFollowing}
          onFollow={() => handleFollowClick(profile.id)}
          isDragging={props.dragState?.draggedId === profile.id}
          isDragOver={props.dragState?.dragOverId === profile.id}
          onDragStart={props.onDragStart}
          onDragOver={props.onDragOver}
          onDragLeave={props.onDragLeave}
          onDrop={props.onDrop}
          onDragEnd={props.onDragEnd}
        />
      ))}
    </div>
  );
}

export default ProfileCardList;

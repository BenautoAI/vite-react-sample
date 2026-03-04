import Avatar from "../Avatar"

interface Profile {
  id: string | number,
  nickname: string,
  realname: string,
  photoUrl?: string
}

interface ProfileGridProps {
  profiles: Profile[],
  onFollowClick?: (profileId: string | number) => void
}

function ProfileGrid(props: ProfileGridProps) {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      {props.profiles.map((profile: Profile) => (
        <Avatar
          key={profile.id}
          nickname={profile.nickname}
          realname={profile.realname}
          photoUrl={profile.photoUrl}
          onFollowClick={() => props.onFollowClick?.(profile.id)}
        />
      ))}
    </div>
  );
}

export default ProfileGrid;

import ProfileGrid from "../../components/ProfileGrid"

function ProfileGridDemo() {
  const sampleProfiles = [
    {
      id: 1,
      nickname: "@alice",
      realname: "Alice Johnson",
      photoUrl: "./src/assets/photo.png"
    },
    {
      id: 2,
      nickname: "@bob",
      realname: "Bob Smith",
      photoUrl: "./src/assets/photo.png"
    },
    {
      id: 3,
      nickname: "@charlie",
      realname: "Charlie Brown",
      photoUrl: "./src/assets/photo.png"
    },
    {
      id: 4,
      nickname: "@diana",
      realname: "Diana Prince",
      photoUrl: "./src/assets/photo.png"
    },
    {
      id: 5,
      nickname: "@evan",
      realname: "Evan Davis",
      photoUrl: "./src/assets/photo.png"
    },
    {
      id: 6,
      nickname: "@fiona",
      realname: "Fiona Wilson",
      photoUrl: "./src/assets/photo.png"
    }
  ];

  const handleFollowClick = (profileId: string | number) => {
    console.log(`Followed profile: ${profileId}`);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Profile Grid</h1>
      <ProfileGrid profiles={sampleProfiles} onFollowClick={handleFollowClick} />
    </div>
  );
}

export default ProfileGridDemo;

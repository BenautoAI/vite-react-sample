import { useState } from "react"
import DraggableProfileGrid from "../../components/DraggableProfileGrid"

interface Profile {
  id: string | number,
  nickname: string,
  realname: string,
  photoUrl?: string
}

function ProfileGridDemo() {
  const [profiles, setProfiles] = useState<Profile[]>([
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
  ]);

  const handleFollowClick = (profileId: string | number) => {
    console.log(`Followed profile: ${profileId}`);
  };

  const handleReorder = (reorderedProfiles: Profile[]) => {
    setProfiles(reorderedProfiles);
    console.log("Profiles reordered:", reorderedProfiles.map(p => p.nickname));
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Draggable Profile Grid</h1>
      <p className="text-gray-600 mb-4">Drag and drop cards to reorder them</p>
      <DraggableProfileGrid 
        profiles={profiles} 
        onFollowClick={handleFollowClick}
        onReorder={handleReorder}
      />
    </div>
  );
}

export default ProfileGridDemo;

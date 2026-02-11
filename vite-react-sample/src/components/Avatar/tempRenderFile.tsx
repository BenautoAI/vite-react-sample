/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

import Avatar from './index';

function AvatarRender() {
  const handleFollowChange = (isFollowing: boolean) => {
    console.log('Follow state changed:', isFollowing);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <Avatar
        nickname="@johndoe"
        realname="John Doe"
        imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
        onFollowChange={handleFollowChange}
      />
    </div>
  );
}

export default AvatarRender;

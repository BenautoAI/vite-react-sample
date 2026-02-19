"use client";

import { useState } from "react";
import Avatar from "../../components/Avatar";
import FeedGrid from "../../components/Grids/Index";

/**
 * Feed Page Component
 *
 * Main page displaying user profile information and a grid of feed cards.
 * Features user avatar with follow functionality and a responsive grid of feed items.
 */
function FeedPage() {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
    // TODO: Integrate with backend follow/unfollow API
  };

  return (
    <>
      <div>
        <Avatar
          nickname="@Felipao__DIO🚀"
          realname="Felipe Aguiar"
          imageUrl="/src/assets/photo.png"
          size="medium"
          onFollowClick={handleFollowClick}
          isFollowing={isFollowing}
          showFollowButton={true}
        />
      </div>
      <div className="mt-10">
        <FeedGrid />
      </div>
    </>
  );
}

export default FeedPage;
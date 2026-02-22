/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

import SmartCard from "./index";

export default function SmartCardRender() {
  const handleFollowClick = () => {
    console.log("Follow button clicked!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <SmartCard
        nickname="alexwonder"
        realname="Alex Thompson"
        avatarUrl="https://i.pravatar.cc/300?img=12"
        onFollowClick={handleFollowClick}
      />
    </div>
  );
}

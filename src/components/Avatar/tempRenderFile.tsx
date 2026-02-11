/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

import Avatar from './index';

function AvatarExample() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <Avatar
        nickname="TechExplorer"
        realname="Sarah Johnson"
        imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
        alt="Sarah Johnson's profile picture"
      />
    </div>
  );
}

export default AvatarExample;

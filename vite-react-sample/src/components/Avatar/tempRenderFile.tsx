/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

import Avatar from './index';

function AvatarDemo() {
  const handleFollowClick = () => {
    console.log('Follow button clicked');
  };

  return (
    <div className="p-8 space-y-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Small Avatar (Not Following)
          </h2>
          <Avatar
            nickname="@johndoe"
            realname="John Doe"
            imageUrl="https://i.pravatar.cc/150?img=12"
            isFollowing={false}
            onFollowClick={handleFollowClick}
            size="sm"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Medium Avatar (Following)
          </h2>
          <Avatar
            nickname="@sarahjones"
            realname="Sarah Jones"
            imageUrl="https://i.pravatar.cc/150?img=45"
            isFollowing={true}
            onFollowClick={handleFollowClick}
            size="md"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Large Avatar (Not Following)
          </h2>
          <Avatar
            nickname="@alexsmith"
            realname="Alex Smith"
            imageUrl="https://i.pravatar.cc/150?img=33"
            isFollowing={false}
            onFollowClick={handleFollowClick}
            size="lg"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Default Avatar (No Image Provided)
          </h2>
          <Avatar
            nickname="@newuser"
            realname="New User"
            isFollowing={false}
            onFollowClick={handleFollowClick}
          />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Avatar Without Follow Button
          </h2>
          <Avatar
            nickname="@viewer"
            realname="Current Viewer"
            imageUrl="https://i.pravatar.cc/150?img=68"
          />
        </div>
      </div>
    </div>
  );
}

export default AvatarDemo;
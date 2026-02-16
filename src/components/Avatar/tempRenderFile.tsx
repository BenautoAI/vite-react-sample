/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

import Avatar from "./index";

function AvatarRender() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl">
        <Avatar
          nickname="johndoe"
          realname="John Doe"
          imageSrc="./src/assets/photo.png"
          size="medium"
          showBorder={true}
        />
      </div>
    </div>
  );
}

export default AvatarRender;

/*
 * TEMPORARY FILE - FOR DEMO PURPOSES ONLY
 * This file is temporary and will be deleted once the draft is accepted.
 */

import FeedCard from "./index";

function FeedCardRender() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-md mx-auto">
        <FeedCard
          title="React Conference 2024"
          description="Just attended an amazing talk about the future of React. So many innovative ideas and great networking opportunities!"
          authorName="Jessica Martinez"
          timestamp="3h ago"
          likes={142}
          comments={28}
        />
      </div>
    </div>
  );
}

export default FeedCardRender;

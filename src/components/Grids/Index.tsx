import FeedCard from "../FeedCard";

function FeedGrid() {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      <FeedCard title="Foto Casa" nickname="@user1" realname="User One" campaign="Campaign 1" />
      <FeedCard title="Foto Casa" nickname="@user2" realname="User Two" campaign="Campaign 2" />
      <FeedCard title="Foto Casa" nickname="@user3" realname="User Three" campaign="Campaign 3" />

      <FeedCard title="Foto Casa" nickname="@user4" realname="User Four" campaign="Campaign 4" />
      <FeedCard title="Foto Casa" nickname="@user5" realname="User Five" campaign="Campaign 5" />
      <FeedCard title="Foto Casa" nickname="@user6" realname="User Six" campaign="Campaign 6" />

      <FeedCard title="Foto Casa" nickname="@user7" realname="User Seven" campaign="Campaign 7" />
      <FeedCard title="Foto Casa" nickname="@user8" realname="User Eight" campaign="Campaign 8" />
      <FeedCard title="Foto Casa" nickname="@user9" realname="User Nine" campaign="Campaign 9" />
    </div>

  );
}

export default FeedGrid;
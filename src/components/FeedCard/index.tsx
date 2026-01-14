interface FeedCardProps {
  title: string;
  authorName?: string;
  authorAvatar?: string;
}

function FeedCard(props: FeedCardProps) {
  return (
    <div className="
      bg-white 
      rounded-lg 
      shadow-md 
      h-96
      ">

      <div className="feedcard__content p-4">
        <div className="feedcard__author flex items-center mb-4">
          <img 
            src={props.authorAvatar || "./src/assets/photo.png"} 
            alt={props.authorName || "User"}
            className="feedcard__avatar w-10 h-10 rounded-full mr-3"
          />
          <div className="feedcard__author-info">
            <h3 className="feedcard__author-name text-sm font-semibold text-gray-900">{props.authorName || "Anonymous User"}</h3>
          </div>
        </div>
        <h2 className="text-lg font-medium text-gray-900">{props.title}</h2>
        <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

    </div>
  );
}

export default FeedCard;

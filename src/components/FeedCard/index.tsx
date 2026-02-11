interface FeedCardProps {
  title: string;
  description?: string;
  imageSrc?: string;
  authorName?: string;
  authorAvatar?: string;
  timestamp?: string;
  likes?: number;
  comments?: number;
}

function FeedCard(props: FeedCardProps) {
  const {
    title,
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageSrc = "./src/assets/photo.png",
    authorName = "User Name",
    authorAvatar = "./src/assets/photo.png",
    timestamp = "2h ago",
    likes = 0,
    comments = 0
  } = props;

  return (
    <article className="
      bg-white 
      rounded-lg 
      shadow-md 
      overflow-hidden
      hover:shadow-lg
      transition-shadow
      duration-300
      ">

      {/* Card Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Author Info */}
        <div className="flex items-center mb-3">
          <img
            src={authorAvatar}
            alt={authorName}
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">{authorName}</p>
            <p className="text-xs text-gray-500">{timestamp}</p>
          </div>
        </div>

        {/* Title and Description */}
        <h2 className="text-lg font-semibold text-gray-900 mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>

        {/* Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-sm">{likes}</span>
          </button>

          <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-sm">{comments}</span>
          </button>

          <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span className="text-sm">Share</span>
          </button>
        </div>
      </div>

    </article>
  );
}

export default FeedCard;
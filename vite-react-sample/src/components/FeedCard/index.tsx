interface FeedCardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  likes?: number;
  comments?: number;
}

function FeedCard(props: FeedCardProps) {
  const { 
    title, 
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl,
    likes = 0,
    comments = 0
  } = props;

  return (
    <div className="
      bg-white 
      rounded-lg 
      shadow-md 
      hover:shadow-lg
      transition-shadow
      duration-300
      overflow-hidden
      cursor-pointer
      ">

      {imageUrl && (
        <div className="
          w-full 
          h-48 
          bg-gradient-to-br 
          from-purple-400 
          to-pink-500
          overflow-hidden
          ">
          <img 
            src={imageUrl} 
            alt={title}
            className="
              w-full 
              h-full 
              object-cover
              hover:scale-105
              transition-transform
              duration-300
              "
          />
        </div>
      )}

      <div className="p-4">
        <h2 className="
          text-lg 
          font-semibold 
          text-gray-900
          line-clamp-2
          ">
          {title}
        </h2>
        <p className="
          mt-2 
          text-sm 
          text-gray-600
          line-clamp-3
          ">
          {description}
        </p>
        
        <div className="
          flex 
          items-center 
          justify-between 
          mt-4 
          pt-4 
          border-t 
          border-gray-200
          ">
          <div className="flex items-center gap-4">
            <span className="
              text-sm 
              text-gray-500
              flex 
              items-center 
              gap-1
              ">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
              {likes}
            </span>
            <span className="
              text-sm 
              text-gray-500
              flex 
              items-center 
              gap-1
              ">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              {comments}
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default FeedCard;
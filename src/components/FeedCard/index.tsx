interface FeedProps {
  campaignTitle: string;
  country: string;
  capAmount: string;
  status: 'active' | 'paused' | 'completed' | 'draft';
  icon?: string;
}

function FeedCard(props: FeedProps) {
  // Status badge color mapping
  const statusColors = {
    active: 'bg-green-100 text-green-800',
    paused: 'bg-yellow-100 text-yellow-800',
    completed: 'bg-gray-100 text-gray-800',
    draft: 'bg-blue-100 text-blue-800'
  };

  return (
    <div className="
      bg-white 
      rounded-lg 
      shadow-md 
      p-4
      hover:shadow-lg
      transition-shadow
      border-2
      border-red-500
      ">
      <div className="flex items-start justify-between gap-4">
        {/* Left Section: Icon + Content */}
        <div className="flex gap-3 flex-1 min-w-0">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="
              w-12 
              h-12 
              rounded-lg 
              bg-gradient-to-br 
              from-blue-500 
              to-purple-600 
              flex 
              items-center 
              justify-center 
              text-white 
              font-bold 
              text-xl
              ">
              {props.icon || props.campaignTitle.charAt(0).toUpperCase()}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-semibold text-gray-900 truncate">
              {props.campaignTitle}
            </h2>
            <div className="mt-2 space-y-1">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Country:</span> {props.country}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">CAP Amount:</span> {props.capAmount}
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Status Badge */}
        <div className="flex-shrink-0">
          <span className={`
            inline-flex 
            items-center 
            px-3 
            py-1 
            rounded-full 
            text-xs 
            font-medium 
            uppercase
            ${statusColors[props.status]}
            `}>
            {props.status}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FeedCard;
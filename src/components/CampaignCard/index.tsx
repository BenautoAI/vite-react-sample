interface CampaignCardProps {
  icon: string;
  title: string;
  country: string;
  amount: string;
  status: 'Approved' | 'Pending';
}

function CampaignCard(props: CampaignCardProps) {
  const statusStyles = {
    Approved: 'bg-green-100 text-green-700',
    Pending: 'bg-orange-100 text-orange-700'
  };

  return (
    <div className="
      bg-white 
      rounded-lg 
      shadow-md 
      p-6
      flex
      items-center
      gap-6
      w-full
    ">
      {/* Icon Container */}
      <div className="
        bg-gray-800 
        rounded-xl 
        w-20 
        h-20 
        flex 
        items-center 
        justify-center
        flex-shrink-0
      ">
        <span className="text-4xl">{props.icon}</span>
      </div>

      {/* Content Section */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {props.title}
        </h2>
        <p className="text-sm text-gray-600 mb-1">
          Country: <span className="font-medium text-gray-900">{props.country}</span>
        </p>
        <p className="text-sm text-gray-600">
          Amount of CAP: <span className="font-semibold text-gray-900">{props.amount}</span>
        </p>
      </div>

      {/* Status Badge */}
      <div className={`
        px-4 
        py-2 
        rounded-md 
        text-sm 
        font-medium
        ${statusStyles[props.status]}
      `}>
        {props.status}
      </div>
    </div>
  );
}

export default CampaignCard;

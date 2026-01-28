import StatusBadge from '../StatusBadge';

export interface Campaign {
  id: string;
  name: string;
  country: string;
  amount: number;
  status: 'Approved' | 'Pending';
  icon: React.ReactNode;
}

interface CampaignCardProps {
  campaign: Campaign;
}

function CampaignCard({ campaign }: CampaignCardProps) {
  const formattedAmount = campaign.amount.toLocaleString();

  return (
    <div className="
      bg-white
      rounded-2xl
      shadow-md
      p-6
      flex
      items-center
      justify-between
      hover:shadow-lg
      transition-shadow
      ">
      <div className="flex items-center gap-6">
        {/* Campaign Icon */}
        <div className="
          bg-gray-800
          rounded-2xl
          w-20
          h-20
          flex
          items-center
          justify-center
          flex-shrink-0
          ">
          {campaign.icon}
        </div>

        {/* Campaign Details */}
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold text-gray-900">
            {campaign.name}
          </h3>
          <p className="text-sm text-gray-600">
            Country: <span className="font-medium">{campaign.country}</span>
          </p>
          <p className="text-sm text-gray-600">
            Amount of CAP: <span className="font-bold text-gray-900">{formattedAmount}</span>
          </p>
        </div>
      </div>

      {/* Status Badge */}
      <div className="ml-4">
        <StatusBadge status={campaign.status} />
      </div>
    </div>
  );
}

export default CampaignCard;

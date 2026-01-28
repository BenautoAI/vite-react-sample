import CampaignCard from '../CampaignCard';

interface Campaign {
  id: string;
  icon: string;
  title: string;
  country: string;
  amount: string;
  status: 'Approved' | 'Pending';
}

interface CampaignListProps {
  campaigns: Campaign[];
}

function CampaignList(props: CampaignListProps) {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto">
      {props.campaigns.map((campaign) => (
        <CampaignCard
          key={campaign.id}
          icon={campaign.icon}
          title={campaign.title}
          country={campaign.country}
          amount={campaign.amount}
          status={campaign.status}
        />
      ))}
    </div>
  );
}

export default CampaignList;

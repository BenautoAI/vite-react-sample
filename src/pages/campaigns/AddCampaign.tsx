import CampaignCard, { Campaign } from '../../components/CampaignCard';

function AddCampaign() {
  // Sample campaign data matching the screenshot
  const campaigns: Campaign[] = [
    {
      id: '1',
      name: 'Campaign 1',
      country: 'France',
      amount: 1000000,
      status: 'Approved',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="12" r="4" fill="#3B82F6" />
          <circle cx="12" cy="24" r="4" fill="#10B981" />
          <circle cx="28" cy="24" r="4" fill="#F59E0B" />
          <circle cx="20" cy="28" r="4" fill="#EF4444" />
        </svg>
      ),
    },
    {
      id: '2',
      name: 'Campaign 2',
      country: 'UK',
      amount: 1500000,
      status: 'Approved',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="14" r="5" fill="#EC4899" />
          <circle cx="14" cy="24" r="5" fill="#EC4899" />
          <circle cx="26" cy="24" r="5" fill="#EC4899" />
        </svg>
      ),
    },
    {
      id: '3',
      name: 'Campaign 3',
      country: 'USA',
      amount: 1000000,
      status: 'Pending',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M20 10 L28 30 L12 30 Z"
            fill="#3B82F6"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Campaigns</h1>
        
        <div className="flex flex-col gap-4">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AddCampaign;

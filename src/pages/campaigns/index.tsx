import CampaignList from '../../components/CampaignList';

function CampaignPage() {
  const campaigns = [
    {
      id: '1',
      icon: '🎯',
      title: 'Campaign 1',
      country: 'France',
      amount: '1,000,000',
      status: 'Approved' as const
    },
    {
      id: '2',
      icon: '🎨',
      title: 'Campaign 2',
      country: 'UK',
      amount: '1,500,000',
      status: 'Approved' as const
    },
    {
      id: '3',
      icon: '🔷',
      title: 'Campaign 3',
      country: 'USA',
      amount: '1,000,000',
      status: 'Pending' as const
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <CampaignList campaigns={campaigns} />
    </div>
  );
}

export default CampaignPage;

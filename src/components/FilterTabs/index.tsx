interface FilterTab {
  id: string;
  label: string;
  icon: string;
  count: number | null;
  active: boolean;
}

interface FilterTabsProps {
  tabs: FilterTab[];
  onTabChange: (tabId: string) => void;
}

function FilterTabs(props: FilterTabsProps) {
  return (
    <div className='
      flex
      flex-row
      gap-3
      mb-6
    '>
      {props.tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => props.onTabChange(tab.id)}
          className={`
            flex
            flex-row
            items-center
            gap-2
            px-4
            py-2
            rounded-lg
            border
            whitespace-nowrap
            ${tab.active
              ? 'bg-gray-200 border-gray-400 text-gray-900 font-medium'
              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            }
          `}
        >
          <span className='text-lg'>{tab.icon}</span>
          <span>{tab.label}</span>
          {tab.count !== null && (
            <span className='text-sm text-gray-600'>
              {tab.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;

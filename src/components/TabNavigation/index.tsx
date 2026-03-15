interface TabNavigationProps {
  tabs: { id: string; label: string }[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

function TabNavigation(props: TabNavigationProps) {
  return (
    <div className="flex flex-row items-center justify-center gap-8">
      {props.tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => props.onTabChange(tab.id)}
          className={`pb-2 text-lg font-medium transition-colors ${
            props.activeTab === tab.id
              ? 'text-black border-b-2 border-black'
              : 'text-gray-400 border-b-2 border-transparent'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default TabNavigation;

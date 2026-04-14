import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import FilterTabs from '../../components/FilterTabs';
import MemoryCard from '../../components/MemoryCard';

interface Memory {
  id: string;
  agentName: string;
  agentIcon: string;
  category: string;
  createdBy: string;
  updatedTime: string;
  title: string;
  description: string;
  usedCount: number;
  likedCount: number;
  lastUsedTime: string;
  status: 'active' | 'needs-review' | 'deprecated';
  statusLabel: string;
}

function AgentMemoryHub() {
  const [selectedTab, setSelectedTab] = useState('total');
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [activeFilters, setActiveFilters] = useState({
    mostUsed: true,
    recentlyLearned: true,
    needsReview: true,
    deprecated: true
  });

  const filterTabs = [
    { id: 'total', label: 'Total Memories', icon: '📋', count: 23, active: selectedTab === 'total' },
    { id: 'updated', label: 'Recently Updated', icon: '📅', count: null, active: selectedTab === 'updated' },
    { id: 'used', label: 'Most Used', icon: '⭐', count: null, active: selectedTab === 'used' },
    { id: 'review', label: 'Needs Review', icon: '✓', count: null, active: selectedTab === 'review' }
  ];

  const agents = [
    { id: 'builder', name: 'Builder', icon: '🟦', color: 'from-blue-400 to-blue-600' },
    { id: 'renderfixer', name: 'RenderFixer', icon: '🔴', color: 'from-red-400 to-red-600' },
    { id: 'planner', name: 'Planner', icon: '🔷', color: 'from-cyan-400 to-cyan-600' }
  ];

  const filterOptions = [
    { id: 'mostUsed', label: 'Most Used', checked: activeFilters.mostUsed },
    { id: 'recentlyLearned', label: 'Recently Learned', checked: activeFilters.recentlyLearned },
    { id: 'needsReview', label: 'Needs Review', checked: activeFilters.needsReview },
    { id: 'deprecated', label: 'Deprecated', checked: activeFilters.deprecated }
  ];

  const memories: Memory[] = [
    {
      id: '1',
      agentName: 'Builder',
      agentIcon: '🟦',
      category: 'Code Generation',
      createdBy: 'Builder',
      updatedTime: '1 day ago',
      title: 'Custom Vite Bootstrap Required',
      description: 'Bootstrap in this project must point to apps/web/src/main.tsx.',
      usedCount: 31,
      likedCount: 4,
      lastUsedTime: '1 hour ago',
      status: 'active',
      statusLabel: 'Active'
    },
    {
      id: '2',
      agentName: 'RenderFixer',
      agentIcon: '🔴',
      category: 'Rendering',
      createdBy: 'RenderFixer',
      updatedTime: '3 days ago',
      title: 'Scroll to Error Handling Pattern',
      description: 'Automatically scrolls to the first error field in forms.',
      usedCount: 22,
      likedCount: 2,
      lastUsedTime: '1 time',
      status: 'needs-review',
      statusLabel: 'Needs Review'
    },
    {
      id: '3',
      agentName: 'Planner',
      agentIcon: '🔷',
      category: 'Git Strategy',
      createdBy: 'Planner',
      updatedTime: '2 months ago',
      title: 'Use Main Branch for Hotfixes',
      description: 'Hotfixes should be committed directly to main branch.',
      usedCount: 15,
      likedCount: 0,
      lastUsedTime: '3 weeks ago',
      status: 'deprecated',
      statusLabel: 'Deprecated'
    }
  ];

  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId);
  };

  const handleFilterChange = (filterId: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterId]: !prev[filterId as keyof typeof activeFilters]
    }));
  };

  const handleAgentSelect = (agentId: string) => {
    setSelectedAgent(selectedAgent === agentId ? null : agentId);
  };

  return (
    <div className='
      flex
      flex-col
      min-h-screen
      bg-gray-50
    '>
      {/* Header */}
      <div className='
        bg-gray-50
        border-b
        border-gray-200
        px-6
        py-6
      '>
        <div className='
          flex
          flex-row
          items-center
          gap-3
          mb-4
        '>
          <span className='text-2xl'>🧠</span>
          <h1 className='text-2xl font-bold text-gray-900'>
            Agent Memory Hub
          </h1>
        </div>
        <p className='text-gray-600 text-sm'>
          When agents learn something useful in your codebase, they store it here so others don't repeat the same trial and error.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className='bg-gray-50 border-b border-gray-200 px-6 py-4'>
        <FilterTabs tabs={filterTabs} onTabChange={handleTabChange} />
      </div>

      {/* Main Content */}
      <div className='flex flex-row flex-1 gap-0'>
        {/* Sidebar */}
        <Sidebar
          agents={agents}
          filterOptions={filterOptions}
          selectedAgent={selectedAgent}
          onAgentSelect={handleAgentSelect}
          onFilterChange={handleFilterChange}
        />

        {/* Memory Cards List */}
        <div className='
          flex-1
          bg-white
          overflow-y-auto
          p-6
        '>
          <div className='max-w-4xl'>
            {memories.map((memory) => (
              <MemoryCard
                key={memory.id}
                agentName={memory.agentName}
                agentIcon={memory.agentIcon}
                category={memory.category}
                createdBy={memory.createdBy}
                updatedTime={memory.updatedTime}
                title={memory.title}
                description={memory.description}
                usedCount={memory.usedCount}
                likedCount={memory.likedCount}
                lastUsedTime={memory.lastUsedTime}
                status={memory.status}
                statusLabel={memory.statusLabel}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer with Add Memory Button */}
      <div className='
        bg-white
        border-t
        border-gray-200
        px-6
        py-6
        flex
        justify-center
      '>
        <button className='
          bg-blue-600
          text-white
          px-6
          py-2
          rounded-lg
          font-medium
          hover:bg-blue-700
          flex
          flex-row
          items-center
          gap-2
        '>
          <span>+</span>
          <span>Add Memory</span>
        </button>
      </div>
    </div>
  );
}

export default AgentMemoryHub;

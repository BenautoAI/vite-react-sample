interface Agent {
  id: string;
  name: string;
  icon: string;
  selected?: boolean;
}

interface FilterOption {
  id: string;
  label: string;
  checked: boolean;
}

interface SidebarProps {
  agents: Agent[];
  filterOptions: FilterOption[];
  selectedAgent: string | null;
  onAgentSelect: (agentId: string) => void;
  onFilterChange: (filterId: string) => void;
}

function Sidebar(props: SidebarProps) {
  return (
    <div className='
      w-80
      bg-gray-50
      border-r
      border-gray-200
      p-4
    '>
      {/* Search Bar */}
      <div className='mb-6'>
        <input
          type='text'
          placeholder='Search agent knowledge...'
          className='
            w-full
            px-3
            py-2
            border
            border-gray-300
            rounded-lg
            text-sm
            text-gray-700
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          '
        />
      </div>

      {/* All Agents */}
      <div className='mb-6'>
        <button className='
          w-full
          flex
          flex-row
          items-center
          gap-2
          px-3
          py-2
          rounded-lg
          text-gray-900
          font-medium
          bg-gray-200
          hover:bg-gray-300
          text-left
        '>
          🔒 All Agents
        </button>
      </div>

      {/* Agent List */}
      <div className='mb-6'>
        {props.agents.map((agent) => (
          <button
            key={agent.id}
            onClick={() => props.onAgentSelect(agent.id)}
            className={`
              w-full
              flex
              flex-row
              items-center
              gap-2
              px-3
              py-2
              rounded-lg
              text-left
              mb-1
              ${props.selectedAgent === agent.id
                ? 'bg-blue-100 text-blue-900 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
              }
            `}
          >
            <span className='text-lg'>{agent.icon}</span>
            <span>{agent.name}</span>
          </button>
        ))}
      </div>

      {/* Filter Options */}
      <div className='border-t border-gray-200 pt-4'>
        <h4 className='
          text-sm
          font-semibold
          text-gray-900
          mb-3
          px-3
        '>
          Filter Options
        </h4>
        {props.filterOptions.map((option) => (
          <label
            key={option.id}
            className='
              flex
              flex-row
              items-center
              gap-2
              px-3
              py-2
              text-gray-700
              cursor-pointer
              hover:bg-gray-100
              rounded-lg
              mb-1
            '
          >
            <input
              type='checkbox'
              checked={option.checked}
              onChange={() => props.onFilterChange(option.id)}
              className='w-4 h-4'
            />
            <span className='text-sm'>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

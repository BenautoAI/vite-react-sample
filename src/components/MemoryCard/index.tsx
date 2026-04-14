import StatusBadge from '../StatusBadge';
import CategoryBadge from '../CategoryBadge';

interface MemoryCardProps {
  agentName: string;
  agentIcon: string;
  category: string;
  createdBy: string;
  updatedTime: string;
  title: string;
  description: string;
  usedCount: number;
  likedCount: number;
  lastUsedTime?: string;
  status: 'active' | 'needs-review' | 'deprecated';
  statusLabel: string;
}

function MemoryCard(props: MemoryCardProps) {
  return (
    <div className='
      bg-white
      border
      border-gray-200
      rounded-lg
      p-6
      mb-4
      shadow-sm
    '>
      {/* Header with Agent Info */}
      <div className='
        flex
        flex-row
        items-center
        justify-between
        mb-4
      '>
        <div className='flex flex-row items-center gap-3'>
          <div className='
            w-8
            h-8
            rounded-full
            bg-gradient-to-r
            from-blue-400
            to-purple-500
            flex
            items-center
            justify-center
            text-white
            text-sm
            font-medium
          '>
            {props.agentIcon}
          </div>
          <div className='flex flex-row items-center gap-2'>
            <h3 className='font-medium text-gray-900'>{props.agentName}</h3>
            <span className='text-gray-500 text-sm'>{props.category}</span>
            <span className='text-gray-400 text-sm'>Created by {props.createdBy}</span>
            <span className='text-gray-400 text-sm'>Updated {props.updatedTime}</span>
          </div>
        </div>
        <button className='
          px-3
          py-1
          text-sm
          text-gray-700
          bg-gray-100
          rounded
          hover:bg-gray-200
        '>
          Edit ▼
        </button>
      </div>

      {/* Title */}
      <h2 className='
        text-lg
        font-semibold
        text-gray-900
        mb-2
      '>
        {props.title}
      </h2>

      {/* Description */}
      <p className='
        text-gray-700
        text-sm
        mb-4
      '>
        {props.description}
      </p>

      {/* Metadata and Status */}
      <div className='
        flex
        flex-row
        items-center
        justify-between
        pt-4
        border-t
        border-gray-200
      '>
        <div className='flex flex-row items-center gap-4 text-sm text-gray-600'>
          <span>👍 Used {props.usedCount} times</span>
          <span>⭐ Liked by {props.likedCount} agents</span>
          {props.lastUsedTime && (
            <span>🕐 Last used {props.lastUsedTime}</span>
          )}
        </div>
        <div className='flex flex-row items-center gap-3'>
          <StatusBadge status={props.status} label={props.statusLabel} />
          <button className='text-gray-400 hover:text-gray-600 text-xl'>
            ⋯
          </button>
        </div>
      </div>
    </div>
  );
}

export default MemoryCard;

interface TaskItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

function TaskItem(props: TaskItemProps) {
  return (
    <div className="
      flex 
      items-center 
      bg-white 
      rounded-lg 
      shadow-md 
      p-4 
      mb-3
      hover:shadow-lg
      transition-shadow
      duration-200
    ">
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => props.onToggle(props.id)}
        className="
          w-5 
          h-5 
          rounded 
          border-gray-300 
          cursor-pointer
          mr-4
        "
      />
      
      <span className={`
        flex-1 
        text-gray-900
        ${props.completed ? 'line-through text-gray-400' : ''}
      `}>
        {props.text}
      </span>

      <button
        onClick={() => props.onDelete(props.id)}
        className="
          ml-4
          text-red-500
          hover:text-red-700
          font-bold
          text-xl
          px-3
          py-1
        "
      >
        ×
      </button>
    </div>
  );
}

export default TaskItem;

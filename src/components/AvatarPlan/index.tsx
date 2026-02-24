interface AvatarPlanProps {
  nickname: string;
  realname: string;
  status: string;
  title: string;
  description: string;
  dueDate: string;
}

function AvatarPlan(props: AvatarPlanProps) {
  return (
    <div className="
      bg-white 
      rounded-lg 
      shadow-md 
      p-4
      w-full
    ">
      {/* Header with Avatar and Status */}
      <div className="
        flex 
        flex-row 
        items-center 
        justify-between 
        mb-4
      ">
        <div className="
          flex 
          flex-row 
          items-center
        ">
          <div className="
            rounded-full
            hover:scale-x-110
            hover:scale-y-110
            bg-gradient-to-r 
            p-[6px] 
            from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]
            mr-3
          ">
            <img
              className="
              rounded-full
              w-12
              h-12
              bg-white
              "
              src="./src/assets/photo.png"
              alt={props.nickname}
            />
          </div>
          <div className="flex flex-col">
            <h3 className="font-medium text-gray-900">{props.nickname}</h3>
            <p className="text-sm text-gray-500">{props.realname}</p>
          </div>
        </div>
        <span className="
          px-3 
          py-1 
          rounded-full 
          text-sm 
          font-medium
          bg-blue-100 
          text-blue-800
        ">
          {props.status}
        </span>
      </div>

      {/* Title and Description */}
      <div className="mb-4">
        <h2 className="text-lg font-medium text-gray-900 mb-2">{props.title}</h2>
        <p className="text-sm text-gray-500">{props.description}</p>
      </div>

      {/* Footer with Date and Actions */}
      <div className="
        flex 
        flex-row 
        items-center 
        justify-between 
        border-t 
        pt-3
      ">
        <p className="text-xs text-gray-400">Due: {props.dueDate}</p>
        <div className="flex gap-2">
          <button className="
            px-3 
            py-1 
            rounded 
            text-sm 
            text-blue-600 
            hover:bg-blue-50
            transition
          ">
            View
          </button>
          <button className="
            px-3 
            py-1 
            rounded 
            text-sm 
            text-gray-600 
            hover:bg-gray-50
            transition
          ">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AvatarPlan;

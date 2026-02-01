import Avatar from '../Avatar';

interface FeedProps {
  title: string;
  nickname?: string;
  realname?: string;
}

function FeedCard(props: FeedProps) {
  return (
    <div className="
      bg-white 
      rounded-lg 
      shadow-md 
      h-96
      ">

      <div className="p-4">
        {props.nickname && props.realname && (
          <div className="mb-4 text-red-600">
            <Avatar nickname={props.nickname} realname={props.realname} />
          </div>
        )}
        <h2 className="text-lg font-medium text-gray-900">{props.title}</h2>
        <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

    </div>
  );
}

export default FeedCard;
interface FeedProps {
  title: string;
  color?: string;
}

function FeedCard(props: FeedProps) {
  return (
    <div 
      className="
        rounded-lg 
        shadow-md 
        h-96
      "
      style={{ backgroundColor: props.color || '#ffffff' }}
    >

      <div className="p-4">
        <h2 className="text-lg font-medium" style={{ color: props.color ? '#ffffff' : '#111827' }}>{props.title}</h2>
        <p className="mt-2 text-sm" style={{ color: props.color ? '#f3f4f6' : '#6b7280' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

    </div>
  );
}

export default FeedCard;
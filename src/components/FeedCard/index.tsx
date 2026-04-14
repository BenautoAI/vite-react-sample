interface FeedProps {
  title: string;
}

function FeedCard(props: FeedProps) {
  return (
    <div className="bg-white rounded-lg shadow-md h-96">
      <div className="p-4">
        <h2 className="heading-3 text-text-primary">{props.title}</h2>
        <p className="mt-2 body-text text-text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
}

export default FeedCard;
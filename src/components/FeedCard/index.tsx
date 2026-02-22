interface FeedProps {
  title: string;
}

/**
 * A card component for displaying feed items with a title and description.
 * Displays a white card with rounded corners containing a headline with a red outline and body text.
 *
 * @param props - Component props
 * @param props.title - The headline text to display in the card
 */
export function FeedCard(props: FeedProps) {
  return (
    <div className="bg-white rounded-lg shadow-md h-96">
      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-900 border-2 border-red-500">{props.title}</h2>
        <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
}


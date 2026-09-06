interface FeedProps {
  title: string;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
}

/**
 * FeedCard component with vibrant gradient border effect.
 * Displays a card with customizable gradient border colors,
 * supporting title and descriptive content.
 *
 * @param props - Feed card properties
 * @param props.title - Card title text
 * @param props.gradientFrom - Starting color of gradient (hex code, default: pink)
 * @param props.gradientVia - Middle color of gradient (hex code, default: purple)
 * @param props.gradientTo - Ending color of gradient (hex code, default: blue)
 */
function FeedCard(props: FeedProps) {
  const { title, gradientFrom = "#EC4899", gradientVia = "#8B5CF6", gradientTo = "#3B82F6" } = props;
  
  return (
    <div className="rounded-lg bg-gradient-to-br p-[3px] shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
         style={{
           backgroundImage: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientVia}, ${gradientTo})`
         }}>
      {/* Inner white card */}
      <div className="h-full rounded-lg bg-white p-4">
        <h2 className="text-lg font-medium text-gray-900">{title}</h2>
        <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
}

export default FeedCard;
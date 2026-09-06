import { getCardColor } from "./utils";

interface FeedProps {
  title: string;
  colorInput?: number | string; // Optional: index or string to generate color
}

function FeedCard(props: FeedProps) {
  const { title, colorInput } = props;
  const cardColor = colorInput !== undefined ? getCardColor(colorInput) : "bg-white";

  return (
    <div className={`
      ${cardColor}
      rounded-lg 
      shadow-md 
      h-96
      hover:shadow-xl
      transition-shadow
      duration-300
      `}>

      <div className="p-4">
        <h2 className="text-lg font-medium text-white">{title}</h2>
        <p className="mt-2 text-sm text-white/80">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

    </div>
  );
}

export default FeedCard;
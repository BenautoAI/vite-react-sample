import FeedCard from "../FeedCard";
import { GRADIENTS } from "../FeedCard/gradients";

function FeedGrid() {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      <FeedCard title="Foto Casa" gradient={GRADIENTS[0]} />
      <FeedCard title="Foto Casa" gradient={GRADIENTS[1]} />
      <FeedCard title="Foto Casa" gradient={GRADIENTS[2]} />

      <FeedCard title="Foto Casa" gradient={GRADIENTS[3]} />
      <FeedCard title="Foto Casa" gradient={GRADIENTS[4]} />
      <FeedCard title="Foto Casa" gradient={GRADIENTS[5]} />

      <FeedCard title="Foto Casa" gradient={GRADIENTS[0]} />
      <FeedCard title="Foto Casa" gradient={GRADIENTS[2]} />
      <FeedCard title="Foto Casa" gradient={GRADIENTS[4]} />
    </div>

  );
}

export default FeedGrid;
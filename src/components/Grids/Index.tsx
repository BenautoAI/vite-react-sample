import FeedCard from "../FeedCard";

/**
 * Grid layout component that displays a 3-column grid of colorful feed cards.
 * Each card has a unique pastel background color from the Material Design palette.
 *
 * @returns React component displaying a responsive grid of feed cards
 */
function FeedGrid() {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      <FeedCard title="Foto Casa" color="#FFCDD2" />
      <FeedCard title="Foto Casa" color="#F8BBD0" />
      <FeedCard title="Foto Casa" color="#E1BEE7" />

      <FeedCard title="Foto Casa" color="#D1C4E9" />
      <FeedCard title="Foto Casa" color="#C5CAE9" />
      <FeedCard title="Foto Casa" color="#BBDEFB" />

      <FeedCard title="Foto Casa" color="#B3E5FC" />
      <FeedCard title="Foto Casa" color="#B2DFDB" />
      <FeedCard title="Foto Casa" color="#C8E6C9" />
    </div>

  );
}

export default FeedGrid;
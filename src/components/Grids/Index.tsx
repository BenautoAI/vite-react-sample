import FeedCard from "../FeedCard";

/**
 * FeedGrid component displaying a responsive grid of feed cards.
 * Renders a 3-column grid with 9 feed cards, each with unique gradient
 * border colors for visual variety and engagement.
 */
function FeedGrid() {
  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      {/* Row 1 - Pink to Purple to Blue */}
      <FeedCard title="Foto Casa" gradientFrom="#EC4899" gradientVia="#8B5CF6" gradientTo="#3B82F6" />
      <FeedCard title="Foto Casa" gradientFrom="#F59E0B" gradientVia="#EF4444" gradientTo="#EC4899" />
      <FeedCard title="Foto Casa" gradientFrom="#10B981" gradientVia="#06B6D4" gradientTo="#8B5CF6" />

      {/* Row 2 - Blue to Cyan to Green */}
      <FeedCard title="Foto Casa" gradientFrom="#3B82F6" gradientVia="#06B6D4" gradientTo="#10B981" />
      <FeedCard title="Foto Casa" gradientFrom="#8B5CF6" gradientVia="#EC4899" gradientTo="#F59E0B" />
      <FeedCard title="Foto Casa" gradientFrom="#EF4444" gradientVia="#F59E0B" gradientTo="#FBBF24" />

      {/* Row 3 - Purple to Pink to Orange */}
      <FeedCard title="Foto Casa" gradientFrom="#6366F1" gradientVia="#8B5CF6" gradientTo="#EC4899" />
      <FeedCard title="Foto Casa" gradientFrom="#06B6D4" gradientVia="#3B82F6" gradientTo="#6366F1" />
      <FeedCard title="Foto Casa" gradientFrom="#10B981" gradientVia="#34D399" gradientTo="#06B6D4" />
    </div>

  );
}

export default FeedGrid;
/**
 * Utility functions for FeedCard component
 */

/**
 * Generate a deterministic background color based on an index or title.
 * Returns gradient color classes for card backgrounds.
 *
 * @param input - Index number or title string to generate color from
 * @returns Tailwind CSS gradient background class
 */
export function getCardColor(input: number | string): string {
  // Color palette for card backgrounds - vibrant gradients
  const colors = [
    "bg-gradient-to-br from-blue-400 to-blue-600",
    "bg-gradient-to-br from-green-400 to-green-600",
    "bg-gradient-to-br from-yellow-400 to-yellow-600",
    "bg-gradient-to-br from-red-400 to-red-600",
    "bg-gradient-to-br from-purple-400 to-purple-600",
    "bg-gradient-to-br from-pink-400 to-pink-600",
    "bg-gradient-to-br from-indigo-400 to-indigo-600",
    "bg-gradient-to-br from-teal-400 to-teal-600",
    "bg-gradient-to-br from-orange-400 to-orange-600",
    "bg-gradient-to-br from-cyan-400 to-cyan-600",
  ];

  // If input is a number, use it directly
  if (typeof input === "number") {
    return colors[input % colors.length];
  }

  // If input is a string, hash it
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = input.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Get color index using modulo
  const index = Math.abs(hash) % colors.length;

  return colors[index];
}

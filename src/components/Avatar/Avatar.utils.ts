/**
 * Extract initials from a name string
 * - Strips special characters (@ symbols, emojis)
 * - Takes first letter of first word + first letter of last word
 * - If single word, takes first 2 letters
 * - Always uppercase
 * 
 * @param name - The name to extract initials from
 * @returns 1-2 letter initials
 */
export function getInitials(name: string): string {
  if (!name || name.trim() === '') {
    return '?';
  }

  // Strip @ symbol and emojis/special characters, keep only letters and spaces
  const cleanName = name
    .replace(/@/g, '')
    .replace(/[^\p{L}\s]/gu, '')
    .trim();

  if (cleanName === '') {
    return '?';
  }

  const words = cleanName.split(/\s+/).filter(word => word.length > 0);

  if (words.length === 0) {
    return '?';
  }

  if (words.length === 1) {
    // Single word: take first 2 letters
    return words[0].substring(0, 2).toUpperCase();
  }

  // Multiple words: first letter of first word + first letter of last word
  const firstInitial = words[0][0];
  const lastInitial = words[words.length - 1][0];
  return (firstInitial + lastInitial).toUpperCase();
}

/**
 * Generate a consistent color class for an avatar based on the name
 * Uses a simple hash function to map names to predefined colors
 * 
 * @param name - The name to generate a color for
 * @returns Tailwind CSS background color class
 */
export function getAvatarColor(name: string): string {
  const colors = [
    'bg-blue-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-red-500'
  ];

  // Simple hash function for consistency
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash) % colors.length;
  return colors[index];
}

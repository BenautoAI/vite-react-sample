/**
 * Utility functions for Avatar component
 */

/**
 * Extract initials from nickname and realname.
 * Takes first letter of nickname (excluding @) and first letter of realname.
 *
 * @param nickname - User's nickname (may include @ prefix)
 * @param realname - User's real name
 * @returns Two-letter initials string (e.g., "FA")
 */
export function getInitials(nickname: string, realname: string): string {
  // Remove @ from nickname if present and get first character
  const nicknameInitial = nickname.replace(/^@/, "").charAt(0).toUpperCase();

  // Get first character from realname
  const realnameInitial = realname.charAt(0).toUpperCase();

  return `${nicknameInitial}${realnameInitial}`;
}

/**
 * Generate a deterministic background color based on a name string.
 * Uses simple hash function to ensure consistent colors for same names.
 *
 * @param name - Name string to generate color from
 * @returns Tailwind CSS background color class
 */
export function getColorFromName(name: string): string {
  // Color palette for avatar backgrounds
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-orange-500",
    "bg-cyan-500",
  ];

  // Simple hash function for deterministic color selection
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Get color index using modulo
  const index = Math.abs(hash) % colors.length;

  return colors[index];
}

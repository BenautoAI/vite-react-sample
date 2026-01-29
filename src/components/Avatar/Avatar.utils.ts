/**
 * Extract initials from nickname or realname
 * @param nickname - User's nickname (e.g., "@Felipao__DIO🚀")
 * @param realname - User's real name (e.g., "Felipe Aguiar")
 * @returns Uppercase initials (max 2 characters)
 */
export function getInitials(nickname: string, realname: string): string {
  // Clean nickname by removing @ symbol and emojis
  const cleanNickname = nickname.replace(/@/g, '').replace(/[\u{1F000}-\u{1F9FF}]/gu, '').trim()
  
  // Try to get initials from nickname first
  if (cleanNickname.length > 0) {
    return cleanNickname.charAt(0).toUpperCase()
  }
  
  // Fall back to realname
  const nameParts = realname.trim().split(/\s+/)
  if (nameParts.length >= 2) {
    // First letter of first name + first letter of last name
    return (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase()
  } else if (nameParts.length === 1) {
    // Just first letter of the single name
    return nameParts[0].charAt(0).toUpperCase()
  }
  
  // Default fallback
  return '?'
}

/**
 * Generate a consistent background color based on the user's name
 * Uses a simple hash function to select from a predefined color palette
 * @param name - User's name (nickname or realname)
 * @returns Tailwind CSS background color class
 */
export function getColorFromName(name: string): string {
  // Predefined color palette with good contrast for white text
  const colors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-red-500',
    'bg-yellow-500',
    'bg-teal-500',
    'bg-cyan-500',
    'bg-orange-500',
  ];
  
  // Simple hash function for consistent color assignment
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  
  // Use absolute value and modulo to get consistent index
  const index = Math.abs(hash) % colors.length
  return colors[index]
}

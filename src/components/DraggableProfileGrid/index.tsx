import { useState } from "react"
import Avatar from "../Avatar"

interface Profile {
  id: string | number,
  nickname: string,
  realname: string,
  photoUrl?: string
}

interface DraggableProfileGridProps {
  profiles: Profile[],
  onFollowClick?: (profileId: string | number) => void,
  onReorder?: (reorderedProfiles: Profile[]) => void
}

function DraggableProfileGrid(props: DraggableProfileGridProps) {
  const [items, setItems] = useState<Profile[]>(props.profiles)
  const [draggedItem, setDraggedItem] = useState<Profile | null>(null)
  const [draggedOverIndex, setDraggedOverIndex] = useState<number | null>(null)

  const handleDragStart = (e: React.DragEvent, profile: Profile) => {
    setDraggedItem(profile)
    e.dataTransfer.effectAllowed = "move"
  }

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
    setDraggedOverIndex(index)
  }

  const handleDragLeave = () => {
    setDraggedOverIndex(null)
  }

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault()
    setDraggedOverIndex(null)

    if (!draggedItem) return

    const draggedIndex = items.findIndex(item => item.id === draggedItem.id)
    if (draggedIndex === targetIndex) return

    const newItems = [...items]
    newItems.splice(draggedIndex, 1)
    newItems.splice(targetIndex, 0, draggedItem)

    setItems(newItems)
    setDraggedItem(null)
    props.onReorder?.(newItems)
  }

  const handleDragEnd = () => {
    setDraggedItem(null)
    setDraggedOverIndex(null)
  }

  return (
    <div className="
      grid 
      grid-cols-3 
      gap-4"
    >
      {items.map((profile: Profile, index: number) => (
        <div
          key={profile.id}
          draggable
          onDragStart={(e) => handleDragStart(e, profile)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, index)}
          onDragEnd={handleDragEnd}
          className={`
            transition-all
            duration-200
            cursor-move
            ${draggedItem?.id === profile.id ? 'opacity-50' : 'opacity-100'}
            ${draggedOverIndex === index ? 'scale-105 ring-2 ring-blue-400' : ''}
          `}
        >
          <Avatar
            nickname={profile.nickname}
            realname={profile.realname}
            photoUrl={profile.photoUrl}
            onFollowClick={() => props.onFollowClick?.(profile.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default DraggableProfileGrid;

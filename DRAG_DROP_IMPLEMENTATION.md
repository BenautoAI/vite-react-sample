# Drag and Drop Implementation for CardList

## Overview
Drag and drop functionality has been successfully added to the CardList component. Users can now click and drag cards to reorder them in the list.

## Files Modified

### 1. **src/hooks/useDragAndDrop.ts** (NEW)
Custom React hook that manages all drag and drop state and logic.

**Key Features:**
- Tracks dragged item index and drag-over target
- Handles array reordering when cards are dropped
- Provides callback handlers for drag events
- Type-safe with TypeScript generics

**Hook API:**
```typescript
const {
  data,                // Current reordered data array
  setData,             // Manual state setter
  draggedIndex,        // Index of currently dragged item
  dragOverIndex,       // Index of drag-over target
  handleDragStart,     // Drag start handler
  handleDragOver,      // Drag over handler
  handleDragLeave,     // Drag leave handler
  handleDrop,          // Drop handler (reorders data)
  handleDragEnd        // Drag end handler
} = useDragAndDrop(initialData);
```

### 2. **src/components/Card/index.tsx** (MODIFIED)
Updated Card component to support drag and drop functionality.

**New Props:**
- `index?: number` - Card's position in the list
- `isDragged?: boolean` - Whether this card is being dragged
- `isDragOver?: boolean` - Whether dragging over this card
- `onDragStart`, `onDragOver`, `onDragLeave`, `onDrop`, `onDragEnd` - Drag event callbacks

**Visual Feedback:**
- `cursor-move` class when hovering over cards
- `opacity-50` when card is being dragged
- `ring-2 ring-blue-400 scale-105` when dragging over target
- `transition-all duration-200` for smooth animations

### 3. **src/components/CardList/index.tsx** (MODIFIED)
Updated CardList component to integrate drag and drop functionality.

**Changes:**
- Imports and uses `useDragAndDrop` hook
- Passes drag event handlers to Card components
- Provides `onDataChange` callback to notify parent of reordering
- Manages reordered data through hook state

**New Props:**
- `onDataChange?: (newData: CardData[]) => void` - Callback when cards are reordered

### 4. **src/pages/cardlist-demo/index.tsx** (MODIFIED)
Updated demo page to manage card data state and handle reordering.

**Changes:**
- Added `useState` hook for managing card data
- Added `handleDataChange` to update state when cards are reordered
- Added user instruction text "Drag and drop cards to reorder them"
- Passes `onDataChange` callback to CardList component

## How It Works

1. **Initialization**: When CardList mounts, `useDragAndDrop` hook is initialized with the data array
2. **Drag Start**: User clicks and drags a card, `handleDragStart` sets `draggedIndex`
3. **Drag Over**: As user drags, `handleDragOver` updates `dragOverIndex` to show drop target
4. **Drop**: When user releases, `handleDrop` reorders the array and updates state
5. **Notification**: Parent component is notified via `onDataChange` callback

## Usage Example

```typescript
import CardList from "../components/CardList";
import { useState } from "react";

function MyPage() {
  const [cards, setCards] = useState([
    { id: 1, image: "url", title: "Card 1" },
    { id: 2, image: "url", title: "Card 2" },
  ]);

  return (
    <CardList 
      data={cards} 
      onDataChange={setCards}
    />
  );
}
```

## Styling Details

- **Responsive Grid**: 3-column layout (configurable via Tailwind classes)
- **Card Container**: White background with rounded corners and shadow
- **Drag Visual States**:
  - Normal: Standard card appearance
  - Dragging: 50% opacity
  - Drag Over Target: Blue ring border with slight scale increase
- **Smooth Transitions**: 200ms transition for visual feedback

## Browser Compatibility

The implementation uses standard HTML5 Drag and Drop API, compatible with all modern browsers:
- Chrome/Edge 5+
- Firefox 3.6+
- Safari 3.1+
- Opera 12+

## Future Enhancements

Possible improvements:
- Add animations during reorder
- Persist reordered data to backend
- Add drag handles for better UX
- Support for different grid layouts
- Touch support for mobile devices
- Accessibility improvements (keyboard navigation)

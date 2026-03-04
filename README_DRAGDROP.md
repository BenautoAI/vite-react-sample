# Profile Card Drag and Drop Implementation

## Overview

Drag and drop functionality has been successfully added to the ProfileCard list view. Users can now reorder profile cards by dragging them within the list. The implementation includes visual feedback, smooth animations, and proper state management.

## Features

### 1. **Drag and Drop Reordering**
   - Users can drag profile cards to reorder them
   - Drag source becomes semi-transparent (50% opacity) during drag
   - Drop target shows a blue border and light blue background as visual feedback
   - Smooth transitions between states

### 2. **Visual Indicators**
   - **Dragging State**: Cards being dragged appear at 50% opacity
   - **Drag Over State**: Target drop area shows a 2px blue border and blue background
   - **Cursor**: Changes to `move` cursor when hovering over draggable cards
   - **Transitions**: Smooth 200ms transitions for all state changes

### 3. **Smart State Management**
   - Uses custom `useDragDrop` hook for managing drag state
   - Prevents self-drops (dropping on the same card)
   - Validates drop operations before reordering
   - Automatic state cleanup on drag end

### 4. **Follow Button Integration**
   - Follow state persists across reorders
   - Following/unfollowing profiles works seamlessly with drag and drop

## Component Structure

### New Files

#### `src/hooks/useDragDrop.ts`
Custom React hook that manages drag and drop state and logic.

**Features:**
- Generic type support: `useDragDrop<T extends { id: string }>`
- Handles drag start, drag over, drag leave, drop, and drag end events
- Calculates new item positions and reorders array
- Prevents invalid operations

**Usage:**
```typescript
const { dragState, handleDragStart, handleDragOver, handleDragLeave, handleDrop, handleDragEnd } = useDragDrop(items, setItems);
```

### Modified Files

#### `src/components/ProfileCard/index.tsx`
**New Props:**
- `id?: string` - Unique identifier for drag and drop operations
- `isDragging?: boolean` - Whether this card is currently being dragged
- `isDragOver?: boolean` - Whether this card is a drag over target
- `onDragStart?, onDragOver?, onDragLeave?, onDrop?, onDragEnd?` - Drag event handlers

**Visual Changes:**
- Added `draggable` attribute to the main container
- Dynamic styling based on drag state
- Cursor changes to `move` on hover
- Opacity adjusts when dragging

#### `src/components/ProfileCard/ProfileCardList.tsx`
**New Props:**
- `dragState?: { draggedId: string | null; dragOverId: string | null }`
- Drag event handler props passed through to ProfileCard components

**Functionality:**
- Passes drag state to child ProfileCard components
- Connects drag event handlers between list and cards

#### `src/pages/profiles/index.tsx`
**Changes:**
- Added `useState` hook for managing profiles state
- Integrated `useDragDrop` hook for drag and drop functionality
- Passes drag state and handlers to ProfileCardList
- Updated `handleFollow` to toggle following state

## How It Works

### Drag and Drop Flow

1. **User initiates drag**: Click and hold on a profile card
   - `onDragStart` fires, card becomes semi-transparent
   - Drag state captures the card's ID

2. **User drags over another card**: 
   - `onDragOver` fires on the target card
   - Target card shows blue border and light blue background
   - Drag state updates with target ID

3. **User releases (drops)**:
   - `onDrop` fires on the target card
   - Hook calculates new positions
   - Array is reordered using splice operations
   - Component state updates, cards re-render in new order

4. **Cleanup**:
   - `onDragEnd` fires
   - Drag state is cleared
   - Visual indicators removed

### State Management

```typescript
// In ProfilesPage
const [profiles, setProfiles] = useState<ProfileData[]>(initialProfiles);
const { dragState, ...handlers } = useDragDrop(profiles, setProfiles);

// When drop happens:
// 1. useDragDrop calculates new order
// 2. Calls setProfiles with reordered array
// 3. Component re-renders with new order
// 4. Visual state is updated via dragState
```

## Styling Details

### Dragging Card
```css
opacity-50           /* 50% opacity to show it's being dragged */
transition-all       /* Smooth transition */
duration-200         /* 200ms transition time */
```

### Drag Over Target
```css
border-2 border-blue-400  /* Blue border */
bg-blue-50               /* Light blue background */
transition-all           /* Smooth transition */
duration-200             /* 200ms transition time */
```

### General Styling
```css
cursor-move    /* Move cursor on hover */
rounded-lg     /* Rounded corners */
shadow-md      /* Shadow effect */
```

## Usage Example

```tsx
import ProfilesPage from './pages/profiles';

// The drag and drop feature is built into ProfilesPage
// Simply render it and start dragging cards!
<ProfilesPage />
```

## Browser Compatibility

The drag and drop API is supported in all modern browsers:
- Chrome 4+
- Firefox 3.6+
- Safari 6+
- Edge (all versions)
- Opera 12+

## Accessibility Notes

- Cards are draggable elements
- Visual feedback is provided for drag operations
- Keyboard support for drag and drop depends on browser (not all browsers support keyboard-based drag and drop)
- Follow button remains accessible during and after drag operations

## Performance Considerations

- State updates are batched by React
- Drag state is minimal (only two IDs)
- Re-renders only affect visual state, not DOM structure
- useCallback hooks prevent unnecessary handler re-creation

## Future Enhancements

Possible improvements:
- Add keyboard support for drag and drop (Spacebar + arrow keys)
- Implement touch support for mobile devices
- Add undo/redo functionality
- Persist reordered list to local storage or backend
- Add animation for items sliding into place
- Support multi-select drag
- Add drop zones for grouping

## Testing

To test the drag and drop functionality:

1. Navigate to the profiles page
2. Click and hold on a profile card
3. Drag it over another profile card
4. Release to drop

Expected behavior:
- Cards should reorder
- Visual feedback should appear during drag
- Follow states should persist
- No console errors should appear

## Troubleshooting

### Cards not dragging
- Ensure `draggable` attribute is present on the card element
- Check browser console for errors
- Verify drag event handlers are properly connected

### Reorder not working
- Check that cards have unique IDs
- Verify `useDragDrop` hook is properly initialized with state setter
- Look at React DevTools to see if state is updating

### Visual feedback not showing
- Check that Tailwind CSS is properly configured
- Verify `isDragging` and `isDragOver` props are being passed
- Check browser DevTools to see if classes are being applied

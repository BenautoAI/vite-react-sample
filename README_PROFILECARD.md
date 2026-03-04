# Card List Component - Profile Cards

## 📋 Implementation Summary

A complete implementation of a card component system designed to display user profiles with circular avatar images, gradient borders, user information, and interactive Follow functionality. This component suite supports both single profile display and grid-based profile lists.

---

## 🛠 UI Implementation Overview

### Components Created

#### 1. **ProfileCard** (`src/components/ProfileCard/index.tsx`)
Individual profile card component that displays:
- **Circular Avatar Image**: With animated gradient border (from Teal to Blue to Purple)
- **User Information**: Nickname and real name labels
- **Interactive Follow Button**: State-aware button with hover effects
- **Responsive Design**: Scales to container width, vertically centered layout

**Props Interface:**
```typescript
interface ProfileCardProps {
  nickname: string;           // User's nickname/handle
  realname: string;           // User's full name
  imageUrl: string;           // URL to profile image
  onFollow?: () => void;      // Optional callback when Follow is clicked
  isFollowing?: boolean;      // Display "Following" vs "Follow" text
}
```

**Key Features:**
- Hover scale animation on avatar (scale-110 with smooth transitions)
- Gradient button with opacity hover effect
- Clean flex-based layout
- Card styling with shadow and rounded corners
- Touch-friendly button sizing

#### 2. **ProfileCardList** (`src/components/ProfileCard/ProfileCardList.tsx`)
Container component for displaying multiple ProfileCards in a responsive grid layout.

**Props Interface:**
```typescript
interface ProfileCardListProps {
  profiles: ProfileData[];           // Array of profile objects
  columns?: number;                  // Number of grid columns (default: 3)
  onFollow?: (profileId: string) => void;  // Callback for follow actions
}

interface ProfileData {
  id: string;
  nickname: string;
  realname: string;
  imageUrl: string;
  isFollowing?: boolean;
}
```

**Key Features:**
- Responsive grid layout with configurable columns
- Dynamic grid column assignment using CSS Grid
- Automatic spacing between cards
- Forward follow events with profile ID tracking

#### 3. **ProfilesPage** (`src/pages/profiles/index.tsx`)
Demo page showcasing both components with sample data for testing and verification.

---

## 🧠 User-Defined Business Logic Summary

**Profile Display**: Components allow users to see individual profiles or browse multiple profiles in a grid layout with key information (avatar, name, nickname) and an actionable Follow button.

**Interactive State Management**: Follow button changes appearance based on follow state and triggers callbacks for parent components to handle follow/unfollow actions.

**Visual Hierarchy**: Avatar (largest element) → names (medium) → Follow button (call-to-action) creates clear visual flow.

---

## 🤖 Inferred Business Logic Summary

1. **Gradient Styling**: Reused the gradient pattern from Avatar component (Teal → Blue → Purple) for visual consistency across the profile system

2. **Hover Animations**: Implemented smooth scale transformations and opacity transitions for responsive user feedback

3. **Follow State Tracking**: Added optional `isFollowing` prop to support different follow states, enabling UI to reflect current relationship status

4. **Grid Responsiveness**: Created ProfileCardList to handle multiple profile displays with flexible column counts for different screen sizes

5. **Button Styling**: Integrated with global button styles from `index.css` while adding gradient backgrounds for visual prominence

---

## 🎯 Drag and Drop Functionality (NEW)

### Overview
Drag and drop functionality has been added to ProfileCardList, allowing users to reorder profile cards intuitively.

### Features
- **Draggable Cards**: Each ProfileCard can be dragged by clicking and holding
- **Visual Feedback**: Dragged cards appear at 50% opacity, drop targets show blue border
- **Smart Reordering**: Prevents self-drops and validates all operations
- **State Persistence**: Follow states maintained across reordering

### Implementation
New custom hook `useDragDrop` manages drag and drop state. Updated ProfileCard and ProfileCardList to handle drag events with visual indicators.

### Browser Support
Drag and Drop API: Chrome 4+, Firefox 3.6+, Safari 6+, Edge, Opera 12+

---

## ✅ Remaining Implementation Tasks

- **Integration**: Connect ProfilesPage to main App router (if using routing library)
- **State Management**: Implement follow/unfollow state persistence (localStorage or API)
- **Image Optimization**: Add image loading states and fallbacks
- **Responsive Breakpoints**: Add mobile/tablet breakpoints for grid columns
- **Accessibility**: Add keyboard navigation for drag and drop
- **Testing**: Add unit tests for drag and drop reordering
- **Mobile Support**: Implement touch-based drag and drop for mobile devices
- **Persistence**: Persist reordered list to local storage or backend

---

## 📦 File Structure

```
src/
├── components/
│   └── ProfileCard/
│       ├── index.tsx           (Main ProfileCard component)
│       └── ProfileCardList.tsx (Container for multiple cards)
└── pages/
    └── profiles/
        └── index.tsx           (Demo page with sample data)
```

---

## 🎨 Styling Approach

### Tailwind Utilities
- Layout: `flex`, `flex-col`, `items-center`, `justify-center`, `grid`
- Spacing: `p-4`, `mb-4`, `mb-2`, `gap-4`
- Visual: `bg-white`, `rounded-lg`, `shadow-md`, `w-24`, `h-24`
- Typography: `text-lg`, `font-medium`, `text-gray-900`, `text-sm`, `text-gray-500`
- Animations: `hover:scale-110`, `transition-transform`, `duration-300`, `ease-in-out`

### Custom BEM Classes
- `profilecard__container`: Main card wrapper
- `profilecard__avatar`: Avatar image container
- `profilecard__content`: Content wrapper
- `profilecard__nickname`: Nickname text
- `profilecard__realname`: Real name text
- `profilecard__action`: Follow button wrapper
- `profilecardlist__container`: Grid list container

### Gradient Styling
- Avatar border gradient: `from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]`
- Button gradient: Same teal-to-blue-to-purple gradient for visual consistency

---

## 🚀 Usage Examples

### Single Profile Card
```typescript
import ProfileCard from '../../components/ProfileCard';

function MyComponent() {
  const handleFollow = () => {
    console.log('User followed!');
  };

  return (
    <ProfileCard
      nickname="@john_dev"
      realname="John Developer"
      imageUrl="./path/to/image.png"
      onFollow={handleFollow}
      isFollowing={false}
    />
  );
}
```

### Profile List
```typescript
import ProfileCardList from '../../components/ProfileCard/ProfileCardList';

function MyComponent() {
  const profiles = [
    { id: '1', nickname: '@user1', realname: 'User One', imageUrl: '...' },
    { id: '2', nickname: '@user2', realname: 'User Two', imageUrl: '...' },
  ];

  const handleFollow = (profileId) => {
    console.log(`Following user ${profileId}`);
  };

  return (
    <ProfileCardList
      profiles={profiles}
      columns={3}
      onFollow={handleFollow}
    />
  );
}
```

---

## 🎯 Key Design Decisions

1. **Separation of Concerns**: ProfileCard handles single profile display, ProfileCardList handles grid management
2. **Prop-Driven**: All data passed as props for maximum reusability
3. **Optional Callbacks**: Follow handlers are optional, allowing flexibility in parent component integration
4. **TypeScript Strict**: Full type safety for props and events
5. **Tailwind-First**: Primary styling via utilities with minimal custom CSS classes
6. **Gradient Consistency**: Reused gradient from Avatar component for visual cohesion across the profile system

---

## 📱 Responsive Considerations

- **ProfileCard**: Flex-based layout adapts to container width
- **ProfileCardList**: Default 3 columns, configurable via props
- **Avatar**: Fixed 96px (w-24 h-24) with responsive parent scaling
- **Button**: Full responsive padding and sizing

---

## 🔗 Component Dependencies

- Uses existing styling patterns from `Avatar` component
- Follows global button styling from `src/index.css`
- Uses Tailwind CSS for all utility classes
- No external dependencies beyond React and TypeScript

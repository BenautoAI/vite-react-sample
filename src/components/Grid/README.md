# Grid Components

A flexible, responsive grid system built with TypeScript and Tailwind CSS.

## Components

### Grid
The main container component that creates a CSS Grid layout.

**Props:**
- `cols`: Number of columns (1-12) or responsive object with breakpoints (sm, md, lg, xl). Default: 3
- `gap`: Gap between grid items using Tailwind spacing scale (1-12). Default: 4
- `rows`: Number of rows (1-12) or 'auto' for automatic. Default: 'auto'
- `alignItems`: Vertical alignment ('start' | 'center' | 'end' | 'stretch')
- `justifyItems`: Horizontal alignment ('start' | 'center' | 'end' | 'stretch')
- `className`: Additional CSS classes

### GridItem
A component for individual grid cells with support for spanning and positioning.

**Props:**
- `colSpan`: Number of columns to span (1-12 or 'full')
- `rowSpan`: Number of rows to span (1-12 or 'full')
- `colStart`: Column start position (1-13)
- `colEnd`: Column end position (1-13 or 'auto')
- `rowStart`: Row start position (1-13)
- `rowEnd`: Row end position (1-13 or 'auto')
- `className`: Additional CSS classes

## Usage Examples

### Basic Grid
```tsx
import { Grid } from '@/components/Grid';

<Grid cols={3} gap={4}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

### Responsive Grid
```tsx
<Grid cols={{ sm: 1, md: 2, lg: 4 }} gap={6}>
  <div>Responsive Item 1</div>
  <div>Responsive Item 2</div>
  <div>Responsive Item 3</div>
  <div>Responsive Item 4</div>
</Grid>
```

### Grid with Spanning Items
```tsx
import { Grid, GridItem } from '@/components/Grid';

<Grid cols={4} gap={4}>
  <GridItem colSpan={2}>Spans 2 columns</GridItem>
  <div>Regular item</div>
  <div>Regular item</div>
  <GridItem colSpan="full">Spans full width</GridItem>
</Grid>
```

### Dashboard Layout
```tsx
<Grid cols={6} gap={4}>
  <GridItem colSpan={4}>Main Content</GridItem>
  <GridItem colSpan={2} rowSpan={2}>Sidebar</GridItem>
  <GridItem colSpan={2}>Widget 1</GridItem>
  <GridItem colSpan={2}>Widget 2</GridItem>
</Grid>
```

## See Also

- `GridExamples.tsx` - Comprehensive examples of all grid patterns
- `Grid.tsx` - Grid container implementation
- `GridItem.tsx` - GridItem implementation

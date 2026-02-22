import { Grid, GridItem } from './index';

/**
 * Example 1: Basic 3-column grid
 */
export function BasicGrid() {
  return (
    <Grid cols={3} gap={4}>
      <div className="bg-blue-100 p-4 rounded">Item 1</div>
      <div className="bg-blue-100 p-4 rounded">Item 2</div>
      <div className="bg-blue-100 p-4 rounded">Item 3</div>
      <div className="bg-blue-100 p-4 rounded">Item 4</div>
      <div className="bg-blue-100 p-4 rounded">Item 5</div>
      <div className="bg-blue-100 p-4 rounded">Item 6</div>
    </Grid>
  );
}

/**
 * Example 2: Responsive grid (1 column on mobile, 2 on tablet, 4 on desktop)
 */
export function ResponsiveGrid() {
  return (
    <Grid cols={{ sm: 1, md: 2, lg: 4 }} gap={6}>
      <div className="bg-green-100 p-4 rounded">Responsive 1</div>
      <div className="bg-green-100 p-4 rounded">Responsive 2</div>
      <div className="bg-green-100 p-4 rounded">Responsive 3</div>
      <div className="bg-green-100 p-4 rounded">Responsive 4</div>
      <div className="bg-green-100 p-4 rounded">Responsive 5</div>
      <div className="bg-green-100 p-4 rounded">Responsive 6</div>
      <div className="bg-green-100 p-4 rounded">Responsive 7</div>
      <div className="bg-green-100 p-4 rounded">Responsive 8</div>
    </Grid>
  );
}

/**
 * Example 3: Grid with spanning items
 */
export function SpanningGrid() {
  return (
    <Grid cols={4} gap={4}>
      <GridItem colSpan={2} className="bg-purple-100 p-4 rounded">
        Spans 2 columns
      </GridItem>
      <div className="bg-purple-50 p-4 rounded">Item 1</div>
      <div className="bg-purple-50 p-4 rounded">Item 2</div>
      <div className="bg-purple-50 p-4 rounded">Item 3</div>
      <GridItem colSpan={3} className="bg-purple-100 p-4 rounded">
        Spans 3 columns
      </GridItem>
      <GridItem colSpan="full" className="bg-purple-200 p-4 rounded">
        Spans full width
      </GridItem>
    </Grid>
  );
}

/**
 * Example 4: Grid with explicit rows and row spanning
 */
export function RowSpanningGrid() {
  return (
    <Grid cols={3} rows={3} gap={4}>
      <GridItem rowSpan={2} className="bg-red-100 p-4 rounded">
        Spans 2 rows
      </GridItem>
      <div className="bg-red-50 p-4 rounded">Item 1</div>
      <div className="bg-red-50 p-4 rounded">Item 2</div>
      <div className="bg-red-50 p-4 rounded">Item 3</div>
      <GridItem colSpan={2} className="bg-red-100 p-4 rounded">
        Spans 2 columns
      </GridItem>
      <div className="bg-red-50 p-4 rounded">Item 4</div>
      <div className="bg-red-50 p-4 rounded">Item 5</div>
      <div className="bg-red-50 p-4 rounded">Item 6</div>
    </Grid>
  );
}

/**
 * Example 5: Dashboard-style layout with mixed sizes
 */
export function DashboardGrid() {
  return (
    <Grid cols={6} gap={4}>
      <GridItem colSpan={4} className="bg-indigo-100 p-6 rounded">
        <h3 className="font-bold mb-2">Main Content Area</h3>
        <p>Large content area spanning 4 columns</p>
      </GridItem>
      <GridItem colSpan={2} rowSpan={2} className="bg-indigo-50 p-6 rounded">
        <h3 className="font-bold mb-2">Sidebar</h3>
        <p>Sidebar spanning 2 rows</p>
      </GridItem>
      <GridItem colSpan={2} className="bg-indigo-200 p-4 rounded">
        Widget 1
      </GridItem>
      <GridItem colSpan={2} className="bg-indigo-200 p-4 rounded">
        Widget 2
      </GridItem>
      <GridItem colSpan={3} className="bg-indigo-100 p-4 rounded">
        Footer Left
      </GridItem>
      <GridItem colSpan={3} className="bg-indigo-100 p-4 rounded">
        Footer Right
      </GridItem>
    </Grid>
  );
}

/**
 * Example 6: Photo gallery grid with different sized items
 */
export function PhotoGalleryGrid() {
  return (
    <Grid cols={4} gap={2}>
      <GridItem colSpan={2} rowSpan={2} className="bg-gray-300 rounded h-64">
        <div className="flex items-center justify-center h-full">Large Photo</div>
      </GridItem>
      <div className="bg-gray-200 rounded h-32 flex items-center justify-center">Photo 1</div>
      <div className="bg-gray-200 rounded h-32 flex items-center justify-center">Photo 2</div>
      <div className="bg-gray-200 rounded h-32 flex items-center justify-center">Photo 3</div>
      <div className="bg-gray-200 rounded h-32 flex items-center justify-center">Photo 4</div>
      <div className="bg-gray-200 rounded h-32 flex items-center justify-center">Photo 5</div>
      <GridItem colSpan={2} className="bg-gray-300 rounded h-32">
        <div className="flex items-center justify-center h-full">Wide Photo</div>
      </GridItem>
      <div className="bg-gray-200 rounded h-32 flex items-center justify-center">Photo 6</div>
    </Grid>
  );
}

/**
 * Example 7: Card grid with alignment
 */
export function AlignedGrid() {
  return (
    <Grid cols={3} gap={6} alignItems="start" justifyItems="center">
      <div className="bg-yellow-100 p-4 rounded w-full">
        <h4 className="font-bold">Card 1</h4>
        <p className="text-sm">Short content</p>
      </div>
      <div className="bg-yellow-100 p-4 rounded w-full">
        <h4 className="font-bold">Card 2</h4>
        <p className="text-sm">This card has more content to demonstrate alignment behavior in the grid.</p>
      </div>
      <div className="bg-yellow-100 p-4 rounded w-full">
        <h4 className="font-bold">Card 3</h4>
        <p className="text-sm">Medium content here</p>
      </div>
    </Grid>
  );
}

/**
 * All examples combined in a demo page
 */
export function AllGridExamples() {
  return (
    <div className="p-8 space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-4">Basic 3-Column Grid</h2>
        <BasicGrid />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Responsive Grid</h2>
        <ResponsiveGrid />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Grid with Column Spanning</h2>
        <SpanningGrid />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Grid with Row Spanning</h2>
        <RowSpanningGrid />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Dashboard Layout</h2>
        <DashboardGrid />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
        <PhotoGalleryGrid />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Aligned Grid</h2>
        <AlignedGrid />
      </section>
    </div>
  );
}

import { ReactNode } from 'react';

export interface GridProps {
  children: ReactNode;
  /** Number of columns (1-12). Can be a single number or responsive object. Default: 3 */
  cols?: number | { sm?: number; md?: number; lg?: number; xl?: number };
  /** Gap between grid items (1-12 in Tailwind spacing scale). Default: 4 */
  gap?: number;
  /** Number of rows (1-12) or 'auto' for automatic row generation. Default: 'auto' */
  rows?: number | 'auto';
  /** Additional CSS classes */
  className?: string;
  /** Align items vertically within their grid cells */
  alignItems?: 'start' | 'center' | 'end' | 'stretch';
  /** Justify items horizontally within their grid cells */
  justifyItems?: 'start' | 'center' | 'end' | 'stretch';
}

function Grid({
  children,
  cols = 3,
  gap = 4,
  rows = 'auto',
  className = '',
  alignItems,
  justifyItems,
}: GridProps) {
  // Build column classes
  const getColsClasses = () => {
    if (typeof cols === 'number') {
      return `grid-cols-${cols}`;
    }
    
    let classes = '';
    if (cols.sm) classes += ` sm:grid-cols-${cols.sm}`;
    if (cols.md) classes += ` md:grid-cols-${cols.md}`;
    if (cols.lg) classes += ` lg:grid-cols-${cols.lg}`;
    if (cols.xl) classes += ` xl:grid-cols-${cols.xl}`;
    
    // Default to 1 column if no breakpoints set
    if (!classes) classes = 'grid-cols-1';
    
    return classes.trim();
  };

  // Build row classes
  const getRowsClasses = () => {
    if (rows === 'auto') {
      return 'grid-rows-none';
    }
    return `grid-rows-${rows}`;
  };

  // Build alignment classes
  const getAlignmentClasses = () => {
    let classes = '';
    if (alignItems) classes += ` items-${alignItems}`;
    if (justifyItems) classes += ` justify-items-${justifyItems}`;
    return classes;
  };

  const gridClasses = `
    grid
    ${getColsClasses()}
    ${getRowsClasses()}
    gap-${gap}
    ${getAlignmentClasses()}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className={gridClasses}>
      {children}
    </div>
  );
}

export default Grid;

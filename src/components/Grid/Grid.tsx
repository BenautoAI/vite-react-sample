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

// Tailwind requires complete class names at build time - dynamic interpolation won't work
const colsMap: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12',
};

const smColsMap: Record<number, string> = {
  1: 'sm:grid-cols-1',
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4',
  5: 'sm:grid-cols-5',
  6: 'sm:grid-cols-6',
  7: 'sm:grid-cols-7',
  8: 'sm:grid-cols-8',
  9: 'sm:grid-cols-9',
  10: 'sm:grid-cols-10',
  11: 'sm:grid-cols-11',
  12: 'sm:grid-cols-12',
};

const mdColsMap: Record<number, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
  7: 'md:grid-cols-7',
  8: 'md:grid-cols-8',
  9: 'md:grid-cols-9',
  10: 'md:grid-cols-10',
  11: 'md:grid-cols-11',
  12: 'md:grid-cols-12',
};

const lgColsMap: Record<number, string> = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
  7: 'lg:grid-cols-7',
  8: 'lg:grid-cols-8',
  9: 'lg:grid-cols-9',
  10: 'lg:grid-cols-10',
  11: 'lg:grid-cols-11',
  12: 'lg:grid-cols-12',
};

const xlColsMap: Record<number, string> = {
  1: 'xl:grid-cols-1',
  2: 'xl:grid-cols-2',
  3: 'xl:grid-cols-3',
  4: 'xl:grid-cols-4',
  5: 'xl:grid-cols-5',
  6: 'xl:grid-cols-6',
  7: 'xl:grid-cols-7',
  8: 'xl:grid-cols-8',
  9: 'xl:grid-cols-9',
  10: 'xl:grid-cols-10',
  11: 'xl:grid-cols-11',
  12: 'xl:grid-cols-12',
};

const rowsMap: Record<number, string> = {
  1: 'grid-rows-1',
  2: 'grid-rows-2',
  3: 'grid-rows-3',
  4: 'grid-rows-4',
  5: 'grid-rows-5',
  6: 'grid-rows-6',
  7: 'grid-rows-7',
  8: 'grid-rows-8',
  9: 'grid-rows-9',
  10: 'grid-rows-10',
  11: 'grid-rows-11',
  12: 'grid-rows-12',
};

const gapMap: Record<number, string> = {
  0: 'gap-0',
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  7: 'gap-7',
  8: 'gap-8',
  9: 'gap-9',
  10: 'gap-10',
  11: 'gap-11',
  12: 'gap-12',
};

const alignItemsMap: Record<string, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

const justifyItemsMap: Record<string, string> = {
  start: 'justify-items-start',
  center: 'justify-items-center',
  end: 'justify-items-end',
  stretch: 'justify-items-stretch',
};

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
      return colsMap[cols] || 'grid-cols-1';
    }

    const classes: string[] = [];
    if (cols.sm) classes.push(smColsMap[cols.sm] || '');
    if (cols.md) classes.push(mdColsMap[cols.md] || '');
    if (cols.lg) classes.push(lgColsMap[cols.lg] || '');
    if (cols.xl) classes.push(xlColsMap[cols.xl] || '');

    // Default to 1 column if no breakpoints set
    if (classes.length === 0) return 'grid-cols-1';

    return classes.filter(Boolean).join(' ');
  };

  // Build row classes
  const getRowsClasses = () => {
    if (rows === 'auto') {
      return 'grid-rows-none';
    }
    return rowsMap[rows] || 'grid-rows-none';
  };

  // Build alignment classes
  const getAlignmentClasses = () => {
    const classes: string[] = [];
    if (alignItems) classes.push(alignItemsMap[alignItems] || '');
    if (justifyItems) classes.push(justifyItemsMap[justifyItems] || '');
    return classes.filter(Boolean).join(' ');
  };

  const gridClasses = [
    'grid',
    getColsClasses(),
    getRowsClasses(),
    gapMap[gap] || 'gap-4',
    getAlignmentClasses(),
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={gridClasses}>
      {children}
    </div>
  );
}

export default Grid;

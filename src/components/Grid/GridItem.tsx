import { ReactNode } from 'react';

export interface GridItemProps {
  children: ReactNode;
  /** Number of columns this item should span (1-12). Default: 1 */
  colSpan?: number | 'full';
  /** Number of rows this item should span (1-12). Default: 1 */
  rowSpan?: number | 'full';
  /** Column start position (1-13) */
  colStart?: number;
  /** Column end position (1-13 or 'auto') */
  colEnd?: number | 'auto';
  /** Row start position (1-13) */
  rowStart?: number;
  /** Row end position (1-13 or 'auto') */
  rowEnd?: number | 'auto';
  /** Additional CSS classes */
  className?: string;
}

// Tailwind requires complete class names at build time - dynamic interpolation won't work
const colSpanMap: Record<number, string> = {
  1: 'col-span-1',
  2: 'col-span-2',
  3: 'col-span-3',
  4: 'col-span-4',
  5: 'col-span-5',
  6: 'col-span-6',
  7: 'col-span-7',
  8: 'col-span-8',
  9: 'col-span-9',
  10: 'col-span-10',
  11: 'col-span-11',
  12: 'col-span-12',
};

const rowSpanMap: Record<number, string> = {
  1: 'row-span-1',
  2: 'row-span-2',
  3: 'row-span-3',
  4: 'row-span-4',
  5: 'row-span-5',
  6: 'row-span-6',
  7: 'row-span-7',
  8: 'row-span-8',
  9: 'row-span-9',
  10: 'row-span-10',
  11: 'row-span-11',
  12: 'row-span-12',
};

const colStartMap: Record<number, string> = {
  1: 'col-start-1',
  2: 'col-start-2',
  3: 'col-start-3',
  4: 'col-start-4',
  5: 'col-start-5',
  6: 'col-start-6',
  7: 'col-start-7',
  8: 'col-start-8',
  9: 'col-start-9',
  10: 'col-start-10',
  11: 'col-start-11',
  12: 'col-start-12',
  13: 'col-start-13',
};

const colEndMap: Record<number, string> = {
  1: 'col-end-1',
  2: 'col-end-2',
  3: 'col-end-3',
  4: 'col-end-4',
  5: 'col-end-5',
  6: 'col-end-6',
  7: 'col-end-7',
  8: 'col-end-8',
  9: 'col-end-9',
  10: 'col-end-10',
  11: 'col-end-11',
  12: 'col-end-12',
  13: 'col-end-13',
};

const rowStartMap: Record<number, string> = {
  1: 'row-start-1',
  2: 'row-start-2',
  3: 'row-start-3',
  4: 'row-start-4',
  5: 'row-start-5',
  6: 'row-start-6',
  7: 'row-start-7',
  8: 'row-start-8',
  9: 'row-start-9',
  10: 'row-start-10',
  11: 'row-start-11',
  12: 'row-start-12',
  13: 'row-start-13',
};

const rowEndMap: Record<number, string> = {
  1: 'row-end-1',
  2: 'row-end-2',
  3: 'row-end-3',
  4: 'row-end-4',
  5: 'row-end-5',
  6: 'row-end-6',
  7: 'row-end-7',
  8: 'row-end-8',
  9: 'row-end-9',
  10: 'row-end-10',
  11: 'row-end-11',
  12: 'row-end-12',
  13: 'row-end-13',
};

function GridItem({
  children,
  colSpan,
  rowSpan,
  colStart,
  colEnd,
  rowStart,
  rowEnd,
  className = '',
}: GridItemProps) {
  const getSpanClasses = () => {
    const classes: string[] = [];

    // Column span
    if (colSpan) {
      if (colSpan === 'full') {
        classes.push('col-span-full');
      } else {
        classes.push(colSpanMap[colSpan] || '');
      }
    }

    // Row span
    if (rowSpan) {
      if (rowSpan === 'full') {
        classes.push('row-span-full');
      } else {
        classes.push(rowSpanMap[rowSpan] || '');
      }
    }

    // Column start/end
    if (colStart) classes.push(colStartMap[colStart] || '');
    if (colEnd) {
      if (colEnd === 'auto') {
        classes.push('col-end-auto');
      } else {
        classes.push(colEndMap[colEnd] || '');
      }
    }

    // Row start/end
    if (rowStart) classes.push(rowStartMap[rowStart] || '');
    if (rowEnd) {
      if (rowEnd === 'auto') {
        classes.push('row-end-auto');
      } else {
        classes.push(rowEndMap[rowEnd] || '');
      }
    }

    return classes.filter(Boolean).join(' ');
  };

  const itemClasses = [getSpanClasses(), className].filter(Boolean).join(' ');

  return (
    <div className={itemClasses}>
      {children}
    </div>
  );
}

export default GridItem;

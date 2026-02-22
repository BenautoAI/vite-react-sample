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
    let classes = '';

    // Column span
    if (colSpan) {
      if (colSpan === 'full') {
        classes += ' col-span-full';
      } else {
        classes += ` col-span-${colSpan}`;
      }
    }

    // Row span
    if (rowSpan) {
      if (rowSpan === 'full') {
        classes += ' row-span-full';
      } else {
        classes += ` row-span-${rowSpan}`;
      }
    }

    // Column start/end
    if (colStart) classes += ` col-start-${colStart}`;
    if (colEnd) {
      if (colEnd === 'auto') {
        classes += ' col-end-auto';
      } else {
        classes += ` col-end-${colEnd}`;
      }
    }

    // Row start/end
    if (rowStart) classes += ` row-start-${rowStart}`;
    if (rowEnd) {
      if (rowEnd === 'auto') {
        classes += ' row-end-auto';
      } else {
        classes += ` row-end-${rowEnd}`;
      }
    }

    return classes;
  };

  const itemClasses = `
    ${getSpanClasses()}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className={itemClasses}>
      {children}
    </div>
  );
}

export default GridItem;

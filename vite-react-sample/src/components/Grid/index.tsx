import { ReactNode } from 'react';

interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: number;
  className?: string;
}

function Grid({ children, cols = 3, gap = 4, className = '' }: GridProps) {
  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  }[cols];

  const gapClass = `gap-${gap}`;

  return (
    <div className={`
      grid 
      ${gridColsClass}
      ${gapClass}
      ${className}
    `}>
      {children}
    </div>
  );
}

export default Grid;

interface CategoryBadgeProps {
  label: string;
}

function CategoryBadge(props: CategoryBadgeProps) {
  return (
    <span className='
      bg-gray-200
      text-gray-800
      px-3
      py-1
      rounded-full
      text-sm
      font-medium
    '>
      {props.label}
    </span>
  );
}

export default CategoryBadge;

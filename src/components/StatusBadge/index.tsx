interface StatusBadgeProps {
  status: 'active' | 'needs-review' | 'deprecated';
  label: string;
}

function StatusBadge(props: StatusBadgeProps) {
  const statusStyles = {
    'active': 'bg-green-500 text-white',
    'needs-review': 'bg-orange-500 text-white',
    'deprecated': 'bg-gray-600 text-white'
  };

  return (
    <span className={`
      px-3
      py-1
      rounded-full
      text-sm
      font-medium
      ${statusStyles[props.status]}
    `}>
      {props.label}
    </span>
  );
}

export default StatusBadge;

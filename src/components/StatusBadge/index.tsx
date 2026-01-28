interface StatusBadgeProps {
  status: 'Approved' | 'Pending';
}

function StatusBadge({ status }: StatusBadgeProps) {
  const isApproved = status === 'Approved';
  
  return (
    <span className={`
      px-4 
      py-2 
      rounded-md 
      text-sm 
      font-medium
      ${isApproved 
        ? 'bg-green-100 text-green-700' 
        : 'bg-orange-100 text-orange-600'
      }
      `}>
      {status}
    </span>
  );
}

export default StatusBadge;

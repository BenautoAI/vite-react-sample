interface FollowButtonProps {
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

function FollowButton(props: FollowButtonProps) {
  const { isLoading = false, isDisabled = false, onClick } = props;

  return (
    <button
      className='
        w-80
        mt-5
        px-4
        py-2
        rounded-lg
        font-medium
        text-white
        bg-blue-500
        hover:bg-blue-600
        disabled:bg-gray-400
        disabled:cursor-not-allowed
        transition-colors
        duration-200
      '
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? 'Following...' : 'Follow'}
    </button>
  );
}

export default FollowButton;

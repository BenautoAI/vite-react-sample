interface FollowButtonProps {
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

function FollowButton(props: FollowButtonProps) {
  const { isLoading = false, isDisabled = false, onClick } = props;

  const buttonClasses = `
    w-80
    px-4
    py-2
    mt-5
    font-medium
    text-sm
    rounded-lg
    border
    border-solid
    transition-all
    duration-200
    ${
      isDisabled || isLoading
        ? 'bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed opacity-60'
        : 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700 cursor-pointer'
    }
  `;

  return (
    <button
      className={buttonClasses}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {isLoading ? (
        <span className="flex items-center justify-center gap-2">
          <span className="inline-block w-4 h-4 border-2 border-gray-400 border-t-gray-600 rounded-full animate-spin" />
          Following...
        </span>
      ) : (
        'Follow'
      )}
    </button>
  );
}

export default FollowButton;

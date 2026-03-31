interface FollowButtonProps {
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

function FollowButton(props: FollowButtonProps) {
  const { isLoading = false, isDisabled = false, onClick } = props;

  const isButtonDisabled = isLoading || isDisabled;

  return (
    <button
      onClick={onClick}
      disabled={isButtonDisabled}
      className={`
        w-80
        mt-5
        px-4
        py-2
        rounded-lg
        font-medium
        text-sm
        transition-all
        duration-200
        ${
          isButtonDisabled
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60'
            : 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700'
        }
      `}
    >
      {isLoading ? (
        <span className="flex items-center justify-center gap-2">
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Following...
        </span>
      ) : (
        'Follow'
      )}
    </button>
  );
}

export default FollowButton;

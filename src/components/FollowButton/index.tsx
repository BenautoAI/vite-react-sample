interface FollowButtonProps {
  /**
   * Whether the button is in a loading state
   * Shows a loading spinner and disables interaction
   */
  isLoading?: boolean;

  /**
   * Whether the button is disabled
   * Prevents user interaction
   */
  isDisabled?: boolean;

  /**
   * Callback fired when the button is clicked
   */
  onClick?: () => void;

  /**
   * The text to display on the button
   */
  label?: string;
}

function FollowButton({
  isLoading = false,
  isDisabled = false,
  onClick,
  label = 'Follow'
}: FollowButtonProps) {
  const isButtonDisabled = isLoading || isDisabled;

  return (
    <button
      className='
        follow__button
        w-80
        mt-5
        px-4
        py-2
        rounded-lg
        font-medium
        transition-all
        duration-200
        flex
        items-center
        justify-center
        gap-2
        bg-gradient-to-r
        from-[#6EE7B7]
        via-[#3B82F6]
        to-[#9333EA]
        text-white
        hover:opacity-90
        disabled:opacity-50
        disabled:cursor-not-allowed
      '
      disabled={isButtonDisabled}
      onClick={onClick}
    >
      {isLoading ? (
        <>
          <span className='
            inline-block
            w-4
            h-4
            border-2
            border-white
            border-t-transparent
            rounded-full
            animate-spin
          '></span>
          <span>Loading...</span>
        </>
      ) : (
        label
      )}
    </button>
  );
}

export default FollowButton;

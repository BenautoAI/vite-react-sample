interface BlueButtonProps {
  label: string,
  onClick?: () => void,
  disabled?: boolean,
  className?: string
}

function BlueButton(props: BlueButtonProps) {
  return (
    <button
      className={`
        bluebutton__container
        bg-blue-600
        hover:bg-blue-700
        text-white
        font-medium
        rounded-lg
        px-6
        py-2.5
        transition-colors
        duration-200
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${props.className || ''}
      `}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
}

export default BlueButton;

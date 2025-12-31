interface BlueButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

function BlueButton(props: BlueButtonProps) {
  return (
    <button
      className={`
        blue-button
        bg-blue-500
        hover:bg-blue-600
        text-white
        font-medium
        px-6
        py-2
        rounded-lg
        transition-colors
        duration-200
        ${props.className || ''}
      `}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default BlueButton;

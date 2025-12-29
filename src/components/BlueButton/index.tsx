interface BlueButtonProps {
  text: string;
  onClick?: () => void;
}

function BlueButton(props: BlueButtonProps) {
  return (
    <button 
      className='
        button__blue
        bg-blue-500
        hover:bg-blue-600
        text-white
        font-medium
        py-2
        px-6
        rounded-lg
        transition-colors
        duration-200
        cursor-pointer
      '
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default BlueButton;

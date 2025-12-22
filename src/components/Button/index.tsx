interface ButtonProps {
  label: string;
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  return (
    <button 
      className="
        button__container
        bg-blue-500
        hover:bg-blue-600
        text-white
        font-medium
        px-6
        py-3
        rounded-lg
        transition-colors
        duration-200
        cursor-pointer
      "
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

export default Button;

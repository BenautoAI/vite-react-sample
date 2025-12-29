interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

function Button(props: ButtonProps) {
  return (
    <button
      className='
        button__container
        bg-blue-600
        hover:bg-blue-700
        text-white
        font-semibold
        py-2
        px-6
        rounded-lg
        transition-colors
        duration-200
        disabled:opacity-50
        disabled:cursor-not-allowed
      '
      onClick={props.onClick}
      type={props.type || 'button'}
      disabled={props.disabled || false}
    >
      {props.label}
    </button>
  );
}

export default Button;

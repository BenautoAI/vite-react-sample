interface SearchButtonProps {
  onClick: () => void;
  label?: string;
}

function SearchButton(props: SearchButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className="px-8 py-2 bg-black text-white rounded-full font-medium text-base transition-all hover:bg-gray-900 active:scale-95"
    >
      {props.label || 'Search'}
    </button>
  );
}

export default SearchButton;

interface FeedProps {
  title: string;
}

function FeedCard(props: FeedProps) {
  return (
    <div className="
      bg-white 
      rounded-lg 
      shadow-md 
      h-96
      ">

      <div className="relative h-48 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-t-lg overflow-hidden">
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-6xl animate-pulse">
          🐱
        </div>
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-6xl animate-bounce">
          🤖
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-yellow-300 animate-pulse">
          ⚡VS⚡
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-900">{props.title}</h2>
        <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

    </div>
  );
}

export default FeedCard;
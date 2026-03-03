interface FeedProps {
  title: string;
}

function FeedCard(props: FeedProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-grab active:cursor-grabbing select-none">
      <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-40 w-full"></div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">{props.title}</h2>
        <p className="mt-2 text-sm text-gray-600">A beautiful photo gallery entry showcasing creativity and visual storytelling.</p>
        <div className="mt-4 flex gap-2">
          <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">Like</button>
          <button className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">Share</button>
        </div>
      </div>
    </div>
  );
}

export default FeedCard;
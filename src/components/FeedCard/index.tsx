interface FeedProps {
  title: string;
  gradient?: string;
}

function FeedCard(props: FeedProps) {
  // Define color gradients - if no gradient prop is provided, use a default one
  const gradients = [
    'from-cyan-400 via-blue-500 to-purple-600',
    'from-pink-400 via-rose-500 to-red-600',
    'from-green-400 via-teal-500 to-cyan-600',
    'from-yellow-400 via-orange-500 to-red-600',
    'from-indigo-400 via-purple-500 to-pink-600',
    'from-blue-400 via-cyan-500 to-teal-600'
  ];
  
  const defaultGradient = gradients[Math.floor(Math.random() * gradients.length)];
  const gradient = props.gradient || defaultGradient;

  return (
    <div className="relative rounded-lg shadow-lg h-96 overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
      {/* Gradient background layer */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90`}></div>
      
      {/* Content layer */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white drop-shadow-lg">{props.title}</h2>
          <p className="mt-3 text-sm text-white/90 drop-shadow-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        
        {/* Decorative overlay on hover */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
}

export default FeedCard;
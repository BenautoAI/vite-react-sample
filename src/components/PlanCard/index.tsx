interface PlanCardProps {
  title: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

function PlanCard(props: PlanCardProps) {
  return (
    <div className={`
      relative
      bg-white 
      rounded-lg 
      shadow-md 
      p-6
      transition-transform
      hover:shadow-lg
      hover:scale-105
      ${props.isPopular ? 'ring-2 ring-blue-500' : ''}
    `}>
      {props.isPopular && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-semibold">
          Popular
        </div>
      )}
      
      <h3 className="text-lg font-semibold text-gray-900">{props.title}</h3>
      
      <div className="mt-4">
        <span className="text-3xl font-bold text-gray-900">${props.price}</span>
        <span className="text-gray-500 text-sm">/month</span>
      </div>
      
      <ul className="mt-6 space-y-3">
        {props.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className={`
        w-full
        mt-8
        py-2
        px-4
        rounded-lg
        font-medium
        transition-colors
        ${props.isPopular 
          ? 'bg-blue-500 text-white hover:bg-blue-600' 
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }
      `}>
        Choose Plan
      </button>
    </div>
  );
}

export default PlanCard;

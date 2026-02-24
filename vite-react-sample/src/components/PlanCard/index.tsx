interface PlanCardProps {
  name: string;
  price: number;
  description: string;
  features: string[];
  highlighted?: boolean;
}

function PlanCard(props: PlanCardProps) {
  return (
    <div className={`
      plan__card
      rounded-lg
      p-6
      shadow-md
      transition-transform
      ${props.highlighted 
        ? 'bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] text-white border-2 border-white scale-105' 
        : 'bg-white text-gray-900'
      }
    `}>
      <h3 className="plan__name text-xl font-bold mb-2">{props.name}</h3>
      <p className="plan__description text-sm mb-4 opacity-80">{props.description}</p>
      
      <div className="plan__pricing mb-6">
        <span className="text-3xl font-bold">${props.price}</span>
        <span className="text-sm ml-2 opacity-70">/month</span>
      </div>

      <ul className="plan__features space-y-2 mb-6">
        {props.features.map((feature, index) => (
          <li key={index} className="plan__feature flex items-center text-sm">
            <span className="mr-2 text-lg">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <button className={`
        plan__button
        w-full
        py-2
        px-4
        rounded-lg
        font-medium
        transition-all
        ${props.highlighted
          ? 'bg-white text-purple-600 hover:bg-gray-100'
          : 'bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] text-white hover:shadow-lg'
        }
      `}>
        Choose Plan
      </button>
    </div>
  );
}

export default PlanCard;

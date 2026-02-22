/**
 * Props for the PlanCard component.
 * Defines the structure for a pricing plan card with title, description,
 * features, pricing, and call-to-action button.
 */
export interface PlanCardProps {
  /** The name of the pricing plan tier */
  title: string;
  /** Brief description of the plan's target audience or use case */
  description: string;
  /** List of features included in this plan */
  features: string[];
  /** Monthly price as a number */
  price: number;
  /** Currency symbol (default: "$") */
  currency?: string;
  /** Text for the call-to-action button (default: "Get Started") */
  buttonText?: string;
  /** Handler function called when the CTA button is clicked */
  onButtonClick?: () => void;
  /** Whether to highlight this plan as featured (default: false) */
  highlighted?: boolean;
}

/**
 * PlanCard component displays a pricing plan with title, description, features,
 * monthly price, and a call-to-action button. Supports highlighted variant
 * for featured or recommended plans.
 *
 * @param props - Configuration for the plan card
 * @returns Rendered pricing plan card component
 */
export function PlanCard(props: PlanCardProps) {
  const {
    title,
    description,
    features,
    price,
    currency = "$",
    buttonText = "Get Started",
    onButtonClick,
    highlighted = false,
  } = props;

  return (
    <div
      className={`flex flex-col rounded-lg border-2 bg-white p-6 shadow-md transition-all hover:shadow-lg ${
        highlighted ? "border-blue-500" : "border-gray-200"
      }`}
    >
      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>

      {/* Description */}
      <p className="mt-3 text-sm text-gray-600">{description}</p>

      {/* Features List */}
      <ul className="mt-6 flex flex-col gap-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <svg
              className="mt-1 h-5 w-5 flex-shrink-0 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-sm text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Price */}
      <div className="mt-8 flex items-baseline">
        <span className="text-4xl font-bold text-gray-900">
          {currency}
          {price}
        </span>
        <span className="ml-2 text-sm text-gray-600">/month</span>
      </div>

      {/* Call to Action Button */}
      <button
        onClick={onButtonClick}
        className={`mt-6 w-full rounded-lg px-6 py-3 text-sm font-bold transition-colors ${
          highlighted
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border-2 border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}



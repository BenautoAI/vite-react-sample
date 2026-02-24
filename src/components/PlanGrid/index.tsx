import PlanCard from "../PlanCard";

interface Plan {
  id: string;
  title: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

interface PlanGridProps {
  plans: Plan[];
}

const defaultPlans: Plan[] = [
  {
    id: "starter",
    title: "Starter",
    price: 29,
    features: [
      "Up to 10 projects",
      "Basic analytics",
      "5 GB storage",
      "Email support",
      "Community access"
    ],
    isPopular: false
  },
  {
    id: "professional",
    title: "Professional",
    price: 79,
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "100 GB storage",
      "Priority email support",
      "Slack integration",
      "Team collaboration",
      "Custom domains"
    ],
    isPopular: true
  },
  {
    id: "enterprise",
    title: "Enterprise",
    price: 199,
    features: [
      "Unlimited everything",
      "Real-time analytics",
      "Unlimited storage",
      "24/7 phone support",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "Security audit"
    ],
    isPopular: false
  }
];

function PlanGrid(props: PlanGridProps) {
  const plansToDisplay = props.plans && props.plans.length > 0 ? props.plans : defaultPlans;

  return (
    <div className="
      grid 
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      gap-6
      px-4
    ">
      {plansToDisplay.map((plan) => (
        <PlanCard
          key={plan.id}
          title={plan.title}
          price={plan.price}
          features={plan.features}
          isPopular={plan.isPopular}
        />
      ))}
    </div>
  );
}

export default PlanGrid;

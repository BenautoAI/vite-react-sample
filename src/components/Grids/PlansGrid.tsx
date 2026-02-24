import PlanCard from "../PlanCard";

interface Plan {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  highlighted?: boolean;
}

interface PlansGridProps {
  plans?: Plan[];
}

function PlansGrid(props: PlansGridProps) {
  const defaultPlans: Plan[] = [
    {
      id: 1,
      name: "Starter",
      price: 29,
      description: "Perfect for small projects",
      features: [
        "Up to 5 projects",
        "1 GB storage",
        "Community support",
        "Basic analytics"
      ],
      highlighted: false
    },
    {
      id: 2,
      name: "Professional",
      price: 79,
      description: "Best for growing teams",
      features: [
        "Unlimited projects",
        "100 GB storage",
        "Priority support",
        "Advanced analytics",
        "Team collaboration",
        "Custom integrations"
      ],
      highlighted: true
    },
    {
      id: 3,
      name: "Enterprise",
      price: 199,
      description: "For large organizations",
      features: [
        "Unlimited everything",
        "1 TB storage",
        "24/7 dedicated support",
        "Enterprise analytics",
        "Advanced security",
        "SLA guarantee",
        "Custom solutions"
      ],
      highlighted: false
    }
  ];

  const plansToDisplay = props.plans || defaultPlans;

  return (
    <div className="
      plans__grid
      grid
      grid-cols-1
      md:grid-cols-3
      gap-8
      px-4
      py-8
    ">
      {plansToDisplay.map((plan) => (
        <PlanCard
          key={plan.id}
          name={plan.name}
          price={plan.price}
          description={plan.description}
          features={plan.features}
          highlighted={plan.highlighted}
        />
      ))}
    </div>
  );
}

export default PlansGrid;

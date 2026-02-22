import { PlanCard } from "../../components";

/**
 * PricingPage displays a pricing comparison grid with multiple plan options.
 * Features three tiers (Basic, Smart, Pro) with the Smart plan highlighted
 * as the recommended choice.
 *
 * @returns Rendered pricing page component
 */
function PricingPage() {
  const handleGetStarted = () => {
    console.log("Get Started clicked!");
    // Add your navigation or action logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Choose Your Plan
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Select the perfect plan for your needs
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Basic Plan */}
          <PlanCard
            title="Basic"
            description="Perfect for individuals getting started"
            features={[
              "Up to 5 projects",
              "Basic analytics",
              "Email support",
              "1GB storage",
              "Community access",
            ]}
            price={9}
            buttonText="Get Started"
            onButtonClick={handleGetStarted}
          />

          {/* Smart Plan (Highlighted) */}
          <PlanCard
            title="Smart"
            description="Ideal for growing teams and professionals"
            features={[
              "Unlimited projects",
              "Advanced analytics",
              "Priority support",
              "10GB storage",
              "Team collaboration",
              "Custom integrations",
            ]}
            price={29}
            buttonText="Get Started"
            onButtonClick={handleGetStarted}
            highlighted={true}
          />

          {/* Pro Plan */}
          <PlanCard
            title="Pro"
            description="For large organizations with advanced needs"
            features={[
              "Unlimited everything",
              "Real-time analytics",
              "24/7 dedicated support",
              "Unlimited storage",
              "Advanced security",
              "API access",
              "White-label options",
            ]}
            price={99}
            buttonText="Contact Sales"
            onButtonClick={handleGetStarted}
          />
        </div>
      </div>
    </div>
  );
}



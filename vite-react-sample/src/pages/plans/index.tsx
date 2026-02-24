import PlansGrid from "../../components/Grids/PlansGrid";

function PlansPage() {
  return (
    <div className="plans__page min-h-screen bg-gray-50">
      <div className="plans__header py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="plans__title text-4xl font-bold bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="plans__subtitle text-lg text-gray-600 mb-2">
            Choose the perfect plan for your needs
          </p>
          <p className="plans__description text-gray-500">
            Start free, scale as you grow. No credit card required.
          </p>
        </div>
      </div>

      <div className="plans__content max-w-6xl mx-auto">
        <PlansGrid />
      </div>

      <div className="plans__footer py-12 px-4 text-center">
        <p className="text-gray-600">
          Have questions? <a href="#" className="text-blue-500 hover:text-blue-700 font-medium">Contact our sales team</a>
        </p>
      </div>
    </div>
  );
}

export default PlansPage;

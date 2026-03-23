interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
}

function HeroSection({ 
  headline = "Let's", 
  subheadline = "Discover residential properties" 
}: HeroSectionProps) {
  return (
    <div className="flex flex-col items-start justify-start w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
        {headline}
      </h1>
      <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
        {subheadline}
      </p>
    </div>
  );
}

export default HeroSection;

interface HeroSectionProps {
  heading: string
  subtitle: string
  ctaText: string
  onCtaClick?: () => void
}

function HeroSection(props: HeroSectionProps) {
  return (
    <div className='
      hero__container
      flex
      flex-col
      items-center
      text-center
      w-full
      p-10
      mt-10
    '>

      <div className='hero__heading mb-5'>
        <h1 className='text-gray-900'>
          {props.heading}
        </h1>
      </div>

      <div className='hero__subtitle mb-10'>
        <p className='text-lg text-gray-500'>
          {props.subtitle}
        </p>
      </div>

      <div className='hero__cta'>
        <button 
          className='
            bg-gradient-to-r 
            from-[#6EE7B7] 
            via-[#3B82F6] 
            to-[#9333EA]
            hover:scale-105
            transition
            px-8
            py-3
            rounded-lg
          '
          onClick={props.onCtaClick}
        >
          {props.ctaText}
        </button>
      </div>

    </div>
  )
}

export default HeroSection

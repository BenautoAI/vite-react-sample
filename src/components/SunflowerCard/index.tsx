interface SunflowerCardProps {
  imageUrl?: string,
  alt?: string
}

function SunflowerCard(props: SunflowerCardProps) {
  const imageUrl = props.imageUrl || "https://images.unsplash.com/photo-1597848212624-e530bb7f6d05?w=800&q=80";
  const alt = props.alt || "Sunflower bud before blooming";

  return (
    <div className='
      sunflower-card__container
      relative
      w-full
      h-screen
      overflow-hidden
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-slate-800
      via-slate-700
      to-slate-900
    '>
      {/* Blurred background layer */}
      <div 
        className='
          sunflower-card__background
          absolute
          inset-0
          bg-cover
          bg-center
          blur-3xl
          opacity-40
          scale-110
        '
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />

      {/* Main content */}
      <div className='
        sunflower-card__content
        relative
        z-10
        w-full
        max-w-2xl
        px-6
      '>
        <div className='
          sunflower-card__card
          bg-gradient-to-b
          from-slate-900/60
          to-slate-800/40
          backdrop-blur-sm
          rounded-3xl
          shadow-2xl
          overflow-hidden
          border
          border-slate-700/50
        '>
          {/* Image container */}
          <div className='
            sunflower-card__image-container
            relative
            w-full
            aspect-[3/4]
            overflow-hidden
          '>
            <img
              src={imageUrl}
              alt={alt}
              className='
                sunflower-card__image
                w-full
                h-full
                object-cover
                object-center
              '
            />
            
            {/* Subtle overlay gradient */}
            <div className='
              sunflower-card__overlay
              absolute
              inset-0
              bg-gradient-to-t
              from-black/20
              via-transparent
              to-transparent
            ' />
          </div>

          {/* Optional caption area */}
          <div className='
            sunflower-card__caption
            p-6
            bg-slate-900/80
            backdrop-blur-md
          '>
            <h3 className='
              sunflower-card__title
              text-xl
              font-medium
              text-slate-100
              mb-2
            '>
              Sunflower Bud
            </h3>
            <p className='
              sunflower-card__description
              text-sm
              text-slate-400
              leading-relaxed
            '>
              A young sunflower bud captured before blooming, showcasing the intricate natural patterns and delicate tendrils in the early stages of growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SunflowerCard;

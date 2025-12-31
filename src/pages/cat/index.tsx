import CatWithHat from "../../components/CatWithHat";

function CatPage() {
  return (
    <div className="
      page__container
      min-h-screen 
      bg-gradient-to-br 
      from-sky-400 
      to-blue-500 
      py-12 
      px-4
    ">
      <div className="
        page__content
        max-w-6xl 
        mx-auto
      ">
        {/* Header */}
        <div className="
          page__header
          text-center 
          mb-12
        ">
          <h1 className="
            header__title
            text-5xl 
            font-bold 
            text-white 
            mb-4
          ">
            🎩 Cat with Hat Gallery 🐱
          </h1>
          <p className="
            header__subtitle
            text-xl 
            text-white/90
          ">
            Adorable cats sporting festive party hats!
          </p>
        </div>

        {/* Main cat display */}
        <div className="
          main-display__wrapper
          flex 
          justify-center 
          mb-16
        ">
          <div className="
            main-display__card
            bg-white/10 
            backdrop-blur-sm 
            rounded-3xl 
            p-8 
            shadow-2xl
          ">
            <CatWithHat size={400} />
          </div>
        </div>

        {/* Multiple cats in different sizes */}
        <div className="
          gallery__grid
          grid 
          grid-cols-1 
          md:grid-cols-3 
          gap-8
        ">
          <div className="
            gallery__item
            bg-white/10 
            backdrop-blur-sm 
            rounded-2xl 
            p-6 
            shadow-xl 
            flex 
            flex-col 
            items-center
          ">
            <CatWithHat size={250} />
            <p className="
              item__label
              mt-4 
              text-white 
              font-semibold 
              text-lg
            ">Small Hat</p>
          </div>
          
          <div className="
            gallery__item
            bg-white/10 
            backdrop-blur-sm 
            rounded-2xl 
            p-6 
            shadow-xl 
            flex 
            flex-col 
            items-center
          ">
            <CatWithHat size={250} />
            <p className="
              item__label
              mt-4 
              text-white 
              font-semibold 
              text-lg
            ">Medium Hat</p>
          </div>
          
          <div className="
            gallery__item
            bg-white/10 
            backdrop-blur-sm 
            rounded-2xl 
            p-6 
            shadow-xl 
            flex 
            flex-col 
            items-center
          ">
            <CatWithHat size={250} />
            <p className="
              item__label
              mt-4 
              text-white 
              font-semibold 
              text-lg
            ">Party Ready!</p>
          </div>
        </div>

        {/* Feature description */}
        <div className="
          features__section
          mt-16 
          bg-white/10 
          backdrop-blur-sm 
          rounded-2xl 
          p-8 
          shadow-xl
        ">
          <h2 className="
            features__title
            text-3xl 
            font-bold 
            text-white 
            mb-4
          ">Features</h2>
          <ul className="
            features__list
            space-y-3 
            text-white/90 
            text-lg
          ">
            <li>✨ Festive party hat with polka dots</li>
            <li>🎨 Customizable size via props</li>
            <li>🐾 Adorable cat imagery</li>
            <li>🎉 Perfect for celebrations and fun displays</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CatPage;

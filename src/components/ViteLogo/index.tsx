interface ViteLogoProps {}

function ViteLogo(props: ViteLogoProps) {
  return (
    <div className="vite-logo__container flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#646cff] to-[#747bff]">
      <div className="vite-logo__content flex flex-col items-center">
        <img 
          className="vite-logo__image w-64 hover:scale-110 rounded-full"
          src="/vite.svg" 
          alt="Vite Logo"
        />
        <h1 className="vite-logo__title text-6xl font-bold text-white text-center mt-5">
          Vite
        </h1>
        <p className="vite-logo__subtitle text-xl text-gray-300 text-center mt-3">
          Next Generation Frontend Tooling
        </p>
      </div>
    </div>
  )
}

export default ViteLogo

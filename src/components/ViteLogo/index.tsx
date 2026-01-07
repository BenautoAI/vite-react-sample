function ViteLogo() {
  return (
    <div className="vitelogo__container flex justify-center items-center p-4">
      <img 
        src="/vite.svg" 
        alt="Vite Logo" 
        className="vitelogo__image w-24 h-24 hover:scale-110 transition-transform duration-300"
      />
    </div>
  );
}

export default ViteLogo;

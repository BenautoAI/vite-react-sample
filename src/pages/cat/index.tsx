import Cat from "../../components/Cat";
import FeiAvatar from "./FeiAvatar";

function CatPage() {
  return (
    <div 
      className="
        min-h-screen 
        bg-gradient-to-br 
        from-cyan-400 
        to-blue-500
        flex 
        items-center 
        justify-center
        p-8
      "
    >
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <FeiAvatar />
        </div>
        <h1 className="text-5xl font-bold text-white mb-8 drop-shadow-lg">
          Playful Cat with Party Hat! 🎉
        </h1>
        <div className="flex justify-center">
          <Cat />
        </div>
        <p className="text-white text-lg mt-8 max-w-md mx-auto drop-shadow">
          This adorable cat is ready to party! Watch it wave its paw and gently float.
        </p>
      </div>
    </div>
  );
}

export default CatPage;

import CircularAvatar from "../../components/CircularAvatar";

function CircularAvatarDemo() {
  return (
    <div className="
      circular-avatar-demo__container 
      flex 
      flex-col 
      items-center 
      justify-center 
      min-h-screen 
      gap-8
      p-8
    ">
      <h1 className="text-3xl font-bold mb-4">Circular Avatar Component</h1>
      
      <div className="demo__section flex flex-col items-center gap-4">
        <h2 className="text-xl font-semibold">Extra Large Size</h2>
        <CircularAvatar 
          src="./src/assets/photo.png" 
          alt="Anime character avatar"
          size="xl"
        />
      </div>

      <div className="demo__section flex flex-col items-center gap-4">
        <h2 className="text-xl font-semibold">Large Size (Default)</h2>
        <CircularAvatar 
          src="./src/assets/photo.png" 
          alt="Anime character avatar"
          size="lg"
        />
      </div>

      <div className="demo__section flex flex-col items-center gap-4">
        <h2 className="text-xl font-semibold">Medium Size</h2>
        <CircularAvatar 
          src="./src/assets/photo.png" 
          alt="Anime character avatar"
          size="md"
        />
      </div>

      <div className="demo__section flex flex-col items-center gap-4">
        <h2 className="text-xl font-semibold">Small Size</h2>
        <CircularAvatar 
          src="./src/assets/photo.png" 
          alt="Anime character avatar"
          size="sm"
        />
      </div>

      <div className="demo__section flex flex-row items-center gap-8 mt-8">
        <h2 className="text-xl font-semibold">Multiple Avatars</h2>
        <CircularAvatar 
          src="./src/assets/photo.png" 
          alt="Avatar 1"
          size="md"
        />
        <CircularAvatar 
          src="./src/assets/photo.png" 
          alt="Avatar 2"
          size="md"
        />
        <CircularAvatar 
          src="./src/assets/photo.png" 
          alt="Avatar 3"
          size="md"
        />
      </div>
    </div>
  );
}

export default CircularAvatarDemo;

import CircularAvatar from "../../components/CircularAvatar";

function CircularAvatarDemo() {
  return (
    <div className="
      circular-avatar-demo 
      flex 
      items-center 
      justify-center 
      min-h-screen 
      bg-gray-50
    ">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Circular Avatar Component
        </h1>
        
        <CircularAvatar 
          src="./src/assets/photo.png"
          alt="User Avatar"
          size={400}
        />

        <div className="text-center">
          <p className="text-gray-600">
            A circular avatar with gradient border effect
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Hover to see scale animation
          </p>
        </div>
      </div>
    </div>
  );
}

export default CircularAvatarDemo;

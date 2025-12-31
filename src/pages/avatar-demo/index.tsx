import CircleAvatar from "../../components/CircleAvatar";

function AvatarDemoPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-12 p-8">
      <h1 className="text-4xl font-bold mb-8">Circle Avatar Component</h1>
      
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl font-semibold">Large Size</h2>
        <CircleAvatar size="large" alt="Anime character avatar" />
      </div>

      <div className="flex flex-row items-center gap-12 mt-8">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-semibold">Medium Size</h2>
          <CircleAvatar size="medium" alt="Anime character avatar" />
        </div>

        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-semibold">Small Size</h2>
          <CircleAvatar size="small" alt="Anime character avatar" />
        </div>
      </div>
    </div>
  );
}

export default AvatarDemoPage;

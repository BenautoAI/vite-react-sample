import ViteLogo from "../../components/ViteLogo";

function ViteLogoDisplay() {
  return (
    <div className="vite-logo-display flex flex-col items-center justify-center min-h-screen gap-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Vite Logo</h1>
        <p className="text-gray-600 mb-8">A fast and modern build tool</p>
      </div>

      <div className="flex flex-col items-center gap-6">
        <ViteLogo width={150} height={150} />
        
        <div className="flex gap-6 items-center">
          <ViteLogo width={80} height={80} />
          <ViteLogo width={120} height={120} />
        </div>
      </div>
    </div>
  );
}

export default ViteLogoDisplay;

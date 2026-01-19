import ViteLogo from "../../components/ViteLogo"
import "../../App.css"

function ViteLogoDemo() {
  return (
    <div className="vite-logo-demo flex flex-col items-center gap-8 p-8">
      <h1 className="text-4xl font-bold mb-4">Vite Logo Component</h1>
      
      <div className="demo-section flex flex-col items-center gap-4 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-semibold">Default Size</h2>
        <ViteLogo />
      </div>

      <div className="demo-section flex flex-col items-center gap-4 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-semibold">Large Size</h2>
        <ViteLogo size={150} />
      </div>

      <div className="demo-section flex flex-col items-center gap-4 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-semibold">Small Size</h2>
        <ViteLogo size={64} />
      </div>

      <div className="demo-section flex flex-col items-center gap-4 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-semibold">With Custom Margin</h2>
        <ViteLogo className="mt-8 mb-8" />
      </div>
    </div>
  );
}

export default ViteLogoDemo;

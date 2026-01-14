import CatImage from "../../components/CatImage";

function CatPage() {
  return (
    <div className="container mx-auto p-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Playful Cat Gallery
        </h1>
        <p className="text-gray-600">
          A showcase of adorable cat photography
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CatImage />
        
        <CatImage 
          backgroundColor="#48CAE4"
        />
        
        <CatImage 
          backgroundColor="#90E0EF"
        />
        
        <CatImage 
          imageUrl="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23666'%3E🐱 White Cat%3C/text%3E%3C/svg%3E"
          alt="Cute white and gray cat"
          backgroundColor="#CAF0F8"
        />
        
        <CatImage 
          imageUrl="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23ffe0cc'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23666'%3E🐱 Orange Tabby%3C/text%3E%3C/svg%3E"
          alt="Orange tabby cat"
          backgroundColor="#ADE8F4"
        />
        
        <CatImage 
          imageUrl="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23e8e8e8'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23666'%3E🐱 Curious Cat%3C/text%3E%3C/svg%3E"
          alt="Curious cat looking up"
          backgroundColor="#00B4D8"
        />
      </div>
    </div>
  );
}

export default CatPage;

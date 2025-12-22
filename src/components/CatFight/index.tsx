import { useState, useEffect } from 'react';

interface CatFightProps {
  cat1Name?: string;
  cat2Name?: string;
}

function CatFight(props: CatFightProps) {
  const cat1Name = props.cat1Name || "Whiskers";
  const cat2Name = props.cat2Name || "Mittens";
  
  const [isFighting, setIsFighting] = useState(false);
  const [cat1Health, setCat1Health] = useState(100);
  const [cat2Health, setCat2Health] = useState(100);
  const [cat1Attack, setCat1Attack] = useState(false);
  const [cat2Attack, setCat2Attack] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);

  useEffect(() => {
    if (!isFighting) return;

    const battleInterval = setInterval(() => {
      const attacker = Math.random() > 0.5 ? 1 : 2;
      const damage = Math.floor(Math.random() * 15) + 5;

      if (attacker === 1) {
        setCat1Attack(true);
        setTimeout(() => setCat1Attack(false), 300);
        setCat2Health((prev) => {
          const newHealth = Math.max(0, prev - damage);
          if (newHealth === 0) {
            setWinner(cat1Name);
            setIsFighting(false);
          }
          return newHealth;
        });
      } else {
        setCat2Attack(true);
        setTimeout(() => setCat2Attack(false), 300);
        setCat1Health((prev) => {
          const newHealth = Math.max(0, prev - damage);
          if (newHealth === 0) {
            setWinner(cat2Name);
            setIsFighting(false);
          }
          return newHealth;
        });
      }
    }, 1000);

    return () => clearInterval(battleInterval);
  }, [isFighting, cat1Name, cat2Name]);

  const handleStartBattle = () => {
    if (winner) {
      handleReset();
    }
    setIsFighting(true);
  };

  const handleReset = () => {
    setIsFighting(false);
    setCat1Health(100);
    setCat2Health(100);
    setCat1Attack(false);
    setCat2Attack(false);
    setWinner(null);
  };

  return (
    <div className="cat-fight__container w-full py-10 px-5">
      <div className="flex flex-row items-center justify-center gap-20 relative">
        
        {/* Cat 1 - Left Side */}
        <div className="cat-fight__avatar flex flex-col items-center">
          <div className="relative">
            {/* Attack Effect */}
            {cat1Attack && (
              <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-4xl animate-ping">
                💥
              </div>
            )}
            
            {/* Cat Image Container */}
            <div
              className="cat-fight__avatar-border w-40 h-40 rounded-full bg-gradient-to-r from-[#FF6B6B] via-[#FF8E53] to-[#FE4A49] p-1 hover:scale-110 transition-all duration-300"
              style={{
                transform: cat1Attack ? 'translateX(10px) rotate(15deg) scale(1.1)' : 'translateX(0) rotate(0) scale(1)',
                transition: 'transform 0.3s ease-in-out'
              }}
            >
              <div className="w-full h-full rounded-full bg-blue-400 flex items-center justify-center text-7xl">
                🐱
              </div>
            </div>
          </div>
          
          {/* Cat Name */}
          <div className="cat-fight__info mt-4 text-center">
            <h3 className="text__title font-bold text-xl text-gray-800">{cat1Name}</h3>
            <p className="text__subtitle text-sm text-gray-600 mt-1">Fighter Cat</p>
            
            {/* Health Bar */}
            <div className="cat-fight__health-bar w-32 h-3 bg-gray-300 rounded-full mt-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-red-500 rounded-full transition-all duration-500"
                style={{ width: `${cat1Health}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">{cat1Health} HP</p>
          </div>
        </div>

        {/* VS Text */}
        <div className="cat-fight__versus text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center border-4 border-yellow-600 shadow-lg animate-bounce">
            <span className="text-2xl font-black text-gray-800">VS</span>
          </div>
        </div>

        {/* Cat 2 - Right Side */}
        <div className="cat-fight__avatar flex flex-col items-center">
          <div className="relative">
            {/* Attack Effect */}
            {cat2Attack && (
              <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-4xl animate-ping">
                💢
              </div>
            )}
            
            {/* Cat Image Container */}
            <div
              className="cat-fight__avatar-border w-40 h-40 rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-1 hover:scale-110 transition-all duration-300"
              style={{
                transform: cat2Attack ? 'translateX(-10px) rotate(-15deg) scale(1.1)' : 'translateX(0) rotate(0) scale(1)',
                transition: 'transform 0.3s ease-in-out'
              }}
            >
              <div className="w-full h-full rounded-full bg-blue-400 flex items-center justify-center text-7xl">
                🐱
              </div>
            </div>
          </div>
          
          {/* Cat Name */}
          <div className="cat-fight__info mt-4 text-center">
            <h3 className="text__title font-bold text-xl text-gray-800">{cat2Name}</h3>
            <p className="text__subtitle text-sm text-gray-600 mt-1">Warrior Cat</p>
            
            {/* Health Bar */}
            <div className="cat-fight__health-bar w-32 h-3 bg-gray-300 rounded-full mt-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-red-500 rounded-full transition-all duration-500"
                style={{ width: `${cat2Health}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">{cat2Health} HP</p>
          </div>
        </div>
      </div>

      {/* Winner Announcement */}
      {winner && (
        <div className="cat-fight__winner text-center mt-6 animate-bounce">
          <h2 className="text-3xl font-black text-yellow-600 mb-2">🏆 {winner} WINS! 🏆</h2>
        </div>
      )}

      {/* Battle Arena Description */}
      <div className="cat-fight__controls text-center mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">⚔️ Epic Cat Battle Arena ⚔️</h2>
        <p className="text-gray-600 mb-4">
          {isFighting ? 'The battle rages on!' : winner ? `${winner} is victorious!` : 'Two fierce felines face off in the ultimate showdown!'}
        </p>
        
        {/* Action Buttons */}
        <div className="flex gap-4 justify-center mt-4">
          <button 
            className="cat-fight__button px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={handleStartBattle}
            disabled={isFighting}
          >
            {winner ? 'New Battle' : 'Start Battle'}
          </button>
          <button 
            className="cat-fight__button px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors duration-300"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default CatFight;

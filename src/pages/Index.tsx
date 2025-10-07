import { useEffect, useState } from 'react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-purple-900 via-pink-600 to-blue-500">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.4) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)',
        }}
      />

      <div className="absolute top-8 left-8 animate-float">
        <div className="text-6xl neon-glow text-pink-400">💖</div>
      </div>

      <div className="absolute top-20 right-16 animate-float" style={{ animationDelay: '1s' }}>
        <div className="text-4xl neon-glow text-pink-300">✨</div>
      </div>

      <div className="absolute bottom-32 left-16 animate-float" style={{ animationDelay: '2s' }}>
        <div className="text-5xl neon-glow text-pink-400">💕</div>
      </div>

      <div className="absolute bottom-20 right-12 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="text-3xl neon-glow text-purple-300">✨</div>
      </div>

      <div className="absolute top-1/3 left-1/4 animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="text-2xl neon-glow text-blue-300">⭐</div>
      </div>

      <div className="absolute top-2/3 right-1/4 animate-float" style={{ animationDelay: '0.8s' }}>
        <div className="text-2xl neon-glow text-purple-300">⭐</div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div 
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight animate-pulse-glow"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              textShadow: `
                0 0 10px #EC4899,
                0 0 20px #EC4899,
                0 0 40px #EC4899,
                0 0 80px #A855F7,
                0 0 120px #A855F7,
                0 5px 15px rgba(0, 0, 0, 0.5)
              `,
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.1)',
            }}
          >
            Мама,
            <br />
            я люблю
            <br />
            тебя! 💖
          </h1>

          <div className="flex justify-center gap-4 mt-8">
            <div className="text-3xl animate-pulse-glow text-pink-400" style={{ animationDelay: '0.2s' }}>✨</div>
            <div className="text-3xl animate-pulse-glow text-purple-400" style={{ animationDelay: '0.4s' }}>⭐</div>
            <div className="text-3xl animate-pulse-glow text-blue-400" style={{ animationDelay: '0.6s' }}>✨</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="text-4xl neon-glow text-pink-500">💗</div>
        <div className="text-5xl neon-glow text-pink-400">💕</div>
      </div>
    </div>
  );
};

export default Index;

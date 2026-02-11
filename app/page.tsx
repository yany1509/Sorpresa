import Image from "next/image";
import StarryBackground from "./components/StarryBackground";
import ConcertBackground from "./components/ConcertBackground";

export default function Home() {
  const books = [
    {
      title: "Una Corte de Niebla y Furia",
      author: "Sarah J. Maas",
      quote: "Por los que miran las estrellas y piensan 'ojalá... ojalá'. Por las estrellas que nos escuchan y los sueños se hacen realidad.",
      gradient: "from-indigo-500/30 via-purple-400/20 to-blue-500/30",
      accentColor: "from-indigo-600 via-purple-500 to-blue-600",
      textColor: "text-indigo-900",
      emoji: "⭐",
      imageUrl: "/cielo-estrellado.png",
      isSpecial: true
    },
    {
      title: "Cien Años de Soledad",
      author: "Gabriel García Márquez",
      quote: "El amor se hace más grande y noble en la calamidad.",
      gradient: "from-amber-400/20 via-yellow-300/20 to-amber-200/20",
      accentColor: "from-amber-500 to-yellow-500",
      textColor: "text-amber-700",
      emoji: "🦋",
      imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop"
    },
    {
      title: "El Gran Gatsby",
      author: "F. Scott Fitzgerald",
      quote: "Te amaba por tu voz, por la promesa de que había alguien como tú en el mundo.",
      gradient: "from-emerald-400/20 via-teal-300/20 to-emerald-200/20",
      accentColor: "from-emerald-500 to-teal-500",
      textColor: "text-emerald-700",
      emoji: "✨",
      imageUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=600&h=400&fit=crop"
    },
    {
      title: "Romeo y Julieta",
      author: "William Shakespeare",
      quote: "No jures por la luna, la inconstante luna que cambia cada mes, no sea que tu amor resulte tan variable.",
      gradient: "from-purple-400/20 via-violet-300/20 to-purple-200/20",
      accentColor: "from-purple-500 to-violet-500",
      textColor: "text-purple-700",
      emoji: "🌙",
      imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop"
    },
    {
      title: "Rayuela",
      author: "Julio Cortázar",
      quote: "Andábamos sin buscarnos pero sabiendo que andábamos para encontrarnos.",
      gradient: "from-blue-400/20 via-sky-300/20 to-blue-200/20",
      accentColor: "from-blue-500 to-sky-500",
      textColor: "text-blue-700",
      emoji: "🎭",
      imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="snap-container">
      {/* Section 1 - Starry Sky */}
      <section className="snap-section relative min-h-screen overflow-hidden">
        {/* Animated starry background */}
        <StarryBackground />
        
        {/* Hero Title */}
        <div className="relative z-10 py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 animate-fade-in drop-shadow-lg">
              Te amo como los libros me enseñaron
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Cada historia de amor que leí me preparó para amarte de mil formas diferentes
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 text-6xl opacity-40 animate-float">📖</div>
          <div className="absolute top-20 right-10 text-6xl opacity-40 animate-float-delayed">💕</div>
        </div>
        
        {/* Content - Photo and Quote */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Floating Photo */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative group">
                {/* Glow effect - more subtle */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-blue-400/20 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
                
                {/* Photo container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 backdrop-blur-sm animate-float">
                  <div className="relative w-80 md:w-96 lg:w-[28rem] aspect-[3/4]">
                    <Image
                      src="/cielo estrellado.png"
                      alt="Nuestro cielo estrellado"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Overlay gradient - very subtle */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
                  </div>
                </div>
                
                {/* Floating stars around photo */}
                <div className="absolute -top-6 -right-6 text-4xl animate-pulse">✨</div>
                <div className="absolute -bottom-6 -left-6 text-4xl animate-pulse" style={{animationDelay: '1s'}}>⭐</div>
                <div className="absolute top-1/2 -left-10 text-3xl animate-pulse" style={{animationDelay: '0.5s'}}>💫</div>
              </div>
            </div>
            
            {/* Floating Quote */}
            <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in">
              {/* Book title */}
              <div className="inline-block mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 mb-2">
                  Una Corte de Niebla y Furia
                </h2>
                <p className="text-blue-200/80 italic text-lg">
                  Sarah J. Maas
                </p>
              </div>
              
              {/* Decorative line */}
              <div className="h-1 w-24 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mb-8 mx-auto lg:mx-0"></div>
              
              {/* Quote */}
              <blockquote className="relative">
                <div className="space-y-4">
                  <p className="text-2xl md:text-3xl text-white leading-relaxed font-serif">
                    <span className="text-blue-300 text-5xl font-bold">"</span>
                    Por los que miran las estrellas y piensan{' '}
                    <span className="text-yellow-300 font-bold italic">'ojalá... ojalá'</span>
                  </p>
                  <p className="text-2xl md:text-3xl text-white leading-relaxed font-serif">
                    Por las estrellas que nos escuchan y los sueños se hacen realidad.
                    <span className="text-blue-300 text-5xl font-bold">"</span>
                  </p>
                </div>
              </blockquote>
              
              {/* Personal message */}
              <div className="mt-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <p className="text-blue-100 text-lg leading-relaxed italic">
                  Ese día miré a las estrellas pidiendo que fueras eterno y alguna, por suerte, me escuchó
                  <span className="block mt-2 text-yellow-200 font-semibold not-italic">
                    💫
                  </span>
                </p>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="text-white/60 text-sm mb-2">Desliza para más</div>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Section 2 - La Última Nota */}
      <section className="snap-section relative min-h-screen overflow-hidden">
        {/* Animated concert background */}
        <ConcertBackground />
        
        {/* Content - Photo and Quote */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            
            {/* Floating Photo */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative group">
                {/* Glow effect - concert lights */}
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/30 via-blue-400/30 to-purple-400/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700 animate-pulse"></div>
                
                {/* Photo container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-orange-300/20 backdrop-blur-sm animate-float">
                  <div className="relative w-80 md:w-96 lg:w-[28rem] aspect-[3/4]">
                    <Image
                      src="/notas.png"
                      alt="La última nota"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
                  </div>
                </div>
                
                {/* Floating music emojis */}
                <div className="absolute -top-6 -right-6 text-4xl animate-pulse">🎸</div>
                <div className="absolute -bottom-6 -left-6 text-4xl animate-pulse" style={{animationDelay: '1s'}}>🎵</div>
                <div className="absolute top-1/2 -right-10 text-3xl animate-pulse" style={{animationDelay: '0.5s'}}>🎤</div>
              </div>
            </div>
            
            {/* Quote */}
            <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in">
              {/* Book title */}
              <div className="inline-block mb-6">
                <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white font-bold text-sm mb-4 shadow-lg">
                  Libro 2
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-yellow-300 mb-2">
                  La Última Nota
                </h2>
                <p className="text-orange-200/80 italic text-lg">
                  Historia de un cantante y una fotógrafa
                </p>
              </div>
              
              {/* Decorative line */}
              <div className="h-1 w-24 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 rounded-full mb-8 mx-auto lg:mx-0"></div>
              
              {/* Quote */}
              <blockquote className="relative">
                <div className="space-y-4">
                  <p className="text-xl md:text-2xl text-white leading-relaxed font-serif">
                    <span className="text-orange-300 text-5xl font-bold">"</span>
                    —¿No ves que todas te están mirando?
                  </p>
                  <p className="text-xl md:text-2xl text-white leading-relaxed font-serif">
                    —La verdad es que no.
                  </p>
                  <p className="text-xl md:text-2xl text-white leading-relaxed font-serif">
                    —¿Estás ciego?
                  </p>
                  <p className="text-xl md:text-2xl text-yellow-200 leading-relaxed font-serif font-semibold">
                    —No, solo te miro a ti.
                    <span className="text-orange-300 text-5xl font-bold">"</span>
                  </p>
                </div>
              </blockquote>
              
              {/* Personal message */}
              <div className="mt-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-orange-300/20">
                <p className="text-orange-100 text-lg leading-relaxed italic">
                  Da igual cuántas personas estén cerca, mis ojos siempre se dirigen hacia ti.
                  <span className="block mt-2 text-yellow-200 font-semibold not-italic">
                    🎶
                  </span>
                </p>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="text-white/60 text-sm mb-2">Continúa la historia</div>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Section 3 - Third Book */}
      <section className="snap-section relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-emerald-300 rounded-full animate-pulse"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 2}s`
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 min-h-screen flex items-center">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
            
            {/* Floating Photo */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/30 via-teal-400/30 to-cyan-400/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700 animate-pulse"></div>
                
                {/* Photo container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-300/20 backdrop-blur-sm animate-float">
                  <div className="relative w-80 md:w-96 lg:w-[28rem] aspect-[3/4]">
                    <Image
                      src={books[1].imageUrl}
                      alt={books[1].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
                  </div>
                </div>
                
                {/* Floating emoji */}
                <div className="absolute -top-6 -right-6 text-4xl animate-pulse">{books[1].emoji}</div>
                <div className="absolute -bottom-6 -left-6 text-4xl animate-pulse" style={{animationDelay: '1s'}}>💚</div>
              </div>
            </div>
            
            {/* Quote */}
            <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in">
              {/* Book title */}
              <div className="inline-block mb-6">
                <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-bold text-sm mb-4 shadow-lg">
                  Libro 3
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 mb-2">
                  {books[1].title}
                </h2>
                <p className="text-emerald-200/80 italic text-lg">
                  por {books[1].author}
                </p>
              </div>
              
              {/* Decorative line */}
              <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-full mb-8 mx-auto lg:mx-0"></div>
              
              {/* Quote */}
              <blockquote className="relative">
                <p className="text-2xl md:text-3xl text-white leading-relaxed font-serif">
                  <span className="text-emerald-300 text-5xl font-bold">"</span>
                  {books[1].quote}
                  <span className="text-emerald-300 text-5xl font-bold">"</span>
                </p>
              </blockquote>
              
              {/* Personal message */}
              <div className="mt-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-emerald-300/20">
                <p className="text-emerald-100 text-lg leading-relaxed italic">
                  Cada momento contigo es una nueva aventura
                  <span className="block mt-2 text-cyan-200 font-semibold not-italic">
                    ✨
                  </span>
                </p>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="text-white/60 text-sm mb-2">Más historias</div>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Other Books Section */}
      <div className="bg-gradient-to-br from-slate-50 via-rose-50 to-amber-50">
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Más historias de amor
            </h2>
          </div>

          <div className="space-y-12">
            {books.slice(1).map((book, index) => (
              <div
                key={index}
                className={`animate-slide-in-${index + 2} group relative`}
              >
                {/* Card Container */}
                <div className={`relative bg-gradient-to-br ${book.gradient} backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] border border-white/40`}>
                  
                  {/* Layout alternates: image left/right */}
                  <div className={`flex flex-col ${(index + 1) % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0`}>
                    
                    {/* Image Section */}
                    <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10"></div>
                      <Image
                        src={book.imageUrl}
                        alt={book.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Floating emoji */}
                      <div className="absolute top-6 right-6 z-20 text-6xl drop-shadow-2xl animate-float">
                        {book.emoji}
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                      {/* Book number badge */}
                      <div className={`inline-block self-start px-4 py-2 rounded-full bg-gradient-to-r ${book.accentColor} text-white font-bold text-sm mb-4 shadow-lg`}>
                        Libro {index + 3}
                      </div>
                      
                      {/* Title */}
                      <h2 className={`text-3xl md:text-4xl font-bold ${book.textColor} mb-2 leading-tight`}>
                        {book.title}
                      </h2>
                      
                      {/* Author */}
                      <p className="text-lg text-slate-600 mb-6 italic font-light">
                        por {book.author}
                      </p>
                      
                      {/* Decorative line */}
                      <div className={`h-1 w-20 bg-gradient-to-r ${book.accentColor} rounded-full mb-6 group-hover:w-32 transition-all duration-500`}></div>
                      
                      {/* Quote */}
                      <blockquote className="relative">
                        <span className={`absolute -left-3 -top-3 text-5xl ${book.textColor} opacity-30 font-serif`}>"</span>
                        <p className="text-lg md:text-xl text-slate-700 leading-relaxed pl-6 font-serif italic">
                          {book.quote}
                        </p>
                        <span className={`absolute -right-2 -bottom-4 text-5xl ${book.textColor} opacity-30 font-serif`}>"</span>
                      </blockquote>
                    </div>
                    
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 ${(index + 1) % 2 === 0 ? 'right-0' : 'left-0'} w-32 h-32 bg-gradient-to-br ${book.accentColor} opacity-10 blur-3xl`}></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Closing message */}
      <section className="max-w-4xl mx-auto px-6 pb-20 text-center">
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/50">
          <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed font-serif italic">
            Y así, con cada página que pasé, aprendí que el amor verdadero es una mezcla de todas estas historias... 
            <span className="block mt-4 text-rose-600 font-bold not-italic">
              pero contigo es aún más hermoso 💝
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}

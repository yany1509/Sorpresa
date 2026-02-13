import Image from "next/image";
import StarryBackground from "./components/StarryBackground";
import ConcertBackground from "./components/ConcertBackground";
import BooksCarousel from "./components/BooksCarousel";
import HorizontalHeroCarousel from "./components/HorizontalHeroCarousel";
import FloatingGlassNav from "./components/FloatingGlassNav";
import RecuerdosQuiz from "./components/RecuerdosQuiz";

export default function Home() {
  const books = [
    {
      title: "Una Corte de Niebla y Furia",
      author: "Sarah J. Maas",
      quote:
        "Por los que miran las estrellas y piensan 'ojalá... ojalá'. Por las estrellas que nos escuchan y los sueños se hacen realidad.",
      gradient: "from-indigo-500/30 via-purple-400/20 to-blue-500/30",
      accentColor: "from-indigo-600 via-purple-500 to-blue-600",
      textColor: "text-indigo-900",
      emoji: "⭐",
      imageUrl: "/cielo-estrellado.png",
      isSpecial: true,
    },
    {
      title: "Érase una vez un corazón roto",
      author: "Stephanie Garber",
      quote:
        "Érase una vez una niña que creía en los cuentos de hadas y le robó el corazón a un príncipe que había jurado no amar nunca...",
      gradient: "from-rose-400/20 via-pink-300/20 to-rose-200/20",
      accentColor: "from-rose-500 to-pink-500",
      textColor: "text-rose-700",
      emoji: "💔",
      imageUrl: "/erase.png",
    },
    {
      title: "El Gran Gatsby",
      author: "F. Scott Fitzgerald",
      quote:
        "Te amaba por tu voz, por la promesa de que había alguien como tú en el mundo.",
      gradient: "from-emerald-400/20 via-teal-300/20 to-emerald-200/20",
      accentColor: "from-emerald-500 to-teal-500",
      textColor: "text-emerald-700",
      emoji: "✨",
      imageUrl:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=600&h=400&fit=crop",
    },
    {
      title: "Romeo y Julieta",
      author: "William Shakespeare",
      quote:
        "No jures por la luna, la inconstante luna que cambia cada mes, no sea que tu amor resulte tan variable.",
      gradient: "from-purple-400/20 via-violet-300/20 to-purple-200/20",
      accentColor: "from-purple-500 to-violet-500",
      textColor: "text-purple-700",
      emoji: "🌙",
      imageUrl:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
    },
    {
      title: "Rayuela",
      author: "Julio Cortázar",
      quote:
        "Andábamos sin buscarnos pero sabiendo que andábamos para encontrarnos.",
      gradient: "from-blue-400/20 via-sky-300/20 to-blue-200/20",
      accentColor: "from-blue-500 to-sky-500",
      textColor: "text-blue-700",
      emoji: "🎭",
      imageUrl:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop",
    },
  ];
  return (
    <div>
      <FloatingGlassNav />

      <section id="libros" className="scroll-mt-28">
        <HorizontalHeroCarousel>
          {/* Section 1 - Starry Sky */}
          <section className="relative h-full overflow-hidden">
            {/* Animated starry background */}
            <StarryBackground />

            {/* Hero Title */}
            <div className="relative z-10 px-6 pt-28 pb-4 md:pt-32 md:pb-6">
              <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 animate-fade-in drop-shadow-lg">
                  Te amo como los libros me enseñaron
                </h1>
                <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                  Cada historia de amor que leí me preparó para amarte de mil
                  formas diferentes
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-28 left-10 text-6xl opacity-40 animate-float">
                📖
              </div>
              <div className="absolute top-32 right-10 text-6xl opacity-40 animate-float-delayed">
                💕
              </div>
            </div>

            {/* Content - Photo and Quote */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 pb-14 md:pb-16">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Floating Photo */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="relative group">
                    {/* Glow effect - more subtle */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-blue-400/20 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>

                    {/* Photo container */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 backdrop-blur-sm animate-float">
                      <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-[3/4]">
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
                    <div className="absolute -top-6 -right-6 text-4xl animate-pulse">
                      ✨
                    </div>
                    <div
                      className="absolute -bottom-6 -left-6 text-4xl animate-pulse"
                      style={{ animationDelay: "1s" }}
                    >
                      ⭐
                    </div>
                    <div
                      className="absolute top-1/2 -left-10 text-3xl animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    >
                      💫
                    </div>
                  </div>
                </div>

                {/* Floating Quote */}
                <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in">
                  {/* Book title */}
                  <div className="inline-block mb-6">
                    <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 mb-2">
                      Una Corte de Niebla y Furia
                    </h2>
                    <p className="text-blue-200/80 italic text-base md:text-lg">
                      Sarah J. Maas
                    </p>
                  </div>

                  {/* Decorative line */}
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mb-8 mx-auto lg:mx-0"></div>

                  {/* Quote */}
                  <blockquote className="relative">
                    <div className="space-y-3">
                      <p className="text-xl md:text-2xl text-white leading-relaxed font-serif">
                        <span className="text-blue-300 text-5xl font-bold">
                          "
                        </span>
                        Por los que miran las estrellas y piensan{" "}
                        <span className="text-yellow-300 font-bold italic">
                          'ojalá... ojalá'
                        </span>
                      </p>
                      <p className="text-xl md:text-2xl text-white leading-relaxed font-serif">
                        Por las estrellas que nos escuchan y los sueños se hacen
                        realidad.
                        <span className="text-blue-300 text-5xl font-bold">
                          "
                        </span>
                      </p>
                    </div>
                  </blockquote>

                  {/* Personal message */}
                  <div className="mt-6 p-4 md:p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                    <p className="text-blue-100 text-base md:text-lg leading-relaxed italic">
                      Ese día miré a las estrellas pidiendo que fueras eterno y
                      alguna, por suerte, me escuchó
                      <span className="block mt-2 text-yellow-200 font-semibold not-italic">
                        💫
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
              <div className="text-white/60 text-sm mb-2">Desliza para más</div>
              <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </section>

          {/* Section 2 - La Última Nota */}
          <section className="relative h-full overflow-hidden">
            {/* Animated concert background */}
            <ConcertBackground />

            {/* Content - Photo and Quote */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-8 md:py-12 h-full flex items-center">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 w-full">
                {/* Floating Photo */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="relative group">
                    {/* Glow effect - concert lights */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/30 via-blue-400/30 to-purple-400/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700 animate-pulse"></div>

                    {/* Photo container */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-orange-300/20 backdrop-blur-sm animate-float">
                      <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-[3/4]">
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
                    <div className="absolute -top-6 -right-6 text-4xl animate-pulse">
                      🎸
                    </div>
                    <div
                      className="absolute -bottom-6 -left-6 text-4xl animate-pulse"
                      style={{ animationDelay: "1s" }}
                    >
                      🎵
                    </div>
                    <div
                      className="absolute top-1/2 -right-10 text-3xl animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    >
                      🎤
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in">
                  {/* Book title */}
                  <div className="inline-block mb-6">
                    <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white font-bold text-sm mb-4 shadow-lg">
                      Libro 2
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-yellow-300 mb-2">
                      La Última Nota
                    </h2>
                    <p className="text-orange-200/80 italic text-base md:text-lg">
                      Historia de un cantante y una fotógrafa
                    </p>
                  </div>

                  {/* Decorative line */}
                  <div className="h-1 w-24 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 rounded-full mb-6 mx-auto lg:mx-0"></div>

                  {/* Quote */}
                  <blockquote className="relative">
                    <div className="space-y-2">
                      <p className="text-lg md:text-xl text-white leading-relaxed font-serif">
                        <span className="text-orange-300 text-5xl font-bold">
                          "
                        </span>
                        —¿No ves que todas te están mirando?
                      </p>
                      <p className="text-lg md:text-xl text-white leading-relaxed font-serif">
                        —La verdad es que no.
                      </p>
                      <p className="text-lg md:text-xl text-white leading-relaxed font-serif">
                        —¿Estás ciego?
                      </p>
                      <p className="text-lg md:text-xl text-yellow-200 leading-relaxed font-serif font-semibold">
                        —No, solo te miro a ti.
                        <span className="text-orange-300 text-5xl font-bold">
                          "
                        </span>
                      </p>
                    </div>
                  </blockquote>

                  {/* Personal message */}
                  <div className="mt-6 p-4 md:p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-orange-300/20">
                    <p className="text-orange-100 text-base md:text-lg leading-relaxed italic">
                      Da igual cuántas personas estén cerca, mis ojos siempre se
                      dirigen hacia ti.
                      <span className="block mt-2 text-yellow-200 font-semibold not-italic">
                        🎶
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
              <div className="text-white/60 text-sm mb-2">
                Continúa la historia
              </div>
              <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </section>

          {/* Section 3 - Third Book */}
          <section className="relative h-full overflow-hidden bg-gradient-to-br from-[#120c2f] via-[#1e2b67] to-[#5a1c49]">
            {/* Decorative background elements */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              {[...Array(28)].map((_, i) => {
                const isFox = i % 4 === 0;
                const left = (i * 17) % 100;
                const top = (i * 23) % 100;
                const size = 18 + (i % 4) * 7;
                const delay = (i % 7) * 0.35;
                const duration = 4.5 + (i % 5) * 0.8;

                return (
                  <span
                    key={i}
                    className={
                      isFox
                        ? "absolute animate-float-delayed"
                        : "absolute animate-float"
                    }
                    style={{
                      left: `${left}%`,
                      top: `${top}%`,
                      fontSize: `${size}px`,
                      opacity: isFox ? 0.35 : 0.45,
                      animationDelay: `${delay}s`,
                      animationDuration: `${duration}s`,
                      filter: "drop-shadow(0 0 8px rgba(255, 220, 160, 0.25))",
                    }}
                  >
                    {isFox ? "🦊" : "🍎"}
                  </span>
                );
              })}
            </div>
            <div className="pointer-events-none absolute left-8 top-16 text-5xl opacity-65 animate-float">
              🍎
            </div>
            <div
              className="pointer-events-none absolute right-10 top-24 text-5xl opacity-65 animate-float-delayed"
              style={{ animationDelay: "0.4s" }}
            >
              🦊
            </div>
            <div
              className="pointer-events-none absolute left-12 bottom-20 text-4xl opacity-60 animate-float-delayed"
              style={{ animationDelay: "0.8s" }}
            >
              ✨
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-8 md:py-12 h-full flex items-center">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full">
                {/* Floating Photo */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="relative group">
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-rose-400/30 via-amber-300/25 to-pink-400/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700 animate-pulse"></div>

                    {/* Photo container */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-rose-200/30 backdrop-blur-sm animate-float">
                      <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-[3/4]">
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
                    <div className="absolute -top-6 -right-6 text-4xl animate-pulse">
                      {books[1].emoji}
                    </div>
                    <div
                      className="absolute -bottom-6 -left-6 text-4xl animate-pulse"
                      style={{ animationDelay: "1s" }}
                    >
                      🍎
                    </div>
                    <div
                      className="absolute top-1/2 -left-10 text-3xl animate-pulse"
                      style={{ animationDelay: "0.6s" }}
                    >
                      🦊
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in">
                  {/* Book title */}
                  <div className="inline-block mb-6">
                    <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400 text-white font-bold text-sm mb-4 shadow-lg">
                      Libro 3
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-200 to-amber-200 mb-2">
                      {books[1].title}
                    </h2>
                    <p className="text-rose-100/85 italic text-base md:text-lg">
                      por {books[1].author}
                    </p>
                  </div>

                  {/* Decorative line */}
                  <div className="h-1 w-24 bg-gradient-to-r from-rose-300 via-pink-300 to-amber-300 rounded-full mb-6 mx-auto lg:mx-0"></div>

                  {/* Quote */}
                  <blockquote className="relative">
                    <p className="text-xl md:text-2xl text-white leading-relaxed font-serif">
                      <span className="text-amber-200 text-5xl font-bold">
                        "
                      </span>
                      {books[1].quote}
                      <span className="text-amber-200 text-5xl font-bold">
                        "
                      </span>
                    </p>
                  </blockquote>

                  {/* Personal message */}
                  <div className="mt-6 p-4 md:p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-rose-200/30">
                    <p className="text-rose-100 text-base md:text-lg leading-relaxed italic">
                      Justo al mismo tiempo en que leía a Jacks y me enamoraba
                      de él, me comenzaba a enamorar de ti, porque eras incluso
                      mejor que un hombre escrito por una mujer: eras tú, y
                      realmente ni Jacks podría ser así.
                      <span className="block mt-2 text-amber-200 font-semibold not-italic">
                        🍎🦊
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
              <div className="text-white/60 text-sm mb-2">Más historias</div>
              <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </section>
        </HorizontalHeroCarousel>

        {/* Other Books Section */}
        <div className="bg-gradient-to-br from-slate-50 via-rose-50 to-amber-50">
          <section className="max-w-6xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Más historias de amor
              </h2>
            </div>

            <BooksCarousel books={books.slice(2)} startBookNumber={4} />
          </section>
        </div>

        {/* Closing message */}
        <section className="max-w-4xl mx-auto px-6 pb-20 pt-4 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/50">
            <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed font-serif italic">
              Y así, con cada página que pasé, aprendí que el amor verdadero es
              una mezcla de todas estas historias...
              <span className="block mt-4 text-rose-600 font-bold not-italic">
                pero contigo es aún más hermoso 💝
              </span>
            </p>
          </div>
        </section>
      </section>

      <section
        id="recuerdos"
        className="scroll-mt-28 min-h-screen bg-gradient-to-br from-amber-100 via-rose-100 to-orange-100 px-6 py-28"
      >
        <RecuerdosQuiz />
      </section>

      <section
        id="atrapame-si-puedes"
        className="scroll-mt-28 min-h-screen bg-gradient-to-br from-cyan-100 via-sky-100 to-indigo-100 px-6 py-28"
      >
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-cyan-200/70 bg-white/65 p-10 shadow-xl backdrop-blur-xl md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
            Sección 3
          </p>
          <h2 className="mt-4 text-4xl font-bold text-cyan-900 md:text-5xl">
            Atrápame si puedes
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-cyan-800/90">
            Base lista para convertir esto en una experiencia interactiva o mini
            juego.
          </p>
        </div>
      </section>

      <section
        id="lo-que-tanto-querias"
        className="scroll-mt-28 min-h-screen bg-gradient-to-br from-violet-100 via-fuchsia-100 to-rose-100 px-6 py-28"
      >
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-violet-200/70 bg-white/65 p-10 shadow-xl backdrop-blur-xl md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
            Sección 4
          </p>
          <h2 className="mt-4 text-4xl font-bold text-violet-900 md:text-5xl">
            Lo que tanto querías
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-violet-800/90">
            Espacio reservado para el gran reveal final de la sorpresa.
          </p>
        </div>
      </section>
    </div>
  );
}

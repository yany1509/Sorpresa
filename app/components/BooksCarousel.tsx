"use client";

import Image from "next/image";
import { useState } from "react";

type CarouselBook = {
  title: string;
  author: string;
  quote: string;
  gradient: string;
  accentColor: string;
  textColor: string;
  emoji: string;
  imageUrl: string;
};

type BooksCarouselProps = {
  books: CarouselBook[];
  startBookNumber?: number;
};

export default function BooksCarousel({
  books,
  startBookNumber = 1,
}: BooksCarouselProps) {
  const [currentBookIndex, setCurrentBookIndex] = useState(0);

  const goToPreviousBook = () => {
    setCurrentBookIndex((prev) => (prev === 0 ? books.length - 1 : prev - 1));
  };

  const goToNextBook = () => {
    setCurrentBookIndex((prev) => (prev === books.length - 1 ? 0 : prev + 1));
  };

  if (books.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={goToPreviousBook}
        aria-label="Libro anterior"
        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-3 text-slate-700 shadow-lg transition hover:scale-105 hover:bg-white md:left-4"
      >
        &#8592;
      </button>

      <div className="overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentBookIndex * 100}%)` }}
        >
          {books.map((book, index) => (
            <div key={book.title} className="w-full shrink-0 px-1">
              <div
                className={`group relative bg-gradient-to-br ${book.gradient} backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 border border-white/40`}
              >
                <div className="flex flex-col md:flex-row gap-0">
                  <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10"></div>
                    <Image
                      src={book.imageUrl}
                      alt={book.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-6 right-6 z-20 text-6xl drop-shadow-2xl animate-float">
                      {book.emoji}
                    </div>
                  </div>

                  <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                    <div
                      className={`inline-block self-start px-4 py-2 rounded-full bg-gradient-to-r ${book.accentColor} text-white font-bold text-sm mb-4 shadow-lg`}
                    >
                      Libro {index + startBookNumber}
                    </div>

                    <h2
                      className={`text-3xl md:text-4xl font-bold ${book.textColor} mb-2 leading-tight`}
                    >
                      {book.title}
                    </h2>

                    <p className="text-lg text-slate-600 mb-6 italic font-light">
                      por {book.author}
                    </p>

                    <div
                      className={`h-1 w-20 bg-gradient-to-r ${book.accentColor} rounded-full mb-6 group-hover:w-32 transition-all duration-500`}
                    ></div>

                    <blockquote className="relative">
                      <span
                        className={`absolute -left-3 -top-3 text-5xl ${book.textColor} opacity-30 font-serif`}
                      >
                        &ldquo;
                      </span>
                      <p className="text-lg md:text-xl text-slate-700 leading-relaxed pl-6 font-serif italic">
                        {book.quote}
                      </p>
                      <span
                        className={`absolute -right-2 -bottom-4 text-5xl ${book.textColor} opacity-30 font-serif`}
                      >
                        &rdquo;
                      </span>
                    </blockquote>
                  </div>
                </div>

                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${book.accentColor} opacity-10 blur-3xl`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={goToNextBook}
        aria-label="Siguiente libro"
        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-3 text-slate-700 shadow-lg transition hover:scale-105 hover:bg-white md:right-4"
      >
        &#8594;
      </button>

      <div className="mt-8 flex justify-center gap-2">
        {books.map((book, index) => (
          <button
            key={`${book.title}-dot`}
            type="button"
            aria-label={`Ir al libro ${index + startBookNumber}`}
            onClick={() => setCurrentBookIndex(index)}
            className={`h-2.5 rounded-full transition-all ${
              currentBookIndex === index ? "w-8 bg-rose-500" : "w-2.5 bg-rose-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderProps {
  slides: {
    id: string;
    image: string;
    title: string;
    description?: string;
    link?: string;
  }[];
  autoplay?: boolean;
  interval?: number;
}

const Slider: React.FC<SliderProps> = ({ 
  slides, 
  autoplay = true, 
  interval = 5000 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoplay, interval, currentSlide]);
  
  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full relative">
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold mb-2">{slide.title}</h3>
              {slide.description && (
                <p className="text-white text-sm md:text-base mb-4">{slide.description}</p>
              )}
              {slide.link && (
                <a 
                  href={slide.link} 
                  className="btn-primary inline-block w-max"
                >
                  Ver más
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-colors"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-colors"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-gold-600' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
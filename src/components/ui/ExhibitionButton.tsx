import { Link } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';

interface ExhibitionButtonProps {
  id: string;
  title: string;
  image: string;
}

const ExhibitionButton: React.FC<ExhibitionButtonProps> = ({ id, title, image }) => {
  return (
    <Link 
      to={`/virtual-exhibition/${id}`}
      className="group relative overflow-hidden rounded-lg shadow-md"
    >
      <div className="aspect-video w-full">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-60 flex flex-col items-center justify-center">
          <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 mb-3" />
          <h3 className="text-white text-lg md:text-xl font-medium px-4 text-center">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ExhibitionButton;
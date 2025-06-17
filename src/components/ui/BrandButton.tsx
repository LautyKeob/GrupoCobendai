import { Link } from 'react-router-dom';

interface BrandButtonProps {
  name: string;
  image: string;
  slug: string;
}

const BrandButton: React.FC<BrandButtonProps> = ({ name, image, slug }) => {
  return (
    <Link 
      to={`/brand/${slug}`}
      className="flex flex-col items-center group"
    >
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white shadow-md flex items-center justify-center p-4 mb-3 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
        <img 
          src={image} 
          alt={`${name} logo`} 
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <span className="text-sm md:text-base font-medium text-gray-800">{name}</span>
    </Link>
  );
};

export default BrandButton;
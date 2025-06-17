// Mock data for vehicle models by brand
export interface VehicleModel {
  id: string;
  brand: string;
  name: string;
  image: string;
  description: string;
  gallery: string[];
  video?: string;
  price: {
    from: number;
    currency: string;
  };
}

export const models: VehicleModel[] = [
  // Hyundai Models (19)
  {
    id: 'hyundai-i10',
    brand: 'Hyundai',
    name: 'i10',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
    description: 'El urbano más versátil y tecnológico',
    gallery: [
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
      'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg'
    ],
    price: { from: 14900, currency: 'EUR' }
  },
  {
    id: 'hyundai-i20',
    brand: 'Hyundai',
    name: 'i20',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Diseño deportivo y tecnología avanzada',
    gallery: [
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
      'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg'
    ],
    price: { from: 16900, currency: 'EUR' }
  },
  {
    id: 'hyundai-i30',
    brand: 'Hyundai',
    name: 'i30',
    image: 'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg',
    description: 'El compacto más completo',
    gallery: ['https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg'],
    price: { from: 21900, currency: 'EUR' }
  },
  {
    id: 'hyundai-bayon',
    brand: 'Hyundai',
    name: 'BAYON',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV urbano con personalidad única',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 19900, currency: 'EUR' }
  },
  {
    id: 'hyundai-kona',
    brand: 'Hyundai',
    name: 'KONA',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV compacto con diseño atrevido',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 23900, currency: 'EUR' }
  },
  {
    id: 'hyundai-tucson',
    brand: 'Hyundai',
    name: 'TUCSON',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV revolucionario con diseño paramétrico',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 28900, currency: 'EUR' }
  },
  {
    id: 'hyundai-santa-fe',
    brand: 'Hyundai',
    name: 'SANTA FE',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV premium con 7 plazas',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 39900, currency: 'EUR' }
  },
  {
    id: 'hyundai-ioniq5',
    brand: 'Hyundai',
    name: 'IONIQ 5',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Crossover eléctrico revolucionario',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 41900, currency: 'EUR' }
  },
  {
    id: 'hyundai-ioniq6',
    brand: 'Hyundai',
    name: 'IONIQ 6',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Berlina eléctrica aerodinámica',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 43900, currency: 'EUR' }
  },
  {
    id: 'hyundai-kona-ev',
    brand: 'Hyundai',
    name: 'KONA Electric',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV eléctrico versátil',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 35900, currency: 'EUR' }
  },
  {
    id: 'hyundai-tucson-phev',
    brand: 'Hyundai',
    name: 'TUCSON PHEV',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV híbrido enchufable',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 39900, currency: 'EUR' }
  },
  {
    id: 'hyundai-santa-fe-phev',
    brand: 'Hyundai',
    name: 'SANTA FE PHEV',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV híbrido enchufable premium',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 45900, currency: 'EUR' }
  },
  {
    id: 'hyundai-i30-n',
    brand: 'Hyundai',
    name: 'i30 N',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Deportivo de altas prestaciones',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 35900, currency: 'EUR' }
  },
  {
    id: 'hyundai-kona-n',
    brand: 'Hyundai',
    name: 'KONA N',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV deportivo de alto rendimiento',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 37900, currency: 'EUR' }
  },
  {
    id: 'hyundai-staria',
    brand: 'Hyundai',
    name: 'STARIA',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'MPV futurista y espacioso',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 47900, currency: 'EUR' }
  },
  {
    id: 'hyundai-h350',
    brand: 'Hyundai',
    name: 'H350',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Furgón profesional versátil',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 32900, currency: 'EUR' }
  },
  {
    id: 'hyundai-h1',
    brand: 'Hyundai',
    name: 'H1',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Furgoneta comercial compacta',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 29900, currency: 'EUR' }
  },
  {
    id: 'hyundai-casper',
    brand: 'Hyundai',
    name: 'CASPER',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Mini SUV urbano',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 17900, currency: 'EUR' }
  },
  {
    id: 'hyundai-nexo',
    brand: 'Hyundai',
    name: 'NEXO',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV de hidrógeno',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 69900, currency: 'EUR' }
  },

  // Peugeot Models (16)
  {
    id: 'peugeot-208',
    brand: 'Peugeot',
    name: '208',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'El urbano más elegante',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 18900, currency: 'EUR' }
  },
  {
    id: 'peugeot-2008',
    brand: 'Peugeot',
    name: '2008',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV compacto con estilo único',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 22900, currency: 'EUR' }
  },
  {
    id: 'peugeot-308',
    brand: 'Peugeot',
    name: '308',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Compacto premium francés',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 24900, currency: 'EUR' }
  },
  {
    id: 'peugeot-308-sw',
    brand: 'Peugeot',
    name: '308 SW',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Familiar elegante y espacioso',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 26900, currency: 'EUR' }
  },
  {
    id: 'peugeot-3008',
    brand: 'Peugeot',
    name: '3008',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV tecnológico y refinado',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 31900, currency: 'EUR' }
  },
  {
    id: 'peugeot-5008',
    brand: 'Peugeot',
    name: '5008',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV 7 plazas versátil',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 35900, currency: 'EUR' }
  },
  {
    id: 'peugeot-508',
    brand: 'Peugeot',
    name: '508',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Berlina deportiva premium',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 37900, currency: 'EUR' }
  },
  {
    id: 'peugeot-508-sw',
    brand: 'Peugeot',
    name: '508 SW',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Familiar deportivo premium',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 39900, currency: 'EUR' }
  },
  {
    id: 'peugeot-e-208',
    brand: 'Peugeot',
    name: 'e-208',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Urbano 100% eléctrico',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 29900, currency: 'EUR' }
  },
  {
    id: 'peugeot-e-2008',
    brand: 'Peugeot',
    name: 'e-2008',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV eléctrico compacto',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 33900, currency: 'EUR' }
  },
  {
    id: 'peugeot-308-phev',
    brand: 'Peugeot',
    name: '308 PHEV',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Compacto híbrido enchufable',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 35900, currency: 'EUR' }
  },
  {
    id: 'peugeot-3008-phev',
    brand: 'Peugeot',
    name: '3008 PHEV',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV híbrido enchufable',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 41900, currency: 'EUR' }
  },
  {
    id: 'peugeot-5008-phev',
    brand: 'Peugeot',
    name: '5008 PHEV',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV 7 plazas híbrido enchufable',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 45900, currency: 'EUR' }
  },
  {
    id: 'peugeot-508-pse',
    brand: 'Peugeot',
    name: '508 PSE',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Berlina deportiva híbrida',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 59900, currency: 'EUR' }
  },
  {
    id: 'peugeot-rifter',
    brand: 'Peugeot',
    name: 'Rifter',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Multiusos familiar',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 24900, currency: 'EUR' }
  },
  {
    id: 'peugeot-expert',
    brand: 'Peugeot',
    name: 'Expert',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Furgón profesional versátil',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 29900, currency: 'EUR' }
  },

  // MG Models (10)
  {
    id: 'mg-zs-ev',
    brand: 'MG',
    name: 'ZS EV',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV eléctrico accesible',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 29900, currency: 'EUR' }
  },
  {
    id: 'mg-4',
    brand: 'MG',
    name: 'MG4 Electric',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Compacto eléctrico deportivo',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 28900, currency: 'EUR' }
  },
  {
    id: 'mg-5',
    brand: 'MG',
    name: 'MG5 Electric',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Familiar eléctrico versátil',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 31900, currency: 'EUR' }
  },
  {
    id: 'mg-marvel-r',
    brand: 'MG',
    name: 'Marvel R',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV eléctrico premium',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 39900, currency: 'EUR' }
  },
  {
    id: 'mg-hs',
    brand: 'MG',
    name: 'HS',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV familiar espacioso',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 24900, currency: 'EUR' }
  },
  {
    id: 'mg-hs-phev',
    brand: 'MG',
    name: 'HS PHEV',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV híbrido enchufable',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 32900, currency: 'EUR' }
  },
  {
    id: 'mg-zs',
    brand: 'MG',
    name: 'ZS',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV compacto versátil',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 16900, currency: 'EUR' }
  },
  {
    id: 'mg-3',
    brand: 'MG',
    name: 'MG3',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Urbano compacto y ágil',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 14900, currency: 'EUR' }
  },
  {
    id: 'mg-cyberster',
    brand: 'MG',
    name: 'Cyberster',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Deportivo eléctrico',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 55900, currency: 'EUR' }
  },
  {
    id: 'mg-vs',
    brand: 'MG',
    name: 'VS',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV coupé deportivo',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 27900, currency: 'EUR' }
  },

  // KGM Models (7)
  {
    id: 'kgm-korando',
    brand: 'KGM',
    name: 'Korando',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV compacto robusto',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 22900, currency: 'EUR' }
  },
  {
    id: 'kgm-torres',
    brand: 'KGM',
    name: 'Torres',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV aventurero',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 27900, currency: 'EUR' }
  },
  {
    id: 'kgm-torres-evx',
    brand: 'KGM',
    name: 'Torres EVX',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV eléctrico aventurero',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 41900, currency: 'EUR' }
  },
  {
    id: 'kgm-rexton',
    brand: 'KGM',
    name: 'Rexton',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV premium todoterreno',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 35900, currency: 'EUR' }
  },
  {
    id: 'kgm-musso',
    brand: 'KGM',
    name: 'Musso',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Pick-up robusto y versátil',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 29900, currency: 'EUR' }
  },
  {
    id: 'kgm-musso-grand',
    brand: 'KGM',
    name: 'Musso Grand',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Pick-up largo profesional',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 31900, currency: 'EUR' }
  },
  {
    id: 'kgm-korando-e-motion',
    brand: 'KGM',
    name: 'Korando e-Motion',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV eléctrico compacto',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 35900, currency: 'EUR' }
  },

  // Subaru Models (4)
  {
    id: 'subaru-outback',
    brand: 'Subaru',
    name: 'Outback',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Crossover aventurero',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 39900, currency: 'EUR' }
  },
  {
    id: 'subaru-forester',
    brand: 'Subaru',
    name: 'Forester',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV familiar todoterreno',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 37900, currency: 'EUR' }
  },
  {
    id: 'subaru-xv',
    brand: 'Subaru',
    name: 'XV',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Crossover compacto',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 29900, currency: 'EUR' }
  },
  {
    id: 'subaru-solterra',
    brand: 'Subaru',
    name: 'Solterra',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV eléctrico',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 49900, currency: 'EUR' }
  },

  // Suzuki Models (8)
  {
    id: 'suzuki-ignis',
    brand: 'Suzuki',
    name: 'Ignis',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV urbano compacto',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 16900, currency: 'EUR' }
  },
  {
    id: 'suzuki-swift',
    brand: 'Suzuki',
    name: 'Swift',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Urbano deportivo',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 15900, currency: 'EUR' }
  },
  {
    id: 'suzuki-swift-sport',
    brand: 'Suzuki',
    name: 'Swift Sport',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Deportivo compacto',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 23900, currency: 'EUR' }
  },
  {
    id: 'suzuki-vitara',
    brand: 'Suzuki',
    name: 'Vitara',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV compacto versátil',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 22900, currency: 'EUR' }
  },
  {
    id: 'suzuki-s-cross',
    brand: 'Suzuki',
    name: 'S-Cross',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'Crossover familiar',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 24900, currency: 'EUR' }
  },
  {
    id: 'suzuki-jimny',
    brand: 'Suzuki',
    name: 'Jimny',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: '4x4 compacto auténtico',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 23900, currency: 'EUR' }
  },
  {
    id: 'suzuki-jimny-pro',
    brand: 'Suzuki',
    name: 'Jimny Pro',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: '4x4 comercial',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 21900, currency: 'EUR' }
  },
  {
    id: 'suzuki-across',
    brand: 'Suzuki',
    name: 'Across',
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    description: 'SUV híbrido enchufable',
    gallery: ['https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg'],
    price: { from: 49900, currency: 'EUR' }
  }
];

// Group models by brand
export const modelsByBrand = models.reduce((acc, model) => {
  if (!acc[model.brand]) {
    acc[model.brand] = [];
  }
  acc[model.brand].push(model);
  return acc;
}, {} as Record<string, VehicleModel[]>);
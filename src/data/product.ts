export interface Product {
    id: string;
    name: string;
    category: 'beans' | 'equipment' | 'accessories';
    price: number;
    description: string;
    features: string[];
    rating: number;
    image: string;
    inStock: boolean;
    origin?: string;
    roastLevel?: 'light' | 'medium' | 'dark' | 'espresso';
    weight?: number;
  }
  
  export interface Category {
    id: string;
    name: string;
    description: string;
    image: string;
  }
  
  export const categories: Category[] = [
    {
      id: 'beans',
      name: 'Coffee Beans',
      description: 'Freshly roasted premium coffee beans from around the world.',
      image: '/coffee-beans.png'
    },
    {
      id: 'equipment',
      name: 'Brewing Equipment',
      description: 'Essential tools for crafting the perfect cup of coffee.',
      image: '/brewing.png'
    },
    {
      id: 'accessories',
      name: 'Accessories',
      description: 'Enhance your coffee experience with our quality accessories.',
      image: '/accessory.png'
    }
  ];
  
  export const products: Product[] = [
    {
      id: 'barako',
      name: 'Classic Barako',
      category: 'beans',
      price: 649,
      description: 'A bold and intense coffee with a smoky, woody aroma and hints of dark chocolate and nuts. This strong, full-bodied roast is a staple of Filipino coffee culture, known for its rich heritage and energizing kick.',
      features: [
        'Strong, bold, and smoky flavor with a floral aroma',
        'High Caffeine Content',
        'Often enjoyed black or with sugar'
        
      ],
      rating: 4.8,
      image: '/barako.jpg',
      inStock: true,
      origin: 'Philippines',
      roastLevel: 'dark',
      weight: 16
    },
    {
      id: 'arabica',
      name: 'Premium Arabica',
      category: 'beans',
      price: 749,
      description: 'A smooth and well-balanced coffee with caramel sweetness, citrusy brightness, and a hint of nuttiness. Sourced from the highlands of Benguet, Philippines, this Arabica variety delivers a refined and naturally sweet cup with a clean finish.',
      features: [
        'Smooth, mild flavor with caramel and citrus notes',
        'Lower caffeine content compared to Barako',
        'Often enjoyed black or with milk for a balanced taste',
     
      ],
      rating: 4.5,
      image: '/arabica.jpg',
      inStock: true,
      origin: 'Philippines',
      roastLevel: 'medium',
      weight: 16
    },
    {
      id: 'french-press',
      name: 'Classic French Press',
      category: 'equipment',
      price: 1749,
      description: 'A high-quality French press designed for rich, full-bodied coffee. Made with durable, heat-resistant borosilicate glass and a stainless steel plunger, it ensures smooth and flavorful brews every time.',
      features: [
        'Capacity: 1L (8 cups)',
        'Heat-resistant glass',
        'Stainless steel double mesh filtration system',
        'Easy to clean and dishwasher safe'
      ],
      rating: 4.6,
      image: '/classic-fp.png',
      inStock: true
    },
    {
      id: 'espresso-machine',
      name: 'Espresso Machine',
      category: 'equipment',
      price: 5499,
      description: 'An affordable and compact espresso machine designed for home use. Delivers rich espresso shots with a simple one-touch operation, perfect for beginners and casual coffee lovers.',
      features: [
        '3.5-bar pressure system for espresso brewing',
        'Built-in steam wand for frothing milk',
        'Compact and lightweight design for small spaces',
        'Easy-to-use controls for beginners'
      ],
      rating: 4.9,
      image: '/espresso-machine.png',
      inStock: true
    },
    {
      id: 'coffee-mug-set',
      name: 'Ceramic Coffee Mug Set',
      category: 'accessories',
      price: 24.99,
      description: 'A set of four handcrafted ceramic mugs with a modern, minimalist design. The perfect size for your morning coffee or afternoon espresso.',
      features: [
        'Set of 4 mugs',
        'Capacity: 12 oz each',
        'Microwave and dishwasher safe',
        'Available in multiple colors'
      ],
      rating: 4.5,
      image: '/globe.svg',
      inStock: true
    },
    {
      id: 'coffee-canister',
      name: 'Airtight Coffee Canister',
      category: 'accessories',
      price: 18.99,
      description: 'Keep your coffee fresh with this airtight stainless steel canister. Features a CO2 release valve and date tracker to monitor freshness.',
      features: [
        'Capacity: 16 oz of beans',
        'One-way CO2 release valve',
        'Date wheel for tracking freshness',
        'BPA-free silicone seal'
      ],
      rating: 4.6,
      image: '/globe.svg',
      inStock: true
    }
  ];
  
  export const getProductsByCategory = (category: string) => {
    return products.filter(product => product.category === category);
  };
  
  export const getProductById = (id: string) => {
    return products.find(product => product.id === id);
  };
  
  export const getFeaturedProducts = (count: number = 3) => {
    return products
      .sort((a, b) => b.rating - a.rating)
      .slice(0, count);
  };
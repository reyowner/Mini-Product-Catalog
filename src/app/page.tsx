import Image from 'next/image';
import Link from 'next/link';
import '@/app/globals.css';
import { products, categories } from '@/data/product';

const featuredImages = [
  '/bag.png',
  '/bag.png',
  '/french-press.png'
];

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-brown-800 mb-4">The Barista Hub</h1>
        <p className="text-xl text-brown-600">Discover the finest coffee products for the perfect brew</p>
      </header>

      {/* Categories Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-brown-800">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/category/${category.id}`} className="block">
              <div className="bg-brown-100 rounded-lg p-6 hover:shadow-lg transition duration-300 h-full flex flex-col items-center">
                <div className="w-24 h-24 mb-4">
                  <Image 
                    src={category.image || '/'} 
                    alt={category.name} 
                    width={96} 
                    height={96} 
                  />
                </div>
                <h3 className="text-xl font-medium text-brown-800 mb-2">{category.name}</h3>
                <p className="text-brown-600 text-center">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-brown-800">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => (
            <Link key={product.id} href={`/product/${product.id}`} className="block">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 h-full flex flex-col">
                <div className="w-full mb-4 flex items-center justify-center">
                  <Image 
                    src={featuredImages[index] || product.image || '/'} 
                    alt={product.name} 
                    width={120} 
                    height={120} 
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-brown-800 mb-2">{product.name}</h3>
                <p className="text-brown-600 mb-2 line-clamp-2">{product.description}</p>
                <div className="mt-auto">
                  <span className="text-lg font-bold text-brown-800">₱{product.price.toFixed(2)}</span>
                  <div className="mt-2 flex items-center">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"}>★</span>
                      ))}
                    </div>
                    <span className="ml-1 text-sm text-brown-600">{product.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

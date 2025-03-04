import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductsByCategory, categories } from '@/data/product';

export default function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const category = categories.find(c => c.id === id);
  
  if (!category) {
    notFound();
  }
  
  const products = getProductsByCategory(id);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <Link href="/" className="text-brown-600 hover:text-brown-800 mb-4 inline-block">
          ← Back to Home
        </Link>
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 mr-4">
            <Image 
              src={category.image || '/'} 
              alt={category.name} 
              width={64} 
              height={64} 
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-brown-800">{category.name}</h1>
            <p className="text-brown-600">{category.description}</p>
          </div>
        </div>
      </header>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 h-full flex flex-col">
                <div className="w-full mb-4 flex items-center justify-center">
                  <Image 
                    src={product.image || '/vercel.svg'} 
                    alt={product.name} 
                    width={120} 
                    height={120} 
                  />
                </div>
                <h3 className="text-lg font-medium text-brown-800 mb-2">{product.name}</h3>
                <p className="text-brown-600 mb-2 line-clamp-2">{product.description}</p>
                <div className="mt-auto">
                  <span className="text-lg font-bold text-brown-800">${product.price.toFixed(2)}</span>
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
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-brown-600">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}
import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductById } from '@/data/product';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = getProductById(id);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="text-brown-600 hover:text-brown-800 mb-6 inline-block">
        ← Back to Home
      </Link>
      
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <div className="md:flex">
          <div className="md:w-1/3 mb-6 md:mb-0 flex items-center justify-center">
            <Image 
              src={product.image || '/'} 
              alt={product.name} 
              width={240} 
              height={240} 
              className="rounded-md" 
            />
          </div>
          
          <div className="md:w-2/3 md:pl-8">
            <h1 className="text-3xl font-bold text-brown-800 mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-500 mr-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"}>★</span>
                ))}
              </div>
              <span className="text-brown-600">{product.rating.toFixed(1)}</span>
            </div>
            
            <p className="text-2xl font-bold text-brown-800 mb-4">${product.price.toFixed(2)}</p>
            
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
              
              <Link href={`/category/${product.category}`}>
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-brown-100 text-brown-800 ml-2">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </span>
              </Link>
            </div>
            
            <p className="text-brown-600 mb-6">{product.description}</p>
            
            {product.origin && (
              <div className="mb-4">
                <span className="font-medium text-brown-800">Origin:</span> {product.origin}
              </div>
            )}
            
            {product.roastLevel && (
              <div className="mb-4">
                <span className="font-medium text-brown-800">Roast Level:</span> {product.roastLevel.charAt(0).toUpperCase() + product.roastLevel.slice(1)}
              </div>
            )}
            
            {product.weight && (
              <div className="mb-6">
                <span className="font-medium text-brown-800">Weight:</span> {product.weight} oz
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-brown-800 mb-4">Features</h2>
          <ul className="list-disc pl-5 space-y-2 text-brown-600">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

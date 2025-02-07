

import Image from 'next/image';

const categories = [
  {
    title: 'Dining',
    image: '/pic.png',
  },
  {
    title: 'Living',
    image: '/pic2.png',
  },
  {
    title: 'Bedroom',
    image: '/pic3.png',
  },
];

export default function BrowseRange() {
  return (
    <section className="text-center py-10">
      <h2 className="text-2xl font-bold mb-2">Browse The Range</h2>
      <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {categories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image 
              src={category.image} 
              alt={category.title} 
              width={400} 
              height={300} 
              className="w-full h-64 object-cover"
            />
            <h3 className="text-lg font-semibold py-4">{category.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

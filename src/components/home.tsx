
export default function GardeningHomepage() {

  return (
    <div className="container mb-12 bg-white">
          <div className="bg-green-100 p-2 overflow-x-auto">
        <div className="container mx-auto whitespace-nowrap">
          <h2 className="text-green-800 font-semibold inline-block mr-4">
            TRENDING:
          </h2>
          <a href="#" className="text-green-700 hover:underline mr-4">
            Should You Prune Hydrangeas In The Fall?
          </a>
          <a href="#" className="text-green-700 hover:underline mr-4">
            Vegetable Harvesting Tips
          </a>
          <a href="#" className="text-green-700 hover:underline mr-4">
            Shop Fall Flower Seeds & Supplies
          </a>
          <a href="#" className="text-green-700 hover:underline mr-4">
            Watch Gardening Videos
          </a>
          <a href="#" className="text-green-700 hover:underline">
            Top 10 Flowering Ground Covers
          </a>
        </div>
      </div>

      <main className="container mx-auto mt-4 px-4">
        <article className="relative">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/031/624/711/small_2x/yellow-flowers-in-a-vase-on-a-green-background-ai-generated-photo.jpg"
            alt="Fall-blooming flowers"
            className="w-full h-48 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
            <div className="text-center text-white p-4 md:p-8 bg-white bg-opacity-80 max-w-2xl">
              <h2 className="text-2xl md:text-4xl font-serif text-black mb-2 md:mb-4">
                Fall-Blooming Flowers For Front Yards – Maximum Curb Appeal
                Guaranteed
              </h2>
              <p className="text-sm md:text-lg text-black">
                Create a vibrant, inviting front yard that glows with fall color
                and lasts well into the cooler months.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

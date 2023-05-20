import React from 'react'
import hero1 from '../../assets/singleHero/jrTanos.jpg';
import hero2 from '../../assets/singleHero/ironman.jpg';
import hero7 from '../../assets/singleHero/spiderman.jpg';
import hero4 from '../../assets/singleHero/groot.jpg';
import hero8 from '../../assets/singleHero/ant-manjpg.jpg';
import hero5 from '../../assets/singleHero/rocketBoss.jpg';
import hero6 from '../../assets/singleHero/hulk.jpg';
import hero3 from '../../assets/singleHero/flash.jpg';

const HeroGallery = () => {

  return (
    <div className="my-8">
      <p className="text-5xl font-serif mb-6 text-center pb-8">Our Heroes </p>

      {/* <div className="grid justify-center items-center md:grid-cols-3 gap-4">
        {gallery.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              className="w-[400px] h-[300px] object-cover rounded-md"
            />
          </div>
        ))}
      </div> */}

      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src={hero1}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={hero2}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={hero8}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={hero3}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={hero4}
          />
     

        </div>
      </section>
    </div>
  );
}

export default HeroGallery
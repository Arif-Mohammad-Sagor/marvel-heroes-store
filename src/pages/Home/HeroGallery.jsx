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
    const gallery = [hero1, hero8, hero7, hero4, hero5, hero6, hero2, hero3];
  return (
      <div className='my-8'>
          <p className='text-5xl font-serif mb-6 text-center pb-8'>Our Heroes </p>

          <div className='grid justify-center items-center md:grid-cols-3 gap-4'>
              {
                  gallery.map((img,index )=> <div key={index}>
                <img src={img} className='w-[400px] h-[300px] object-cover rounded-md'/>
                      </div>)
               }
          </div>
    </div>
  )
}

export default HeroGallery
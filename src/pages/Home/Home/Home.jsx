import React from 'react'
import Hero from '../Hero'
import HeroGallery from '../HeroGallery'
import ShopCategory from '../ShopCategory'
import Review from '../Review'
import PageTitle from '../../shared/PageTitle'
import FeaturedHeros from '../FeaturedHeros'

const Home = () => {
  return (
    <>
      <PageTitle title=" "></PageTitle>
      <Hero></Hero>
      <HeroGallery></HeroGallery>
      <ShopCategory></ShopCategory>
      <FeaturedHeros></FeaturedHeros>
      <Review></Review>
    </>
  )
}

export default Home
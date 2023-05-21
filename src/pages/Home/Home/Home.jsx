import React from 'react'
import Hero from '../Hero'
import HeroGallery from '../HeroGallery'
import ShopCategory from '../ShopCategory'
import Review from '../Review'
import PageTitle from '../../shared/PageTitle'

const Home = () => {
  return (
    <>
      <PageTitle title=" "></PageTitle>
      <Hero></Hero>
      <HeroGallery></HeroGallery>
      <ShopCategory></ShopCategory>
      <Review></Review>
    </>
  )
}

export default Home
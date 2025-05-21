import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import Featued from '../Featured/Featued'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Featued></Featued>
      <h1>This is Home page
      </h1>
    </div>
  )
}

export default Home

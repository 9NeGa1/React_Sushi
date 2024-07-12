import React from 'react'
import Gift from '../gift'
import Features from '../features'
import TopPosition from '../top-position'
import Promotion from '../promotion'
import BlockCategories from '../block-categories'
import About from '../about'
import Subscribe from '../subscribe'

const MainPage = () => {
  return (
    <main>
      <Gift/>
      <Features/>
      <TopPosition/>
      <Promotion/>
      <BlockCategories/>
      <About/>
      <Subscribe/>
    </main>
  )
}

export default MainPage

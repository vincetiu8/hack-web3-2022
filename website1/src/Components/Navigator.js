import React, { useState } from 'react'

import HomePage from './HomePage'
import LandingPage from './LandingPage'
import AnimalPostView from './AnimalPostView'

export default () => {

  const [landingPage, setLandingPage] = useState(
    <LandingPage
      onEnterButton={() => setCurrentPage(homePage)}
    />
  )

  const [homePage, setHomePage] = useState(
    <HomePage
      onAdopt={() => setCurrentPage(animalPostView)}
      onProfilePicClicked={() => setCurrentPage(animalPostView)}
    />
  )

  const [animalPostView, setAnimalPostView] = useState(
    <AnimalPostView />
  )

  const [currentPage, setCurrentPage] = useState(landingPage)


  return (
    <div style={{}}>
      <div style={{}}>
        {currentPage}
      </div>
    </div>
  )
}
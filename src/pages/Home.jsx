import React, { useContext } from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Services from '../components/Services'
import Section from '../components/Section'
import Review from '../components/Review'

const Home = () => {

  return (
    <Layout>
      <HeroSection/>
      <About/>
      <Services/>
      <Section/>
      <Review/>
    </Layout>
  )
}

export default Home

import React from 'react'
import Hero from "libs/frontend-libs/hero/src/lib/Hero";
import Services from "libs/frontend-libs/hero/src/lib/Services";
import Footer from "libs/frontend-libs/hero/src/lib/Footer"

function Homepage() {
  return (
    <>
      <Hero />
      <Services />
      <Footer />
    </>
  )
}

export default Homepage
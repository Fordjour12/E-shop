import React from 'react'
import Body from './components/body/Body'
import BottomSection from './components/bottomSection/BottomSection'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import HeroSection from './components/heroSection/HeroSection'

const App = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <Body />
            <BottomSection />
            <Footer />
        </>
    )
}

export default App

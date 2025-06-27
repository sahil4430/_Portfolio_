import React from 'react'
import { HeroScrollDemo } from './UI/hero/Hero'
import { FloatingDockDemo } from './UI/navbar/FloatingDockDemo'
import { ContactFormDemo } from './UI/Contact_Page/Contact_page'
import { TimelineDemo } from './UI/Achivements/Project'

function HomePage() {
  return (
    <div>
      {/* <FloatingDockDemo /> */}
      <HeroScrollDemo />
      <TimelineDemo />
      <br />
      <ContactFormDemo />
    </div>
  )
}
export default HomePage

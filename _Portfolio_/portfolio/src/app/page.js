import React from 'react'
import { HeroScrollDemo } from './UI/hero/Hero'
import { FloatingDockDemo} from './UI/navbar/FloatingDockDemo'
import { SignupFormDemo } from './UI/Contact_Page/Contact_page'
import { TimelineDemo } from './UI/project/Project'

function HomePage() {
  return (
    <div>
        <FloatingDockDemo />
      <HeroScrollDemo/>
      <TimelineDemo/>
      <br/>
      <SignupFormDemo/>
    </div>
  )
}
export default HomePage

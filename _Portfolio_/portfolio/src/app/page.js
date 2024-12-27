import React from 'react'
import { HeroScrollDemo } from './UI/hero/Hero'
import { TabsDemo } from './UI/project/Project'
import { FloatingDockDemo} from './UI/navbar/FloatingDockDemo'
import { SignupFormDemo } from './UI/Contact_Page/Contact_page'

function HomePage() {
  return (
    <div>
        <FloatingDockDemo />
      <HeroScrollDemo/><br/>
      <TabsDemo/>
      <SignupFormDemo/>
    </div>
  )
}
export default HomePage

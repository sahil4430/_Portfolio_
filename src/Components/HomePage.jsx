import React from 'react'
import { HeroScrollDemo } from './Hero'
import { TabsDemo } from './Project'
import { FloatingDockDemo} from './FloatingDockDemo'

function HomePage() {
  return (
    <div>
        <FloatingDockDemo />
      <HeroScrollDemo/><br/>
      <TabsDemo/><br/>
    </div>
  )
}
export default HomePage

import React from 'react'
import { HeroScrollDemo } from '../UI/hero/Hero'
import { TabsDemo } from '../UI/project/Project'
import { FloatingDockDemo} from '../UI/navbar/FloatingDockDemo'

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

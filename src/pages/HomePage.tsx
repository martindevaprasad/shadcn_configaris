import React from 'react'
import btndemo from "../assets/ChatGPT Image May 23, 2026, 11_56_57 PM.png"
import GridDistortion from '../../@/components/GridDistortion'
import RuixenBentoCards from '@/components/BentoGrid'
import { Feature108 } from '@/components/FeatureBlock'
export const HomePage = () => {
  return (
    <div>
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <GridDistortion
          imageSrc={btndemo}
          grid={10}
          mouse={0.25}
          strength={0.15}
          relaxation={0.9}
          className="custom-class object-cover"
        />
      </div>
      
      <div>
        <RuixenBentoCards/>
      </div>
      <div>
        <Feature108 />
      </div>
      <div></div>
    </div>
  )
}

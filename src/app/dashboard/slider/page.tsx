'use client'
import { Slider } from '@/components/ui/slider'
import { useState } from 'react'

export default function Page () {
  const [sliderValue, setSliderValue] = useState(10)
  const [rangerValue, setRangeValue] = useState([10, 20])
  return (
    <div className='grid grid-cols-1 gap-3'>
      <Slider
        defaultValue={[sliderValue]}
        onValueChange={(value) => setSliderValue(value[0])}
        max={100}
        step={1}
      />
      <span>Slider value: {sliderValue}</span>

      <Slider
        defaultValue={rangerValue}
        onValueChange={setRangeValue}
        max={100}
        step={1}
      />
      <span>Slider value: {rangerValue.join(', ')}</span>
    </div>
  )
}

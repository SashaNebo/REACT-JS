import React from 'react'
import './index.css'

const COLORS = [
  { color: 'red' },
  { color: 'orange' },
  { color: 'yellow' },
  { color: 'green' },
  { color: 'lazure' },
  { color: 'blue' },
  { color: 'violet' },
]

const App = () => {
  const data = []
  let paint
  COLORS.forEach((color, index) => {
    paint = color.color
    data.push(
      <div className={color.color} key={index}>
        <h1>{index + 1}</h1>
      </div>
    )
  })

  COLORS.map((color, i) => {
    data.push(
      <div className={color.color} key={i}>
        <h1>{`${color.color} ${i}`}</h1>
      </div>
    )
  })

  return <div>{data}</div>
}

export default App

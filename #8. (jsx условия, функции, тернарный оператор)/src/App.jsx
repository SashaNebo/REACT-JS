import React from 'react'
import './index.css'

const App = () => {
  const name = 'Alex'
  const age = 18
  let attr

  if (age === 18) {
    attr = 'nav'
  } else {
    attr = 'header'
  }

  function f1() {
    if (age === 18) {
      return <h1>Esli 18</h1>
    } else {
      return <h1>Esli ne 18</h1>
    }
  }
  return (
    <header className={attr}>
      <h1>Header</h1>
      <h3>
        {name} {age}
      </h3>
      <button>Click for me</button>
      {/* {age === 18 ? (attr = 'header') : (attr = 'nav')} */}
      {f1()}
    </header>
  )
}

export default App

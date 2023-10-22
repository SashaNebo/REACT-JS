import React from 'react'
import User from './User'
import './index.css'
import { queries } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

let USERS = [
  { id: 1, name: 'Alex', age: 10 },
  { id: 2, name: 'John', age: 30 },
  { id: 3, name: 'Bob', age: 80 },
]

const App = () => {
  const [_, forceUpdate] = React.useReducer(x => x + 1, 0)

  const changeName = (id, newName) => {
    console.log(id, newName)
    USERS = USERS.map(user => {
      if (user.id === id) {
        return {
          id: user.id,
          name: newName,
          age: user.age,
        }
      }
      return user
    })
    console.log(USERS)
    forceUpdate()
  }

  const data = []
  USERS.forEach(user => {
    data.push(
      <div key={`${user.id}_${user.name}`}>
        <User userId={user.id} userName={user.name} userAge={user.age} changeName={changeName} />
      </div>
    )
  })

  return <div>{data}</div>
}

export default App

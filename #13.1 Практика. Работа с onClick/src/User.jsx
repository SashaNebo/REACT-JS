import React from 'react'

const User = props => {
  const onClick = () => {
    props.changeName(props.userId, 'Jimmy')
  }

  console.log(props)

  return props.userAge > 20 ? (
    <p className='hfueiqfheq'>
      {props.userName}
      <button onClick={onClick}>Изменить имя</button>
    </p>
  ) : (
    <p className='hfueiqfheq'>{props.userName}</p>
  )
}

export default User

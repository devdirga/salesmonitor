import React from 'react'

export default function Todo({ todo }) {
  return (
      <tr>
        <td><span role="img" aria-label="ticket">🎫</span></td>
        <td>{todo.text.replace(todo.text.slice(todo.text.length -2, todo.text.length),`**`)}</td>
        <td>{todo.count} <span role="img" aria-label="cicken">🍗</span></td>
      </tr>
  )
}
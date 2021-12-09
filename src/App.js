import React from 'react'
import './App.css'
import TodoList from './components/TodoList'
import 'bulma/css/bulma.min.css'


export default function App() {
  // const current = new Date()
  // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
  return (
    <div className='container'>
      <TodoList />
    </div>
  )
}
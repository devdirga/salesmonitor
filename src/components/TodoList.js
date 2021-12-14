import React, { useState, useEffect } from 'react'
import firebase from '../util/firebase'
import Todo from './Todo'
import 'bulma/css/bulma.min.css'
import DonutChart from './DonutChart'

export default function TodoList() {
  const [todoList, setTodoList] = useState()
  const [zerotodo] = useState({text:'NoData', key:0, count:0 })
  const [total, setTotal]= useState(0)
  const [money, setMoney] = useState(0)
  useEffect(() => {

    firebase.database().ref('messages').on('value', (snapshot) => {
      const todos = snapshot.val()
      const todoList = []
      let count = 0
      let _money = 0
      for (let id in todos) {
        todoList.push({ id, ...todos[id] })
        count = count + (parseInt(todos[id].count))
        _money = _money + (parseInt(todos[id].count) * 1000)
      }
      setTotal(count)
      setMoney(_money)
      setTodoList(todoList)
    })

  },[])

  return (
      <div className="container">        
        
        <div className="notification is-warning small">
          <DonutChart value={50} greeting={total} />
          <br/>
          Dana <strong>Rp {money} ,- <span role="img" aria-label="dollar">💰</span></strong> .
          Jl Cucut Bangil no 175 <a href='https://www.google.co.id/maps/place/Jl.+Cucut+No.175,+Sukomangu,+Bendo+Mungal,+Kec.+Bangil,+Pasuruan,+Jawa+Timur+67153/@-7.5921305,112.7821313,17z/data=!4m13!1m7!3m6!1s0x2dd7db60d0f09c9f:0xdba160d74c0a1ef6!2sJl.+Cucut+No.175,+Sukomangu,+Bendo+Mungal,+Kec.+Bangil,+Pasuruan,+Jawa+Timur+67153!3b1!8m2!3d-7.5921305!4d112.78432!3m4!1s0x2dd7db60d0f09c9f:0xdba160d74c0a1ef6!8m2!3d-7.5921305!4d112.78432'><span role="img" aria-label="dollar">🗺️</span></a>
        </div>

        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th><span role="img" aria-label="dollar">🎫</span></th>
              <th>Identitas</th>
              <th>Ayam</th>
            </tr>
          </thead>
          <tbody>
          {(todoList)
          ? todoList.sort(function(a,b){
              return new Date(b.date) - new Date(a.date);
            }).map((todo, index) =>
            <Todo todo={todo} key={index} />)
          : <Todo todo={zerotodo} key={zerotodo.key} />}    
          </tbody>
        </table>
      </div>      
  )
}

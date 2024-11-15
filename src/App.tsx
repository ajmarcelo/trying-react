import React from 'react'
import HelloWorld from './components/HelloWorld'
import MyButton from './components/MyButton'
import User from './components/User'
import Counter from './components/Counter'


interface UserProfile {
  id: string,
  name: string,
  nickname: string
}

const App = () => {
  // button event handler
  const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("Button clicked from the parent btn handler", e)
  }

  let isAdmin = true

  let users : UserProfile[] = [{id:"1", name:"Nathan", nickname: "The Dog"}, 
    {id:"2", name:"Niki", nickname: "Tornado Ghorl"}, 
    {id:"3", name:"Lucas", nickname: "Lucasitos"},
    {id:"4", name:"Panchito", nickname: "Guwardya Sibil Punchy"},
    {id:"5", name:"Maxine", nickname: "Inspector Maxima"},
  ] 
  
  return (
    <div>
      {/* Using a Component w/ Props: */}
      <h1>[ Using a Component w/ Props ]</h1>
      <User age={9} name='Nathan The Dog' id='01' namePrefix={'Mr.'}/>
      <User name='Lucasitos' id='02'/>
      {/* Button as a Component: */}
      <h1>[ Button as a Component ]</h1>
      <MyButton customOnClick={handleBtnClick}/>
      
      {/* Printing a List: */}
      <h1>[ Printing A List ]</h1>
      <h3>All Users</h3>
      <ul>
        {users.map((user)=>(
          <li key={user.id}>{user.name} ({user.nickname})</li>
        ))}
      </ul>
      
      {/* Conditional Statement:*/}
      <h1>[ Conditional Statement ]</h1>
      {
        isAdmin ? <HelloWorld/> : <h1>Hello User!</h1>
      }
      
    </div>
  )
}

export default App



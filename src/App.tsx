import React, { useRef, useState } from 'react'
import HelloWorld from './components/HelloWorld'
import MyButton from './components/MyButton'
import User from './components/User'
import Counter from './components/Counter'
import ToDoList from './components/ToDoList'
import DataFetcher from './components/DataFetcher'
import MyInput from './components/MyInput'
import { ThemeProvider } from './context/ThemeContext'
import Nav from './components/Nav'
import Memo_Callback from './components/Memo_Callback'
import ReducerExample from './components/ReducerExample'
import Layout_Effect from './components/Layout_Effect'


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

  const [isAdmin, setIsAdmin] = useState(false)
  // let isAdmin = true

  let users : UserProfile[] = [{id:"1", name:"Nathan", nickname: "The Dog"}, 
    {id:"2", name:"Niki", nickname: "Tornado Ghorl"}, 
    {id:"3", name:"Lucas", nickname: "Lucasitos"},
    {id:"4", name:"Panchito", nickname: "Guwardya Sibil Punchy"},
    {id:"5", name:"Maxine", nickname: "Inspector Maxima"},
  ] 
  
  return (
    <ThemeProvider>
      <div>
        <h1>[ useLayoutEffect ]</h1> 
        <Layout_Effect/>

        <h1>[ useReducer ]</h1> 
        <ReducerExample/>

        {/* useMemo */}
        <h1>[ useMemo and useCallback ]</h1> 
        <Memo_Callback/>

        {/* useContext: */}
        <h1>[ useContext ]</h1> 
        <Nav />

        {/* useRef: */}
        <h1>[ useRef ]</h1> 
        <RenderCounter /><br/>
        <button onClick={()=>{setIsAdmin(!isAdmin)}}>TOGGLE ADMIN</button>
        <>NOTE: Check "[Conditional Statement] after"</><br/>
        
        <MyInput />
        
        {/* useEffect: */}
        <h1>[ useEffect ]</h1>
        <DataFetcher />

        {/* useState: */}
        <h1>[ useState ]</h1>
        <Counter />
        <ToDoList />
        
        {/* Using a Component w/ Props: */}
        <h1>[ Component w/ Props ]</h1>
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
    </ThemeProvider>
  )
}

export default App

// useRef can be used for performance optimization
const RenderCounter : React.FC = () => {
  const countRef = useRef<number>(0)

  countRef.current ++
  
  return(
    <>
      App rendered {countRef.current} times.
    </>
  )
}

// import React, { useRef, useState } from 'react'
// import HelloWorld from './components/HelloWorld'
// import MyButton from './components/MyButton'
// import User from './components/User'
// import Counter from './components/Counter'
// import ToDoList from './components/ToDoList'
// import DataFetcher from './components/DataFetcher'
// import MyInput from './components/MyInput'
// import { ThemeProvider } from './context/ThemeContext'
// import Nav from './components/Nav'
// import Memo_Callback from './components/Memo_Callback'
// import ReducerExample from './components/ReducerExample'
// import Layout_Effect from './components/Layout_Effect'
// import Parent from './components/Data Passing/Parent'
// import ParentWithSibs from './components/Data Passing/ParentWithSibs'


// interface UserProfile {
//   id: string,
//   name: string,
//   nickname: string
// }

// const App = () => {
//   // button event handler
//   const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     console.log("Button clicked from the parent btn handler", e)
//   }

//   const [isAdmin, setIsAdmin] = useState(false)
//   // let isAdmin = true

//   let users : UserProfile[] = [{id:"1", name:"Nathan", nickname: "The Dog"}, 
//     {id:"2", name:"Niki", nickname: "Tornado Ghorl"}, 
//     {id:"3", name:"Lucas", nickname: "Lucasitos"},
//     {id:"4", name:"Panchito", nickname: "Guwardya Sibil Punchy"},
//     {id:"5", name:"Maxine", nickname: "Inspector Maxima"},
//   ] 
  
//   return (
//     <ThemeProvider>
//       <div>
//       {/* Routing Module */}
//       {/* Data Communication Module */}
//         <h1>[ Uplifting State ]</h1> 
//         <ParentWithSibs/>
        
//         <h1>[ Data Communication ]</h1> 
//         <Parent/>

//       {/* Hooks Module */}
//         <h1>[ useLayoutEffect ]</h1> 
//         <Layout_Effect/>

//         <h1>[ useReducer ]</h1> 
//         <ReducerExample/>

//         <h1>[ useMemo and useCallback ]</h1> 
//         <Memo_Callback/>

//         <h1>[ useContext ]</h1> 
//         <Nav />

//         <h1>[ useRef ]</h1> 
//         <RenderCounter /><br/>
//         <button onClick={()=>{setIsAdmin(!isAdmin)}}>TOGGLE ADMIN</button>
//         <>NOTE: Check "[Conditional Statement] after"</><br/>
        
//         <MyInput />
        
//         <h1>[ useEffect ]</h1>
//         <DataFetcher />

//         <h1>[ useState ]</h1>
//         <Counter />
//         <ToDoList />
        
//       {/* Fundamentals Module */}
//         {/* Using a Component w/ Props: */}
//         <h1>[ Component w/ Props ]</h1>
//         <User age={9} name='Nathan The Dog' id='01' namePrefix={'Mr.'}/>
//         <User name='Lucasitos' id='02'/>
        
//         {/* Button as a Component: */}
//         <h1>[ Button as a Component ]</h1>
//         <MyButton customOnClick={handleBtnClick}/>
        
//         {/* Printing a List: */}
//         <h1>[ Printing A List ]</h1>
//         <h3>All Users</h3>
//         <ul>
//           {users.map((user)=>(
//             <li key={user.id}>{user.name} ({user.nickname})</li>
//           ))}
//         </ul>
        
//         {/* Conditional Statement:*/}
//         <h1>[ Conditional Statement ]</h1>
//         {
//           isAdmin ? <HelloWorld/> : <h1>Hello User!</h1>
//         }

//       </div>
//     </ThemeProvider>
//   )
// }

// export default App

// // useRef can be used for performance optimization
// const RenderCounter : React.FC = () => {
//   const countRef = useRef<number>(0)

//   countRef.current ++
  
//   return(
//     <>
//       App rendered {countRef.current} times.
//     </>
//   )
// }

// For the routing module onwards
import React, { Suspense } from 'react'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from './pages/Landing'
// Lazy loading - to load a specific part of the website only when needed
const LazyHome = React.lazy(()=>import('./pages/Home'))
import Error404 from './pages/Error404'
import User from './pages/User'
import Search from './pages/Search'
import Auth from './utils/Auth'
import { ThemeProvider } from './context/ThemeContext'
import ErrorBoundary from './utils/ErrorBoundary'

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={<Auth element={
            // <Suspense> can be done if the component cost is big
            //Alternative is typing only "<LazyHome/>"
            <Suspense fallback={<h1>Loading content....</h1>}>
              <LazyHome/>
            </Suspense>}/>}>
            <Route path='products' element={<h1>Products</h1>}/>
          </Route>
          <Route path='/about' element={<h1>About</h1>}/>
          <Route path='/user/:id' 
            element={
              <ErrorBoundary>
                <User/>
              </ErrorBoundary>
            }/>
          <Route path='/search' element={<Search/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </Router>
    </ThemeProvider>

  )
}

export default App
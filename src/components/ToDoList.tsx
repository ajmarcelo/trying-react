import React, { useState } from 'react'

const ToDoList: React.FC = () => {
  
    const [todos, setTodos] = useState<string[]>([])

    const addToDo = (task: string) => {
        setTodos([...todos, task])
        console.log(todos)
    }
    return (
        <div>
            <button onClick={()=>addToDo("new task")}>Add To Do</button>

            {
                todos.map((task,index) => (
                    <div key={index}>
                        {task}
                    </div>
                ))
            }
        </div>
    )
}

export default ToDoList

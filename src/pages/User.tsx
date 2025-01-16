import React from 'react'
import { useParams } from 'react-router-dom'
import DataFetcher from '../components/DataFetcher'

const User :React.FC = () => {
  
    const {id} = useParams()

    if (id=='2') {
        throw new Error("Failed to load id#2")
    }
    return (
        <div>
            {/* Tells you: If it exists, then render this*/}
            {id && <DataFetcher id={id}/>}
        </div>
    )
}

export default User
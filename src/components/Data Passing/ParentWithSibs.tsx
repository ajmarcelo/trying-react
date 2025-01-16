import React, { useState } from 'react'
import Sibling1 from './Sibling1'
import Sibling2 from './Sibling2'

const ParentWithSibs = () => {
    const [sharedData, setsharedData] = useState<string>("")
    const handleSharedDataUpdate = (data:string) => {
        setsharedData(data)
    }
  return (
    <div>
        <h1>Parent of Siblings</h1>
        <Sibling1 updateData={handleSharedDataUpdate}/>
        <Sibling2 data={sharedData}/>
    </div>
  )
}

export default ParentWithSibs
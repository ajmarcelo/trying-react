import React from 'react'

interface Sibling2Props {
    data : string
}
const Sibling2 : React.FC<Sibling2Props>= ({data}) => {
  return (
    <div>
        <h1>Sibling 2</h1>
        <p>Data from the sibling 1: {data}</p>
    </div>
  )
}

export default Sibling2
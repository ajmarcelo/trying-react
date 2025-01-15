import React, { useEffect, useState } from 'react'

const DataFetcher: React.FC = () => {
  
    const [data, setData] = useState<any[]>([])

    const [loading, setLoading] = useState<boolean>(true)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1').then((res)=>
            res.json()).then((data)=>{
                console.log(data)
                setData(data)
                setLoading(false)
            })

    },[])

    return (
    <div>
      {
        loading ? <h1>Loading data...</h1> : <h1>{data['title']}</h1>
      }
    </div>
  )
}

export default DataFetcher

import React, { useEffect, useState } from 'react'

interface DataFetcherProps {
  id : string
}

const DataFetcher: React.FC<DataFetcherProps> = ({id}) => {
  
    const [data, setData] = useState<any[]>([])

    const [loading, setLoading] = useState<boolean>(true)

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res)=>
            res.json()).then((data)=>{
                console.log(data)
                setData(data)
                setLoading(false)
            })

    },[])

    return (
    <div>
      {
        loading ? <h1>Loading data...</h1> :  <h1> Data for ID#{id}: {data['title']}</h1>
      }
    </div>
  )
}

export default DataFetcher

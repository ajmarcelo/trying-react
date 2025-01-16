import React from 'react'
import { useLocation } from 'react-router-dom'

const Search = () => {

    const location = useLocation()

    const query = (location.search).split('?')

    console.log(query)

    return (
    <div>
        This is the search page.
        ID fetched is: {query[1]}
    </div>
  )
}

export default Search
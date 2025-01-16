import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

type Props = {}

const Layout_Effect = (props : Props) => {
    const divRef = useRef<HTMLDivElement>(null)

    const [size, setsize] = useState<number>(0)
    
    // This runs before everything is rendered (suggested for for api calls/loading data)
    useLayoutEffect(() => {
        console.log("in layout effect")

        if(divRef.current){
            // setting the size of the div to the boundary of the dom
            setsize(divRef.current.getBoundingClientRect().width)
        }
    
    }, [])

    // This runs after everything is rendered
    useEffect(() => {
      console.log("is useEffect")
    }, [])
    
    
    return (
        <div> LayoutEffect
            <div style={{width:"200px"}} ref={divRef}>I am a div</div>
            <p>Size of the div: {size} px</p>
        </div>
    )
}

export default Layout_Effect
import React from 'react'
import { useEffect, useState } from 'react' 


function FetchData({url, children}) {
    const [data, setData] = useState(null); 

    useEffect(() => {
          fetch(url)           
              .then(resp => resp.json())
              .then(data => setData(data))
              .catch(err => console.log(err))
  
    }, []) 

  return (
    <>
        {children(data)}
    </>
  )
}

export default FetchData
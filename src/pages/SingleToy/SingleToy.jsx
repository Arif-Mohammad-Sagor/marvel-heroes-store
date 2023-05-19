import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleToy = () => {
    const [singleToy, setSignleToys] = useState([]);
    // const singleToy = useLoaderData();

    useEffect(() => {
        fetch('/public/Toys.json')
            .then(res => res.json())
        .then(data =>setSignleToys(data))

    }, [])
    console.log(singleToy);
  return (
      <div>SingleToy :{ singleToy.length}</div>
  )
}

export default SingleToy
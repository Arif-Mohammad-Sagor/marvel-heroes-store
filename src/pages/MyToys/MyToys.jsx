import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../AuthContextProviders/AuthProviders'

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/usersToy?email=${user?.email}`)
            .then(res => res.json())
        .then(data =>setMyToys(data))
    },[])

  return (
      <div>MyToys : { myToys.length}</div>
  )
}

export default MyToys
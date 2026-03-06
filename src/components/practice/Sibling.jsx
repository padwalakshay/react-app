`'use client'`
import { use, useEffect, useState } from "react"

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

// const usersPromise = getUsers();

export default function Sibling () {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then((result) => {
    //         setData(result)
    //     })
    // },[])
    const data = use(getUsers());
    return (
        <>I m from Sibling
        <suspense fallback={<h1>....Loading</h1>}>
            {data}
        </suspense>
        <ul>
        {
            data.map((ele, index) => {
              return <li key={index}>{ele.name}</li>
            })
        }
       </ul>
        </>
    )
}
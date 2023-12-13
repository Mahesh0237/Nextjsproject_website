import React, { useState, createContext } from 'react'
import Component2 from './Component2'
export const MyContext = createContext();
export const MyContext2 = createContext();

function Component1() {
  const [name, setname] = useState({ username: 'Mahesh', password: "0237" })
  const [name2, setname2] = useState('test')
  return (
    <>
      <h1>test</h1>
      <MyContext.Provider value={name}>
        <MyContext2.Provider value={name2}>
          <Component2 />
        </MyContext2.Provider>
      </MyContext.Provider>
    </>
  )
}

export default Component1


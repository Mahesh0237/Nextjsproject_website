import { Button, Text } from '@mantine/core'
import React from 'react'

function test() {
  const handleClick = () =>{
    document.getElementById('demo').innerHTML = "javascript button is clicked"
  }
  return (
    <>
      <p id="demo">test method</p>
      <Button onClick={handleClick}>click me</Button>
    </>
  )
}

export default test
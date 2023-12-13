import { Button, Container, Group, Text } from '@mantine/core'
import React from 'react'
import { useStore } from './Store'
function GlobalState() {
    const { count, increase, decrease, reset, name, update } = useStore()
    return (
        <Container my="lg" style={{ textAlign: "center" }}>
            <Text size={25} weight={500}> count : {count}</Text>
            <Group position='center'>
                <Button onClick={increase} variant="default">incr</Button>
                <Button onClick={decrease} variant="default">decr</Button>
                <Button onClick={reset} variant="default">Reset</Button>
            </Group>
            <Text>{name}</Text>
            <Button onClick={update}>
                update name
            </Button>
        </Container>
    )
}

export default GlobalState
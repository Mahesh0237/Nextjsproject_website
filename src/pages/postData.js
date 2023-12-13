import { Button, Card, Container, Grid, Group, TextInput } from '@mantine/core'
import axios from 'axios'
import React, { useState } from 'react'

export async function getServerSideProps(context) {
    if (context.req.method === 'POST') {
        const { firstName, lastName, email, Password } = context.req.body;
        // Do something with the form data
    }
    return { props: {} };
}
function postData() {
    const [firstName, setFirstName] = useState('')
    const updateFirstName = (e) => {
        setFirstName(e.currentTarget.value)
    }
    const [lastName, setLastName] = useState('')
    const updateLastName = (e) => {
        setLastName(e.currentTarget.value)
    }
    const [email, setEmail] = useState('')
    const updateEmail = (e) => {
        setEmail(e.currentTarget.value)
    }
    const [Password, setPassword] = useState('')
    const updatePassword = (e) => {
        setPassword(e.currentTarget.value)
    }
    const updateProfileDetails = async () => {

        const response = await fetch('https://63dbe766a3ac95cec5ad7a48.mockapi.io/education', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstName: firstName, lastName: lastName, email: email, Password: Password }),
        });

    };

    return (
        <Container my="100px">
            <Card withBorder  >
                <Card.Section inheritPadding pt="md">
                    <h5>Profile Details</h5>
                </Card.Section>
                <Card.Section withBorder inheritPadding py="sm">
                    <Grid>
                        <Grid.Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextInput
                                placeholder='Firstname'
                                label="First Name"
                                withAsterisk
                                value={firstName}
                                onChange={updateFirstName}
                            />
                        </Grid.Col>
                        <Grid.Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextInput
                                placeholder='lastname'
                                label="Last Name"
                                withAsterisk
                                value={lastName}
                                onChange={updateLastName}
                            />
                        </Grid.Col>
                        <Grid.Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextInput
                                placeholder='email'
                                label="Email"
                                withAsterisk
                                value={email}
                                onChange={updateEmail}
                            />
                        </Grid.Col>
                        <Grid.Col xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextInput
                                placeholder='Password'
                                label="Password"
                                withAsterisk
                                value={Password}
                                onChange={updatePassword}
                            />
                        </Grid.Col>
                    </Grid>
                </Card.Section>
                <Card.Section inheritPadding py="sm">
                    <Group position='right'>
                        <Button color="dark" onClick={updateProfileDetails}>
                            Submit
                        </Button>
                    </Group>
                </Card.Section>
            </Card>
        </Container>
    )
}

export default postData


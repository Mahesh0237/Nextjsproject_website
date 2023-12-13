import { Button, Card, Container, Grid, Group, LoadingOverlay, Table, TextInput } from '@mantine/core'
import axios from 'axios'
import React, { useState } from 'react'
export async function getServerSideProps(context) {
    if (context.req.method === 'POST') {
        const { firstName, lastName, email, Password } = context.req.body;
    }
    return { props: {} };
}
function AddProfiledata({ closeProfile }) {
    const [isLoadingoverlayEffect, setISLoadingoverlayEffect] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [firstNameError, setFirstNameError] = useState('')
    const updateFirstName = (e) => {
        setFirstName(e.currentTarget.value)
        setFirstNameError('')
    }
    const [lastName, setLastName] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const updateLastName = (e) => {
        setLastName(e.currentTarget.value)
        setLastNameError('')
    }
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const updateEmail = (e) => {
        setEmail(e.currentTarget.value)
        setEmailError('')
    }
    const [Password, setPassword] = useState('')
    const [PasswordError, setpasswordError] = useState('')
    const updatePassword = (e) => {
        setPassword(e.currentTarget.value)
        setpasswordError('')
    }
    const updateProfileDetails = async () => {
        setISLoadingoverlayEffect(true)
        if (firstName === '') {
            setFirstNameError('enter the first name')
            setISLoadingoverlayEffect(false)
            return false
        }
        if (lastName === '') {
            setLastNameError('enter the last name')
            setISLoadingoverlayEffect(false)
            return false
        }
        if (email === '') {
            setEmailError('enter the email')
            setISLoadingoverlayEffect(false)
            return false
        }
        if (Password === '') {
            setpasswordError('enter the password')
            setISLoadingoverlayEffect(false)
            return false
        }

        await axios.post('https://63dbe766a3ac95cec5ad7a48.mockapi.io/education', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            Password: Password,
        })
            .then((res) => {
                let data = res.data
                console.log((data));
                closeProfile()
            })
            .catch((error) => {
                console.log(error)
            })
    };
    return (
        <Card withBorder  >
            <Card.Section inheritPadding pt="md" >
                <h5>Add Profile  Details</h5>
            </Card.Section>
            <Card.Section withBorder inheritPadding py="md">
                <Grid>
                    <Grid.Col xl={6} lg={6} md={6} sm={12} xs={12}>
                        <TextInput
                            placeholder='Firstname'
                            label="First Name"
                            withAsterisk
                            value={firstName}
                            error={firstNameError}
                            onChange={updateFirstName}
                        />
                    </Grid.Col>
                    <Grid.Col xl={6} lg={6} md={6} sm={12} xs={12}>
                        <TextInput
                            placeholder='lastname'
                            label="Last Name"
                            withAsterisk
                            value={lastName}
                            error={lastNameError}
                            onChange={updateLastName}
                        />
                    </Grid.Col>
                    <Grid.Col xl={6} lg={6} md={6} sm={12} xs={12}>
                        <TextInput
                            placeholder='email'
                            label="Email"
                            withAsterisk
                            value={email}
                            error={emailError}
                            onChange={updateEmail}
                        />
                    </Grid.Col>
                    <Grid.Col xl={6} lg={6} md={6} sm={12} xs={12}>
                        <TextInput
                            placeholder='Password'
                            label="Password"
                            withAsterisk
                            value={Password}
                            error={PasswordError}
                            onChange={updatePassword}
                        />
                    </Grid.Col>
                </Grid>
            </Card.Section>
            <Card.Section inheritPadding pt="sm">
                <Group position='apart'>
                    <Button variant='default' onClick={closeProfile}>
                        close
                    </Button>
                    <Button color="dark" onClick={updateProfileDetails}>
                        Update
                    </Button>
                </Group>
            </Card.Section>
            <LoadingOverlay visible={isLoadingoverlayEffect} />
        </Card>
    )
}
export default AddProfiledata


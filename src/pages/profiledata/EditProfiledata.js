import { Button, Card, Container, Grid, Group, LoadingOverlay, Table, TextInput } from '@mantine/core'
import axios from 'axios'
import React, { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router';
function EditProfiledata({ closeEditModal, profileid }) {
    const router = useRouter()
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
    useEffect(() => {
        getApi(profileid);
    }, [])

    const getApi = (profileid) => {
        axios.get(`https://63dbe766a3ac95cec5ad7a48.mockapi.io/education/${profileid}`)
            .then((res) => {
                let data = res.data
                if (data.length !== 0) {
                    if (data.firstName !== null) {
                        setFirstName(data.firstName)
                    }
                    if (data.lastName !== null) {
                        setLastName(data.lastName)
                    }
                    if (data.email !== null) {
                        setEmail(data.email)
                    }
                    if (data.Password !== null) {
                        setPassword(data.Password)
                    }
                }
            })
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

        await axios.put(`https://63dbe766a3ac95cec5ad7a48.mockapi.io/education/${profileid}`, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            Password: Password,
        })
            .then((res) => {
                let data = res.data
                console.log(data);
                getApi(profileid)
                closeEditModal()
            })
            .catch((error) => {
                consol.log(error)
            });
    };

    return (
        <Card withBorder  >
            <Card.Section inheritPadding pt="md" >
                <h5>Edit Profile  Details - {profileid}</h5>
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
                    <Button variant='default' onClick={closeEditModal}>
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
export async function getStaticProps() {
    const res = await axios.get('https://63dbe766a3ac95cec5ad7a48.mockapi.io/education')
    const data = await res.data
    return { props: { data } }
}

export default EditProfiledata


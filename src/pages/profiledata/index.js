import { Button, Card, Container, Table, Group, Text, Modal } from '@mantine/core'
import { IconEdit } from '@tabler/icons';
import axios from 'axios'
import Link from 'next/link';
import React, { useCallback, useState } from 'react'
import ErrorBoundary from '../Errorboundary';
import AddProfiledata from './AddProfiledata';
import EditProfiledata from './EditProfiledata';
function Profiledata({ data }) {
    const [profile, setProfile] = useState(false);
    const openProfile = () => {
        setProfile(true)
    }
    const closeProfile = () => {
        setProfile(false)
    }
    const [profileid, setProfileid] = useState(null)
    const [editProfile, setEditProfile] = useState(false)
    const openEditModal = useCallback((value) => {
        setEditProfile(true)
        setProfileid(value)
    }, [profileid])
    const closeEditModal = () => {
        setEditProfile(false)
    }
    return (
        <ErrorBoundary>
            <Container my="100px">
                <Card withBorder mt="lg">
                    <Card.Section inheritPadding py="sm">
                        <Group position='apart'>
                            <Text size={18} weight={500}>profile data preview</Text>
                            <Button variant='outline' onClick={openProfile}> Add New</Button>
                        </Group>
                    </Card.Section>
                    <Card.Section withBorder inheritPadding pt="sm">
                        <Table withBorder withColumnBorders>
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.length !== 0 ?
                                        data.map((profile, index) => (
                                            <tr key={index}>
                                                <td>{profile.firstName}</td>
                                                <td>{profile.lastName}</td>
                                                <td>{profile.email}</td>
                                                <td>{profile.Password}</td>
                                                <td><Link href="#" onClick={() => openEditModal(profile.id)}><IconEdit size={18} /></Link></td>
                                            </tr>
                                        )
                                        )
                                        :
                                        <tr>
                                            <td>no data</td>
                                        </tr>
                                }
                            </tbody>
                        </Table>
                    </Card.Section>
                </Card>
                <Modal
                    opened={profile}
                    onClose={closeProfile}
                    size="40%"
                    withCloseButton={false}
                    closeOnClickOutside={false}
                >
                    <AddProfiledata
                        closeProfile={closeProfile}
                    />
                </Modal>
                <Modal
                    opened={editProfile}
                    onClose={closeEditModal}
                    size="40%"
                    withCloseButton={false}
                    closeOnClickOutside={false}
                >
                    <EditProfiledata
                        closeEditModal={closeEditModal}
                        profileid={profileid}
                    />
                </Modal>
            </Container>
        </ErrorBoundary>
    )
}
export async function getStaticProps() {
    const res = await axios.get('https://63dbe766a3ac95cec5ad7a48.mockapi.io/education')
    const data = await res.data
    return { props: { data } }
}
export default Profiledata


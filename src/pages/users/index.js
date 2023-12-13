import { Container, Group, Table, Text } from '@mantine/core';
import React from 'react'
import Link from 'next/link';
import axios from 'axios'
function users({ data }) {
    return (
        <Container>
            <Table highlightOnHover withBorder withColumnBorders >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>userName</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>website</th>
                        <th>Address</th>
                        <th>Company details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length !== 0 &&
                        data.map((users, index) => (
                            <tr key={index}>
                                <td>{users.id}</td>
                                <td>{users.username}</td>
                                <td>{users.email}</td>
                                <td>{users.phone}</td>
                                <td>{users.website}</td>
                                <td>
                                    <Group position='left'>
                                        <Text weight={500}>Street:</Text> {users.address.street} ,
                                        <Text weight={500}>City:</Text> {users.address.city} ,
                                        <Text weight={500}>Zipcode:</Text> {users.address.zipcode}
                                    </Group>
                                </td>
                                <td><Link href={`/users/${users.id}`}>see details</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    )
}
export async function getStaticProps() {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    const data = res.data

    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: { data }
    }
}
export default users
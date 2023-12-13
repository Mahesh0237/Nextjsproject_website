import { Container, Table, Text } from '@mantine/core'
import React from 'react'
import axios from 'axios'
import Link from 'next/link'
function index({ data }) {
    return (
        <Container size={1350} my={20}>
            <Text size={25} weight={500} my={15}>Products</Text>
            <Table withColumnBorders withBorder>
                <thead>
                    <tr>
                        <th>id:</th>
                        <th>title</th>
                        <th>description</th>
                        <th>category</th>
                        <th>see details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length != 0 &&
                        data.map((product, index) => (
                            <tr key={index}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>{product.category}</td>
                                <td><Link href={`/product/${product.id}`}>see more details</Link></td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </Table>
        </Container>
    )
}
export async function getServerSideProps() {
    const res = await axios.get('https://dummyjson.com/products')
    const data = res.data.products

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data },
    }
}

export default index
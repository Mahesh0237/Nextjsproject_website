import React, { useEffect, useState } from 'react'
import { Container, Table } from '@mantine/core'
import axios from 'axios'
function userid({ data }) {
    return (
        <Container>
            <h5>{data.id} data company details</h5>
            <Table highlightOnHover withBorder withColumnBorders>
                <thead>
                    <tr>
                        <th>data Id</th>
                        <th>Company Name</th>
                        <th>catchPhrase</th>
                        <th>bs</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length !== 0 &&
                        <tr >
                            <td>{data.id}</td>
                            <td>{data.company.name}</td>
                            <td>{data.company.catchPhrase}</td>
                            <td>{data.company.bs}</td>
                        </tr>
                    }
                </tbody>
            </Table>
        </Container>
    )
}
// export async function getServerSideProps({ query }) {
//     const { userid } = query
//     const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`)
//     const data = res.data
//     if (!data) {
//         return {
//             notFound: true,
//         }
//     }
//     return {
//         props: { data }
//     }
// }


export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

    const paths = users.map((user) => ({
        params: { userid: user.id.toString() },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`)
    const data = await res.json()

    return { props: { data } }
}

export default userid






























// const [userData, setUserData] = useState([])
// const getUserData = () => {
//     axios.get(`https://jsonplaceholder.typicode.com/users/${user}`)
//         .then((res) => {
//             let data = res.data
//             setUserData(data)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// }
// useEffect(() => {
//     getUserData();
// }, [user])
// -------------------------
// {
//     userData.length !== 0 &&
//     <tr>
//         <td>{userData.id}</td>
//         <td>{userData.company.name}</td>
//         <td>{userData.company.catchPhrase}</td>
//         <td>{userData.company.bs}</td>
//     </tr>
// }
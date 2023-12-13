import { Container, Table, Text } from '@mantine/core'
import React from 'react'
// import { useRouter } from 'next/router'
import axios from 'axios'
function productid({data}) {
    // const router= useRouter()
    // const {productid} = router.query
    return (
        <Container size={1350} my={20}>
           <Text size={18} weight={500}> id:{data.id}</Text>
        <Table withBorder withColumnBorders>
            <thead>
                <tr>
                    <th>price</th>
                    <th>discountPercentage</th>
                    <th>rating</th>
                    <th>stock</th>
                    <th>brand</th>
                    <th>category</th>
                </tr>
            </thead>
            <tbody>
                {
                     data.length !== 0 &&
                     <tr>
                         <td>{data.price}</td>
                         <td>{data.discountPercentage}</td>
                         <td>{data.rating}</td>
                         <td>{data.stock}</td>
                         <td>{data.brand}</td>
                         <td>{data.category}</td>
                     </tr>
                }
            </tbody>
        </Table>
        </Container>
    )
}
export async function getServerSideProps({query}) {
    // const {productid}= query
    const res = await axios.get(`https://dummyjson.com/products/${query.productid}`)
    const data = res.data

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data },
    }
}
// export async function getStaticPaths() {
//     const res = await axios.get('https://dummyjson.com/products')
//     const data = res.data.products
  
//     const paths = data.map((post) => ({
//       params: { productid: post.id.toString() },
//     }))
  
//     return { paths, fallback: false }
//   }
  
//   export async function getStaticProps({ params }) {
//     const res = await axios.get(`https://dummyjson.com/products/${params.productid}`)
//     const data = res.data
  
//     return { props: { data } }
//   }
export default productid
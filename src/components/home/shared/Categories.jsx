import { Group, Text } from '@mantine/core'
import { IconArrowNarrowRight } from '@tabler/icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Categories({ image, department, courses }) {
    return (
        <Link className="rbt-cat-box rbt-cat-box-1 " href="#">
            <div className="inner coursecategories" >
                <div className="icons">
                    <Image src={image} height={100} width={100} alt="Icons Images" />
                </div>
                <div className="content">
                    <h5 className="title">{department}</h5>
                    <div className="read-more-btn">
                        <Group position='center'>
                            <Text size={14} weight={500}>{courses}</Text>
                            <IconArrowNarrowRight />
                        </Group>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default Categories
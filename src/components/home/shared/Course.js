import { Group, Rating, Text } from '@mantine/core'
import { IconBookmark, IconUser, IconArrowRight } from '@tabler/icons'
import Image from 'next/image'
import React from 'react'

function Course({ image, course, text, avtar, name, currentprice, offprice }) {
    return (
        <>
            <div class="rbt-card variation-01 rbt-hover">
                <div class="rbt-card-img">
                    <a href="course-details.html">
                        <Image src={image} alt="Card image" />
                        <div class="rbt-badge-3 bg-white">
                            <span>-50%</span>
                            <span>Off</span>
                        </div>
                    </a>
                </div>
                <div class="rbt-card-body">
                    <Group position='apart' mb="md">
                        <Group position="left">
                            <Rating defaultValue={4} size={16} readonly />
                            <Text size={15}>(15 reviews)</Text>
                        </Group>
                        <IconBookmark />
                    </Group>
                    <h4 class="rbt-card-title"><a href="#">{course}</a></h4>
                    <ul class="rbt-meta">
                        <li><IconBookmark size={15} /> 20 Lessons</li>
                        <li><IconUser size={15} /> 40 Students</li>
                    </ul>
                    <p class="rbt-card-text">{text}</p>
                    <div class="rbt-author-meta mb--20">
                        <div class="rbt-avater">
                            <a href="#">
                                <Image src={avtar} alt="Sophia Jaymes" />
                            </a>
                        </div>
                        <div class="rbt-author-info" style={{fontWeight:"600"}}>
                            {name}
                        </div>
                    </div>
                    <div class="rbt-card-bottom">
                        <div class="rbt-price">
                            <span class="current-price">{currentprice}</span>
                            <span class="off-price">{offprice}</span>
                        </div>
                        <a class="rbt-btn-link" href="course-details.html">Learn
                            More <IconArrowRight size={13} /> </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Course
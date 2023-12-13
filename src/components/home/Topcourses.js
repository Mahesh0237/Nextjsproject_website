import React from 'react'
import { Container, Grid } from '@mantine/core';
import Course from './shared/Course';
import imageone from '../../../public/course-01.jpg'
import imagetwo from '../../../public/course-02.jpg'
import imagethree from '../../../public/course-03.jpg'
import avtarone from '../../../public/avater-01.png'
import avtartwo from '../../../public/avatar-02.png'
import avtarthree from '../../../public/avatar-03.png'
function Topcourses() {
    return (
        <div class="rbt-course-area bg-color-extra2 rbt-section-gap">
            <Container size={1350}>
                <Grid>
                    <Grid.Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div class="section-title text-center coursecategories">
                            <span class="subtitle bg-secondary-opacity">Top Popular Course</span>
                            <h2 class="title">Histudy Course student  can join with us.</h2>
                        </div>
                    </Grid.Col>
                    <Grid.Col xl={4} lg={4} md={6} sm={12}>
                        <Course
                            image={imageone}
                            course="React Front To Back"
                            text="React Js long fact that a reader will be distracted by the readable."
                            avtar={avtarone}
                            name="By Patrick In Languages"
                            currentprice="$60"
                            offprice="$120"
                        />
                    </Grid.Col>
                    <Grid.Col xl={4} lg={4} md={6} sm={12}>
                        <Course
                            image={imagetwo}
                            course="PHP Beginner + Advanced"
                            text="It is a long established fact that a reader will be distracted by the readable."
                            avtar={avtartwo}
                            name="By Angela In Development"
                            currentprice="$100"
                            offprice="$120"
                        />
                    </Grid.Col>
                    <Grid.Col xl={4} lg={4} md={6} sm={12}>
                        <Course
                            image={imagethree}
                            course="Angular Zero to Mastery"
                            text="Angular Js long fact that a reader will be distracted by the readable."
                            avtar={avtarthree}
                            name="By Slaughter In Languages"
                            currentprice="$80"
                            offprice="$120"
                        />
                    </Grid.Col>
                    <Grid.Col xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div class="load-more-btn mt--60 coursecategories">
                            <a class="rbt-btn btn-gradient btn-lg " href="#">
                                <span class="icon-reverse-wrapper">
                                    <span class="btn-text">Load More Course (40)</span>
                                </span>
                            </a>
                        </div>
                    </Grid.Col>
                </Grid>
            </Container>
        </div>
    )
}

export default Topcourses
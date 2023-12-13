
import React from 'react'
import imageone from '../../../public/web-design.png'
import imagetwo from '../../../public/design.png'
import imagethree from '../../../public/personal.png'
import imagefour from '../../../public/server.png'
import imagefive from '../../../public/paint-palette.png'
import imagesix from '../../../public/pantone.png'
import imageseven from '../../../public/smartphone.png'
import imageeight from '../../../public/infographic.png'
import { Container, Grid } from '@mantine/core';
import Categories from './shared/Categories';
function Coursecategories() {
    return (
        <div className='rbt-categories-area bg-color-white rbt-section-gapBottom'>
            <Container mt="50px" size={1350}>
                <Grid mt="md">
                    <Grid.Col lg={12} md={12} sm={12} xs={12}>
                        <div className="section-title coursecategories ">
                            <span className="subtitle bg-primary-opacity text-center">CATEGORIES</span>
                            <h3 className="title ">Explore Top Courses Caterories That Change Yourself</h3>
                        </div>
                    </Grid.Col>
                    <Grid.Col lg={3} md={3} sm={6} xs={12} >
                        <Categories
                            image={imageone}
                            department="Web Design"
                            courses="25 courses"
                        />
                    </Grid.Col>
                    <Grid.Col lg={3} md={3} sm={6} xs={12}>
                        <Categories
                            image={imagetwo}
                            department="Graphic Design"
                            courses="30 courses"
                        />
                    </Grid.Col>
                    <Grid.Col lg={3} md={3} sm={6} xs={12}>
                        <Categories
                            image={imagethree}
                            department="Personal Development"
                            courses="20 courses"
                        />
                    </Grid.Col>
                    <Grid.Col lg={3} md={3} sm={6} xs={12}>
                        <Categories
                            image={imagefour}
                            department="IT and Software"
                            courses="15 courses"
                        />
                    </Grid.Col>
                    <Grid.Col lg={3} md={3} sm={6} xs={12}>
                        <Categories
                            image={imagefive}
                            department="Sales Marketing"
                            courses="15 courses"
                        />
                    </Grid.Col>
                    <Grid.Col lg={3} md={3} sm={6} xs={12}>
                        <Categories
                            image={imagesix}
                            department="Art and Humanities"
                            courses="15 courses"
                        />
                    </Grid.Col>
                    <Grid.Col lg={3} md={3} sm={6} xs={12}>
                        <Categories
                            image={imageseven}
                            department="Mobile Application"
                            courses="15 courses"
                        />
                    </Grid.Col>
                    <Grid.Col lg={3} md={3} sm={6} xs={12}>
                        <Categories
                            image={imageeight}
                            department="Finance and Accounting"
                            courses="15 courses"
                        />
                    </Grid.Col>
                </Grid>
            </Container>
        </div>
    )
}
export default Coursecategories
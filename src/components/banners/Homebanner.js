import { IconArrowNarrowRight, IconBook2, IconChevronRight, IconUsers } from '@tabler/icons';
import Image from 'next/image'
import React from 'react'
import imageone from '../../../public/banner-01.png'
import imagetwo from '../../../public/course-01.jpg'
import shapeone from '../../../public/shape-01.png'
import shapetwo from '../../../public/shape-02.png'
import Link from 'next/link';

const Homebanner = () => {
    return (
        <div className="rbt-banner-area rbt-banner-1 homebanner" >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 pb--120 pt--70">
                        <div className="content">
                            <div className="inner">
                                <div className="rbt-new-badge rbt-new-badge-one">
                                    <span className="rbt-new-badge-icon">🏆</span> The Leader in Online Learning
                                </div>
                                <h1 className="title">
                                    Build The Skills <br /> To Drive Your Career.
                                </h1>
                                <p className="description">
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                    <strong>Velit
                                        officia consequat.</strong>
                                </p>
                                <div className="slider-btn">
                                    <a className="rbt-btn btn-gradient hover-icon-reverse" href="#">
                                        <span className="icon-reverse-wrapper">
                                            <span className="btn-text">View Course</span>
                                            <span className="btn-icon"><IconArrowNarrowRight /></span>
                                            <span className="btn-icon"><IconArrowNarrowRight /></span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="shape-wrapper" >
                                <Image src={imageone} height={623} width={534} alt="Hero Image" />
                                <div className="hero-bg-shape-1 layer" data-depth="0.4">
                                    <Image src={shapeone} width={428} height={377} alt="Hero Image Background Shape" />
                                </div>
                                <div className="hero-bg-shape-2 layer" data-depth="0.4">
                                    <Image src={shapetwo} width={372} height={396} alt="Hero Image Background Shape" />
                                </div>
                            </div>
                            <div className="rbt-card variation-01 rbt-hover">
                                <div className="rbt-card-img">
                                    <Link href="#">
                                        <Image src={imagetwo} alt="image" width={200} height={300} />
                                        <div className="rbt-badge-3 bg-white">
                                            <span>-40%</span>
                                            <span>Off</span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="rbt-card-body">
                                    <ul className="rbt-meta">
                                        <li><IconBook2 size={15} /> 12 Lessons</li>
                                        <li><IconUsers size={15} /> 50 Students</li>
                                    </ul>
                                    <h4 className="rbt-card-title"><Link href="course-details.html">React</Link>
                                    </h4>
                                    <p className="rbt-card-text">It is a long established fact that a reader
                                        will be distracted.</p>

                                    <div className="rbt-card-bottom">
                                        <div className="rbt-price">
                                            <span className="current-price">$70</span>
                                            <span className="off-price">$120</span>
                                        </div>
                                        <Link className="rbt-btn-link" href="#">Learn More </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// export async function getServerSideProps(context) {
//     // const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
//     // const data = await res.json()
//     let data = {
//         id: 1,
//         title: "Hirining India",
//         description: " end value has mixed support, consider using flex-end instead end value has mixed support, consider using flex-end instead end value has mixed support, consider using flex-end instead end value has mixed support, consider using flex-end instead"
//     }

//     return {
//         props: { data }
//     }
// }

export default Homebanner

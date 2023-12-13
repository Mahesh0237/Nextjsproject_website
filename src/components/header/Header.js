import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IconLayoutDashboard, IconSearch, IconShoppingCart, IconUser } from '@tabler/icons'
import { useWindowScroll } from '@mantine/hooks';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
function Header() {
    const [scroll] = useWindowScroll();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    return (
        <div className="rbt-header rbt-header-10">
            <div className={`rbt-header-wrapper header-space-betwween header-sticky ${scroll.y > 60 ? 'rbt-sticky' : ''}`}>
                <div className="container-fluid">
                    <div className="mainbar-row rbt-navigation-center align-items-center">
                        <div className="header-left rbt-header-content">
                            <div className="header-info">
                                <div className="logo">
                                    <Link href="#">
                                        <Image src="/logo.png" alt="Education Logo Images" width={100} height={100} />
                                    </Link>
                                </div>
                            </div>
                            <div className="header-info">
                                <div className="rbt-category-menu-wrapper">
                                    <div className="rbt-category-btn rbt-side-offcanvas-activation">
                                        <div className="rbt-offcanvas-trigger md-size icon">
                                            <span className="d-none d-xl-block">
                                                <IconLayoutDashboard size={15} />
                                            </span>
                                            <i title="Category" className="feather-grid d-block d-xl-none"></i>
                                        </div>
                                        <span className="category-text d-none d-xl-block">Category</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rbt-main-navigation d-none d-xl-block">
                            <nav className="mainmenu-nav">
                                <ul className="mainmenu">
                                    <li className="with-megamenu has-menu-child-item position-static menu-item-open">
                                        <Link href="#">Home </Link>
                                    </li>
                                    <li className="with-megamenu has-menu-child-item">
                                        <Link href="#">Courses </Link>
                                    </li>
                                    <li className="has-dropdown has-menu-child-item">
                                        <Link href="#">Dashboard </Link>
                                    </li>
                                    <li className="with-megamenu has-menu-child-item position-static">
                                        <Link href="#">Pages </Link>
                                    </li>
                                    <li className="with-megamenu has-menu-child-item position-static">
                                        <Link href="#">Elements </Link>
                                    </li>
                                    <li className="with-megamenu has-menu-child-item position-static">
                                        <Link href="#">Blog </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header-right">
                            <ul className="quick-access">
                                <li className="access-icon">
                                    <Link className="search-trigger-active rbt-round-btn" href="#">
                                        <IconSearch size={17} />
                                    </Link>
                                </li>
                                <li className="access-icon rbt-mini-cart">
                                    <Link className="rbt-cart-sidenav-activation rbt-round-btn" href="#">
                                        <IconShoppingCart size={18} />
                                        <span className="rbt-cart-count">4</span>
                                    </Link>
                                </li>
                                <li className="account-access rbt-user-wrapper d-none d-xl-block">
                                    <Link href="#"> <IconUser size={15} /> Admin</Link>
                                </li>
                            </ul>
                            <div className="rbt-btn-wrapper d-none d-xl-block">
                                <Link className="rbt-btn rbt-marquee-btn marquee-auto btn-border-gradient radius-round btn-sm hover-transform-none" href="#">
                                    <span data-text="Enroll Now">Enroll Now</span>
                                </Link>
                            </div>
                            <ActionIcon
                                variant="outline"
                                color={dark ? 'yellow' : 'blue'}
                                onClick={() => toggleColorScheme()}
                                title="Toggle color scheme"
                            >
                                {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
                            </ActionIcon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header
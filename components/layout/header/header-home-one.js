import Link from "next/link";
import { useState } from "react";
import {
	BlogDropdownMenus,
	ContactDropdownMenus,
	DemoDropdownMenus,
	ElementsMegaMenu,
	PagesDropdownMenus,
} from "../navbar/menu-data";
import NavItem from "../navbar/nav-item";
import Navbar from "../navbar/navbar";
import useScroll from "./../../../hooks/useScroll";

/* eslint-disable @next/next/no-img-element */
export default function HeaderHomeOne() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleCloseMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<header
			className={`site-header site-header--menu-right fugu-header-section`}
		>
			<div className="container-fluid">
				<nav className="navbar site-navbar">
					<div className="brand-logo" row>
						<Link href={"/"}>
							<img src="/images/test/catchu_logo.png" alt="logo" className="light-version-logo" />
						</Link>
					</div>
					<div className="menu-block-wrapper">
						<div
							className={`menu-overlay ${isMobileMenuOpen ? "active" : ""}`}
							onClick={handleCloseMobileMenu}
						></div>
						<nav className={`menu-block ${isMobileMenuOpen ? "active" : null}`} id="append-menu-header">
							<div className="mobile-menu-head">
								<div className="mobile-menu-close" onClick={handleCloseMobileMenu}>
									&times;
								</div>
							</div>
							<div>
								<a className="custom-header-margin">캐치유</a>
								<a className="custom-header-margin">고객 리뷰</a>
								<a className="custom-header-margin">서비스</a>
								<a className="custom-header-margin">기능</a>
							</div>
						</nav>
					</div>
				
				</nav>
			</div>
		</header>
	);
}

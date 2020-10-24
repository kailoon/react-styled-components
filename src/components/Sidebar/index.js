import React from 'react'
import {
	SidebarContainer,
	Icon,
	CloseBtn,
	SidebarWrapper,
	SidebarLink,
	SidebarBtnWrap,
	SidebarMenu,
	SidebarRoute
} from './Style'

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseBtn />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="about" onClick={toggle}>
						About
					</SidebarLink>
					<SidebarLink to="discover" onClick={toggle}>
						Discover
					</SidebarLink>
					<SidebarLink to="services" onClick={toggle}>
						Services
					</SidebarLink>
					<SidebarLink to="sign-up" onClick={toggle}>
						Sign Up
					</SidebarLink>
				</SidebarMenu>
				<SidebarBtnWrap>
					<SidebarRoute to="signin">Sign In</SidebarRoute>
				</SidebarBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	)
}

export default Sidebar

import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.div`
	background: #101522;
`
export const FooterWrap = styled.div`
	padding: 48px 24px;
	/* display: flex; */
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1100px;
	margin: 0 auto;
`
export const FooterLinksContainer = styled.div`
	/* display: flex; */
	width: 100%;

	@media screen and (max-width: 820px) {
		padding-top: 32px;
	}
`
export const FooterLinksWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;

	@media screen and (max-width: 500px) {
		/* flex-direction: column; */
	}
`

export const FooterLinksItems = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 16px;
	text-align: left;
	box-sizing: border-box;
	color: #fff;
	flex: 20%;

	@media screen and (max-width: 500px) {
		margin: 0;
		padding: 10px;
		flex: 50%;
	}
`
export const FooterLinkTitle = styled.h2`
	font-size: 14px;
	margin-bottom: 16px;
`
export const FooterLink = styled(Link)`
	color: white;
	text-decoration: none;
	margin-bottom: 0.5rem;
	font-size: 14px;

	&:hover {
		color: #01bf71;
		transition: 300ms ease-out;
	}
`

export const SocialMedia = styled.section`
	max-width: 1000px;
	width: 100%;
`
export const SocialMediaWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1100px;
	margin: 40px auto 0;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`
export const SocialLogo = styled(Link)`
	color: white;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
	font-weight: bold;
`
export const WebsiteRights = styled.small`
	color: white;
	margin-bottom: 16px;
`
export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 240px;
`
export const SocialIconLink = styled.a`
	color: white;
	font-size: 24px;
`

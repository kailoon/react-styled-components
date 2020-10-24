import React from 'react'
import {
	FooterContainer,
	FooterLinksContainer,
	FooterLinksItems,
	FooterLinksWrapper,
	FooterLinkTitle,
	FooterWrap,
	FooterLink,
	SocialMediaWrap,
	SocialMedia,
	SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink
} from './Style'
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop()
	}
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinksItems>
							<FooterLinkTitle>About us</FooterLinkTitle>
							<FooterLink to="/sign-in">How it works</FooterLink>
							<FooterLink to="/sign-in">Testimonials</FooterLink>
							<FooterLink to="/sign-in">Careers</FooterLink>
							<FooterLink to="/sign-in">Investors</FooterLink>
							<FooterLink to="/sign-in">Terms of Services</FooterLink>
						</FooterLinksItems>
						<FooterLinksItems>
							<FooterLinkTitle>About us</FooterLinkTitle>
							<FooterLink to="/sign-in">How it works</FooterLink>
							<FooterLink to="/sign-in">Testimonials</FooterLink>
							<FooterLink to="/sign-in">Careers</FooterLink>
							<FooterLink to="/sign-in">Investors</FooterLink>
							<FooterLink to="/sign-in">Terms of Services</FooterLink>
						</FooterLinksItems>
						<FooterLinksItems>
							<FooterLinkTitle>About us</FooterLinkTitle>
							<FooterLink to="/sign-in">How it works</FooterLink>
							<FooterLink to="/sign-in">Testimonials</FooterLink>
							<FooterLink to="/sign-in">Careers</FooterLink>
							<FooterLink to="/sign-in">Investors</FooterLink>
							<FooterLink to="/sign-in">Terms of Services</FooterLink>
						</FooterLinksItems>
						<FooterLinksItems>
							<FooterLinkTitle>Social Media</FooterLinkTitle>
							<FooterLink to="/sign-in">Facebook</FooterLink>
							<FooterLink to="/sign-in">Twitter</FooterLink>
							<FooterLink to="/sign-in">Youtube</FooterLink>
							<FooterLink to="/sign-in">Instagram</FooterLink>
							<FooterLink to="/sign-in">Github</FooterLink>
						</FooterLinksItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/" onClick={toggleHome}>
							dolla
						</SocialLogo>
						<WebsiteRights>
							dolla &copy; {new Date().getFullYear()} All rights reserved.
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink
								href="//www.facebook.com"
								target="blank"
								aria-label="Facebook"
							>
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink href="/" target="blank" aria-label="Instagram">
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink href="/" target="blank" aria-label="Youtube">
								<FaYoutube />
							</SocialIconLink>
							<SocialIconLink href="/" target="blank" aria-label="Twitter">
								<FaTwitter />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	)
}

export default Footer

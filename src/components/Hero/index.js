import React, { useState } from 'react'
import { Button } from '../ButtonStyle'
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight
} from './Style'
import Video from '../../videos/video.mp4'

const Hero = () => {
	const [hover, setHover] = useState(false)

	const onHover = () => {
		setHover(!hover)
	}
	return (
		<HeroContainer id="home">
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type="video/mp4" />
			</HeroBg>
			<HeroContent>
				<HeroH1>Virtual Banking Made Easy</HeroH1>
				<HeroP>
					Sign up for a new account today and receive $250 in credit towards
					your next payment.
				</HeroP>
				<HeroBtnWrapper>
					<Button
						to="sign-up"
						onMouseEnter={onHover}
						onMouseLeave={onHover}
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={-80}
						primary="true"
						dark="true"
					>
						Get started {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	)
}

export default Hero

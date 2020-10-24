import React from 'react'

import {
	Container,
	FormWrap,
	Icon,
	FormContent,
	Form,
	Formh1,
	FormLabel,
	FormInput,
	Textarea,
	FormButton
} from './Style'

const SignIn = () => {
	return (
		<Container>
			<FormWrap>
				<Icon to="/">dolla</Icon>
				<FormContent>
					<Form>
						<Formh1>Sign in to your account</Formh1>
						<FormLabel htmlFor="email">Email</FormLabel>
						<FormInput type="email" name="email" id="email" required />
						<FormLabel htmlFor="password" name="password" id="password">
							Password
						</FormLabel>
						<FormInput type="password" required />
						<FormButton type="submit">Continue</FormButton>
						<Textarea>Forgot password?</Textarea>
					</Form>
				</FormContent>
			</FormWrap>
		</Container>
	)
}

export default SignIn

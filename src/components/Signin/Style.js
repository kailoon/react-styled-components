import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const Container = styled.div`
	height: 100vh;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	z-index: 0;
	overflow: hidden;
	background: linear-gradient(
		108deg,
		rgba(1, 147, 86, 1) 0%,
		rgba(10, 201, 122, 1) 100%
	);
`
export const FormWrap = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;

	@media screen and (max-width: 400px) {
		height: 80%;
	}
`
export const Icon = styled(Link)`
	margin-left: 32px;
	margin-top: 32px;
	text-decoration: none;
	color: white;
	font-weight: 700;
	font-size: 32px;

	@media screen and (max-width: 480px) {
		margin-left: 16px;
		margin-top: 8px;
	}
`
export const FormContent = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 480px) {
		padding: 10px;
	}
`
export const Form = styled.form`
	background: #010101;
	max-width: 400px;
	height: auto;
	margin: 0 auto;
	padding: 50px 32px;
	display: grid;
	z-index: 1;
	border-radius: 20px;

	@media screen and (max-width: 400px) {
		padding: 32px;
	}
`
export const Formh1 = styled.h1`
	color: white;
	margin-bottom: 40px;
`
export const FormLabel = styled.label`
	color: #f1f1f1;
	font-size: 14px;
`
export const FormInput = styled.input`
	padding: 10px 20px;
	border: none;
	border-radius: 4px;
	margin: 5px 0 30px;
`
export const FormButton = styled.button`
	border: none;
	cursor: pointer;
	padding: 15px 24px;
	background-color: green;
	color: white;
	transition: all 500ms ease-in-out;
	outline: none;

	&:hover {
		background: yellow;
		color: black;
	}
`
export const Textarea = styled.span`
	color: #f1f1f1;
	font-size: 14px;
	margin: 10px 0;
	text-align: center;
`

import { styled } from '../stitches.config'

export enum ButtonTypes {
	primary = 1,
	secondary,
	terciary,
	special,
}

type ButtonProps = {
	type: ButtonTypes
	text: string
}

export const TestButton = styled('button', {
	border: 'none',
	color: '$white',
	fontFamily: '$poppins',
	padding: '$1 $3',
	borderRadius: '$3',
	fontSize: '$3',
	cursor: 'pointer',
	transition: 'all 0.2s ease',
	variants: {
		color: {
			primary: {
				backgroundColor: '$blue',
				color: '$white',
				'&:hover': {
					backgroundColor: '$white',
					outline: '1px solid $blue',
					color: '$blue',
				},
			},
			secondary: {
				backgroundColor: '$pink',
				color: '$white',
				'&:hover': {
					backgroundColor: '$white',
					outline: '1px solid $pink',
					color: '$pink',
				},
			},
			terciary: {
				backgroundColor: '$salmon',
				color: '$white',
				'&:hover': {
					backgroundColor: '$white',
					outline: '1px solid $salmon',
					color: '$salmon',
				},
			},
			special: {
				backgroundColor: '$green',
				color: '$white',
				'&:hover': {
					backgroundColor: '$white',
					outline: '1px solid $green',
					color: '$green',
				},
			}
		},
	},
})

function renderButton(type: ButtonTypes, text: string) {
	switch (type) {
		case ButtonTypes.primary:
			return <TestButton color='primary'>{text}</TestButton>
		case ButtonTypes.secondary:
			return <TestButton color='secondary'>{text}</TestButton>
		case ButtonTypes.terciary:
			return <TestButton color='terciary'>{text}</TestButton>
		case ButtonTypes.special:
			return <TestButton color='special'>{text}</TestButton>
		default:
			return <TestButton color='primary'>{text}</TestButton>
	}
}

export const Button = ({ type, text }: ButtonProps) => (
	renderButton(type, text)
)

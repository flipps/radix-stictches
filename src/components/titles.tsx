import { styled } from '../stitches.config'

export enum TitleTypes {
	H1 = 1,
	H2,
	H3,
	H4,
}

const H1 = styled('h1', {
	fontFamily: '$poppins',
	lineHeight: '1',
	color: '$blue',
	fontSize: '$6',
})

const H2 = styled('h2', {
	fontFamily: '$poppins',
	lineHeight: '1',
	color: '$blue',
	fontSize: '$5',
})

const H3 = styled('h3', {
	fontFamily: '$poppins',
	lineHeight: '1.2',
	color: '$blue',
	fontSize: '$4',
})

const H4 = styled('h4', {
	fontFamily: '$poppins',
	lineHeight: '1.2',
	color: '$blue',
	fontSize: '$3',
})

export const Huge = styled('h1', {
	fontSize: '80px',
	fontFamily: '$poppins',
	color: '$white',
	lineHeight: '1.2',
})

export const GradientHeader = styled('span', {
	backgroundImage: '$gradient1',
	backgroundClip: 'text',
	color: 'transparent',
	fontSize: '80px',
	fontFamily: '$poppins',
	lineHeight: '1.2',
	variants: {
		color: {
			gradient: {
				fontSize: '64px',
				backgroundImage: '$gradient2',
			}
		}
	},
})

function renderTitle(text: string, type: TitleTypes, color: string = '$black') {
	switch (type) {
		case TitleTypes.H1:
			return <H1 css={{ color: color }}>{text}</H1>
		case TitleTypes.H2:
			return <H2 css={{ color: color }}>{text}</H2>
		case TitleTypes.H3:
			return <H3 css={{ color: color }}>{text}</H3>
		case TitleTypes.H4:
			return <H4 css={{ color: color }}>{text}</H4>
		default:
			return <H1 css={{ color: '$black' }}>{text}</H1>
	}
}

export const Subtitle = styled('p', {
	fontFamily: '$raleway',
	lineHeight: '1.5',
	fontSize: '$3',
	marginBottom: '$4',
})

type TitleProps = {
	text: string,
	type: TitleTypes,
	color?: string,
}

export const Title = ({ text, type, color }: TitleProps) => (
	renderTitle(text, type, color)
)

import { styled } from '../stitches.config'

export const List = styled('ul', {
	padding: '0',
	margin: '0'
})

export const ListItem = styled('li', {
	fontFamily: '$raleway',
	fontSize: '$5',
	color: '$black',
	variants: {
		color: {
			white: {
				color: '$white',
			},
			blue: {
				color: '$blue',
			},
			pink: {
				color: '$pink',
			},
		},
	}
})

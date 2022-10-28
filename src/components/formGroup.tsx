import { styled } from '../stitches.config'

export const FormGroup = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginBlock: '$3',
	variants: {
		type: {
			checkbox: {
				flexWrap: 'wrap',	
				justifyContent: 'inherit',
			},
		},
	},
})

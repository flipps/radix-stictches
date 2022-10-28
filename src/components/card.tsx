import { styled } from '../stitches.config'

export const Card = styled('article', {
	paddingInline: '$3',
	paddingBlock: '$4',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	fontFamily: '$raleway',
	color: '$black',
	backgroundColor: '$white',
	border: '1px solid $black',
	borderRadius: '$3',
	minWidth: '200px',
	maxWidth: '300px',
})

export const CardActionButton = styled('div', {
	display: 'flex',
	justifyContent: 'flex-end',
	marginTop: 'auto',
})
